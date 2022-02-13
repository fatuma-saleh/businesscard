import logo from "../images/icard-logo-v1.jpg";

export default function MainPage(props) {
  return (
    <section className="main-page">
    <p>This is the main page of the app</p>
    <img className="main-logo" src={logo}></img>
    </section>
  )
}