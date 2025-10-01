import { CustomIcons } from './CustomIcons'
import {
    IoAccessibility as AccessibilityIcon,
    IoContrastSharp as ContrastIcon
} from "react-icons/io5"

export default async function TopBar(){

    const { GoiasFlag } = await CustomIcons()

    return <div className="@container/top-bar w-full h-full bg-blue-950 z-1000 px-6">
        <div className={[
            "w-full h-full flex justify-between items-center"
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