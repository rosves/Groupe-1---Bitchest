import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginPage.scss";
import Logo from "../assets/images/bitchest_logo_mob.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOver18, setIsOver18] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!isOver18) {
      alert('You must be over 18 to sign up.');
      return;
    }
    // Ajoute ici la logique pour la création de compte de l'utilisateur
    // Si la création de compte réussit, redirige vers le dashboard
    navigate('/dashboard');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    // container global
    <div id="main_container" className="right">
     {/* container desk */}
    <div className="container-desk">

     {/* container du login */}
    <div id="container-login">
      <div className="header">
        <button className="button_link" onClick={handleLoginRedirect}>
          <FontAwesomeIcon className="arrow_left" icon={faChevronLeft} />
        </button>
        <img className="logo logo_sign_up" src={Logo} />
      </div>
      <h2 id="login_main_title">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <input 
            placeholder="Username" 
            type="name" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            placeholder="Email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            placeholder="Password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            placeholder="Confirm password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <label className="checkbox_container">
            <input 
              type="checkbox" 
              checked={isOver18} 
              onChange={(e) => setIsOver18(e.target.checked)} 
            /> 
            <p className="age_testament">I confirm that I am over 18.</p>
            <span className="checkmark"></span>
          </label>
        </div>
        <button className="button_login" type="submit">
          Sign Up
        </button>
      </form>
    </div>
    {/* containner du login - fin */}
    </div>
    {/* container desk - fin */}

    {/* blue part */}
    <div className="blue_part">
      <img className="logo_blue" src={Logo} />
      <h1>Welcome to BitChest !</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
        turpis imperdiet odio egestas consectetur. Suspendisse felis enim,
        pretium in nisi sed, vulputate interdum neque. Ut pharetra libero
        odio. Integer blandit eleifend molestie. Curabitur commodo, nibh
        lobortis faucibus maximus, nibh arcu laoreet orci, euismod aliquam sem
        libero sit amet urna. Aliquam porta quam eget risus aliquet, in
        gravida lectus pharetra.
      </p>
    </div>
    {/* blue part - fin */}
    </div>
    // container global - fin
  );
};

export default SignUpForm;
