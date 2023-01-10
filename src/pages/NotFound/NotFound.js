
//Router
import { Link } from "react-router-dom";

//Styles
import "./notFound.scss";

const NotFound = () => {
    return ( 
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <div className="not-found__subtitle">
                    Страница не найдена <br />
                    Пожалуйста перейдите на 
                    <Link to="/" className="not-found__link"> главную страницу</Link>
                </div>
            </div>
        </section>
    )
}
 
export default NotFound;