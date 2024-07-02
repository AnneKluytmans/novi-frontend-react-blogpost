import {Link} from "react-router-dom";
import './NotFound.css';

function NotFound() {
    return (
      <>
        <section className="section--not-found inner-content-container">
            <h2>Oops... This page doesn't exist</h2>
            <p>Take me back to the <Link to="/" className="section--not-found__link">home page</Link>.</p>
        </section>
      </>
    );
}

export default NotFound