import './styles.css'

const CardDescription = ({ title, price, description }) => (
  <div className="card-description">
    <div className="card-description__priceTitle">
      <p className="card-description__title">{title}</p>
      <p className="card-description__price">{price}</p>
    </div>
    <div className="card-description__descriptionContainer">
      <p className="card-description__description">{description}</p>
    </div>
    {/* <p className="card-description__title">Colors</p> */}
    {/* <div className="card-description__colors">
      {colorArray.map((el) => <ColorDot color={el} size="20px" />)}
    </div> */}
  </div>

)

export default CardDescription