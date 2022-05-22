import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Graphic Design</li>
        <li>Websites</li>
        <li>Mobile App</li>
        <li>Miscellaneous</li>
      </ul>
      <div className="container"></div>
        <div className="item">
          <img src="" alt="" />
          <h3>Conjugation App</h3>
        </div>
    </div>
  )
}
