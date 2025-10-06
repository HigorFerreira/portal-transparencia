import { ClientContainer } from './client'
import MainMenu from '@/components/MainMenu'

export default async function Menu() {
    return <ClientContainer>
        <MainMenu />
    </ClientContainer>
}