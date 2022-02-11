import "./Card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';

// bio: "bio"
// card_id: 2
// company: "company2"
// email: "welid@gmail.com"
// facebook: "facebook2"
// first_name: "Welid"
// fullname: "Welid Semir"
// github: "github2"
// id: 2
// instagram: "instagram2"
// isselfcard: true
// last_name: "Semir"
// linkedln: "linkedin2"
// phone: "647-544-6892"
// photo: "https://i.imgur.com/T2WwVfS.png"
// title: "title2"
// user_id: 2
export default function Card(props) {
  return (
    <article>
      <div className="card">
        <div className="card_photo">
          <img
            src={props.card.photo}
            alt="amator"
          />
        </div>
        <div className="card_body">
          <div className="card_content">
            <div className="card_heading">
              <h3 className="card_name">{`${props.card.fullname}`}</h3>
              <p className="card_title">{props.card.title}</p>
              <p className="card_organization">{props.card.company}</p>
            </div>
            <ul className="card_list">
              <li className="card_list-item">
                <FontAwesomeIcon icon={faPhone} />
                <a href={"tel:" + props.card.phone}>{props.card.phone}</a>
              </li>
              <li className="card_list-item">
                <a href={"mailto:" + props.card.email}>{props.card.email}</a>
              </li>
              <li className="card_list-item">
                <a href={props.card.github}>{props.card.github}</a>
              </li>
              <li className="card_list-item">
                <a href={props.card.linkedin}>{props.card.linkedin}</a>
              </li>
              <li className="card_list-item">
                <a href={props.card.facebook}>{props.card.facebook}</a>
              </li>
              <li className="card_list-item">
                <a href={props.card.facebook}>{props.card.instagram}</a>
              </li>
            </ul>
            <table className="card_list">
              <tr className="card_list-item">
                <td><FontAwesomeIcon icon={faPhone} /></td>
                <td><a href={"tel:" + props.card.phone}>{props.card.phone}</a></td>
              </tr>
              <tr className="card_list-item">
                <td><FontAwesomeIcon icon={faAt} /></td>
                <td><a href={"mailto:" + props.card.email}>{props.card.email}</a></td>
              </tr>
              <tr className="card_list-item">
                <td><FontAwesomeIcon icon={"fa-brands fa-github"} /></td>
                <td><a href={props.card.github}>{props.card.github}</a></td>
              </tr>
            </table>
            <div className="card_options">
              {props.card.isselfcard && <a href="display">Display QR Code</a>}
              {!props.card.isselfcard && <a href="save">Save Card</a>}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 