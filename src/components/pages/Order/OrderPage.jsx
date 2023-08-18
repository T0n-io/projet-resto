import NavBar from "../Nav/NavBar";
import Main from "../Main/Main";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const { username } = useParams();
  console.log("navusername: ", username);
  // affichage
  return (
    <div>
      <NavBar username={username} />
      <Main />
    </div>
  );
}

