import {FaInstagram, FaTiktok, FaGooglePlay, FaApple} from 'react-icons/fa'

function SocialMedia() {

    return (
        <nav>
            <div className="content-one">
                <div className="social-midia">
                    <a target='_blank' href='https://www.instagram.com/ecellacessorios'><FaInstagram size={20} color='#f0f0f0'/></a>
                    <a target='_blank' href='https://www.instagram.com/ecellshopbarber'><FaInstagram size={20} color='#f0f0f0'/></a>
                    <a target='_blank' href='https://play.google.com/store/apps/details?id=br.inf.ecell.ecellacess&pcampaignid=web_share'><FaGooglePlay size={19} color='#f0f0f0'/></a>
                    <a target='_blank' href='https://apps.apple.com/app/id1531213629'><FaApple size={20} color='#f0f0f0'/></a>
                </div>
            </div>
        </nav>
    )
}

export default SocialMedia
