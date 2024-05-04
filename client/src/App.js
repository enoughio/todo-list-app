import Auth from "./components/Auth";
import Model from "./components/Model";
import ListHeader from "./components/ListHeader";
import ListItems from "./components/ListItems";
import ProgressBar from "./components/ProgressBar";


const App = ()=> {
  return (
    <div className='app'>
      <ListHeader listname={`⛳ holiday tick list`} />
    </div>
  );
}

export default App;
