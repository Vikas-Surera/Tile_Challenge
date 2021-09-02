import './App.css';
import Card from './Card';
import React,{useState,useEffect} from 'react';
import Particles from 'react-particles-js';
import particleConfig from './particlesjs-config.json';

/**
 * Main App component
 */
function App() {

  // default image urls
  const cardData = [
    {
      imageUrl: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__480.jpg",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295857_960_720.jpg",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2018/04/07/09/29/small-poly-3298069_960_720.jpg",
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2018/04/25/18/08/small-poly-3350168_960_720.jpg",
    },
  ]

  const [data,setData] = useState([]); // api title and body data Array
  const [loaidng,updateLoading] = useState(true); // loading status

  // fetching api
  useEffect(() =>{
    getCardData();
  },[])

  // fetch data function
  const getCardData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          result = result.slice(0,4);
          setData(result);
          updateLoading(false);
        },
        (error) => {
          alert('Api error');
        }
      )
  }

  // render loading status
  if(loaidng){
    return <div className="loading">
      Loading...
    </div>
  }
  
  // Render Card
  return (
    <div>
      <Particles params={particleConfig} className='bg'/>
      <div className="card-container" >
        {
          cardData.map((card,i)=><Card key={`card_${i}`} heading={data[i].title} subtitle={data[i].body} imageUrl={card.imageUrl}/>)
        }
      
      </div>
    </div>
  );
}

export default App;
