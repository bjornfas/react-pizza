
//Styles
import "../Sort/sort.scss";

const SortItem = ({text, activeClass, onSelectSort}) => {
    return ( 
        <li onClick={onSelectSort} className={`sort__item ${activeClass}`}>
            {text}
        </li>
    )
}
 
export default SortItem;