import './App.css';
import Header from './components/Header'
// import NotesContainer from './components/NotesContainer'

function App() {
var data;
  fetch("http://localhost:4001/allnotes").then(response=>response.json()).then(response => data=response);
  return (
    <>
      <Header />
      {/* <NotesContainer data={data}/> */}
    </>
  );
}

export default App;
