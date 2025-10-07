import React from "react"

import Menu from '@/app/(main)/Menu'
import TopBar from '@/components/TopBar'
import GlobalSearch from './GlobalSearch'
import SubMenu from '@/app/(main)/SubMenu'
import TopSecondBar from '@/components/TopSecondBar'



export default function Home() {
	return <div
		className={[
			"w-[100vw] h-[100dvh] grid",
			"grid-cols-[auto_auto_1fr] grid-rows-[40px_auto_1fr]",
			"[grid-template-areas:'h1_h1_h1'_'mm_sm_h2'_'mm_sm_c'_'f_f_f']",
			"[&>*]:flex [&>*]:justify-center [&>*]:items-center",
		].join(" ")}
	>
		<header className="[grid-area:h1]">
			<TopBar />
		</header>
		<header className="[grid-area:h2]">
			<TopSecondBar />
		</header>
		<aside className="[grid-area:mm]">
			<Menu />
		</aside>
		<aside className="[grid-area:sm]">
			<SubMenu />
		</aside>
		<main className="[grid-area:c] overflow-hidden [&_a]:text-blue-500">
			<div className="w-full h-full flex justify-center items-center">
			<div
				className={[
					// "@container/content1",
					"max-w-[920px] gap-x-4 grid grid-rows-[repeat(3,auto)_1fr_auto] grid-cols-[1fr_auto]",
					"[@media(max-width:1570px)]:grid-cols-[1fr]",
					"[@media(max-width:1570px)]:grid-rows-[repeat(4,auto)]",
					"[@media(max-width:1570px)]:text-center",
					"[@media(max-width:1570px)]:px-6",
				].join(" ")}
			>
					<div>
						{/* <h1 className="font-bold text-[clamp(1.5rem,calc(.7886vw+1.25rem),2.6rem)] mb-4 text-[#487eb0]">Portal da Transparência</h1> */}
					</div>
					<div>
						<GlobalSearch />
					</div>
					<div className="[&>*:not(:last-child)]:mb-2">
						<p>
							A Lei de Acesso à Informação -&nbsp;
							<a target="_blank" href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm">
								Lei nº 12.527
							</a>
							, sancionada pela Presidência da República em 18 de novembro de 2011, garante ao cidadão brasileiro o acesso às informações públicas sob guarda de órgão e entidades públicas; facilitando, dessa forma, uma maior participação popular no acompanhamento e fiscalização das ações governamentais.
						</p>

						<p>
							A <a target="_blank" href="https://atos.cnj.jus.br/files/resolucao_comp_215_16122015_26032019162517.pdf">Resolução CNJ nº 215/2015</a> regulamenta a transparência nos órgãos do Poder Judiciário, a qual define regras e procedimentos de forma a assegurar o direito fundamental de acesso à informação.
						</p>

						<p>
							Abaixo estão disponíveis links para acesso às informações públicas disponibilizadas pelo TJGO em cumprimento à Lei de Acesso à Informação. Estão disponíveis informações sobre as contas do TJGO, licitações e contratos, concursos, relatórios e outros temas de interesse da sociedade.
						</p>

						<p>
							Se a informação não for localizada, utilize <a target="_blank" href="https://www.tjgo.jus.br/index.php/sic/apresentacao-sic">a página do Serviço de Informação ao Cidadão - SIC</a> para ser direcionado a um <a target="_blank" href="https://tjgo.omd.com.br/ouvidoria/externo/cadastro.do">sistema específico</a>, que permite ao cidadão registrar um pedido formal de informação. Os pedidos poderão ser acompanhados mediante a utilização de código de acesso gerado pelo sistema.
						</p>
					</div>
					<div className="row-start-5 mt-8">
						<h3 className="font-bold text-[clamp(1rem,calc(.3943vw+.625rem),2.1rem)]">Dúvidas e Alterações:</h3>
						<p>Diretoria de Planejamento e Inovação</p>
						<p>Ana Flávia Antunes - (62) 3236-5434</p>
					</div>
					<div className={[
						"col-start-2 [grid-row:1/-1]",
						"[@media(max-width:1570px)]:[grid-column:unset]",
						"[@media(max-width:1570px)]:[grid-row:unset]",
						"bg-[url(https://i.pinimg.com/564x/38/fc/ed/38fced154ea08cf9e1dc7314b85cb7be.jpg)]",
						"rounded-3xl shadow-2xl bg-cover",
						"min-w-[380px]"
					].join(" ")} />
				</div>
			</div>
		</main>
		<footer className="[grid-area:f]">
		{/* bg-blue-950 */}
			<div className="w-full h-full bg-blue-950">
				FOOTER
			</div>
		</footer>
	</div>
}
