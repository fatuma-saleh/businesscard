import Card from "./Card";

export default function MyCards(props) {

  const myCards = props.myCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <>
    <h2 className="mycards-heading">My Cards</h2>
    <ul>
      {myCards}
    </ul></>
  )
}