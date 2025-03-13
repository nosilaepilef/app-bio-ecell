import {FaInstagram, FaTiktok} from 'react-icons/fa'

function SocialMedia() {

    return (
        <nav>
            <div className="content-one">
                <div className="social-midia">
                    <a target='_blank' href='https://www.instagram.com/ecellacessorios'><FaInstagram size={20} color='#f0f0f0'/></a>
                    <a target='_blank' href='https://www.tiktok.com/@ecellshopbarber'><FaInstagram size={20} color='#f0f0f0'/></a>
                </div>
            </div>
        </nav>
    )
}

export default SocialMedia
