
//React
import { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/cartSlice";

//Router
import {Link} from "react-router-dom";

//Components
import PropertyItem from "../PropertyItem/PropertyItem";

//Libs
import { onSetPrice, onSetSize, onSetType } from "../../libs/setPropertyPizza";

//React Icons
import {BiPlus} from "react-icons/bi";

//Styles
import "./pizzaItem.scss";

const PizzaItem = ({id, image, name, price, doughList, sizeList}) => {

    const [dough, setDough] = useState(0);
    
    const [size, setSize] = useState(0);

    const pizzaFilter = useSelector(state => state.cart.pizza.filter(item => item.id === id));

    const countSum  = pizzaFilter.reduce((a, b) => a + b.count, 0);

    const dispatch = useDispatch();

    const onDoughtSelect = (i) => {
        setDough(i);
    }

    const onSizeSelect = (i) => {
        setSize(i);
    }

    const doughtResult = doughList.map((item, i) => {
        return (
            <PropertyItem
            key={i} 
            onSelect={()=> onDoughtSelect(i)}
            title={item} 
            className={`pizza__selection-item ${dough === i ? "active" : ""}`}
            /> 
        )
    });

    const sizeResult = sizeList.map((item, i) => {
        return (
            <PropertyItem
            key={i} 
            onSelect={()=> onSizeSelect(i)}
            title={`${item} см`} 
            className={`pizza__selection-item ${size === i ? "active" : ""}`}
            /> 
        )
    });
    

    const onAddPizza = () => {
        const item = {
            id,
            image,
            name,
            price: onSetPrice(size, price),
            size: onSetSize(size),
            type: onSetType(dough),
            count: 0
        }
        dispatch(addPizza(item))
    }

    return ( 
        <div className="pizza__item">
            <Link className="pizza__link" to={`pizza/${id}`}>
                <img src={image} alt={name} className="pizza__img"/>
                <div className="pizza__name">
                    {name}
                </div>
            </Link>
            <div className="pizza__tabs">
                <ul className="pizza__selection">
                    {doughtResult}
                </ul>
                <ul className="pizza__selection">
                    {sizeResult}
                </ul>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">
                    {onSetPrice(size, price)} ₽
                </div>
                <button 
                onClick={onAddPizza} 
                className="pizza__add p-10 btn-inverse"
                >
                    <BiPlus size={16} className="pizza__add-icon"/>
                    Добавить 
                    {countSum !== 0 
                    ? <i className="pizza__add-counter">{countSum}</i> 
                    : null}
                </button>
            </div>
        </div>
    )
}
 
export default PizzaItem;