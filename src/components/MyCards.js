import { useEffect } from "react";
import Card from "./Card";

export default function MyCards(props) {

  // useEffect(() => {
  //  alert("hi")
  // }, [])

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
    <p>Here is where you can store all of your own contact information.</p>
    <ul>
      {myCards}
    </ul></>
  )
}