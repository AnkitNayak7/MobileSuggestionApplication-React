import React, { useState } from "react";
import "./styles.css";

var mobileList = ["Apple", "Samsung", "OnePlus", "Realme"];

var mobileDescription = {
  Apple: [
    {
      mobileName: "Apple iPhone 14 Pro",
      Price: "₹ 1,29,900",
      Rating: "9.4"
    },
    {
      mobileName: "iPhone 14",
      Price: "₹ 75,990",
      Rating: "9.0"
    },
    {
      mobileName: "iPhone 13 Pro Max",
      Price: "₹ 1,27,899",
      Rating: "9.3"
    },
    {
      mobileName: "iPhone 13",
      Price: "₹ 62,999",
      Rating: "9.1"
    }
  ],
  Samsung: [
    {
      mobileName: "Samsung Galaxy XCover 6 Pro",
      Price: "₹ 2,20,990",
      Rating: "9.8"
    },
    {
      mobileName: "Samsung Galaxy Z Fold 4",
      Price: "₹ 1,44,999",
      Rating: "9.5"
    },
    {
      mobileName: "Samsung Galaxy S22 Ultra",
      Price: "₹ 93,999",
      Rating: "9.5"
    }
  ],
  OnePlus: [
    {
      mobileName: "OnePlus 10T 5G",
      Price: "₹ 49.999",
      Rating: "8.5"
    },
    {
      mobileName: "OnePlus Nord 2T 5G",
      Price: "₹ 28,900",
      Rating: "8.2"
    },
    {
      mobileName: "OnePlus Nord CE 2 Lite 5G",
      Price: "₹ 16,399",
      Rating: "7.8"
    }
  ],
  Realme: [
    {
      mobileName: "Realme GT 2 Pro",
      Price: "₹ 49,999",
      Rating: "9.2"
    },
    {
      mobileName: "Realme 9 Pro+ 5G",
      Price: "₹ 24,999",
      Rating: "9"
    },
    {
      mobileName: "Realme GT 5G",
      Price: "₹ 37,999",
      Rating: "8.9"
    }
  ]
};

export default function App() {
  const [userSelectedMobile, setSelectedMobile] = useState("Apple");

  function mobileClickHandler(event) {
    var selectedMobile = event;
    setSelectedMobile(selectedMobile);
  }

  return (
    <div className="App">
      <h1>📱 Mobile Suggestion Application</h1>
      <p
        style={{
          fontSize: "smaller"
        }}
      >
        Checkout Top Rated mobile of 2022
      </p>

      <div>
        {mobileList.map(function (item) {
          return (
            <button
              onClick={() => mobileClickHandler(item)}
              key={item}
              style={{
                cursor: "pointer",
                background: "rgb(229, 231, 235)",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid black",
                margin: "1rem 0.5rem",
                fontWeight: "bold"
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        {/* mobileDescription[userSelectedMobile].map(function(item){
        return ()
      }) */}
        <ul
          style={{
            display: "block",
            listStyleType: "disc",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            paddingInlineStart: "0px",
            textAlign: "left"
          }}
        >
          {mobileDescription[userSelectedMobile].map(function (item) {
            return (
              <li
                style={{
                  listStyle: "none",
                  cursor: "pointer",
                  background: "rgb(229, 231, 235)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  border: "1px solid black",
                  margin: "1rem 0rem",
                  width: "70%"
                }}
              >
                <div>
                  {" "}
                  <b>Mobile:</b> {item["mobileName"]}{" "}
                </div>
                <div>
                  {" "}
                  <b>Price:</b> {item["Price"]}
                </div>
                <div>
                  {" "}
                  <b>Rating:</b> {item["Rating"]}⭐
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
