import { CustomIcons } from '@/module_exports/server'

export async function TopBar(){

    const { GoiasFlag } = await CustomIcons()

    return <div className="@container/top-bar flex justify-center fixed top-0 right-0 left-0 h-[40px] bg-blue-950">
        <div className={[
            'w-full',
            '[@container_top-bar_(width>=1920px)]:max-w-[1920px]',
            '[@container_top-bar_(width<1920px)]:px-6',
            'h-full flex justify-between items-center',
        ].join(' ')}>
            <div>
                <GoiasFlag height={20} />
            </div>
            <div>
                <p className="text-white">
                    Hello guys
                </p>
            </div>
        </div>
    </div>
}