import React from "react";
import search from "../assets/search.png";
import { useRef } from "react";
import { useUsersList } from "./store/store";

export default function Search() {
    const { itemsFetch } = useUsersList((state) => ({
        itemsFetch: state.fetchItems,
       
      }));
    const inputRef = useRef("");
    const searchStart = ()=>{
        itemsFetch(inputRef.current.value)
    }
  return (
    <div className="searchMainWrapper">
      <div className="searchWrapper">
        <input onChange={searchStart} className="searchInput" type="text" ref={inputRef} />
        <img onClick={searchStart} className="searchInputIcon" src={search} alt="searchIcon" />
      </div>
    </div>
  );
}
