import '../../../src/styles.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/header/SocialMedia';


function StoreFour() {
  return (
    <div className="container">
      <Header/>
      <div className="content-one">
      <h1>Ecell Rondonópolis MT</h1>
      <span><p>Conectando Você às Melhores</p><p>Peças e Acessórios 📱💚</p></span>
      <SocialMedia/>
      </div>
      <div className="content-two">
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=556699152111&text=Oi%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'>Atendente Virtual (Apenas Retirada)</a>
      </div>
      <Footer/>
    </div>
  );
}

export default StoreFour;
