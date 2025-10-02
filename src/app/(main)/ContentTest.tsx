'use client';

import { useCallback, useEffect, useRef } from "react";

export default function Component(){

    const scrollRef = useRef<HTMLDivElement>(null)
    const scrollHandler = useCallback(() => {
        console.log('Scroll called')
        console.log({ scrollHeiht: scrollRef.current?.scrollHeight })
    }, [ scrollRef ])

    useEffect(() => {
        console.log('Assigning handler', { window })
        window?.addEventListener('scroll', scrollHandler)
        return () => window?.removeEventListener('scroll', scrollHandler)
    }, [ scrollHandler ])

    return <div className="w-full h-full overflow-auto">
        <div ref={scrollRef} className="flex justify-center items-center h-[200vh]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ea quidem assumenda enim dignissimos, exercitationem vero quo autem ipsum excepturi.
        </div>
    </div>
}