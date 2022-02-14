import Card from "./Card";

export default function SavedCards(props) {
  const savedCards = props.savedCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <>
    <h2 className="savedcards-heading">Saved Cards</h2>
    <p>Here is where all of your friends' contact information will be stored.</p>
    <ul>
      {savedCards}
    </ul>
    </>
  )
}