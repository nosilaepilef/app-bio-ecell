import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreOne() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Atendimento Virtual</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556596060999&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedor Fred (Atacado)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556596003189&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Dayane (Atacado)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556592024603&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Juliane (Atacado)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556596622479&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Cristina (Atacado e Varejo)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556592281747&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedora Jessyca (Atacado e Varejo)</a>
      </div>
      <Footer/>      
    </div>
  );
}

export default StoreOne;