import { Fragment } from "react";

import "./MyCards.scss"

// ** For building card page
// const card = {
//   first_name: "haoyan",
//   last_name: "yu",
//   fullname: "haoyan yu",
//   photo: "https://i.imgur.com/Nmx0Qxo.png",
//   title: "student",
//   organization: "lighthouse-labs",
//   phone: "780-655-7545",
//   email: "yuhaoyann@gmail.com",
//   github: "github",
//   linkedin: "linkedin",
//   instagram: "instagram"
// }

export default function MyCards(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card_photo">
          <img
            src={props.card[0].photo}
            alt="amator"
          />
        </div>
        <div className="card_body">
          <div className="card_content">
            <div className="card_heading">
              <h5 className="card_name">{`${props.card[0].fullname}`}</h5>
              <p className="card_title">{props.card[0].title}</p>
              <p className="card_organization">{props.card[0].organization}</p>
            </div>
            <ul className="card_list">
              {/* substitute with real link later */}
              <li className="card_list-itme">
                <a href="phone_link">{props.card[0].phone}</a>
              </li>
              <li className="card_list-itme">
                <a href="email_link">{props.card[0].email}</a>
              </li>
              <li className="card_list-itme">
                <a href="github_link">{props.card[0].github}</a>
              </li>
              <li className="card_list-itme">
                <a href="linkedin_link">{props.card[0].linkedin}</a>
              </li>
              <li className="card_list-itme">
                <a href="instagram_link">{props.card[0].instagram}</a>
              </li>
            </ul>
            <div className="card_options">
              <a href="display">display QR code</a>
              <br />
              <a href="save">save card</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}