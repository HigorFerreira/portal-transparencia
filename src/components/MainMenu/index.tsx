'use client';

import { IoHomeOutline as HomeIcon } from "react-icons/io5"
import { MdOutlineBalance as BalanceIcon } from "react-icons/md"
import { TbCertificate2 as AtendimentoIcon } from "react-icons/tb"

import InfoIcon from './icons/InfoIcon'
import BalcaoIcon from './icons/BalcaoIcon'
import MenuItem from './components/MenuItem'
import MenuTopPanel from './components/MenuTopPanel'
import MenuAccordion from './components/MenuAccordion'
import MenuButtonContainer from './components/MenuButtonContainer'
import MenuItemsContainer from './components/MenuItemsContainer'

import { Input } from 'antd'

const { Search } = Input


export default function MainMenu(){
    return <div className="w-full h-full grid grid-rows-[auto_1fr]">
        <MenuTopPanel>
            <div className="flex flex-col items-center px-4 pt-2">
                <Search />
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
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>SOMETHING IS HAPPENING THERE</MenuItem>
                    <MenuItem>Something</MenuItem>
                    <MenuItem>Hello</MenuItem>
                    <MenuAccordion label="lorem ipsum">
                        <div>
                            <MenuItem>SOMETHING IS HAPPENING THERE</MenuItem>
                            <MenuItem>Something</MenuItem>
                            <MenuItem>Hello</MenuItem>
                        </div>
                    </MenuAccordion>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
            <MenuAccordion label="lorem ipsum">
                <div>
                    <MenuItem>Omae ga</MenuItem>
                </div>
            </MenuAccordion>
        </MenuItemsContainer>
    </div>
}