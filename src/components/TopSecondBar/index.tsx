import TJGOLogo from '../TJGOLogo'
// import { TbLayoutSidebarLeftCollapseFilled as CollapseIcon } from "react-icons/tb"
import { TbLayoutSidebarLeftCollapse as CollapseIcon } from "react-icons/tb"
import { TbLayoutSidebarRightCollapse as ExpandIcon } from "react-icons/tb";

export default async function TopSecondBar(){
    return <div className='relative w-full h-full flex justify-center items-center p-4 shadow'>
        <div className='absolute left-[calc(var(--spacing)*4)]'>
            <div className='flex gap-1 text-gray-500'>
                <div className='cursor-pointer' title='Fechar menu'>
                    <CollapseIcon size={30} />
                </div>
                <div className='cursor-pointer' title='Abrir menu'>
                    <ExpandIcon size={30} />
                </div>
            </div>
        </div>
        <div className='self-center [&_svg]:h-[60px]'>
            <TJGOLogo />
        </div>
    </div>
}