import { AddWanted } from './components/addwanted'
import { SearchForm } from './components/search-form'
import { Top } from './components/topbar'
import { Wanted } from './components/wanted'

function App() {
  return (
    <div className="App">
      <Top></Top>
      {/* <SearchForm></SearchForm>
      <AddWanted></AddWanted> */}
      <Wanted></Wanted>
    </div>
  );
}

export default App;
