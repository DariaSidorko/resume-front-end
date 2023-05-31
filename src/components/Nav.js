import { Link } from "react-router-dom";


export default function Nav (){
  return(
    <div className="nav">
      <Link to="/">
        <div className="nav-link">HOME</div>
        </Link> 
      <Link to="/create">
        <div className="nav-link">CREATE</div>
      </Link>
    </div>
  )
}