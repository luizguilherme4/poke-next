import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import heart from '../public/images/heart.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Feito com </p>
            <Image src={heart} alt="ícone de coração" />
            <p>por Luiz</p>
        </footer>
    )
}