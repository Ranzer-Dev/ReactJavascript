import Input from '../input/index.js'; 
import './estilo.css';

export default function Pesquisas() {
    return (
        <section className='pesquisa'>
            <h2 className='titulo'>Já sabe por onde começar?</h2>
            <h3 className='subtitulo'>Encontre seu livro na nossa estante.</h3>
            <Input/>
        </section>
    );
}