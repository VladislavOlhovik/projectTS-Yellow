import React, { useCallback, useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 10000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("UsersSecret");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  console.log("HelpsToReactMemo");

  const [counter, setCounter] = useState(0);

  let [users, setUsers] = useState(["andrey", "dimych", "volera"]);
  
  users = useMemo(
    () => users.filter((u) => u.toLocaleLowerCase().indexOf("a") > -1),
    [users]
  );

  const AddUsers = () => {
    setUsers([...users, "katya" + new Date().getTime()]);
  };

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={AddUsers}>AddUsers</button>
      {counter}
      <Users users={users} />
    </>
  );
};


export const LikeUseCallback = () => {
  console.log("LikeUseCallback");

  const [counter, setCounter] = useState(0);

  let [books, setBooks] = useState(["andrey", "dimych", "volera"]);
   
  const memoizedaddBook = useMemo(()=>{
    return () => {
      console.log(books);
      
      setBooks([...books, "katya" + new Date().getTime()]);
    }
  },[books])
  const memoizedaddBook2 = useCallback(()=>{
      console.log(books);
      setBooks([...books, "katya" + new Date().getTime()]);
  },[books])
  

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Book addBook={memoizedaddBook2} />
    </>
  );
};

const BooksSecret =(props:{addBook:()=>void})=>{
  console.log('BooksSecret');  
    return <div>
      <button onClick={props.addBook}>AddBook</button>
    </div>
}

const Book = React.memo(BooksSecret)


