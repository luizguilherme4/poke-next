import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto:</h1>
            <p>PokeNext é uma pokédex que apresenta os dados de mais de 250 Pokémons. O projeto foi desenvolvido em Next.js e consome a api <a href='https://pokeapi.co/' rel="noreferrer" target="_blank">PokéApi</a> e as imagens foram retiradas do <a href='https://github.com/PokeAPI/sprites' rel="noreferrer" target="_blank">repositório de sprites</a> da PokéApi.</p>
            <p>Para colaborar com o projeto acesse o <a href='https://github.com/luizguilherme4/pokemon-deck' rel="noreferrer" target="_blank">repositório no GitHub.</a></p>
            <p>Considere dar uma olhada no meu <a href='https://luizguilherme4.github.io/portfolio/' rel="noreferrer" target="_blank">portfólio</a> para explorar meus outros projetos.</p>
        </div>
    )
}