import logo from './logo.svg';
import './App.css';
import ImportScript from './ImportScript';

function App() {
  ImportScript("./naver-smarteditor/js/service/HuskyEZCreator.js");
  ImportScript("./InitEditor.js");

  const defaultStyle = {
    margin: "auto",
    width: "800px",
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div style={defaultStyle}>
        <textarea name="ir1" id="ir1" rows="20" cols="100"></textarea>
      </div>
    </div>
  );
}

export default App;
