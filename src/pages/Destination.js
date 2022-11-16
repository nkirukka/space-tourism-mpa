import '../styles/Destination.css';
import {data} from '../starter-code/data.js';
import { useState } from 'react';

const Destination = () => {
  const [places] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(null);

  const {
    name,
    images,
    description,
    distance,
    travel } = places[value];
  
    const btns = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
    ]

  return (
    <section className='Destination'>
      <div className='Destination__wrapper'>
        <div className='Planets'>
          <h2 className='ff-barlow_cond'><span>01</span> PICK YOUR DESTINATION</h2>
          <img src={images.png} alt={name} title={name} />
        </div>
      
        <article className='Destination__details'>
          <div className='Destination__buttons'>
            {places.map((item, idx) => {
              return <button
                type='button'
                className={`ff-barlow_cond ${active === idx ? 'active' : null}`}
                key={Math.random()}
                onClick={() => { setValue(idx); setActive(btns[idx].id) }}
              >
                {item.name.toUpperCase()}
              </button>
            })}
          </div>
      
          <h3 className='ff-bellefair'>{name.toUpperCase()}</h3>
          <p className='ff-barlow Description'>{description}</p>
        
          <article className='Avg-est'>

            {/* Average */}
            <div>
              <p className='ff-barlow_cond'>AVG. DISTANCE</p>
              <span className='ff-bellefair'>{distance}</span>
            </div>

            {/* Distance */}
            <div>
              <p className='ff-barlow_cond'>EST. TRAVEL TIME</p>
              <span className='ff-bellefair'>{travel}</span>
            </div>
          </article>
          
        </article>

      </div>
    </section>
  );
}

export default Destination;