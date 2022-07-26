import "./styles.css"
import logo from '../../assets/BOOK.png'

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