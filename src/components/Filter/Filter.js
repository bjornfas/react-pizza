
//Components
import Tabs from "../Tabs/Tabs";
import Sort from "../Sort/Sort";

//Styles
import "./filter.scss";

const Filter = () => {
    return ( 
        <div className="filter">
            <Tabs/>
            <Sort/>
        </div>
    )
}
 
export default Filter;