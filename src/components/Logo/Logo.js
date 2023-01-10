
//Router
import {Link} from "react-router-dom";

//Images
import LogoImage from "../../images/logo.svg";

const Logo = () => {
    return ( 
        <div className="logo">
            <Link to="/">
                <img src={LogoImage} alt="Logo"/>
            </Link>
        </div>
    )
}
 
export default Logo;