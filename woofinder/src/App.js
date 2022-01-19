import { AddWanted} from './components/addwanted'
import {SearchForm} from './components/search-form'
import {Top} from './components/topbar'

function App() {
  return (
    <div className="App">
      <Top>WOOFinder</Top>
      <SearchForm></SearchForm>
      <AddWanted></AddWanted>
   </div>
  );
}

export default App;
