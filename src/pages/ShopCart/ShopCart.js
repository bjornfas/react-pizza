
//Redux
import { useSelector, useDispatch } from "react-redux/es/exports";
import { clearPizza } from "../../redux/cartSlice";

//Components
import ClearCart from "../../components/ClearCart/ClearCart";
import CartItem from "../../components/CartItem/CartItem";

//Router
import {Outlet, Link, useNavigate} from "react-router-dom";

//React Icons
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

//Styles
import "./shopCart.scss";

const ShopCart = () => {

    const pizza = useSelector(state => state.cart.pizza);

    const totalPrice = useSelector(state => state.cart.totalPrice);

    const totalCount = useSelector(state => state.cart.pizza.reduce((a, b) => a + b.count, 0));

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const result = pizza.map((item, i) => {
        return (
            <CartItem
            key={item.id + i}
            id={item.id}
            image={item.image}
            name={item.name}
            size={item.size}
            type={item.type}
            price={item.price}
            />
        )
    })

    const onRemovePizza = () => {
        dispatch(clearPizza());
    }

    return ( 
        <>
            <Outlet/>
            <section className="cart-page">
                <div className="cart-page__container">
                    {pizza.length > 0 
                    ? 
                        <>
                            <div className="cart-page__info">
                                <h1 className="cart-page__title title">
                                    <AiOutlineShoppingCart 
                                    size={30} 
                                    className="cart-page__icon-cart"
                                    />
                                    Корзина
                                </h1>
                                <button onClick={onRemovePizza} className="cart-page__clear">
                                    <BsTrash 
                                    size={20} 
                                    className="cart-page__icon-trash"
                                    />
                                    Очистить корзину
                                </button>
                            </div>
                            <div className="cart-page__list">
                                {result}
                            </div>
                            <div className="cart-page__bottom">
                                <div className="cart-page__total">
                                    Всего пицц: 
                                    <span className="cart-page__total-count">
                                        {totalCount} шт.
                                    </span>
                                </div>
                                <div className="cart-page__total">
                                    Сумма заказа: 
                                    <span className="cart-page__total-price">
                                        {totalPrice} ₽
                                    </span>
                                </div>
                            </div>
                            <div className="cart-page__links">
                                <button onClick={goBack} className="cart-page__back btn-inverse">
                                    <AiOutlineArrowLeft size={20} className="cart-page__back-icon"/>
                                    Вернуться назад
                                </button>
                                <Link to="/" className="cart-page__pay btn">
                                    Оплатить сейчас
                                </Link>
                            </div>
                        </>
                    : <ClearCart/>}
                </div>
            </section>
            
        </>
    )
}
 
export default ShopCart;