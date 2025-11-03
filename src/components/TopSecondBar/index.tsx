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

function HeaderDecal({ container }: { container: RefObject<HTMLDivElement | null> }){
    return <Decal
        container={container}
        onContext={(context, { width }, colors) => {
            const {
                primary,
                primaryDark,
                primaryLight,
            } = colors;

            context.fillStyle = primary
            context.beginPath()
            context.moveTo(0, 0)
            context.lineTo(0, 83.024366)
            context.lineTo(0.6753062780351057*width, 83.024366)
            context.bezierCurveTo(0.6854759269079345*width, 83.024366, 0.6946758020027035*width, 77.132676, 0.7013158231578237*width, 67.622026)
            context.bezierCurveTo(0.7078930119180409*width, 58.202044, 0.7119572846615533*width, 45.231764, 0.7119572846615533*width, 30.909134)
            context.bezierCurveTo(0.7119572846615533*width, 19.337154, 0.7093005869701902*width, 8.648284, 0.7048116645731912*width, 0)

            context.fill()
            



            context.fillStyle = primaryLight
            context.beginPath()
            context.moveTo(139.32637, 144.653)
            context.bezierCurveTo(174.11697, 144.653, 202.5329, 117.36506, 204.34223, 83.0238)
            context.lineTo(0, 83.0238)
            context.lineTo(0, 144.653)
            context.fill()

            context.beginPath()
            context.moveTo(0.7013151198626043*width, 67.622499)
            context.lineTo(0.6296588525879155*width, 83.023801)
            context.bezierCurveTo(0.6290318508338972*width, 93.374498, 0.6343672171592781*width, 102.24109, 0.6417474776316956*width, 102.24109)
            context.lineTo(0.7699785776276165*width, 102.24109)
            context.bezierCurveTo(0.785894640749769*width, 102.24109, 0.7858945704202471*width, 67.622499, 0.7699785776276165*width, 67.622499)
            context.fill()




            context.fillStyle = primaryDark
            context.beginPath()
            context.moveTo(139.32637,14.430614)
            context.lineTo(0, 14.430614)
            context.lineTo(0, 83.023801)
            context.lineTo(204.34223, 83.023801)
            context.bezierCurveTo(204.4369, 43.581219, 175.2863, 14.430614, 139.32637, 14.430614)
            context.fill()


            context.beginPath()
            context.moveTo(0.6417545668475073*width, 67.622499)
            context.bezierCurveTo(0.6354849431526475*width, 67.622499, 0.6303274542541625*width, 74.363819, 0.6296588525879155*width, 83.023801)
            context.lineTo(0.6753054340808424*width, 83.023801)
            context.bezierCurveTo(0.6854750477889102*width, 83.023801, 0.6946750846415798*width, 77.13314500000001, 0.7013151198626043*width, 67.622499)
            context.fill()
        }}
    />
}

export default function TopSecondBar(){

    const container = useRef<HTMLDivElement>(null)

    return <div
        ref={container}
        className={[
            'relative w-full h-[144.653px]',
            'uppercase text-white-hole'
        ].join(' ')}
    >
        <div className='absolute z-10'>
            <HeaderDecal container={container} />
        </div>
        <div className='absolute z-20 w-full h-[83.023801px]'>
            <div className='w-full h-full flex justify-center items-center'>
                <h1 className='font-[Helvetica,Arial,sans-serif]'>Portal da Transparência</h1>
            </div>
        </div>
        <div className='absolute z-30 w-full h-[83.023801px]'>
            <div className='w-full h-full flex items-center justify-end'>
                {/* eslint-disable @next/next/no-img-element */}
                <img className='h-[48px] mr-[25px] aspect-[646.5/166.5]' src="/logo-brasao-DPI.svg" alt="Logo DPI" />
            </div>
        </div>
    </div>
}