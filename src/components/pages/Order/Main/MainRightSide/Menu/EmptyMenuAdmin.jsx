export default function EmptyMenuAdmin( {onReset} ) {
  return (
    <div>
        <span>Pas de produit</span>
        <button onClick={onReset}>Générer de nouveaux produits</button>
      </div>
  )
}
