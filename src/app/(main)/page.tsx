import React from "react"

/* eslint-disable @next/next/no-img-element */

function ContainerBox({ children, classColor, classHeight }: { children?: React.ReactNode; classColor?: string; classHeight?: string }){
	return <div className={`w-full ${classHeight??'h-[calc(100dvh-30px-40px-80px)]'} snap-center`}>
		<div className={`absolute left-0 ${classColor??'bg-gray-400/10'} w-full ${classHeight??'h-[calc(100dvh-30px-40px-80px)]'}`}></div>
		{ children }
	</div>
}

export default function Home() {
	return <div className="snap-y snap-mandatory">
		<ContainerBox>
			<div className="w-full h-full flex justify-center items-center">
				<div className="w-full flex justify-between gap-6">
					<div className="flex items-center">
						<div>
							<div>
								<h1 className="font-bold text-[40px] mb-4 text-[#487eb0]">Portal da Transparência</h1>
								<div className="[&>*:not(:last-child)]:mb-2">
									<p>
										A Lei de Acesso à Informação - Lei nº 12.527, sancionada pela Presidência da República em 18 de novembro de 2011, garante ao cidadão brasileiro o acesso às informações públicas sob guarda de órgão e entidades públicas; facilitando, dessa forma, uma maior participação popular no acompanhamento e fiscalização das ações governamentais.
									</p>

									<p>
										A Resolução CNJ nº 215/2015 regulamenta a transparência nos órgãos do Poder Judiciário, a qual define regras e procedimentos de forma a assegurar o direito fundamental de acesso à informação.
									</p>

									<p>
										Abaixo estão disponíveis links para acesso às informações públicas disponibilizadas pelo TJGO em cumprimento à Lei de Acesso à Informação. Estão disponíveis informações sobre as contas do TJGO, licitações e contratos, concursos, relatórios e outros temas de interesse da sociedade.
									</p>

									<p>
										Se a informação não for localizada, utilize a página do Serviço de Informação ao Cidadão - SIC para ser direcionado a um sistema específico, que permite ao cidadão registrar um pedido formal de informação. Os pedidos poderão ser acompanhados mediante a utilização de código de acesso gerado pelo sistema.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="min-w-[400px] aspect-[489/787] rounded-3xl overflow-hidden shadow-2xl">
						<img src="https://i.pinimg.com/564x/38/fc/ed/38fced154ea08cf9e1dc7314b85cb7be.jpg" alt="themis" />
					</div>
				</div>
			</div>
		</ContainerBox>
		<ContainerBox classHeight="h-[100dvh]" classColor="bg-white">
			
		</ContainerBox>
		<ContainerBox classHeight="h-[100dvh]">
			
		</ContainerBox>
	</div>
}
