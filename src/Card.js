import Tilt from 'react-tilt';

/**
 * Card Component
 */
function Card({imageUrl,heading,subtitle}){
    return (
        <Tilt className="Tilt card" options={{ max : 25 }} >
            <div className="card-image" >
                <img src={imageUrl} alt="card-image" />
            </div>
            <div className="card-detail">
                <h3>
                    {heading.slice(0,20)}
                </h3>
                <p>
                    {subtitle.slice(0,50)}
                </p>
            </div>
        </Tilt>
        
    );
}

export default Card;