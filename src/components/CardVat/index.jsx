import './styles.css'

const CardVat = ({ price }) => (
    <div  className="card-wrap">
      <p className="card-wrap__price"><strong>{price}$</strong> (IVA inclusa)</p>
    </div>


)

export default CardVat