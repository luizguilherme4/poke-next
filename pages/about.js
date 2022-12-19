import styles from '../styles/About.module.css'

import Image from 'next/image'
import charizard from '../public/images/charizard.png'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto:</h1>
            <p>Consectetur et deserunt consequat ex labore ad sunt aute culpa voluptate eiusmod nisi. Irure ex et non amet aliquip dolor veniam. Adipisicing laboris incididunt laboris ex ad tempor mollit ea.</p>
            <Image src={charizard} alt="imagem do charizard" />
        </div>
    )
}