import "./App.css";
import Section from "./components/Section";
import Requirements from "./data/requirements";
import { IRequirement } from "./modils";
function App() {




  return (
    <div className='App'>
      {Requirements.map((item: IRequirement, index: number) => (
        <div key={index}>
          <div>{item.title}</div>
          {item.thems.map((it, ind) => (
            <div key={ind}>
              <p>{it.theme}</p>
              {it.needToKnow.text && it.needToKnow.text.map((i:string,inx:number)=> <p key={inx}>{i}</p> )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
