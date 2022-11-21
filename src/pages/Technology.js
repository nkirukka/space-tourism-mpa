import { useState } from "react";
import { data } from "../starter-code/data";
import '../styles/Technology.css';

const Technology = () => {
  const [places] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = places[value];

  return (
    <section className='Technology'>
      <h2 className='ff-barlow_cond Title'><span>03</span> SPACE LAUNCH 101</h2>
      <div className='Technology__wrapper'>

        <picture>
          <source media="(max-width: 1010px)" srcSet={images.landscape} />
          <source media="(min-width: 1010px)" srcSet={images.portrait} />
          <img src={ images.landscape} alt={name} />
        </picture>        
        <article className='Technology__details'>
          <div className='Technology__buttons'>
            {places.map((item, idx) => {
              return <button
                type='button'
                className='ff-bellefair'
                key={idx}
                onClick={() => { setValue(idx) }}
              >
                {idx+1}
              </button>
            })}
          </div>
    
          <div>
          <small className="ff-barlow_cond">THE TERMINOLOGY...</small>
          <h3 className='ff-bellefair'>{name.toUpperCase()}</h3>
          <p className='ff-barlow Description'>{description}</p>
      
         </div>
        
        </article>

      </div>
    </section>
  );
}

export default Technology