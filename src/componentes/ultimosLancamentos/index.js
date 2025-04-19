import "./estilo.css"
import { Livros } from "./dadosUltimosLancamentos";

export default function UltimosLancamentos() {
    return (
        <section className="lancamentos">
        <div>
            <h2 cor>Últimos Lançamentos</h2>
        </div>
            {Livros.map(livros => (
                <img src={livros.src} />
            ))}
        </section>
    );
}