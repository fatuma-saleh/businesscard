import "./MyCards.scss"

import Card from "./Card";


export default function MyCards(props) {
  return (
    <Card
      card={props.myCards[0]}
    />
  )
}