
const PropertyItem = ({onSelect, className, title}) => {
    return ( 
        <li onClick={onSelect}  className={className} >
            {title}
        </li>
    )
}
 
export default PropertyItem;