import "./QR.scss";
import { useParams } from "react-router-dom";
import MyCards from "./MyCards";
import { Link } from "react-router-dom";
const QRCode = require("qrcode.react");
export default function QR(props) {
  let { id } = useParams();

  return (
    <>
      <div>
        <QRCode value={`http://localhost:3000/showcard/${id}`} size={328} />
      </div>
      <Link to={`/`}>Back</Link>
      
    </>
    // <article>
    //   <div className="card">
    //     <div className="card_photo">
    //       <img
    //         src={props.card.photo}
    //         alt="amator"
    //       />
    //     </div>
    //     <div className="card_body">
    //       <div className="card_content">
    //         <div className="card_heading">
    //           <h5 className="card_name">{`${props.card.fullname}`}</h5>
    //           <p className="card_title">{props.card.title}</p>
    //           <p className="card_organization">{props.card.company}</p>
    //         </div>
    //         <ul className="card_list">
    //           <li className="card_list-itme">
    //             <a href={"tel:" + props.card.phone}>{props.card.phone}</a>
    //           </li>
    //           <li className="card_list-itme">
    //             <a href={"mailto:" + props.card.email}>{props.card.email}</a>
    //           </li>
    //           <li className="card_list-itme">
    //             <a href={props.card.github}>{props.card.github}</a>
    //           </li>
    //           <li className="card_list-itme">
    //             <a href={props.card.linkedin}>{props.card.linkedin}</a>
    //           </li>
    //           <li className="card_list-itme">
    //             <a href={props.card.facebook}>{props.card.facebook}</a>
    //           </li>
    //           <li className="card_list-itme">
    //             <a href={props.card.facebook}>{props.card.instagram}</a>
    //           </li>
    //         </ul>
    //         <div className="card_options">
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <footer>
    //     <a href="save">save card</a>
    //     </footer>
    // </article>
  );
}
