import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="empty">
      <h2>Page not found</h2>
      <p>
        That page doesn't exist. <Link to="/">Go back home</Link>
      </p>
    </div>
  );
}

export default NotFound;
