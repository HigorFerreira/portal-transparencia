import { PropsWithChildren, JSX } from "react"

export default function MenuItem({ children, onClick }: PropsWithChildren<{ onClick?: JSX.IntrinsicElements['p']['onClick'] }>){
    return <p className="text-(--alt-color) bg-(--menu-item-bg) rounded-xl p-2" onClick={onClick}>
        { children }
    </p>
}