import MenuItem from '../components/MenuItem'
import MenuAccordion from '../components/MenuAccordion'
import { MenuItemData } from '../types'

export function renderMenuItems(items: MenuItemData[]){
    return items.map((item, index) => {
        if(item.children){
            return <MenuAccordion key={index} label={item.label}>
                <div className="flex flex-col gap-2 py-4">
                    { renderMenuItems(item.children) }
                </div>
            </MenuAccordion>
        }

        return <MenuItem key={index} onClick={item.onClick} >
            { item.label }
        </MenuItem>
    })
}
