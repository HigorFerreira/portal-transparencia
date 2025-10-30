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
        const primaryDark = '#5496d7ff'
        const primaryLight = '#b5e7faff'
        return {
            primary,
            primaryDark,
            primaryLight,
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
                    primary,
                    primaryDark,
                    primaryLight,
                } = colors;

                context.fillStyle = primary
                context.beginPath()
                context.moveTo(0, 0)
                context.lineTo(0, 83.024366)
                context.lineTo(960.20314, 83.024366)
                context.bezierCurveTo(974.66314,83.024366, 987.74424,77.132676, 997.18554,67.622026)
                context.bezierCurveTo(1006.5375,58.202044, 1012.3164,45.231764, 1012.3164,30.909134)
                context.bezierCurveTo(1012.3164,19.337154, 1008.5389,8.648284, 1002.1562,0)
                // 960.20314 + 0b0000, 83.025392 + 0b0000,
                context.fill()
                



                context.fillStyle = primaryLight
                context.beginPath()
                context.moveTo(139.32637, 144.653)
                context.bezierCurveTo(174.11697, 144.653, 202.5329, 117.36506, 204.34223, 83.0238)
                context.lineTo(0, 83.0238)
                context.lineTo(0, 144.653)
                context.fill()

                context.beginPath()
                context.moveTo(997.18454, 67.622499)
                context.lineTo(895.29807, 83.023801)
                context.bezierCurveTo(894.40655, 93.374498, 901.99279, 102.24109, 912.48662, 102.24109)
                context.lineTo(1094.8156, 102.24109)
                context.bezierCurveTo(1117.4463,102.24109, 1117.4462, 67.622499, 1094.8156, 67.622499)
                context.fill()




                context.fillStyle = primaryDark
                context.beginPath()
                context.moveTo(139.32637,14.430614)
                context.lineTo(0, 14.430614)
                context.lineTo(0, 83.023801)
                context.lineTo(204.34223, 83.023801)
                context.bezierCurveTo(204.4369, 43.581219, 175.2863, 14.430614, 139.32637, 14.430614)
                context.fill()

                // SOME
                context.beginPath()
                context.moveTo(912.4967, 67.622499)
                context.bezierCurveTo(903.5820600000001, 67.622499, 896.24874, 74.363819, 895.29807, 83.023801)
                context.lineTo(960.20194, 83.023801)
                context.bezierCurveTo(974.6618900000001, 83.023801, 987.7432200000001, 77.13314500000001, 997.1845400000001, 67.622499)
                context.fill()
            }}
        />
    </div>
}