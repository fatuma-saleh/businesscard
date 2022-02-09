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
    <ul>
      {myCards}
    </ul>
  )
}