import Image from 'next/image'
import Link from 'next/link'

import pokeball from '../public/images/pokeball.png'

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src={pokeball} />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}   