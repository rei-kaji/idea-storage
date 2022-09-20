import React, { useState } from "react";
import "./AddIdea.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function AddIdea() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [category, setCategory] = useState([]);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div className="addidea">
      <div className="ideacontainer">
        <h2>idea</h2>
        <div className="ideatitle">
          <input
            type="text"
            placeholder="Wite down title."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <h2>body</h2>
        <div className="ideabody">
          <textarea
            placeholder="Write down body."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {/* カテゴリーは複数設定できる */}
        <h2>category</h2>
        <div className="ideacategory">
          <input type="text" placeholder="Add category." />
          {/* <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          /> */}
        </div>
        <button className="addButton" onClick={""}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddIdea;
