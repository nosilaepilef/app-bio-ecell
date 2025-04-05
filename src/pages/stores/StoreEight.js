import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreEight() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Siga a gente!</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://www.instagram.com/ecellacessorios'>Instagram Ecell Acessorios</a>
          <a target='_blank' href='https://www.tiktok.com/@lojaecell_oficial'>Tiktok Ecell Acessorios</a>
          <a target='_blank' href='https://www.instagram.com/ecellshopbarber'>Instagram Shop Barber</a>
      </div>
      <Footer/>      
    </div>
  );
}

export default StoreEight;
