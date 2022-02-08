import Card from "./Card";

export default function MyCards(props) {
  const myCards = props.myCards.map(card => {
    return (
      <Card
        card={card}
      />
    )
  })
  return (
    <ul>
      {myCards}
    </ul>
  )
}