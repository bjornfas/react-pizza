
//Components
import Filter from "../Filter/Filter";
import PizzaList from "../PizzaList/PizzaList";

//Styles
import "./pizza.scss";

const Pizza = () => {
    return ( 
        <section className="pizza">
            <Filter/>
            <PizzaList/>
        </section>
    )
}
 
export default Pizza;