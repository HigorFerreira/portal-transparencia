import TJGOLogo from '../TJGOLogo'

import OpenCloseMenus from './OpenCloseMenus'

// #6270b1
export default async function TopSecondBar(){
    return <div
        className={[
            '[--bg-detail:#6270b1]',
            '[--alt:#fff]',
            'dark:[--bg-detail:#6270b1]',
            'dark:[--alt:#fff]',
            'relative w-full h-full flex justify-center items-center p-4 shadow'
        ].join(' ')}
    >
        <OpenCloseMenus />
        <div className='self-center [&_svg]:h-[60px]'>
            <div className="w-full flex gap-6 bg-(--bg-detail) -mt-4 -mb-[calc(var(--spacing)*4)] py-4 px-8 rounded-b-2xl">
                <TJGOLogo />
                <h1 className="font-bold text-[clamp(1.5rem,calc(.7886vw+1.25rem),2.6rem)] mb-4 text-(--alt)">Portal da Transparência</h1>
            </div>
        </div>
    </div>
}