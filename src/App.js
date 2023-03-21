import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
const locations = ["kerala","karnataka","Maharashtra","Tamilnadu","Goa","Gujarat"]
function App() {

  const [filteredList, setFilteredList] = useState(locations);
  const [selectedItem,setSelectedItem] = useState();
    useEffect(()=>{
      state();
    },[])
  function selectOption(e){
    setSelectedItem(e.target.innerHTML);
  }
  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedLocations = [...locations];
    updatedLocations = updatedLocations.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedLocations);
  
  }
  const state = ()=>{
    return filteredList.map((item, index) => {
      return <li key={index} onClick={selectOption}>{item}</li>
    })
    }
  return (
    <div className="App">
      <input type="text" value={selectedItem} onChange={filterBySearch} />
    <div id="item-list">
    <ul>
      {state()}
    </ul>
  </div>
  </div>
  );
}

export default App;
