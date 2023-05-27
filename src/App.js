import './App.css';
import Canvas from './components/Canva';
function App() {
  const items=[
    {title:"group1",item:["A","B","C"]},
    {title:"group2",item:["D","E",]}
]
  return (
    <div className="App">
    <Canvas items={items}/>
    </div>
  );
}

export default App;
