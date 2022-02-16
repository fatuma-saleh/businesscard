export default function CardForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.onCancel && <p>Editing Card</p>}
      {!props.onCancel && <p>Creating New Card</p>}
      <label>
        Name:
        <input
          name="fullname"
          type="text"
          required="required"
          defaultValue={props.card.fullname}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        email:
        <input
          name="email"
          type="email"
          defaultValue={props.card.email}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Photo:
        <input
          name="photo"
          type="text"
          defaultValue={props.card.photo}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        title:
        <input
          name="title"
          type="text"
          defaultValue={props.card.title}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          name="company"
          type="text"
          defaultValue={props.card.company}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          name="phone"
          type="tel"
          defaultValue={props.card.phone}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Github:
        <input
          name="github"
          type="text"
          defaultValue={props.card.github}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        LinkedIn:
        <input
          name="linkedin"
          type="text"
          defaultValue={props.card.linkedin}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Facebook:
        <input
          name="facebook"
          type="text"
          defaultValue={props.card.facebook}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Instgram:
        <input
          name="instagram"
          type="text"
          defaultValue={props.card.instagram}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        bio:
        <input
          name="bio"
          type="text"
          defaultValue={props.card.bio}
          onChange={props.handleChange}
        />
      <br />
      </label>
        <input type="submit" value="Submit" />
      <br />
        {props.onCancel &&
          <button onClick={props.onCancel}>Cancel</button>
        }
    </form>
  )
}