import '../../../src/styles.css'
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import SocialMedia from '../../components/header/SocialMedia';
import CopyRight from '../../components/footer/CopyRight';


function Home() {
  return (
    <div className="container">
      
      <Header/>

      <div className="content-one">
        <h1>ECELL DISTRIBUIDORA</h1>
        <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
        <SocialMedia/>
      </div>

      <div className="content-two">
          <Link to="/storeone" className='nav-link'>Atendimento Virtual</Link>
          <Link to="/storetwo" className='nav-link'>Loja Várzea Grande MT</Link>
          <Link to="/storethree" className='nav-link'>Loja Sinop MT</Link>
          <Link to="/storefour" className='nav-link'>Loja Rondonópolis MT</Link>
          <Link to="/storefive" className='nav-link'>Outros Departamentos</Link>
      </div>
      <CopyRight/>
      
    </div>
  );
}

export default Home;