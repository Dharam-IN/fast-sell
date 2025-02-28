import React from 'react'

interface sectionTitleProp {
    title: string;
    preTitle?: string;
    children?: string;
    width?: string;
    align?: string
}

const index = (props: sectionTitleProp) => {
    return (
        <>
            {/* <h1 className="text-2xl font-bold mb-4">{props.title}</h1> */}

            <div className={`flex w-full flex-col mb-4 ${props.align === "left" ? "" : "items-center justify-center text-center"}`}>
                {props.preTitle && (
                    <div className="text-sm font-bold tracking-wider text-gold uppercase">
                        {props.preTitle}
                    </div>
                )}
                {props.title && (
                    <h2 className={`${props.width === "full" ? "w-full" : "max-w-2xl"} mt-3 text-2xl text-capitalize font-bold leading-snug tracking-tight text-dark lg:leading-tight lg:text-3xl`}>
                        {props.title}
                    </h2>
                )}
                {props.children && (
                    <p className={` ${props.width === "full" ? "w-full" : "max-w-2xl"} py-2 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl`}>
                        {props.children}
                    </p>
                )}
            </div>

        </>
    )
}

export default index
