import TJGOLogo from './TJGOLogo'
import { IoMenuOutline as MenuIcon } from "react-icons/io5";

export async function TopSecondBar(){
    return <div
        className={[
            "@container/top-second-bar",
            "sticky top-[40px] left-0 right-0 h-[80px] shadow flex items-center justify-center bg-white",
        ].join(" ")}
    >
        <div
            className={[
                'flex justify-between items-center w-full px-6',
                '[@container_top-second-bar_(width>=600px)]:justify-center',
                '[@container_top-second-bar_(width>=600px)]:gap-6',
            ].join(' ')}
        >
            <div>
                <MenuIcon />
            </div>
            <div className='[&_svg]:h-[60px]'>
                <TJGOLogo />
            </div>
        </div>
    </div>
}