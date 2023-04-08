import React from "react";
import Searchbox from "../components/Landing/Searchbox";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function Landing(props) {
  const [backgroundImage, setBackgroundImage] = React.useState(
    "https://images.hdqwalls.com/wallpapers/city-lights-buildings-4k-og.jpg"
  );

  const fetchNewWallpaper = React.useCallback(() => {
    axios
      .request(
        "http://bingw.jasonzeng.dev?resolution=UHD&index=random&w=1000&qlt=100&format=json"
      )
      .then(function (response) {
        console.log(response.data);
        setBackgroundImage(response.data.url);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNewWallpaper();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [fetchNewWallpaper]);

  const handleClick = () => {
    fetchNewWallpaper();
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      <div style={{ display: "flex", margin: "auto", marginTop: "10%" }}>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            margin: "auto",
            marginLeft: 40,
          }}
        >
          <h1
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              backgroundSize: "20px",
              display: "inline-block",
              borderRadius: 10,
              padding: 10,
            }}
          >
            Plan your journey
            <br /> with JOURNI
          </h1>

          <h3
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              display: "inline-block",
              borderRadius: 10,
              padding: 10,
            }}
          >
            Make every trip count. Use JOURNI to pick
            <br /> your destination and create lasting memories!
          </h3>
        </div>
        <div style={{ width: "50%", paddingLeft: 60 }}>
          <Searchbox />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <BsFillArrowLeftSquareFill size={50} onClick={handleClick} />

        <BsFillArrowRightSquareFill size={50} onClick={handleClick} />
      </div>
      {/* <button onClick={handleClick}>Change Wallpaper</button> */}
    </div>
  );
}

export default Landing;
