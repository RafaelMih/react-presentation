import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Presentation from "./components/Presentation/Presentation";
import { IPerson } from "./interfaces/IPerson";

const App = () => {
  const [person, setPerson] = useState<IPerson>();

  const getPerson = (id: number): void => {
    useEffect(() => {
      switch (id) {
        case 1:
          setPerson({
            name: "Rafael",
            age: 20,
            cep: "01001-000",
          });
          break;
        case 2:
          setPerson({
            name: "Teste",
            age: 20,
            cep: "13026-515",
          });
          break;
        default:
          break;
      }
    });
  };

  return (
    <>
      <div className="App">
        <div className="avatar-section col-md-5">
          <Avatar
            onClick={() => getPerson(1)}
            url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg"
          />
          <Avatar
            onClick={() => getPerson(2)}
            url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg"
          />
          <Avatar
            onClick={() => getPerson(1)}
            url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg"
          />
          <Avatar
            onClick={() => getPerson(2)}
            url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg"
          />
          <Avatar
            onClick={() => getPerson(1)}
            url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg"
          />
        </div>
        <div className="presentation col-md-7">
          <Presentation person={person} />
        </div>
      </div>
      ;
    </>
  );
};

export default App;
