import axios from "axios";

import "./Card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { confirmAlert } from 'react-confirm-alert';

export default function Card(props) {

  const handleDelete = e => {
    e.preventDefault();
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
            return axios.delete(`http://localhost:8001/api/cards/${props.card.id}`, headers)
            .then(r => {
              console.log(r.data)
              props.deleteCard(props.card.id)
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
                  <td><FontAwesomeIcon icon={faGithub} /></td>
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
              <button>
              {props.card.isselfcard && <a href="display">Display QR Code</a>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {props.card.isselfcard &&
          <div>
            <button>edit card</button>
          </div>
        }
          <div>
            <button onClick={handleDelete}>delete card</button>
          </div>
      </footer>
    </article>
  )
} 