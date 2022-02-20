import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';

import CardShowCard from './CardShowCard';
import CardShowRegister from './CardShowRegister';

export default function CardShow (props) {

  let { id } = useParams();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [page, setPage] = useState("CardShowCard")
  const [cardShow, setCardShow] = useState({})
    
  useEffect(() => {
    axios.get(`/api/cards/${id}`)
      .then(r => setCardShow(r.data[0]))
      .catch(e => console.log(e))
  }, [id])

  return (
    <div>
      {page === "CardShowCard" && (
        <CardShowCard
          cardShow={cardShow}
          setPage={setPage}
          currentUser={currentUser}
        />
      )}
      {page === "CardShowRegister" && (
        <CardShowRegister
          cardShow={cardShow}
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  )
}