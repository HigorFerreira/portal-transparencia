import { PropsWithChildren, JSX } from "react"

export default function MenuItem({ children, onClick }: PropsWithChildren<{ onClick?: JSX.IntrinsicElements['p']['onClick'] }>){
    return <p onClick={onClick}>
        { children }
    </p>
}