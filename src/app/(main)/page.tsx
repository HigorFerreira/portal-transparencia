import { TopBar, TopSecondBar, } from '@/module_exports/server'
import ClientComponent from './ClientTest'

export default function Home() {
	return <div>
		{/* <TopBar />
		<TopSecondBar /> */}
		<div className='pt-[80px] h-[200vh]'>
			<ClientComponent />
		</div>
	</div>
}
