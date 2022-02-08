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
    <ul>
      {savedCards}
    </ul>
  )
}