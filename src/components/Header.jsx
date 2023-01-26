import Cart from './Cart'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img src="sherlock.png" alt="bild" />
            <Cart />
        </div>
    )
}

export default Header