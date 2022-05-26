import "./contact.scss"

export default function contact() {
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className = "contact" id="contact">
      <div className="left"></div>
      <div className="right">
          <h2>Get in touch!</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email"/>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
          </form>
      </div>
    </div>
  )
}
