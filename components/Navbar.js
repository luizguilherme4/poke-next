import Image from 'next/image'
import Link from 'next/link'

import pokeball from '../public/images/pokeball.png'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image
                    src={pokeball}
                    width="40"
                    height="40"
                    alt="pokenext logo"
                />
                <h1>PokeNext</h1>
            </Link>
            <ul className={styles.link_items}>
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