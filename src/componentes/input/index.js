import '../input/estilo.css'
import { useState } from 'react';
import { Livros } from '../pesquisa/dadosPesquisa.js'

export default function Input() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <section>
            <input placeholder="escreva sua busca"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }} />

            {livrosPesquisados.map(livro => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </div>
            ))}
        </section>
    )
}