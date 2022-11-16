import { useState } from "react";
import '../styles/Crew.css';
import { data } from "../starter-code/data";

const Crew = () => {
  const [people] = useState(data.crew);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(null);

  const {
    name,
    images,
    bio,
    role } = people[value];

  const btns = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
  ]
  return (
    <section className='Crew'>
      <div className='Crew__wrapper'>
        <div className='People'>
          <h2 className='ff-barlow_cond'><span>02</span> MEET YOUR CREW</h2>
          <img
            src={images.png}
            alt={name}
            title={name}
            className='Crew__img'
          />
        </div>
    
        <article className='Crew__details'>
          <div className='Crew__buttons'>
            {people.map((item, idx) => {
              return <button
                type='button'
                className={`ff-barlow_cond ${active === idx ? 'active' : null}`}
                key={Math.random()}
                onClick={() => { setValue(idx); setActive(btns[idx].id) }}
              >
              </button>
            })}
          </div>
    
          <div>
            <p className="ff-bellefair Role">{role.toUpperCase()}</p>
            <h3 className='ff-bellefair'>{name.toUpperCase()}</h3>
            <p className='ff-barlow Bio'>{bio}</p>
          </div>
        
        </article>

      </div>
    </section>
  );
}

export default Crew