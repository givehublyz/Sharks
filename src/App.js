import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
const url = "https://starsharks.com/go/api/market/sharks";
const Data = {
"class":[],"stage":[],"star":0,"pureness":0,"hp":[0,200],
"speed":[0,200],"skill":[0,200],"morale":[0,200],"body":[],
"parts":[],"page":1,"filter":"sell","sort":"PriceAsc","page_size":36};
const otherParams = {
    headers:{"content-type":"application/json"},
    body:JSON.stringify(Data),
    method: "POST"
};
//bnb exchange rate https://starsharks.com/go/api/market/bnb-exchange-rate
//statistic https://starsharks.com/go/api/market/statistic
function App() {
    fetch(url, otherParams)
    .then((data) =>{return data.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>(console.log("err",err)));
    fetch("https://starsharks.com/go/api/market/statistic", {headers:{"content-type":"application/json"}, method: "GET"})
    .then((data)=>{console.log(data.json())});
    fetch("https://starsharks.com/go/api/market/bnb-exchange-rate", {headers:{"content-type":"application/json"}, method: "GET"})
    .then((data)=>{console.log(data.json())});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
