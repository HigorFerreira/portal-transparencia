import React from "react"

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
			HEADER 1
		</header>
		<header className="[grid-area:h2]">
			HEADER 2
		</header>
		<aside className="[grid-area:mm]">
			MAIN MENU
		</aside>
		<aside className="[grid-area:sm]">
			SUBMENU
		</aside>
		<main className="[grid-area:c] overflow-hidden">
			<div className="w-full h-full overflow-auto">
				<div className="h-[200vh]">
					CONTENT
				</div>
			</div>
		</main>
		<footer className="[grid-area:f]">
			FOOTER
		</footer>
	</div>
}
