import { useEffect, useRef, useState } from "react"

export default function useHeightMeasure(){
    const interval = useRef<NodeJS.Timeout>(null)
    const ref = useRef<HTMLDivElement>(null)
    const [ counter, setCounter ] = useState(0)
    const [ height, setHeight ] = useState(0)

    useEffect(() => {
        if (!ref.current) return;
    
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });
    
        observer.observe(ref.current);
        
        return () => observer.disconnect();
      }, []);

    useEffect(() => {
        interval.current = setInterval(() => {
            setCounter(prev => prev+1)
        }, 90);
        return () => clearInterval(interval.current??0)
    }, [ interval ])

    useEffect(() => {
        if(counter > 7) clearInterval(interval.current??0)
    }, [ counter ])

    useEffect(() => {
        setHeight(() => {
            console.log({ counter })
            if(ref.current){
                return ref.current.getBoundingClientRect().height
            }
            return 0
        })
    }, [ ref, counter ])

    return [ ref, height ] as const
}