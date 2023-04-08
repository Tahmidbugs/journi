import React from "react";

import styles from "./desktop1.module.css";
import { FaUserFriends, FaMapMarkedAlt } from "react-icons/fa";
import { TbBusinessplan } from "react-icons/tb";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";

const Features = (props) => {
  return (
    <div>
      <div className={styles["desktop1"]}>
        <div
          className={styles["features"]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <br />
          <h3 style={{marginTop:20}}>Why use Journi</h3>
          <br />
          <br />

          <div className={styles["-frame3"]}>
            <div
              className={styles["-frame62"]}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdExplore size={40} />
            </div>
            <span className={styles["text"]}>
              <span>Explore local cuisine</span>
            </span>
            <span className={styles["text02"]}>
              <span>
                Discover the best local restaurants and foodie hotspots, and
                read reviews from other travelers.
              </span>
            </span>
          </div>
          <div className={styles["-frame2"]}>
            <div
              className={styles["-frame61"]}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BsFillBookmarkCheckFill size={40} />
            </div>
            <span className={styles["text04"]}>
              <span>Book hotels and flights</span>
            </span>
            <span className={styles["text06"]}>
              <span>
                Find the best deals on flights and accommodations for your trip,
                all in one place
              </span>
            </span>
          </div>
          <div className={styles["-frame1"]}>
            <div
              className={styles["-frame62"]}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TbBusinessplan size={40} />
            </div>
            <span className={styles["text08"]}>
              <span>Plan your perfect itinerary</span>
            </span>
            <span className={styles["text10"]}>
              <span>
                Use our itinerary planner to build a day-by-day schedule
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles["-frame6"]}>
            <div
              className={styles["dtra"]}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaMapMarkedAlt size={40} />
            </div>
            <span className={styles["text12"]}>
              <span>Top-rated attractions</span>
            </span>
            <span className={styles["text14"]}>
              <span>
                <span>Browse user reviews and ratings</span>
                <br></br>
                <span> to find the best attractions in any city</span>
              </span>
            </span>
          </div>
          <div className={styles["-frame4"]}>
            <div className={styles["-frame63"]}>
              <div className={styles["akariconspeoplegroup"]}>
                <div className={styles["group"]}>
                  <FaUserFriends size={40} />
                </div>
              </div>
            </div>
            <span className={styles["text19"]}>
              <span>Connect with other travelers</span>
            </span>
            <span className={styles["text21"]}>
              <span>Share your experiences, get recommendations</span>
            </span>
          </div>
          <div className={styles["-frame5"]}>
            <div className={styles["-frame61"]}>
              <div className={styles["akariconspeoplegroup"]}>
                <div className={styles["group"]}>
                  <FaUserFriends size={40} />
                </div>
              </div>
            </div>
            <span className={styles["text23"]}>
              <span>Get expert travel advice</span>
            </span>
            <span className={styles["text25"]}>
              <span>
                Consult our team of travel experts for personalized
                recommendations and insider tips on your destination.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
