import React from "react";
import "./LandingCss/Landingbodycss.css";

const Landingbody = () => {
  return (
    <div className="lanbody">
      <div className="lanbody_head">
        <ul>
          <li className="titleon1">THE ORIGIN LETTER</li>
          <li className="titleon2">Explore Your Curiosity</li>
          <li className="titleon3">
            Deep dives on human potential, lifestyle design, entrepreneurship &
            businesses.
          </li>
        </ul>
      </div>

      <div className="lanbody_body">
        <div className="container1">
          <div className="landbodycontent">
            <p className="bdparahead">
              Welcome to The Origin Letter,
            </p>
            <p className="bodypara1">
              Your gateway to endless possibilities. This platform is designed
              for those who seek to explore, create, and connect through
              insightful and transformative content.
            </p>
          </div>
          <div className="landbodyimage1">
            <img className="imagecont1"
              src="/cont1image.jpg"
              alt="Descriptive Alt Text"
            />
          </div>
        </div>
        <div className="container2">
          <div className="img2">
            <img
              src="/con2image.jpg"
              alt="Descriptive Alt Text"
            />
          </div>
          <div className="para">
            <p className="bodypara2">
              Dive into a wealth of knowledge, share your unique perspectives,
              and join a community of curious minds. With The Origin Letter, you
              can read a wide range of articles that challenge your thinking and
              inspire personal growth, create and share your own insights and
              stories, and connect with like-minded individuals who are
              passionate about exploring new ideas and expanding their horizons.
            </p>
            <p className="bodypara3">
              Why choose The Origin Letter? Because here, we believe in the
              power of curiosity and the endless potential of human thought.
              Whether you’re looking to learn, share, or simply be inspired, The
              Origin Letter is the place to start your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingbody;