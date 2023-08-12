import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  // state
  const {username} = useParams();
  console.log("username: ", username);
  //comportement
  // affichage
  return (
    <div>
      <h1>Bonjour {username}</h1>
    <Link to="/">
      <button>Déconnexion</button>
    </Link>
    </div>
  )
}
