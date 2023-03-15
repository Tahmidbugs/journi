import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./landing.css";
function Searchbox(props) {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="searchbox">
      <h3>Pick your city</h3>
      <input
        placeholder="Where to?"
        style={{
          borderRadius: 10,
          borderWidth: 0,
          padding: 5,
          paddingLeft: 10,
        }}
      />
      <p>Select date</p>
      <div style={{ borderRadius: 20, marginTop: -20 }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <p>Looking for: </p>
      <div style={{ display: "flex", marginTop: -20 }}>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="check1"
            name="option1"
            value="something"
            checked
          />
          <label class="form-check-label" for="check1">
            Restaurants
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="check2"
            name="option2"
            value="something"
          />
          <label class="form-check-label" for="check2">
            Places
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="check1"
            name="option1"
            value="something"
          />
          <label class="form-check-label" for="check1">
            Events
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="check1"
            name="option1"
            value="something"
          />
          <label class="form-check-label" for="check1">
            Hotels
          </label>
        </div>
      </div>
      <button className="buttoned" style={{ marginTop: 10 }}>
        Search
      </button>
    </div>
  );
}

export default Searchbox;
