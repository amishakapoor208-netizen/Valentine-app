"use client"

import { useState } from "react"
import Button from "../Button"
import { MoveRight } from "lucide-react"

export default function MessageScreen({ onNext }) {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                    Happyy birthdayy chuchuuu❤️ You deserve all the happiness, love and smiles in the world today and always. I love you a lot and I feel lucky to be your boyfriend kyuki tu itne pyaar se rkhti and itne efforts daalti I am genuinely lucky❤️. Finally bada ho gyaa tuuu 🕺 abhi toh bhot saal jhelna pdega tereko mujhe😊❤️. I lovee youu and happyy birthdayy my cutu panda❤️
                </div>
            </div>

            {onNext && (
                <div className="mt-6 flex justify-center">
                    <Button onClick={onNext} className="bg-[#ffccd3] text-secondary hover:bg-[#ffb3c1]">
                        <MoveRight size={18} /> Next
                    </Button>
                </div>
            )}
        </div>
    )
}
