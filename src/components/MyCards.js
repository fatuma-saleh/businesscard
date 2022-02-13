import Card from "./Card";

export default function MyCards(props) {

  const deleteCard = (id) => {
    let newCards = props.myCards.filter(card => {
      return card.id !== id;
    });
    props.setMyCards(newCards)
  }
    

  const myCards = props.myCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        currentUser={props.currentUser}
        deleteCard={deleteCard}
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