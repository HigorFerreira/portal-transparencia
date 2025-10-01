import TJGOLogo from '../TJGOLogo'
import MenuButtonSwitcher from './MenuButtonSwitcher'
import Container from './Container'

export default async function TopSecondBar(){
    return <Container>
        <div
            className={[
                'flex justify-between items-center w-full px-6',
                '[@container_top-second-bar_(width>=600px)]:justify-center',
                '[@container_top-second-bar_(width>=600px)]:gap-6',

                '[&_#g281]:transition-all',
                '[&_#g315]:transition-all',

                '[.scrolled_&_#g281]:scale-50',
                '[.scrolled_&_#g281]:translate-y-[calc(50%-29.8px/2)]',
                '[.scrolled_&_#g281]:translate-x-[calc(22.04px*1.5)]',

                '[.scrolled_&_#g315]:scale-[0.9]',
                '[.scrolled_&_#g315]:translate-y-[calc(2px)]',
                '[.scrolled_&_#g315]:translate-x-[calc(5px)]',
            ].join(' ')}
        >
            <MenuButtonSwitcher />
            <div className='[&_svg]:h-[60px]'>
                <TJGOLogo />
            </div>
        </div>
    </Container>
}