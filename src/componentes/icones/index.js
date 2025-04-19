import './estilo.css'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icone = [perfil, sacola];

export default function Icones() {
    return (
        <ul className='icones'>{
            icone.map(icone => (
                <li className='icone'><img src={icone} alt='icones de perfil'></img></li>)
            )
        };
        </ul>
    )
}