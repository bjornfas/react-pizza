
//React
import { useState, useCallback } from "react";

//Redux
import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/filterSlice";

//Lodash
import debounce from "lodash.debounce";

//React Icons
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

//Styles
import "./searchInput.scss";

const SearchInput = () => {

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const updateValue = useCallback(
        debounce((value)=> {
            dispatch(filterSearch(value));
        }, 500)
    , [])

    const onChangeValue = (e) => {
        setValue(e.target.value);
        updateValue(e.target.value);
    }
        
    const onSearchClose = () => {
        setValue("");
        dispatch(filterSearch(""));
    }

    return ( 
        <div className="search">
            <label className="search__label" htmlFor="search">
                <CiSearch size={20} className="search__icon"/>
                {value.length > 0 
                ? <VscClose 
                  size={20} 
                  className="search__close"
                  onClick={onSearchClose}
                  /> 
                : null}
                <input
                className="search__input" 
                type="text" 
                name="search" 
                id="search"
                onChange={onChangeValue}
                value={value} 
                placeholder="Поиск пиццы..."
                />
            </label>
        </div>
    )
}
 
export default SearchInput;