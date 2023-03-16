import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List";

interface Sub {
  nick: string;
  subMonts: number;
  avatar: string;
  description?: string;
}

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
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);
  return (
    <div className="App">
      <h1>Subs of Andrés</h1>
      <List subs={subs} />
    </div>
  );
}

export default App;
