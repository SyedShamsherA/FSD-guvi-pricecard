import './cardbackground.css'
import Card from './Card';

function PriceCard(){
    const data = [
        {
            id:1,
            title: "FREE",
            price: "$0",
            pricespan: "/month",
            offers: [
                { name: '✓ Single User', enabled: true },
                { name: '✓ 5GB Storage', enabled: true },
                { name: '✓ Unlimited Public Projects', enabled: true },
                { name: '✓ Community Access', enabled: true },
                { name: '✖ Unlimited Private Projects', enabled: false },
                { name: '✖ Dedicated Phone Support', enabled: false },
                { name: '✖ Free Subdomain', enabled: false },
                { name: '✖ Monthly Status Reports', enabled: false }
              ]
        },
        {
            id:2,
            title: "PLUS",
            price: "$10",
            pricespan: "/month",
            offers: [
                { name: '✓ Single User', enabled: true },
                { name: '✓ 5GB Storage', enabled: true },
                { name: '✓ Unlimited Public Projects', enabled: true },
                { name: '✓ Community Access', enabled: true },
                { name: '✓ Unlimited Private Projects', enabled: true },
                { name: '✓ Dedicated Phone Support', enabled: true },
                { name: '✖ Free Subdomain', enabled: false },
                { name: '✖ Monthly Status Reports', enabled: false }
              ]
        },
        {
            id:3,
            title: "PRO",
            price: "$20",
            pricespan: "/month",
            offers: [
                { name: '✓ Single User', enabled: true },
                { name: '✓ 5GB Storage', enabled: true },
                { name: '✓ Unlimited Public Projects', enabled: true },
                { name: '✓ Community Access', enabled: true },
                { name: '✓ Unlimited Private Projects', enabled: true },
                { name: '✓ Dedicated Phone Support', enabled: true },
                { name: '✓ Free Subdomain', enabled: true },
                { name: '✓ Monthly Status Reports', enabled: true }
              ]
        }
    ]
    return(
        <div className='card-container'>
           {data.map((card) => (
            <Card card={card} key={`card-${card.id}`} />
           ))}
        </div>
    )
}

export default PriceCard;