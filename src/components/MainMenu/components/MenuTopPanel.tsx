import { PropsWithChildren } from "react"

export default function MenuTopPanel({ children }: PropsWithChildren){
    return <div className={
        [
            "relative w-full aspect-[400/434.794]",
            "[@media(min-width:1280px)_and_(max-height:800px)]:aspect-[400/112]",
            "[@media(min-width:1280px)_and_(max-height:800px)]:overflow-hidden",
            "[@media(min-width:1280px)_and_(max-height:800px)]:mb-4",
        ].join(" ")
    }>
        <div className="z-[1] absolute right-0 left-0">
            {/* <TopBgDetail /> */}
        </div>
        <div className="z-[2] absolute inset-0">
            { children }
        </div>
    </div>
}