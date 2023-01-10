
//React
import { useEffect, useState } from "react";

//Redux
import { useSelector } from "react-redux";

const useUrl = () => {

    const [url, setUrl] = useState("");
    
    const _BaseUrl = "https://63b40011ea89e3e3db535f10.mockapi.io/pizza";

    const category = useSelector(state => state.filter.category);
    const sort = useSelector(state => state.filter.sort);
    const search = useSelector(state => state.filter.search);

    const categoryProperty = category > 0 ? `category=${category}` : '';
    const sortProperty = `&sortBy=${sort}&order=desc`;
    const searchProperty = search ? `&title=${search}` : "";

    const mainUrl = `${_BaseUrl}?${categoryProperty}${sortProperty}${searchProperty}`;

    useEffect(()=> { 
        setUrl(mainUrl);
    }, [category, sort, search])

    return {
        url,
        baseUrl: _BaseUrl
    }
    
}
 
export default useUrl;