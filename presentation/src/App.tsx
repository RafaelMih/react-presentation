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
          <div className="col-lg-7">
            <h1 className="title">
              Clique para conhecer nosso time!
              <FontAwesomeIcon icon={faCoffee} />
            </h1>
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
      {person ? (
        <div className="row vertical">
          <hr />
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faUser} /> Sobre
              </div>
              <div className="card-body">
                <h5 className="card-title">{person?.name} </h5>
                <p className="card-text">{person?.about}</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 align-top">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faLocationDot} /> Endereço
              </div>
              <div className="card-body">
                <p>
                  <Cep cep={person?.cep} />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faGraduationCap} /> Graduação
              </div>
              <div className="card-body">
                <p>
                  <div>{person?.graduation}</div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faInfoCircle} /> Experiência
              </div>
              <div className="card-body">
                <p>
                  <div>{person?.experience}</div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faMasksTheater} /> Hobbies
              </div>
              <div className="card-body">
                <p>
                  <div>{person?.hobbie}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
