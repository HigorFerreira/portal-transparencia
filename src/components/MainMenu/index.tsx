'use client';

import { IoHomeOutline as HomeIcon } from "react-icons/io5"
import { MdOutlineBalance as BalanceIcon } from "react-icons/md"
import { TbCertificate2 as AtendimentoIcon } from "react-icons/tb"

import InfoIcon from './icons/InfoIcon'
import { renderMenuItems } from './utils'
import BalcaoIcon from './icons/BalcaoIcon'
import MenuTopPanel from './components/MenuTopPanel'
import MenuButtonContainer from './components/MenuButtonContainer'
import MenuItemsContainer from './components/MenuItemsContainer'

import { Input } from 'antd'

const { Search } = Input

export default function MainMenu(){
    return <div className="w-full h-full grid grid-rows-[auto_1fr] [--alt-color:#1F3B99] [--bg-color:#91bbf2] [--menu-item-bg:#f3f4f6]">
        <MenuTopPanel>
            <div className="flex flex-col items-center px-4 pt-2">
                <Search placeholder="Filtrar menu" />
                <div className="my-4">
                    <MenuButtonContainer>
                        <HomeIcon />
                        <span>Início</span>
                    </MenuButtonContainer>
                </div>

                <div
                    className={
                        [
                            "mt-[12px] [&>*]:pl-[30px] [&>*]:relative [&>*]:w-full [&>*]:flex [&>*]:justify-center [&>*>*:nth-child(1)]:absolute [&>*>*:nth-child(1)]:left-0",
                        ].join(" ")
                    }
                >
                    <MenuButtonContainer>
                        <BalanceIcon />
                        <span>Projudi</span>
                    </MenuButtonContainer>
                    <hr />
                    <MenuButtonContainer>
                        <BalcaoIcon />
                        <span>Balcão Virtual</span>
                    </MenuButtonContainer>
                    <hr />
                    <MenuButtonContainer>
                        <AtendimentoIcon />
                        <span className="text-[1.2rem]">1º Atendimento / Juizados especiais</span>
                    </MenuButtonContainer>
                    <hr />
                    <MenuButtonContainer>
                        <InfoIcon />
                        <span className="text-[1.2rem]">Serviço de Informação ao Cidadão</span>
                    </MenuButtonContainer>
                </div>
            </div>
        </MenuTopPanel>
        <MenuItemsContainer>
            {
                renderMenuItems([
                    {
                        label: 'Gestão',
                        children: [
                            { label: 'Acompanhamento de Processos e Procedimentos Administrativos' },
                            { label: 'Atos Normativos' },
                            { label: 'Competências / Regimento Interno' },
                            { label: 'Estatísticas' },
                            { label: 'Metas Nacionais CNJ' },
                            { label: 'Estrutura Organizacional - Organograma e Mapa de Contatos' },
                            { label: 'Planejamento Estratégico Institucional' },
                            { label: 'Programas, Projetos e Ações' },
                            { label: 'Relatório de Gestão da Prestação de Contas' },
                            { label: 'Resultados do Planejamento Estratégico Institucional' },
                        ]
                    },
                    {
                        label: 'Atos Judiciais / Jurisprudência',
                    },
                    {
                        label: 'Banco de Peritos',
                    },
                    {
                        label: 'Banco de Projetos Sociais',
                    },
                ])
            }
        </MenuItemsContainer>
    </div>
}