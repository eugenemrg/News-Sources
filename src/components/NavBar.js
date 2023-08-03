import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {

return (
    <div className="nav">
        <ul>
            <li><Link to="/home" >NS</Link></li>
            <li><Link to="/business" >Business</Link></li>
            <li><Link to="/health" >Health</Link></li>
            <li><Link to="/entertainment" >Entertainment</Link></li>
            <li><Link to="/science" >Science</Link></li>
            <li><Link to="/sports" >Sports</Link></li>
            <li><Link to="/technology" >Technology</Link></li>
            <li><Link to="/general" >General</Link></li>

        </ul>
    </div>
)
}

export default Navbar;
