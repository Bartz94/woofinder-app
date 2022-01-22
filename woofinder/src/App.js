
import { AddWanted } from './components/addwanted'
import {LoginForm } from './components/login-form';
import { SearchForm } from './components/search-form'
import { Top } from './components/topbar'
import { UserPanel } from './components/userpanel'



function App() {
  return (
    <div className="App">
      <Top>
        <UserPanel></UserPanel>
      </Top>
      <SearchForm></SearchForm>
      <AddWanted></AddWanted>
      <LoginForm/>
    </div>
  );
}

export default App;
