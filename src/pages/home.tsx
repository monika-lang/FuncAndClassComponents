import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleButton = ()=>{
        // navigate('/profile');
        // navigate('/profile', {replace: true});
        navigate('/profile', {state:{fromLogin:true}});
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButton}>Next page</button>

            <h1 className="text-4xl font-bold">Site map</h1>
            <hr className="border-2 border-blue-500"/>
            <ul className="text-blue-600 text-2xl underline">
                <li><Link className="hover:text-blue-800" to="/clicker">Clicker Page</Link></li>
                <li><Link className="hover:text-blue-800" to="/timer">Timer Page</Link></li>
                <li><Link className="hover:text-blue-800" to="/local-storage">Local Storage page</Link></li>
                <li><Link className="hover:text-blue-800" to="/focus-field">Focus Field Page</Link></li>
                <li><Link className="hover:text-blue-800" to="/auto-image-slider">Auto image slider</Link></li>
            </ul>
        </div>

    )
}
export default HomePage;