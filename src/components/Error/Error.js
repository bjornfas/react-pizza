
//Styles
import "./error.scss";

const Error = () => {
    return ( 
        <section className="error">
            <h1 className="error__title">
                Сервер не отвечает
            </h1>
            <div className="error__subtitle">
                Попробуйте позже...
            </div>
        </section>
    )
}
 
export default Error;