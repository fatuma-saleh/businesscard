import { Fragment } from "react";

import "./MyCards.scss"

// ** For building card page
const card = {
  first_name: "haoyan",
  last_name: "yu",
  photo: "https://i.imgur.com/Nmx0Qxo.png",
  title: "student",
  organization: "lighthouse-labs",
  phone: "780-655-7545",
  email: "yuhaoyann@gmail.com",
  github: "github",
  linkedin: "linkedin",
  instagram: "instagram"
}

export default function MyCards(props) {
  return (
    <Fragment>
      <div class="card">
        <div class="card_photo">
          <img
            src={card.photo}
            alt="amator"
          />
        </div>
        <div class="card_body">
          <div class="card_content">
            <div class="card_heading">
              <h5 class="card_name">{`${card.first_name} ${card.last_name}`}</h5>
              <p class="card_title">{card.title}</p>
              <p class="card_organization">{card.organization}</p>
            </div>
            <ul class="card_list">
              {/* substitute with real link later */}
              <li class="card_list-itme">
                <a href="phone_link">{card.phone}</a>
              </li>
              <li class="card_list-itme">
                <a href="email_link">{card.email}</a>
              </li>
              <li class="card_list-itme">
                <a href="github_link">{card.github}</a>
              </li>
              <li class="card_list-itme">
                <a href="linkedin_link">{card.linkedin}</a>
              </li>
              <li class="card_list-itme">
                <a href="instagram_link">{card.instagram}</a>
              </li>
            </ul>
            <div class="card_options">
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