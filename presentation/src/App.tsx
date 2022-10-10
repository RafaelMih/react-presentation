import { useCallback, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Cep from "./components/Cep/Cep";
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
            <h1 className="title">Clique para conhecer nosso time!</h1>
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
      <div className="description-wrapper">
        <div className="about-wrapper">
          <h3>Sobre {person?.name.split(" ")[0]}</h3>
          <div className="description">{person?.about}</div>
        </div>
        <div className="about-wrapper">
          <h3>Endereço</h3>
          <div className="description">
            <Cep cep={person?.cep} />
          </div>
        </div>
        <div className="about-wrapper">
          <h3>Formação</h3>
          <div className="description">{person?.graduation}</div>
        </div>
        <div className="about-wrapper">
          <h3>Experiência</h3>
          <div className="description">{person?.experience}</div>
        </div>
        <div className="about-wrapper">
          <h3>Hobbies</h3>
          <div className="description">{person?.hobbie}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
