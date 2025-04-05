import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreNine() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Baixe nosso App!</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://play.google.com/store/apps/details?id=br.inf.ecell.ecellacess&pcampaignid=web_share'>Baixar no Google Play</a>
          <a target='_blank' href='https://apps.apple.com/app/id1531213629'>Baixar na App Store</a>
      </div>
      <Footer/>      
    </div>
  );
}

export default StoreNine;
