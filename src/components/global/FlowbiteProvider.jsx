"use client"

import { Flowbite } from "flowbite-react"

const customTheme = {
    button: {
        color: {
            primary: 'bg-purple-700 hover:bg-purple-800 text-white'
        }
    }
}

export default function FlowbiteProvider({ children }) {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            {children}
        </Flowbite>
    )
}