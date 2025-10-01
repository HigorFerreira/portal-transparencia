import React from "react"

export default function Home() {
	return <div
		className={[
			"w-[100vw] h-[100dvh] grid",
			"grid-cols-[auto_auto_1fr] grid-rows-[40px_auto_1fr]",
			"[grid-template-areas:'h1_h1_h1'_'mm_sm_h2'_'mm_sm_c']",
		].join(" ")}
	>
		<header className="[grid-area:h1]">

		</header>
		<header className="[grid-area:h2]">

		</header>
		<aside className="[grid-area:mm]">

		</aside>
		<aside className="[grid-area:sm]">

		</aside>
		<main className="[grid-area:c]">

		</main>
	</div>
}
