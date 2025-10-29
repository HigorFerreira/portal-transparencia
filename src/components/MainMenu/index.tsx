'use client';

import { MdOutlineBalance as BalanceIcon } from "react-icons/md"
import { TbCertificate2 as AtendimentoIcon } from "react-icons/tb"
import { IoHomeOutline as HomeIcon, IoInformationCircleOutline as InfoIcon } from "react-icons/io5"

// import InfoIcon from './icons/InfoIcon'
import { renderMenuItems } from './utils'
import BalcaoIcon from './icons/BalcaoIcon'
import MenuTopPanel from './components/MenuTopPanel'
import MenuButtonContainer from './components/MenuButtonContainer'
import MenuItemsContainer from './components/MenuItemsContainer'

import { Input } from 'antd'

const { Search } = Input

export default function MainMenu(){
    return <div className="w-full h-full grid grid-rows-[auto_1fr] bg-hard-surface text-soft-surface">
        <MenuTopPanel>
            <div className="flex flex-col items-center px-6 pt-2 text-primary">
                <Search placeholder="Pesquisar no menu" />
                <div className="w-full px-[12px] my-4">
                    <MenuButtonContainer>
                        <HomeIcon />
                        <span className="text-white-hole">Início</span>
                    </MenuButtonContainer>
                </div>

                <div
                    className={
                        [
                            "mt-[12px] [&>*]:pl-[30px] [&>*]:relative [&>*]:w-full [&>*]:flex [&>*>*:nth-child(1)]:absolute [&>*>*:nth-child(1)]:left-0",
                            "[@media(min-width:1280px)_and_(max-height:800px)]:hidden",
                        ].join(" ")
                    }
                >
                    <MenuButtonContainer>
                        <BalanceIcon />
                        <span className="text-white-hole">Projudi</span>
                    </MenuButtonContainer>
                    <hr className="text-white-hole" />
                    <MenuButtonContainer>
                        <BalcaoIcon />
                        <span className="text-white-hole">Balcão Virtual</span>
                    </MenuButtonContainer>
                    <hr className="text-white-hole" />
                    <MenuButtonContainer>
                        <AtendimentoIcon />
                        <span className="text-white-hole text-[1.2rem]">1º Atendimento / Juizados especiais</span>
                    </MenuButtonContainer>
                    <hr className="text-white-hole" />
                    <MenuButtonContainer>
                        <InfoIcon />
                        <span className="text-white-hole text-[1.2rem]">Serviço de Informação ao Cidadão</span>
                    </MenuButtonContainer>
                </div>
            </div>
        </MenuTopPanel>
        <MenuItemsContainer>
            {
                renderMenuItems([
                    {
                        "label": "Gestão",
                        "children": [
                            {
                                "label": "Acompanhamento de Processos e Procedimentos Administrativos"
                            },
                            {
                                "label": "Atos Normativos"
                            },
                            {
                                "label": "Competências / Regimento Interno"
                            },
                            {
                                "label": "Estatísticas"
                            },
                            {
                                "label": "Metas Nacionais CNJ"
                            },
                            {
                                "label": "Estrutura Organizacional- Organograma e Mapa de Contatos"
                            },
                            {
                                "label": "Planejamento Estratégico Institucional"
                            },
                            {
                                "label": "Programas, Projetos e Ações"
                            },
                            {
                                "label": "Relatório de Gestão da Prestação de Contas"
                            },
                            {
                                "label": "Resultados do Planejamento Estratégico Institucional"
                            }
                        ]
                    },
                    {
                        "label": "Audiências e Sessões",
                        "children": [
                            {
                                "label": "2ª instância - Sessões de Julgamento"
                            },
                            {
                                "label": "Atas de Julgamento"
                            },
                            {
                                "label": "Calendário das Sessões Colegiadas"
                            },
                            {
                                "label": "Comissões e Comitês"
                            },
                            {
                                "label": "Encontro Regional (Audiência Pública)"
                            },
                            {
                                "label": "Pauta de Julgamentos"
                            },
                            {
                                "label": "Presença em Plenário"
                            },
                            {
                                "label": "Vídeos das Sessões"
                            }
                        ]
                    },
                    {
                        "label": "Serviço de Informação ao Cidadão - SIC"
                    },
                    {
                        "label": "Ouvidoria"
                    },
                    {
                        "label": "Tecnologia da Informação e Comunicação",
                        "children": [
                            {
                                "label": "Acesso Automatizado por Sistemas Externos"
                            },
                            {
                                "label": "Consulta Pública de Processos - Numeração Única (API DATAJUD)"
                            },
                            {
                                "label": "Painel de Informações de Tecnologia da Informação e Comunicação-TIC"
                            },
                            {
                                "label": "Plano Diretor"
                            },
                            {
                                "label": "Plano de Contratações"
                            }
                        ]
                    },
                    {
                        "label": "Gestão Orçamentária e Financeira",
                        "children": [
                            {
                                "label": "Gestão Orçamentária e Financeira - Paineis"
                            },
                            {
                                "label": "Precatórios",
                                "children": [
                                    {
                                        "label": "Apresentação"
                                    },
                                    {
                                        "label": "Comitê Gestor de Precatórios"
                                    },
                                    {
                                        "label": "Consulta Precatórios - Processo Digital"
                                    },
                                    {
                                        "label": "Edital Para Acordo Direto"
                                    },
                                    {
                                        "label": "Legislação"
                                    },
                                    {
                                        "label": "Mapa Anual CNJ - Resolução nº 303/2019 - CNJ"
                                    },
                                    {
                                        "label": "Modelos de Requerimentos para Acordo e Preferencial"
                                    },
                                    {
                                        "label": "Total Ordem Cronológica Pendentes e Preferenciais"
                                    },
                                    {
                                        "label": "Ordem Cronológica de Pagos"
                                    },
                                    {
                                        "label": "Relatórios Financeiros"
                                    },
                                    {
                                        "label": "Relatório Sintético"
                                    },
                                    {
                                        "label": "Planos de Pagamentos"
                                    },
                                    {
                                        "label": "PROAD"
                                    },
                                    {
                                        "label": "Pagamentos dos últimos anos"
                                    },
                                    {
                                        "label": "Transferências TRF 1ª Região"
                                    },
                                    {
                                        "label": "Transferências TRT 18° Região"
                                    }
                                ]
                            },
                            {
                                "label": "Apresentação"
                            },
                            {
                                "label": "Comitê Gestor de Precatórios"
                            },
                            {
                                "label": "Consulta Precatórios - Processo Digital"
                            },
                            {
                                "label": "Edital Para Acordo Direto"
                            },
                            {
                                "label": "Legislação"
                            },
                            {
                                "label": "Mapa Anual CNJ - Resolução nº 303/2019 - CNJ"
                            },
                            {
                                "label": "Modelos de Requerimentos para Acordo e Preferencial"
                            },
                            {
                                "label": "Total Ordem Cronológica Pendentes e Preferenciais"
                            },
                            {
                                "label": "Ordem Cronológica de Pagos"
                            },
                            {
                                "label": "Relatórios Financeiros"
                            },
                            {
                                "label": "Relatório Sintético"
                            },
                            {
                                "label": "Planos de Pagamentos"
                            },
                            {
                                "label": "PROAD"
                            },
                            {
                                "label": "Pagamentos dos últimos anos"
                            },
                            {
                                "label": "Transferências TRF 1ª Região"
                            },
                            {
                                "label": "Transferências TRT 18° Região"
                            },
                            {
                                "label": "Requisição de Pequeno Valor",
                                "children": [
                                    {
                                        "label": "Apresentação"
                                    },
                                    {
                                        "label": "Convênios - RPV"
                                    },
                                    {
                                        "label": "Relatórios - Resolução 303/19 - CNJ"
                                    },
                                    {
                                        "label": "Relatórios - RPV's"
                                    }
                                ]
                            },
                            {
                                "label": "Apresentação"
                            },
                            {
                                "label": "Convênios - RPV"
                            },
                            {
                                "label": "Relatórios - Resolução 303/19 - CNJ"
                            },
                            {
                                "label": "Relatórios - RPV's"
                            }
                        ]
                    },
                    {
                        "label": "Gestão de Pessoas"
                    },
                    {
                        "label": "Licitações, Contratos e Instrumentos de Cooperação",
                        "children": [
                            {
                                "label": "Atas Aderidas pelo TJGO"
                            },
                            {
                                "label": "Atas de Registro de Preços"
                            },
                            {
                                "label": "Contratos e Aditivos"
                            },
                            {
                                "label": "Contratos - Ordem Cronológica de Pagamentos",
                                "children": [
                                    {
                                        "label": "Fornecimento de Bens"
                                    },
                                    {
                                        "label": "Locações"
                                    },
                                    {
                                        "label": "Obras"
                                    },
                                    {
                                        "label": "Prestação de Serviços"
                                    }
                                ]
                            },
                            {
                                "label": "Fornecimento de Bens"
                            },
                            {
                                "label": "Locações"
                            },
                            {
                                "label": "Obras"
                            },
                            {
                                "label": "Prestação de Serviços"
                            },
                            {
                                "label": "Convênios"
                            },
                            {
                                "label": "Dispensas e Inexigibilidade"
                            },
                            {
                                "label": "Fornecedores Penalizados"
                            },
                            {
                                "label": "Instrumentos de Cooperação"
                            },
                            {
                                "label": "Licitação"
                            },
                            {
                                "label": "Lista dos Fiscais de contrato"
                            },
                            {
                                "label": "Plano de Comunicação"
                            },
                            {
                                "label": "Plano de Contratações Anual"
                            },
                            {
                                "label": "Relatório de Aquisições - Covid 19"
                            },
                            {
                                "label": "Relatório de Aquisições - Lei 17.928/2012"
                            }
                        ]
                    },
                    {
                        "label": "Auditoria e Prestação de Contas",
                        "children": [
                            {
                                "label": "Diretoria de Auditoria Interna",
                                "children": [
                                    {
                                        "label": "Apresentação"
                                    },
                                    {
                                        "label": "Conheça o IA-CM"
                                    },
                                    {
                                        "label": "PALP -  Plano de Auditorias de Longo Prazo"
                                    },
                                    {
                                        "label": "Plano Anual de Auditoria"
                                    },
                                    {
                                        "label": "Plano Anual de Capacitação"
                                    },
                                    {
                                        "label": "Relatório Anual de Atividades"
                                    },
                                    {
                                        "label": "Relatório da Prestação de Contas Anual ao TCE/GO"
                                    },
                                    {
                                        "label": "Relatório da Auditoria, Certificado de Auditoria, Parecer do Órgão de Controle Interno e Pronunciamento do Presidente do TJGO"
                                    },
                                    {
                                        "label": "Publicação da decisão quanto à regularidade das contas proferidas pelo Órgão de controle Externo"
                                    },
                                    {
                                        "label": "Relatório de Gestão da Prestação de Contas"
                                    }
                                ]
                            },
                            {
                                "label": "Apresentação"
                            },
                            {
                                "label": "Conheça o IA-CM"
                            },
                            {
                                "label": "PALP -  Plano de Auditorias de Longo Prazo"
                            },
                            {
                                "label": "Plano Anual de Auditoria"
                            },
                            {
                                "label": "Plano Anual de Capacitação"
                            },
                            {
                                "label": "Relatório Anual de Atividades"
                            },
                            {
                                "label": "Relatório da Prestação de Contas Anual ao TCE/GO"
                            },
                            {
                                "label": "Relatório da Auditoria, Certificado de Auditoria, Parecer do Órgão de Controle Interno e Pronunciamento do Presidente do TJGO"
                            },
                            {
                                "label": "Publicação da decisão quanto à regularidade das contas proferidas pelo Órgão de controle Externo"
                            },
                            {
                                "label": "Relatório de Gestão da Prestação de Contas"
                            }
                        ]
                    },
                    {
                        "label": "Sustentabilidade e Acessibilidade",
                        "children": [
                            {
                                "label": "Acessibilidade",
                                "children": [
                                    {
                                        "label": "Apresentação / Modelo de Acessibilidade em Governo Eletrônico (eMAG)"
                                    },
                                    {
                                        "label": "Audiodescrição"
                                    },
                                    {
                                        "label": "Comissão"
                                    },
                                    {
                                        "label": "Planos de Ação"
                                    },
                                    {
                                        "label": "Relatórios Anuais de Acessibilidade"
                                    },
                                    {
                                        "label": "Legendas"
                                    },
                                    {
                                        "label": "Legislação"
                                    },
                                    {
                                        "label": "Libras"
                                    },
                                    {
                                        "label": "Mapa do Site"
                                    }
                                ]
                            },
                            {
                                "label": "Apresentação / Modelo de Acessibilidade em Governo Eletrônico (eMAG)"
                            },
                            {
                                "label": "Audiodescrição"
                            },
                            {
                                "label": "Comissão"
                            },
                            {
                                "label": "Planos de Ação"
                            },
                            {
                                "label": "Relatórios Anuais de Acessibilidade"
                            },
                            {
                                "label": "Legendas"
                            },
                            {
                                "label": "Legislação"
                            },
                            {
                                "label": "Libras"
                            },
                            {
                                "label": "Mapa do Site"
                            },
                            {
                                "label": "Núcleo de Responsabilidade Social e Ambiental"
                            }
                        ]
                    },
                    {
                        "label": "Atos Judiciais / Jurisprudência"
                    },
                    {
                        "label": "Banco de Peritos"
                    },
                    {
                        "label": "Banco de Projetos Sociais"
                    },
                    {
                        "label": "Boas Práticas",
                        "children": [
                            {
                                "label": "CEJUSC da Saúde"
                            },
                            {
                                "label": "Dialogar para Desjudicializar"
                            },
                            {
                                "label": "Recomeçar"
                            }
                        ]
                    },
                    {
                        "label": "Obras",
                        "children": [
                            {
                                "label": "Plano de Obras"
                            },
                            {
                                "label": "Sistema de Priorização das Obras"
                            },
                            {
                                "label": "Obras"
                            },
                            {
                                "label": "Quantitativos Executados e Preços Praticados"
                            },
                            {
                                "label": "Quantitativos, Preços Unitários e Totais Contratados"
                            },
                            {
                                "label": "Obras Paralisadas"
                            }
                        ]
                    },
                    {
                        "label": "Débitos inscritos na Dívida Ativa"
                    },
                    {
                        "label": "Honorário Médicos Justiça Gratuita"
                    },
                    {
                        "label": "Patrimônio"
                    },
                    {
                        "label": "Radar da Transparência Pública"
                    },
                    {
                        "label": "Relação de Veículos"
                    },
                    {
                        "label": "LGPD e Governo Digital",
                        "children": [
                            {
                                "label": "Encarregado e Canal de Comunicação"
                            },
                            {
                                "label": "Política de Privacidade e Proteção de Dados"
                            },
                            {
                                "label": "Serviços On-line",
                                "children": [
                                    {
                                        "label": "Emissão de Certidões"
                                    },
                                    {
                                        "label": "Emissão de Guias"
                                    },
                                    {
                                        "label": "ExecpenWeb"
                                    },
                                    {
                                        "label": "SEEU - Sistema Eletrônico de Execução Unificado"
                                    },
                                    {
                                        "label": "Prévia de Cálculos Judiciais"
                                    },
                                    {
                                        "label": "Processo Judicial Digital"
                                    },
                                    {
                                        "label": "PROAD - Processo Administrativo Digital"
                                    }
                                ]
                            },
                            {
                                "label": "Emissão de Certidões"
                            },
                            {
                                "label": "Emissão de Guias"
                            },
                            {
                                "label": "ExecpenWeb"
                            },
                            {
                                "label": "SEEU - Sistema Eletrônico de Execução Unificado"
                            },
                            {
                                "label": "Prévia de Cálculos Judiciais"
                            },
                            {
                                "label": "Processo Judicial Digital"
                            },
                            {
                                "label": "PROAD - Processo Administrativo Digital"
                            },
                            {
                                "label": "Dados Abertos"
                            },
                            {
                                "label": "Regulamentação do Governo Digital no TJGO"
                            },
                            {
                                "label": "Pesquisas de Satisfação"
                            }
                        ]
                    }
                ])
            }
        </MenuItemsContainer>
    </div>
}