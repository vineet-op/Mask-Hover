"use client"
import { useState, useEffect } from "react"


export default function MousePointer() {
    const [position, setPosition] = useState<{ x: number, y: number }>({
        x: 0,
        y: 0
    })

    const updateMousePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return position
}
