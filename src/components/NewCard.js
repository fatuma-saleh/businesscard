import { useState } from "react"
import axios from "axios";

import "./NewCard.scss"

import CardForm from "./CardForm";

export default function NewCard(props) {
  
  const [card, setCard] = useState({})
  
  const handleChange = e => {
    const { name, value } = e.target;
    setCard(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const headers = {
      headers: { Authorization: `Bearer ${props.currentUser.token}`}
    };
    return axios.post("http://localhost:8001/api/cards", { card } , headers)
    .then(r => {
      let newCards = [
        ...props.myCards,
        {
          ...card,
          id: r.data.id,
          isselfcard: true
        }
      ]
      props.setMyCards(newCards)
    })
    .catch(e => console.log(e))
  }

  return (
    <CardForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )

}