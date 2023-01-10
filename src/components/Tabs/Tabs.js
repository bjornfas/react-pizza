
//Redux
import { useDispatch, useSelector} from "react-redux";
import { filterTabs } from "../../redux/filterSlice";

//Components
import TabsItem from "../TabsItem/TabsItem";

//Styles
import "./tabs.scss";

const Tabs = () => {

    const category = useSelector(state => state.filter.category);

    const dispatch = useDispatch();

    const tabsList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const onSelectTabs = (i) => {
        dispatch(filterTabs(i));
    }

    const result = tabsList.map((item, i) => {
        return (
            <TabsItem 
            key={i} 
            text={item} 
            onSelectTabs={() => onSelectTabs(i)}
            activeClass={category === i ? "active" : ""}
            />
        )
    });

    return ( 
        <ul className="tabs">
            {result}
        </ul>
    )
}
 
export default Tabs;
