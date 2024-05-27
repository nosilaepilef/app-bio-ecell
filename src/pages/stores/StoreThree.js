import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreThree() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Ecell Sinop MT</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556696072111&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Thaina</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556696132111&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Amabely</a>
          <a target='_blank' href='https://maps.app.goo.gl/tDYsjyxvWnM7cCfM6'>Localização da Loja</a>
      </div>
      <Footer/>
    </div>
  );
}

export default StoreThree;