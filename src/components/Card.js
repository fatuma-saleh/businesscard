import "./Card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Card(props) {

  const handleDisplay = e => {
    e.preventDefault();
    props.displayQR(props.card)
  }

  const handleDelete = e => {
    e.preventDefault();
    props.deleteCard(props.card.id)
  }

  const handleEdit = e => {
    e.preventDefault();
    props.editCard(props.card)
  }

  // const generateQrCode = () => {
  //   React.render(
  //     <QRCode value={`showcard/${props.card.id}`} size={128} />
      
  //   );
  // }
  return (
    <article>
      <div className="card">
        {props.card.photo &&
          <div className="card_photo">
            <img
              src={props.card.photo}
              alt="amator"
            />
          </div>
        }
        <div className="card_body">
          <div className="card_content">
            <div className="card_heading">
              {props.card.fullname &&
                <h3 className="card_name">{`${props.card.fullname}`}</h3>
              }
              {props.card.title &&
                <p className="card_title">{props.card.title}</p>
              }
              {props.card.company &&
                <p className="card_title">{props.card.company}</p>
              }
            </div>
            <table className="card_list">
              <tbody> 
                {props.card.phone &&
                  <tr className="card_list-item">
                    <td><FontAwesomeIcon icon={faPhone} /></td>
                    <td><a href={"tel:" + props.card.phone}>{props.card.phone}</a></td>
                  </tr>
                }
                {props.card.email &&
                  <tr className="card_list-item">
                    <td><FontAwesomeIcon icon={faAt} className="icon-at" /></td>
                    <td><a href={"mailto:" + props.card.email}>{props.card.email}</a></td>
                  </tr>
                }
                {props.card.github &&
                <tr className="card_list-item">
                  <td><FontAwesomeIcon icon={faGithub} className="icon-github" /></td>
                  <td><a href={props.card.github}>{props.card.github}</a></td>
                </tr>
                }
                {props.card.linkedin &&
                  <tr className="card_list-item">
                    <td><FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" /></td>
                    <td><a href={props.card.linkedin}>{props.card.linkedin}</a></td>
                  </tr>
                }
                {props.card.facebook &&
                  <tr className="card_list-item">
                    <td><FontAwesomeIcon icon={faFacebook} className="icon-facebook"/></td>
                    <td><a href={props.card.facebook}>{props.card.facebook}</a></td>
                  </tr>
                }
                {props.card.instagram &&
                  <tr className="card_list-item">
                    <td><FontAwesomeIcon icon={faInstagram} className="icon-instagram" /></td>
                    <td><a href={props.card.instagram}>{props.card.instagram}</a></td>
                  </tr>
                }
                {props.card.bio &&
                  <tr className="card_list-item">
                    <td><p>{props.card.bio}</p></td>
                  </tr>
                }
              </tbody>
            </table>
            
            <div className="card_options">
              
                {props.card.isselfcard && 
                <>
                  {/* <button className="display-button" onClick={() => setqrIsVisible(true)} > */}
                  <button className="display-button" onClick={handleDisplay} >
                    {/* <a href={`showcard/${props.card.id}`}>Display QR Code</a> */}
                    {/* { <QRCode value={`showcard/${props.card.id}`} size={128} />} */}
                    {/* <Link to={`/showQR/${props.card.id}`} >Display QR Code</Link> */}
                    Display QR Code
                   </button>
                 {/* {qrIsVisible && <QRCode value={`showcard/${props.card.id}`} size={128} />} */}
                  </>
                }
                
                <div className="card_edit-delete">
                  {props.editCard &&
                    <button className="edit-button" onClick={handleEdit}>
                      <FontAwesomeIcon icon={faPenToSquare} className="icon-edit" />
                    </button>
                  }
                  {props.deleteCard &&
                    <button className="delete-button" onClick={handleDelete}>
                      <FontAwesomeIcon icon={faTrashCan} className="icon-delete" />
                    </button>
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 