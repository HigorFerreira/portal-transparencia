'use client'

import MainMenu from '@/components/MainMenu'

export default function Page(){

    // const id = useRef(`path-${Date.now().toString(16)}-${Math.floor}`)

    return <div
        className={[
            'w-[400px] h-[calc(100dvh)]',
        ].join(' ')}
    >
        <MainMenu />
    </div>
}