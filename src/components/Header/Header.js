
//Components
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import ShopCart from "../ShopCartSmall/ShopCartSmall";

//Styles
import "./header.scss";

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <Logo/>
                <SearchInput/>
                <ShopCart/>
                <div className="mobile-search">
                    <SearchInput/>
                </div>
            </div>
        </header>
    )
}
 
export default Header;