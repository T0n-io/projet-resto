import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // affichage

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}


// 4 méthodes pour ajouter du style à un composants
// 1. inline style
// Pour rajouter du style a un niveau local très rapipement, pour faire des tests
// style={{ backgroundColor: "red" }}
// 2. object style
// 3. css module (avec className)
// 4. global style (index.css)
// 5. styled-components