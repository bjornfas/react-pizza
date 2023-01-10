
//Styles
import "../Tabs/tabs.scss";

const TabsItem = ({activeClass, text, onSelectTabs}) => {
    return ( 
        <li 
        onClick={onSelectTabs} 
        className={`tabs__tab btn-inverse ${activeClass}`}
        >
            {text}
        </li>
    )
};
export default TabsItem;