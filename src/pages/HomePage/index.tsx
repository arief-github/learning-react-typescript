import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className="text-center p-5 text-xl">
             <h1 className="text-xl text-slate-900">Welcome to React Tools!</h1>
        
        
            <Link to="products">
                <button> Show All React Products ⭐ </button>
            </Link>
        </div>
    );
}