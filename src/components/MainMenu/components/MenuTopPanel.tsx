import { PropsWithChildren } from "react"
import TopBgDetail from './TopBgDetail'


export default function MenuTopPanel({ children }: PropsWithChildren){
    return <div className="relative w-full text-white aspect-[400/434.794]">
        <div className="z-[1] absolute right-0 left-0">
            <TopBgDetail />
        </div>
        <div className="z-[2] absolute inset-0">
            { children }
        </div>
    </div>
}