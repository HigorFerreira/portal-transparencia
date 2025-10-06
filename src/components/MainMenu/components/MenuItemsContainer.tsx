import { PropsWithChildren } from "react"


export default function MenuItemsContainer({ children }: PropsWithChildren){
    return <div className="h-full overflow-hidden">
        <div className="h-full pl-10 overflow-auto">
            <div className="flex flex-col gap-2 pb-8">
                { children }
            </div>
        </div>
    </div>
}