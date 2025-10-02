import React from "react"

import TopBar from '@/components/TopBar'
import TopSecondBar from '@/components/TopSecondBar'
import ContentTest from './ContentTest'


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
			<div className="min-w-[250px] h-full p-6 shadow">
				MAIN MENU
			</div>
		</aside>
		<aside className="[grid-area:sm]">
			<div className="min-w-[250px] h-full p-6 shadow">
				SUBMENU
			</div>
		</aside>
		<main className="[grid-area:c] overflow-hidden">
			<ContentTest />
		</main>
		<footer className="[grid-area:f]">
		{/* bg-blue-950 */}
			<div className="w-full h-full bg-blue-950">
				FOOTER
			</div>
		</footer>
	</div>
}
