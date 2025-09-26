'use client';

import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";

function useTransitionLocker(){
    const [ isTransitioning, setIsTransitioning ] = useState(false)

    const transitionStart = () => setIsTransitioning(true)
    const transitionEnd = () => setIsTransitioning(false)

    return [ isTransitioning, { transitionStart, transitionEnd } ] as const
}

function useStateWithLocker<T>(initialState: T, locker: boolean){
    const [ state, setState ] = useState<T>(initialState)

    const setter: Dispatch<SetStateAction<T>> = arg => {
        if(!locker){
            setState(arg)
        }
    }

    return [ state, setter ] as const
}

export default function Container({ children }: { children?: ReactNode }){

    const [ isTransitioning, { transitionStart, transitionEnd } ] = useTransitionLocker()
    const [ scrolled, setScrolled ] = useStateWithLocker(false, isTransitioning)

    const scrollFn = useCallback(() => {
        if(window.scrollY >= 50){
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }, [ setScrolled ])

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
        onTransitionStart={transitionStart}
        onTransitionEnd={transitionEnd}
    >
        { children }
    </div>
}