import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='Home'>
      
      <div className='Space'>
        <div className='Space-inner'>
          <h1 className='ff-barlow_cond'> SO, YOU WANT TO TRAVEL TO <span className='ff-bellefair'>SPACE</span></h1>
          <p className='ff-barlow'>Let's face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we'll give you a truly out of this world experience!</p>
        </div>

        <div className='Explore'>
          <Link to='/destination' className='ff-bellefair'>EXPLORE</Link>
        </div>
      </div>
    </main>
  );
}

export default Home