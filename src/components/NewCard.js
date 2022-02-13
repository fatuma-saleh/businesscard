import { useState } from "react"
import "./NewCard.scss"
import axios from "axios";

// fullname,
// email,
// photo,
// title,
// company,
// phone,
// github,
// linkedin,
// facebook,
// instagram,
// bio,

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
    axios.post("http://localhost:8001/api/cards", { card } , headers)
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="fullname"
          type="text"
          required="required"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        email:
        <input
          name="email"
          type="email"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Photo:
        <input
          name="photo"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        title:
        <input
          name="title"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          name="company"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          name="phone"
          type="tel"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Github:
        <input
          name="github"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        LinkedIn:
        <input
          name="linkedin"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Facebook:
        <input
          name="facebook"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Instgram:
        <input
          name="instagram"
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        bio:
        <input
          name="bio"
          type="text"
          onChange={handleChange}
        />
      <br />
      </label>
        <input type="submit" value="Submit" />
    </form>
  )

}