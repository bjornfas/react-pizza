 
//React
import { useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { addPizza } from "../../redux/cartSlice";

//Components
import SkeletonImage from "../../libs/SkeletonImage";
import SkeletonContent from "../../libs/SkeletonContent";
import PropertyItem from "../PropertyItem/PropertyItem";
import Error from "../Error/Error";

//Libs
import { onSetPrice, onSetSize, onSetType } from "../../libs/setPropertyPizza";

//React Icons
import { AiFillStar } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

//Styles
import "./pizzaPageItem.scss";

const PizzaPageItem = () => {
    const [dough, setDough] = useState(0);
    
    const [size, setSize] = useState(0);

    const status = useSelector(state => state.pizzaSingle.status);

    const pizzaSingle = useSelector(state => state.pizzaSingle.pizzaSingle);

    const pizzaFilter = useSelector(state => (
        state.cart.pizza.filter(item => item.id === pizzaSingle.id)
    ));

    const countSum  = pizzaFilter.reduce((a, b) => a + b.count, 0);

    const dispatch = useDispatch();

    const onDoughtSelect = (i) => {
        setDough(i);
    }

    const onSizeSelect = (i) => {
        setSize(i);
    }

    const onAddPizza = () => {
        const item = {
            id: pizzaSingle.id,
            image: pizzaSingle.imageUrl,
            name: pizzaSingle.title,
            price: onSetPrice(size, pizzaSingle.price),
            size: onSetSize(size),
            type: onSetType(dough),
            count: 0
        }
        dispatch(addPizza(item))
    }

    const image = <img 
                    className="pizza-page__img" 
                    src={pizzaSingle.imageUrl} 
                    alt={pizzaSingle.title} />;

    const description = pizzaSingle.description === "" 
    ? "Описание товара временно недоступно" 
    :  pizzaSingle.description;

    return ( 
        <>
            {status !== "error"
            ?
                <>
                    <div className="pizza-page__item pizza-page__item--img">
                        {status === "loaded" ? image  : <SkeletonImage/>}
                    </div>
                    <div className="pizza-page__item">
                        {status === "loaded" ? 
                        <div className="pizza-page__info">
                        <div className="pizza-page__title">
                            <h1 className="title">{pizzaSingle.title}</h1>
                            <div className="pizza-page__rating">
                                <AiFillStar size={30} className="pizza-page__icon"/>
                                {`${pizzaSingle.rating}/10`}
                            </div>
                        </div>
                        <div className="pizza-page__description">
                            {description}
                        </div>
                        <div className="pizza__tabs">
                            <ul className="pizza__selection">
                                {pizzaSingle.types.map((item, i) => {
                                    return (
                                        <PropertyItem
                                        key={i} 
                                        onSelect={()=> onDoughtSelect(i)}
                                        title={item} 
                                        className={`pizza__selection-item 
                                        ${dough === i ? "active" : ""}`}
                                        /> 
                                    )
                                })}
                            </ul>
                            <ul className="pizza__selection">
                                {pizzaSingle.sizes.map((item, i) => {
                                    return (
                                        <PropertyItem
                                        key={i} 
                                        onSelect={()=> onSizeSelect(i)}
                                        title={`${item} см`} 
                                        className={`pizza__selection-item 
                                        ${size === i ? "active" : ""}`}
                                        /> 
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="pizza-page__bottom">
                            <div className="pizza-page__price">
                                {`${onSetPrice(size, pizzaSingle.price)} ₽`}
                            </div>
                            <button onClick={onAddPizza} className="pizza-page__add p-10 btn-inverse">
                                <BiPlus size={16} className="pizza-page__add-icon"/>
                                Добавить
                                {countSum !== 0 
                                ? <i className="pizza-page__add-counter">{countSum}</i> 
                                : null} 
                            </button>
                        </div>
                    </div> 
                    : <SkeletonContent/>}
                    </div>
                        </>   
            : <Error/>}
        </>
    )
}
 
export default PizzaPageItem;


