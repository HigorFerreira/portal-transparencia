import TJGOLogo from '../TJGOLogo'

import OpenCloseMenus from './OpenCloseMenus'

export default async function TopSecondBar(){
    return <div className='relative w-full h-full flex justify-center items-center p-4 shadow'>
        <OpenCloseMenus />
        <div className='self-center [&_svg]:h-[60px]'>
            <TJGOLogo />
        </div>
    </div>
}