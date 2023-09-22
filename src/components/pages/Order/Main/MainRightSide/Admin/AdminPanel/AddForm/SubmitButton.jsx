import Button from "../../../../../../../reusable-ui/Button.jsx";
import SubmitMessage from "../EditForm/SubmitMessage.jsx";

// eslint-disable-next-line react/prop-types
export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
