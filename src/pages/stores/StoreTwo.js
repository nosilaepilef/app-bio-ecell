import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreTwo() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Loja Várzea Grande MT</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584553274&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Alessandra (Atacado e Varejo)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584010699&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Rhauanny</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584735979&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Gislayne</a>
          <a target='_blank' href='https://maps.app.goo.gl/9t3NTkeEQVKF1kSA8'>Localização da Loja</a>
      </div>
      <Footer/>
    </div>
  );
}

export default StoreTwo;