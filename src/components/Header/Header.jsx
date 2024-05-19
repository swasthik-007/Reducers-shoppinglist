import HeaderImage from '../../assets/header_image.jpg'
import './Header.css'

function Header(){
    return(
        <div className='header-wrapper'>
        <h1 className='header-text'>
            Shopping List
        </h1>
        <div className='header-image-wrapper'>

        <img
            className='header-image'
            src={HeaderImage} 
            />
            </div>
        </div>
    )
}
export default Header;