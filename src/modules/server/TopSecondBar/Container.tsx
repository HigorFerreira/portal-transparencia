'use client';

import { ReactNode, useCallback, useEffect, useState } from "react";

export default function Container({ children }: { children?: ReactNode }){

    const [ scrolled, setScrolled ] = useState(false)

    const scrollFn = useCallback(() => {
        if(window.scrollY >= 50){
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollFn)
        return () => window.removeEventListener('scroll', scrollFn)
    }, [ scrollFn ])

    // transition: all 400ms ease;
    return <div
        className={[
            "@container/top-second-bar",
            "sticky top-[40px] left-0 right-0 shadow flex items-center justify-center bg-white",
            "transition-all",
            scrolled ? "scrolled" : "",
            scrolled ? "h-[45px]" : "h-[80px]"
        ].join(" ")}
    >
        { children }
    </div>
}