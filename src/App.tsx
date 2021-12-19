import { useEffect, useState } from 'react';
import { fetchCountriesData } from './constants/APIs/Countries';
import WorldMap from 'react-svg-worldmap';
import './App.css';

const App = () => {  
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function fetchInt() {
        let fetchInfoCoun = await fetchCountriesData();  
        //console.log(fetchInfoCoun);
        let dataChart = fetchInfoCoun.countries.map((item: any) => {  
          
         return {country: item.alpha_2, value: item.count}; 
        
      });
       // console.log(dataChart);
        setContent(dataChart);
    }
      fetchInt();
  }, []);
  return (
    <div className="App">
      <WorldMap
        color="red"
        title="Summary of countries"
        value-suffix="people"
        size="lg"
        data={content}
      />
    </div>
  );
}

export default App;
