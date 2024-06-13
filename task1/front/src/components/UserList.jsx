import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useUsersList } from "./store/store";

export default function UserList() {
  const [itemsData, setItemsData] = useState('')
  const { itemsFetch, items } = useUsersList((state) => ({
    itemsFetch: state.fetchItems,
    items: state.content,
  }));
  useEffect(() => {
    itemsFetch();
    setItemsData(items);
  }, []);

  return <div className="userList">
    {items.map((element,index)=>{
      return <UserCard item={element} key={index} />
    })}
    </div>;
}
