import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {FaInstagram, FaTiktok, FaGooglePlay, FaApple} from 'react-icons/fa'


function StoreSix() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Shop Barber</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <div className="content-one">
        <div className="social-midia">
          <a target='_blank' href='https://www.instagram.com/ecellshopbarber'><FaInstagram size={20} color='#f0f0f0'/></a>
          <a target='_blank' href='https://www.tiktok.com/@lojaecell_oficial'><FaTiktok size={20} color='#f0f0f0'/></a>
          <a target='_blank' href='https://play.google.com/store/apps/details?id=br.inf.ecell.ecellacess&pcampaignid=web_share'><FaGooglePlay size={19} color='#f0f0f0'/></a>
          <a target='_blank' href='https://apps.apple.com/app/id1531213629'><FaApple size={20} color='#f0f0f0'/></a>
        </div>
      </div>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556593095868&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedor Virtual</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=5565984467798&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedor Externo</a>
      </div>
      <Footer/>
    </div>
  );
}

export default StoreSix;
