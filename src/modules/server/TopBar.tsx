import { CustomIcons } from './CustomIcons'
import {
    IoAccessibility as AccessibilityIcon,
    IoContrastSharp as ContrastIcon
} from "react-icons/io5"

export async function TopBar(){

    const { GoiasFlag } = await CustomIcons()

    return <div className="@container/top-bar flex justify-center fixed top-0 right-0 left-0 h-[40px] bg-blue-950 z-1000">
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