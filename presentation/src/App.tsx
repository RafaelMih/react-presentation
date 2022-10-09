import { useCallback, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Presentation from "./components/Presentation/Presentation";
import { IPerson, persons } from "./interfaces/IPerson";

const App = () => {
  const [person, setPerson] = useState<IPerson>();

  // useEffect(() => {
  //   setPerson(persons[3]);
  // });

  const getPerson = useCallback((id: number) => {
    const personFilter = persons.filter((x) => x.id === id)[0];
    setPerson(personFilter);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-7 div-persons">
            <div className="title">Conheça nosso time</div>
            <div className="avatar-section">
              {persons.map((p) => (
                <Avatar onClick={() => getPerson(p.id)} url={p.photoUrl} />
              ))}
            </div>
          </div>
          <div className="col-md-5 presentation">
            {person ? <Presentation person={person} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
