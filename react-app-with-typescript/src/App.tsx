import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "Andres",
    subMonts: 3,
    avatar: "https://i.pravatar.cc/150?u=Andres",
    description: "Andres es Henry Student",
  },
  {
    nick: "Fabio",
    subMonts: 9,
    avatar: "https://i.pravatar.cc/150?u=Fabio",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  // const [newSubsNumber, setNewSubsNumber] =
  //   useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs of Andrés</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
