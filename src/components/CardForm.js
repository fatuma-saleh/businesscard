export default function CardForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input
          name="fullname"
          type="text"
          required="required"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        email:
        <input
          name="email"
          type="email"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Photo:
        <input
          name="photo"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        title:
        <input
          name="title"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          name="company"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          name="phone"
          type="tel"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Github:
        <input
          name="github"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        LinkedIn:
        <input
          name="linkedin"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Facebook:
        <input
          name="facebook"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Instgram:
        <input
          name="instagram"
          type="text"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        bio:
        <input
          name="bio"
          type="text"
          onChange={props.handleChange}
        />
      <br />
      </label>
        <input type="submit" value="Submit" />
    </form>
  )
}