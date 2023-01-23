import Card from "./Card";

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
            <Card alt="about" img="img1.png" title="ABOUT US" text="Binoga Trading (PVT) Limited entered the food and beverage industry in 2022 in the Island
              of Sri Lanka, which earned the name of “Pearl of The Indian Ocean”, centuries ago as it
              was the homeland for the best quality spices and world-famous tea. Traditions in growing
              and processing spices and tea have been continuously upgraded over 200 years to ensure
              that our products maintain the acclamation as best in the world."/>
        </div>
      </div>
    </>
  );
}
export default About;
