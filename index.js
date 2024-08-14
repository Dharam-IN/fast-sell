const express = require('express');
const {generateRegistrationOptions, verifyRegistrationResponse, generateAuthenticationOptions, verifyAuthenticationResponse} = require('@simplewebauthn/server');
const crypto = require('node:crypto');

if(!globalThis.crypto){
    globalThis.crypto = crypto;
}

const app = express();
const PORT = 8000;

app.use(express.static('./public'));
app.use(express.json());

// state
const userStore = {};
const challengeStore = {};

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    
    const id = `user_${Date.now()}`;

    const user = {
        id,
        username,
        password
    }
    
    userStore[id] = user;
    console.log("Registration Successfuly!", userStore[id]);

    return res.json({id})
})

app.post("/register-challenge", async(req, res) => {
    const {userId} = req.body;
    console.log("userId--", userId);

    if(!userStore[userId]) return res.status(404).json({message: "User Not Found!"});

    const user = userStore[userId];

    const challengePayload = await generateRegistrationOptions({
        rpID: "localhost",
        rpName: "My Localhost Machine",
        userName: user.username
    });

    challengeStore[userId] = challengePayload.challenge;

    return res.json({options: challengePayload})
})

app.post("/register-verify", async(req, res) => {
    const {userId, cred} = req.body;

    if(!userStore[userId]) return res.status(404).json({message: "User Not Found!"});

    const user = userStore[userId];

    const challenge = challengeStore[userId];

    const verificationResult = await verifyRegistrationResponse({
        expectedChallenge: challenge,
        expectedOrigin: "http://localhost:8000",
        expectedRPID: 'localhost',
        response: cred
    });

    if(!verificationResult.verified) return res.json({error: "Could not verify"})
    
    userStore[userId].passkey = verificationResult.registrationInfo

    return res.json({verified: true})

})

app.post("/login-challenge", async(req, res) => {
    const {userId} = req.body;
    console.log("userId login", userId)
    if(!userStore[userId]) return res.status(404).json({message: "User Not Found!"});

    const opts = await generateAuthenticationOptions({
        rpID: 'localhost',
    })

    challengeStore[userId] = opts.challenge;

    return res.json({options: opts})

})

app.post("/login-verify", async(req, res) => {
    const {userId, cred} = req.body;
    const user = userStore[userId];

    if(!userStore[userId]) return res.json({error: "User Not Found"})

    const challenge = challengeStore[userId];

    const result = await verifyAuthenticationResponse({
        expectedChallenge: challenge,
        expectedOrigin: "http://localhost:8000",
        expectedRPID: 'localhost',
        response: cred,
        authenticator: user.passkey
    })

    if(!result.verified) return res.json({error: "Something went wrong"})
    
    return res.json({success: true, userId})

})



app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));