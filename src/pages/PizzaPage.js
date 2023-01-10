
//React
import { useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";
import { pizzaFetchingSingle } from "../redux/pizzaSingleSlice";

import useUrl from "../hooks/useUrl";

//Router
import {useParams} from "react-router-dom";

//Components
import PizzaPageItem from "../components/PizzaPageItem/PizzaPageItem";

const PizzaPage = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {baseUrl} = useUrl();

    const urlSingle = `${baseUrl}/${id}`;

    useEffect(() => {
        dispatch(pizzaFetchingSingle(urlSingle));
    }, [])

    return ( 
        <section className="pizza-page">
            <div className="pizza-page__wrapper">
                <PizzaPageItem/>
            </div>
        </section>
    )
}
 
export default PizzaPage;