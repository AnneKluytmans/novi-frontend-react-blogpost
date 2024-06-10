import {Link} from "react-router-dom";
import './NotFound.css';

function NotFound() {
    return (
      <>
        <main className="not-found-page">
            <h2>Oops... This page doesn't exist</h2>
            <p>Take me back to the <Link to="/">home page</Link>.</p>
        </main>
      </>
    );
}

export default NotFound