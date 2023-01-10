
//Router
import { useNavigate } from "react-router-dom";

//Images
import cart from "../../images/cart.png";

//Styles
import "./clearCart.scss";

const ClearCart = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return ( 
        <div className="clear">
            <h1 className="clear__title title">
                Корзина пустая 
            </h1>
            <div className="clear__subtitle">
                Вероятней всего, вы не заказывали ещё пиццу. <br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <div className="clear__img">
                <img src={cart} alt="Shop Cart"/>
            </div>
            <button onClick={goBack} className="clear__back btn">
                Вернуться назад
            </button>
        </div>
    )
}
 
export default ClearCart;