
//React
import { useState, useEffect, useRef } from "react";

//Redux
import { useDispatch} from "react-redux";
import { filterSort } from "../../redux/filterSlice";

//Components
import SortItem from "../SortItem/SortItem";

//React Icon
import { MdArrowDropUp } from "react-icons/md";

//Styles
import "./sort.scss";

const Sort = () => {

    const [sortValue, setSortValue] = useState(0);

    const [sortActiveModal, setSortActiveModal] = useState(false);

    const sortRef = useRef();

    const dispatch = useDispatch();

    const sortList = [
        {
            name: "популярности",
            property: "rating"
        },
        {
            name: "цене",
            property: "price"
        },
        {
            name: "алфавиту",
            property: "title"
        },
    ];

    useEffect(()=> {

        const handleClickOutside = (e) => {
            if (!e.composedPath().includes(sortRef.current)) {
                setSortActiveModal(false);
            }
        }

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        }

    }, [])
    
    const onOpenModal = () => {
        setSortActiveModal(!sortActiveModal);
    }

    const onSelectSort = (i, property) => {
        setSortValue(i);
        dispatch(filterSort(property));
        setSortActiveModal(false);
    }

    const sortIconStyle = sortActiveModal 
    ? {transform: "rotate(180deg) translateY(50%)"} 
    : null;
    
    const sortModalClass = `sort__modal ${sortActiveModal?"d-block":"d-none"}`;

    const result = sortList.map((item, i)=> {
        return (
           <SortItem
           key={i}
           text={item.name}
           onSelectSort={() => onSelectSort(i, item.property)}
           activeClass={sortValue === i ? "active" : ""}
           /> 
        )
    });

    return ( 
        <div className="sort" ref={sortRef}>
            <MdArrowDropUp 
            size={30} 
            className="sort__icon" 
            style={sortIconStyle}
            />
            Сортировка по: 
            <span className="sort__value" onClick={onOpenModal}>
                {sortList[sortValue].name}
            </span>
            <div className={sortModalClass}>
                <ul>
                    {result}
                </ul>
            </div>
        </div>
    )
}
 
export default Sort;