import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../starter-code/assets/shared/logo.svg'
import closeIcon from '../starter-code/assets/shared/icon-close.svg'
import hamburger from '../starter-code/assets/shared/icon-hamburger.svg'
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        {
            id: '00',
            name: 'Home',
            path: '/'
        },
        {
            id: '01',
            name: 'Destination',
            path: '/destination'
        },
        {
            id: '02',
            name: 'Crew',
            path: '/crew'
        },
        {
            id: '03',
            name: 'Technology',
            path: '/technology'
        }
    ];

    const handleClick= () => { setIsOpen(true) };
    return (
        //   If the homepage does that weird shit where its active alongside another active nav link, then move it to its own div
        <div className="Navbar">
            {/* Nav Logo */}
            <section className="Logo-container">
                <img src={logo} alt='nav logo' />
            </section>
            
            <button className="Hamburger"
                onClick={handleClick}>
                <img src={hamburger} alt='open' />
            </button>
            <nav className={`Nav ${isOpen ? 'active' : null}`}>
                <div className={`Nav-group ${isOpen ? 'active' : null}`}>
                    <button className="Close"
                        onClick={() => { setIsOpen(false) }}>
                        <img src={closeIcon} alt="close" /></button>
                    <ul>
                        {navItems.map((data) => {
                            return <li key={data.path}
                                onClick={()=>{setIsOpen(false)}}
                                className="ff-barlow_cond" >
                                <span className="ff-barlow_cond">{data.id}</span>
                                <NavLink
                                    to={data.path}
                                    className={({ isActive }) => (isActive ? 'Active-nav' : null)}
                                >{data.name}</NavLink>
                            </li>
                        })}
              
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;