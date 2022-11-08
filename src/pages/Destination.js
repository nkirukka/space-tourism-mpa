import '../styles/Destination.css';
import {data} from '../starter-code/data.js';
import { useState } from 'react';

const Destination = () => {
  const [places] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = places[value];

  return (
    <section className='Destination'>
      <img src={images.png} alt={name} />

      <article className='Destination__details'>
        <div>
          {places.map((item, idx) => {
            return <button onClick={()=>{setValue(idx)}}>{ item.name}</button>
          })}
        </div>
        
        <h2>{name}</h2>
        <p>{description}</p>
        
        <article className='Avg-est'>

          {/* Average */}
          <div>
            <p>AVG. DISTANCE</p>
            <span>{distance}</span>
          </div>

          {/* Distance */}
          <div>
            <p>EST. TRAVEL TIME</p>
            <span>{travel}</span>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Destination;