
//Redux
import { useSelector } from "react-redux";

//Router
import {Link} from "react-router-dom";

//React Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

//Styles
import "./shopCartSmall.scss";

const ShopCartSmall = () => {

    const totalPrice = useSelector(state => state.cart.totalPrice);
    const addedPizza = useSelector(state => state.cart.pizza);

    return (   
        <Link to="shop-cart" className="shop-cart btn shop-cart__btn">
            <div className="shop-cart__item">
                {totalPrice} ₽
            </div>
            <div className="shop-cart__item">
                <AiOutlineShoppingCart size={18}  style={{marginRight: 8}}/>
                {addedPizza.length}
            </div>
        </Link>
    )
}
 
export default ShopCartSmall;