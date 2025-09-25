import { CustomIcons } from '@/module_exports/server'
import {
    IoAccessibility as AccessibilityIcon,
    IoContrastSharp as ContrastIcon
} from "react-icons/io5"

export async function TopBar(){

    const { GoiasFlag } = await CustomIcons()

    return <div className="@container/top-bar flex justify-center fixed top-0 right-0 left-0 h-[40px] bg-blue-950">
        {/* <div className={[
            'fixed inset-0 z-[100]',
            'bg-white/20',
            'box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)',
            '[backdrop-filter:blur(5px)]',
            '[-webkit-backdrop-filter:blur(5px)]',
            '[border:1px_solid_rgba(255,_255,_255,_0.64)]',
        ].join(' ')}>
            <div className='w-full h-full p-6 flex flex-col'>
                <div className='flex flex-col items-center gap-2 text-[clamp(2rem,calc(5vw+2rem),4rem)]'>
                    <AccessibilityIcon />
                    <h1>Acessibilidade</h1>
                </div>
            </div>
        </div> */}
        <div className={[
            'w-full',
            '[@container_top-bar_(width>=1152px)]:max-w-[1024px]',
            '[@container_top-bar_(width<1152px)]:px-6',
            'h-full flex justify-between items-center',
        ].join(' ')}>
            <div>
                <GoiasFlag height={20} />
            </div>
            <div className='text-white flex items-center gap-4'>
                <div title='Contraste' className='cursor-pointer'>
                    <ContrastIcon />
                </div>
                <div title='Acessibilidade' className='cursor-pointer'>
                    <AccessibilityIcon />
                </div>
            </div>
        </div>
    </div>
}