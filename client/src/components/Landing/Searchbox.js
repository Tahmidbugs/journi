import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./landing.css";

function Activity({ activity, onRemove }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "5px 10px",
        borderRadius: 20,
        marginRight: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <span>{activity}</span>
      <button
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          cursor: "pointer",
          marginLeft: 5,
          width: 20,
          fontSize: 10,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: 20,
        }}
        onClick={() => onRemove(activity)}
      >
        &#10005;
      </button>
    </div>
  );
}

function Searchbox(props) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [activities, setActivities] = React.useState(["Restaurants", "Hotel"]);
  const [suggestedActivities, setSuggestedActivities] = React.useState([
    "Beach",
    "Football",
    "Gambling",
    "Bars",
    "Museum",
    "Hiking",
    "Biking",
    "Shopping",
    "Bowling",
    "Dancing",
    "Fishing",
    "Movie",
    "Picnic",
    "Reading",
    "Running",
    "Swimming",
    "Traveling",
    "Video games",
    "Volunteering",
    "Yoga",
    "Board games",
    "Cooking",
    "Crafts",
    "Gardening",
    "Painting",
    "Photography",
    "Sculpture",
    "Singing",
    "Writing",
  ]);

  const [filteredActivities, setFilteredActivities] = React.useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const activity = event.target.value;
      setActivities([...activities, activity]);
      event.target.value = "";
    }
  };

  const handleRemove = (activityToRemove) => {
    setActivities(
      activities.filter((activity) => activity !== activityToRemove)
    );
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const filtered = suggestedActivities.filter((activity) =>
      activity.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredActivities(filtered);
  };

  const handleSuggestionClick = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div
      className="searchbox"
      style={{ color: "whitesmoke", transition: "transform 0.3s ease" }}
    >
      <h3>Pick your city</h3>
      <input
        placeholder="Where to?"
        style={{
          borderRadius: 10,
          borderWidth: 0,
          padding: 5,
          paddingLeft: 10,
        }}
        list="suggested-activities"
      />

      <p>Select date</p>
      <div style={{ borderRadius: 20, marginTop: -20 }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <p>Looking for: </p>
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          style={{
            borderRadius: 10,
            width: "350px",
            padding: 5,

            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10,
            marginTop: -20,
            // marginRight: 10,
          }}
          placeholder="Search for activities; eg: Football/Museum"
          onKeyDown={handleKeyDown}
          list="suggested-activities"
          onChange={handleInputChange}
        ></input>
        <datalist id="suggested-activities">
          {filteredActivities.map((activity) => (
            <option key={activity} value={activity} onClick={handleKeyDown} />
          ))}
        </datalist>
        <div style={{ display: "flex" }}>
          {activities.map((activity) => (
            <Activity
              key={activity}
              activity={activity}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
      <button className="buttoned" style={{ marginTop: 10, padding: 10 }}>
        Search
      </button>
    </div>
  );
}

export default Searchbox;
