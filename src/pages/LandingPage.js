import React from "react";
import image from "../Images/Logo.png";
import image2 from "../Images/Landing.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  console.log(`${window.location.origin}/home`);
  return (
    <section className='landing-page'>
      <div className='landing-container'>
        <img src={image} alt='Beauty Hairs' />
        <div className='landing-content'>
          <img src={image2} alt='Bueaty Hairs' />
          <div className='landing-info'>
            <h1>Beauty Hairs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              recusandae debitis numquam. Eveniet illum modi id nulla. Maxime
              laborum, dolorem asperiores atque velit, natus temporibus odit
              nam, accusantium omnis qui!
            </p>
            <button onClick={() => loginWithRedirect()}>
              <Link to='/home'>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
