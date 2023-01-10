
//React
import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { pizzaFetchingAll } from "../../redux/pizzaSlice";

//Components
import PizzaItem from "../PizzaItem/PizzaItem";
import Error from "../Error/Error";

//Hooks
import useUrl from "../../hooks/useUrl";

//Libs
import Skeleton from "../../libs/Skeleton";

//Styles
import "./pizzaList.scss";

const PizzaList = () => {

    const pizzaList = useSelector(state => state.pizza.pizzaList);

    const status = useSelector(state => state.pizza.status);
    
    const dispatch = useDispatch();

    const {url} = useUrl();

    useEffect(() => {
        if (url !== "") {
            dispatch(pizzaFetchingAll(url));
        }
    }, [url])

    const skeleton = [...new Array(8)].map((_, i) => {
        return (
            <div className="pizza__item" key={i}>
                <Skeleton/>
            </div>
        )
    })

    const result = pizzaList.length > 0 
    ?
        pizzaList.map(item => {
            return (
                <PizzaItem 
                key={item.id}
                id={item.id} 
                image={item.imageUrl} 
                price={item.price}
                name={item.title}
                doughList={item.types}
                sizeList={item.sizes}
                />
            )
        })
    :   "Результатов не найдено";
    
    return ( 
        <>
            {status !== "error" 
            ?
                <>
                    <h1 className="pizza__title title">Все пиццы</h1>
                    <div className="pizza__list">
                        {status === "loading" ? skeleton : result}
                    </div>
                </>

            : <Error/> }
        </>
    )
}
 
export default PizzaList;