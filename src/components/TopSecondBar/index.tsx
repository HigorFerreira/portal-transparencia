'use client'
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'

function useScreenDimensions() {
    const [ width, setWidth ] = useState(0)
    const [ height, setHeight ] = useState(0)

    const handle = useCallback<(ev: UIEvent) => void>(() => {
        console.log('Resize event')
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }, [])
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', handle)
        }

        return () => {
            window.removeEventListener('resize', handle)
        }
    }, [ handle ])

    return [ width, height ] as const
}

function useColors() {
    const colors = useMemo(() => {
        const primary = '#58abe3ff'
        
        return {
            primary
        } as const
    }, [])

    return colors
}

function Decal({ container, onContext }: { container: RefObject<HTMLDivElement | null>; onContext?: (context: CanvasRenderingContext2D, dimensions: { width: number; height: number }, colors: ReturnType<typeof useColors>) => void; }){
    const ref = useRef<HTMLCanvasElement>(null)
    const [ width, setWidth ] = useState(0)
    const [ height, setHeight ] = useState(0)

    const [ screenWidth, screenHeight ] = useScreenDimensions()
    const colors = useColors()

    useEffect(() => {
        if(container.current) {
            const width = container.current.getBoundingClientRect().width
            const height = container.current.getBoundingClientRect().height
            setWidth(width)
            setHeight(height)
        }
    }, [ container, screenWidth, screenHeight ])

    useEffect(() => {
        const context = ref.current?.getContext('2d')
        context?.clearRect(0, 0, width, height)
        if(context) onContext?.(context, { width, height }, colors)
    }, [ ref, onContext, width, height, screenWidth, screenHeight, colors ])

    return <div className='absolute inset-0'>
        <canvas width={width} height={height} ref={ref} />
    </div>
}

export default function TopSecondBar(){

    const container = useRef<HTMLDivElement>(null)

    return <div
        ref={container}
        className={[
            'relative w-full h-[144.653px]'
        ].join(' ')}
    >
        <Decal
            container={container}
            onContext={(context, { width, height }, colors) => {
                const {
                    primary
                } = colors;

                context.fillStyle = primary
                context.beginPath()
                context.moveTo(0, 0)
                context.lineTo(0, 83.025392)
                context.lineTo(0.67531*width, 83.025392)
                context.bezierCurveTo(0.68548*width, 83.025392, 0.69468*width, 77.133702, 0.70132*width, 67.623052)
                context.bezierCurveTo(0.70789*width, 58.2031, 0.71196*width, 45.2328, 0.71196*width, 30.9102)
                context.bezierCurveTo(0.71196*width, 19.3382, 0.70930*width, 8.6493, 0.70481*width, 0)
                // 960.20314 + 0b0000, 83.025392 + 0b0000,
                context.fill()
            }}
        />
    </div>
}