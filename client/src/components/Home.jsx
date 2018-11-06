import React from 'react';
import HomeDetail from './HomeDetail';

const createRandomNum = () => Math.floor(Math.random() * 20) + 1;

const Home = ({ home, showPopup, toggleContent, isOddLen, isLastCell }) => {
  const backgroundImg = `https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_${createRandomNum()}.jpg`;
  return (
    <div
      className="home-main-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="home-inner-container">
        <div className="home-contents">
          <HomeDetail
            home={home}
            showPopup={showPopup}
            toggleContent={toggleContent}
            backgroundImg={backgroundImg}
            isLastCell={isLastCell}
            isOddLen={isOddLen}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
