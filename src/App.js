import './App.css';
import Canvas from './components/Canvas';
function App() {
  const items=[
    {title:"Group-1",item:["A","B","C"]},
    {title:"Group-2",item:["D","E"]},
    {title:"Group-3",item:["D","E"]}
]
  return (
    <div className="App">
    <Canvas items={items}/>
    </div>
  );
}

export default App;
