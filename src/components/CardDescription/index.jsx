import './styles.css'

const CardDescription = ({ title, price, description }) => (
  <div className="card-description">
    <div className="card-description__Title">
      <p className="card-description__title">{title}</p>
    </div>
    <div className="card-description__descriptionContainer">
      <p className="card-description__description">{description}</p>
    </div>
  </div>

)

export default CardDescription