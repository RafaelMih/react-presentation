import { useCallback, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Presentation from "./components/Presentation/Presentation";
import { IPerson, persons } from "./interfaces/IPerson";

const App = () => {
  const [person, setPerson] = useState<IPerson>();

  const getPerson = useCallback((id: number) => {
    const personFilter = persons.filter((x) => x.id === id)[0];
    setPerson(personFilter);
  }, []);

  return (
    <div className="App">
      <div className="title">Conheça nosso time</div>
      <div className="avatar-section col-md-5">
        {persons.map((p) => (
          <Avatar onClick={() => getPerson(p.id)} url={p.photoUrl} />
        ))}
      </div>
      <div className="presentation col-md-7">
        {person ? <Presentation person={person} /> : null}
      </div>
    </div>
  );
};

export default App;
