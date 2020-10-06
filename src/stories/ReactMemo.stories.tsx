import React, { useState } from "react";

export default {
  title: "React.Memo demo",
};

const NewMessagesCounterSecret = (props: { count: number }) => {
  console.log('NewMessagesCounter')
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS')
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};
const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
  console.log('Example1');
  
  const [counter,setCounter]=useState(0)
  const [users,setUsers ]=useState(["andrey", "dimych", "volera"])
  const AddUsers=()=>{
    setUsers([...users,'katya'+new Date().getTime()])
  }
  return (
    <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={AddUsers}>AddUsers</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </>
  );
}
