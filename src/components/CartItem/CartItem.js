
//Redux
import { useSelector, useDispatch } from "react-redux/es/exports";
import { minusPizza, plusPizza, removePizza } from "../../redux/cartSlice";

//Router
import { Link } from "react-router-dom";

//React Icons
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const CartItem = ({id, image, name, size, type, price}) => {

    const count = useSelector(state => state.cart.pizza.find(item => {
        return ((item.id === id) && (item.type === type) && (item.size === size));
    }));

    const dispatch = useDispatch();

    const onMinusPizza = (value) => {
        dispatch(minusPizza(value))
    }

    const onPlusPizza = (value) => {
        dispatch(plusPizza(value));
    }

    const onRemovePizza = (value) => {
        dispatch(removePizza(value))
    }

    return ( 
        <div className="cart-page__item">
            <div className="cart-page__description">
                <img className="cart-page__img" src={image} alt={name} />
                <div className="cart-page__property">
                    <Link to={`/pizza/${id}`}>
                        <h2 className="cart-page__property-title">
                            {name}
                        </h2>
                    </Link>
                    {`${type} тесто, ${size} см.`}
                </div>
            </div>
            <div className="cart-page__description cart-page__description-second">
                <div className="cart-page__counter">
                    <button 
                    disabled={count.count > 1 ? "" : "disabled"} 
                    onClick={() => onMinusPizza({id, type, size})} 
                    className="cart-page__counter-btn"
                    >
                        <BiMinus size={20} />
                    </button>
                    <div className="cart-page__counter-value">
                        {count.count}
                    </div>
                    <button 
                    onClick={() => onPlusPizza({id, type, size})} 
                    className="cart-page__counter-btn"
                    >
                        <BiPlus size={20}/>
                    </button>
                </div>
                <div className="cart-page__price">
                    {price * count.count} ₽ 
                </div>
                <button 
                onClick={() => onRemovePizza({id, type, size})} 
                className="cart-page__remove-btn"
                >
                    <IoMdClose size={20}/>
                </button>
            </div>
        </div>
    )
}
 
export default CartItem;