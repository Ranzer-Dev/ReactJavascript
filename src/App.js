import './App.css';
import Logo from './componentes/logo/index.js'
import OpcoesHeader from './componentes/opcoesHeader/index.js'
import Icones from './componentes/icones/index.js'
import Pesquisa from './componentes/pesquisa/index.js';
import UltimosLancamentos from './componentes/ultimosLancamentos/index.js';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>
      </header>
      <Pesquisa/>
      <UltimosLancamentos/>
    </div>
  );
}