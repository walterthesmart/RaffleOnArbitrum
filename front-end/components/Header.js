import Link from "next/link"
import { ConnectButton } from "web3uikit"

export default function Header() {

    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl">Decentralized Lottery Alx</h1>
            <div className="ml-auto py-2 px-4">
                <Link href='/LotteryEntrance'>
                <ConnectButton moralisAuth={false}/>
                </Link>
            </div>
        </nav>
    )
}