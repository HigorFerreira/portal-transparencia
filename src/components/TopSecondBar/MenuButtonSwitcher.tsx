'use client';
import { useMenu } from "@/modules/client/SideMenuProvider";
import { IoMenuOutline as MenuIcon } from "react-icons/io5"

export default function Component(){
    const { toggle } = useMenu()
    return <div onClick={toggle}>
        <MenuIcon />
    </div>
}