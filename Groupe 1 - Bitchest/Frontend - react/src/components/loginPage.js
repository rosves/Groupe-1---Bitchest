import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./loginPage.scss";
import Logo from "../assets/images/bitchest_logo_mob.png";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Ajoute ici la logique pour la connexion de l'utilisateur
    // Si la connexion réussit, redirige vers le dashboard
    navigate('/dashboard');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    // container global
    <div id="main_container">
      {/* container desk */}
      <div className="container-desk">
        {/* container du login */}
        <div id="container-login">
          <img className="logo" src={Logo} />
          <h2 id="login_main_title">Login</h2>

          <form onSubmit={handleLogin}>
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
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="button_login" type="submit">
              Login
            </button>
          </form>

          <p>
            Don't have an account yet?{" "}
            <button className="button_link" onClick={handleSignupRedirect}>
              Get one!
            </button>
          </p>
        </div>
        {/* containner du login - fin */}
      </div>
      {/* container desk - fin */}
      
      {/* blue part */}
      <div className="blue_part _right">
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

export default LoginForm;
