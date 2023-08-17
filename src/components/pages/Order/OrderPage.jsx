import { Link, useParams } from "react-router-dom";
import NavBar from "../Nav/NavBar";

export default function OrderPage() {
  // state
  const {username} = useParams();
  console.log("username: ", username);
  //comportement
  // affichage
  return (
    <div>
      <NavBar />
      <h1>Bonjour {username}</h1>
    <Link to="/">
      <button>Déconnexion</button>
    </Link>
    </div>
  )
}
