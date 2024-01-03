import './Card.css'

function Card({card = {}, enabled}){

    return(
        <div className='price-card'>
            <p className='title'>{card.title}</p>
            <p className='price'>{card.price}<span className='pricespan'>{card.pricespan}</span></p>
            <hr></hr>
            {/* <p className={enabled ? 'enabled': 'disabled'}>{card.offersOne.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersTwo.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersThree.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersFour.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersFive.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersSix.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersSeven.name}</p>
            <p className={enabled ? 'enabled': 'disabled'}>{card.offersEight.name}</p> */}
            {card.offers.map((offer, index) => (
        <p key={`offer-${index}`} className={offer.enabled ? 'enabled' : 'disabled'}>
          {offer.name}
        </p>
      ))}
            <button className='button'>BUTTON</button>
        </div>
    )
}

export default Card