import "./App.css";
import React, { useState } from 'react';


export default function App() {
  const users=[{names:"The Avengers",
  profile:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
rates:"8",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Interstellar",
  profile:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
rates:"9",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Jai Bhim",
  profile:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
rates:"8.5",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Baaahubali",
profile:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
rates:"8.1",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."}
 ];
 
    return (
    <div className="App">
      <div className="movie-list">
        {users.map(({names,profile,rates,summarys})=>
        (<Movie
        names={names}
        profile={profile}
        rates={rates}
        summarys={summarys}
        />
        ))}
<Addbox />
<Colorbox />
        
      </div>
    </div>
  );
}
function Counter()
{
  const[like,setLike] = useState(0);
  return(
   
    <div >
      <button  className="like" onClick ={ ()=> setLike(like + 1)}>👍{like}</button>
    </div>
  );
}
function Counters()
{
  const[like,setLike] = useState(0);
  return(
    <div>
      <button className="dislike" onClick ={ ()=> setLike(like + 1)}>👎{like}</button>
    </div>
  );
}

function Movie({names,profile,rates,summarys})
{
 const styles={color:rates>8 ? "green" : "red",};
  return(
    <div className="movie-container">
      <img className="movie-poster"
      src={profile} alt="Logo" />;
      <div className="movie-specs">
       <h1 className="movie-name">{names}</h1>
       <h3 style={styles} className="movie-rating">⭐{rates}</h3>
       </div>
       <div className="movie-summary">{summarys}</div>
       <div className="same">
       <Counter /> 
       <Counters />
       </div>
      </div>
  );
}

function Addbox()
{
  const [color, setColor] = useState("pink");
  const styles={
    background:color,
  };
  const[colorList,setColorList] = useState([
    "green",
    "orange",
    "blue",
    "red"
  ]);
  return(
    <div>
      <input
      value={color}
      style={styles}
      onChange={(event)=>setColor(event.target.value)}
      placeholder="Enter the value"
      />
      <button onClick={()=>setColorList([...colorList,color])}>Add color </button>
      {colorList.map((clr)=>(
        <Colorbox color={clr} />
      ))
      }
    </div>
  )
}

function Colorbox({ color})
{
  const styles = {
    backgroundColor:color,
    height:"25px",
    width:"200px",
    marginTop:"10px",
  };
  return <div style={styles}></div>
}