import coverphoto from '../../assets/cover-photo.png'
import profilephoto from '../../assets/profile-photo.jpg'

function Header() {

    return (
        <header>
            <div className="nav">
                <div className="cover">
                    <img className="cover-photo" src={coverphoto}/>
                </div>
                <div className="profile">
                    <img className="profile-photo" src={profilephoto}/>
                </div>
            </div>
        </header>
    )
}

export default Header