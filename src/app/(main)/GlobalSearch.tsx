"use client"
import { Input } from 'antd'

const { Search } = Input

export default function GlobalSearch(){
    return <Search className="my-4" placeholder="Pesquisar no portal da transparência" />
}