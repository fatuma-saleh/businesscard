import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

import Card from "./Card";

export default function MyCards(props) {

  const deleteCard = (id) => {
    confirmAlert({
      title: 'Delete Card',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            const headers = {
              headers: { Authorization: `Bearer ${props.currentUser.token}`}
            };
            return axios.delete(`http://localhost:8001/api/cards/${id}`, headers)
            .then(r => {
              console.log(r.data)
              let newCards = props.myCards.filter(card => {
                return card.id !== id;
              });
              props.setMyCards(newCards)
            })
            .catch(e => console.log(e))
          }
        },
        {
          label: 'Cancel',
        }
      ]
    });
  }

  const editCard = (id) => {
    props.setEditCardId(id)
    props.setPage("EditCard")
  }
    

  const myCards = props.myCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        deleteCard={deleteCard}
        editCard={editCard}
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