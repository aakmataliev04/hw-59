import './App.css';
import FilmsPage from './containers/filmsPage';
import Jokes from './containers/Jokes';

const App = () => {
  return (
    <div>
      <FilmsPage/>
      <hr/>
      <Jokes/>
    </div>
  );
};

export default App;
