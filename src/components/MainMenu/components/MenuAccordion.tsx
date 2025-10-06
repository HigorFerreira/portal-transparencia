import { ReactElement, useState, JSX } from "react"
import { FaRegSquarePlus as PlusIcon } from "react-icons/fa6"
import { FaRegSquareMinus as MinusIcon } from "react-icons/fa6"
import useHeightMeasure from '../hooks/useHeightMeasure'

export default function MenuAccordion({ label, open: _open = true, children }: { label: string; open?: boolean; children?: ReactElement<JSX.IntrinsicElements['div']> }){

    const [ open, setOpen ] = useState(_open)
    const [ childContainer, childHeight ] = useHeightMeasure()

    return <>
        <div>
            <div className="relative px-4 py-3 rounded-xl bg-(--bg-color) text-(--alt-color) flex items-center justify-between">
                <div className="absolute rounded-xl bg-(--alt-color) w-[10px] top-[8px] left-0 bottom-[8px]" />
                <span>{ label }</span>
                {
                    open
                        ? <MinusIcon onClick={setOpen.bind(null, false)} className="cursor-pointer" title="Esconder" size={30} />
                        : <PlusIcon  onClick={setOpen.bind(null, true)} className="cursor-pointer" title="Expandir" size={30} />
                }
                <div
                    className={[
                        "absolute left-0 right-0 top-[calc(100%)] overflow-hidden h-0",
                        "[transition:height_300ms_ease]",
                    ].join(" ")}
                    style={{ height: open ? childHeight : undefined }}
                >
                    <div ref={childContainer} className="absolute bottom-0 left-0 right-0 ml-2 border-l-2 pl-3 pt-[5px]">
                        { children }
                    </div>
                </div>
            </div>
        </div>
        <div className="[transition:height_300ms_ease]" style={{ height: open ? childHeight : 0 }} />
    </>
}