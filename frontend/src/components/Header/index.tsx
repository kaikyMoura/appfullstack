import "./style.css"
import logo from '../../assets/BOOKSHELVES.jpg'

function Header() {
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
            </div>
        </header>
    )

}

export default Header;