export default function CardForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="card-form">
      {props.onCancel && <p>Editing Card</p>}
      {!props.onCancel && <p>Creating New Card</p>}
      <table>
        <tr>
          <td>Name</td>
          <td>
            <label>
              <input
                name="fullname"
                type="text"
                required="required"
                onChange={props.handleChange}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <label>
              <input
                name="email"
                type="email"
                onChange={props.handleChange}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>Photo</td>
          <td>
            <label>
              <input
                name="photo"
                type="text"
                onChange={props.handleChange}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            <label>
              <input
                name="title"
                type="text"
                onChange={props.handleChange}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>Company</td>
          <td>
            <label>
              <input
                name="company"
                type="text"
                onChange={props.handleChange}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>
            <label>
              <input
                name="phone"
                type="tel"
                onChange={props.handleChange}
              />
            </label>
        </td>
        </tr>
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
      </table>
        <input type="submit" value="Submit" />
      <br />
        {props.onCancel &&
          <button onClick={props.onCancel}>Cancel</button>
        }
    </form>
  )
}