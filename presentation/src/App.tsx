import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faInfoCircle,
  faLocationDot,
  faMasksTheater,
  faUser,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Cep from "./components/Cep/Cep";
import Presentation from "./components/Presentation/Presentation";
import { IPerson, persons } from "./interfaces/IPerson";
import Card from "./components/Card/Card";

const App = () => {
  const [person, setPerson] = useState<IPerson>();

  const getPerson = useCallback((id: number) => {
    const personFilter = persons.filter((x) => x.id === id)[0];
    setPerson(personFilter);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="title">
              Clique para conhecer nosso time!
              <FontAwesomeIcon icon={faCoffee} />
            </h1>
            <div className="avatar-section">
              {persons.map((p) => (
                <Avatar
                  key={p.id}
                  onClick={() => getPerson(p.id)}
                  url={p.photoUrl}
                />
              ))}
            </div>
          </div>
          <div className="col-md-5 presentation">
            {person ? <Presentation person={person} /> : null}
          </div>
        </div>
      </div>
      {person ? (
        <div className="row vertical">
          <hr />
          <div className="col-md-3">
            <Card header="Sobre" body={person?.about} icon={faUser} />
          </div>
          <div className="col-md-2 align-top">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faLocationDot} /> Endereço
              </div>
              <div className="card-body">
                <Cep cep={person?.cep} />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card
              header="Graduação"
              body={person?.graduation}
              icon={faGraduationCap}
            />
          </div>
          <div className="col-md-2">
            <Card
              header="Experiência"
              body={person?.experience}
              icon={faInfoCircle}
            />
          </div>
          <div className="col-md-2">
            <Card
              header="Hobbies"
              body={person?.hobbie}
              icon={faMasksTheater}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
