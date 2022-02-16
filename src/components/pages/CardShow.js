import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';

import Card from '../Card';

export default function CardShow (props) {

  let { id } = useParams();

  const [cardShow, setCardShow] = useState({})
    
  useEffect(() => {
    axios.get(`http://localhost:8001/api/cards/${id}`)
      .then(r => setCardShow(r.data[0]))
      .catch(e => console.log(e))
  }, [id])

  return (
    <div>
      {cardShow && (
        <Card
          key={cardShow.id}
          card={cardShow}
        />
      )}
      {!cardShow && (
        <p>Sorry, cardID does not exist</p>
      )}
    </div>
  )
}