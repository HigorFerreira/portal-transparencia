import TJGOLogo from '../TJGOLogo'

import OpenCloseMenus from './OpenCloseMenus'

export default async function TopSecondBar(){
    return <div className='relative w-full h-full flex justify-center items-center p-4 shadow'>
        <OpenCloseMenus />
        <div className='self-center [&_svg]:h-[60px]'>
            <div className="w-full flex gap-6">
                <h1 className="font-bold text-[clamp(1.5rem,calc(.7886vw+1.25rem),2.6rem)] mb-4 text-[#487eb0]">Portal da Transparência</h1>
                <TJGOLogo />
            </div>
        </div>
    </div>
}