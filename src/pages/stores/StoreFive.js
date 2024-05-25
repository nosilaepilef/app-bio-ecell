import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreFive() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Outros Departamentos</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556593095868&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedor Vinicius (Shop Barber)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584063557&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vendedor Pedro (Evapor - Tabacaria)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584778077&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Leticia (Brindes e Gravação a Laser)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556581279773&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Vitória (Troca ou Devolução)</a>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556584348850&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Thamara (RH - Recursos Humanos)</a>
      </div>
      <Footer/>
    </div>
  );
}

export default StoreFive;