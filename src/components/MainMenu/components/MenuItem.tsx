import { PropsWithChildren, JSX } from "react"

export default function MenuItem({ children, onClick }: PropsWithChildren<{ onClick?: JSX.IntrinsicElements['p']['onClick'] }>){
    return <p title={children as string} className="text-(--alt-color) bg-(--menu-item-bg) rounded-xl p-2 cursor-pointer" onClick={onClick}>
        { children }
    </p>
}