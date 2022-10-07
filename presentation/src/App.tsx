import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Cep from "./components/Cep/Cep";

const App = () => {
  return (
    <div className="App">
      <div className="avatar-section col-md-6">
        <Avatar url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg" />
        <Avatar url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg" />
        <Avatar url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg" />
        <Avatar url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg" />
        <Avatar url="https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg" />
      </div>
      <div className="presentation col-md-6">
        <Cep cep="13023-000" />
      </div>
    </div>
  );
};

export default App;
