import React from "react";

// core components
import Video from "components/Video/Video.js";
import Cards from '../components/Cards/CartoesVideo'
import CardsMobile from '../components/Cards/CartoesVideoMobile'

// sections for this page/view

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <Video />
        <div style={{ marginTop: "50px" }} className="main">


          <div className="desktopCards">

            <Cards />
          </div>

          <div style={{ display: 'none' }} className="mobileCards">
            <CardsMobile />
          </div>
        </div>
      </div>
    </>
  );
}
