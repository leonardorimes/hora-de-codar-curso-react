const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2> Detalhes do carro </h2>
        <ul>
            <li>
                Marca: {brand}
            </li>
            <li>
                KM: {km}
            </li>
            <li>
                KM: {color}
            </li>
        </ul>
        {newCar && <p>este carro é novo</p>}
    </div>
  )
}

export default CarDetails