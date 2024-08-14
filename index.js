const express = require('express');
const {generateRegistrationOptions} = require('@simplewebauthn/server');
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



app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));