import { TopBar, TopSecondBar, } from '@/module_exports/server'

export default function Home() {
	return <div>
		<TopBar />
		<TopSecondBar />
		<div className='h-[200vh]'></div>
	</div>
}
