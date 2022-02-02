import "./App.css";
import React, { useState } from 'react';

export default function App() {
  const users=[{names:"The Avengers",
  profile:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
rates:"⭐⭐⭐⭐⭐",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Interstellar",
  profile:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
rates:"⭐⭐⭐⭐⭐",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Jai Bhim",
  profile:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
rates:"⭐⭐⭐⭐⭐",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."},
{names:"Baahubali",
profile:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
rates:"⭐⭐⭐⭐⭐",directs:"Joseph Eggleston Johnston",summarys:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."}
 ];

    return (
    <div className="App">
     <h6>🍿🍿🍿WELCOME TO SATHYAM CINEMAS🍿🍿🍿</h6>
     <h6>MOVIE BUFF📽️🎬📽️🎦</h6>
     <h6>DIWALI RELEASED MOVIES THIS WEEK📽️🍿🎬🎦👍1</h6>

  {users.map(nm=> <Welcome name={nm.names} logo={nm.profile} rate={nm.rates} direct={nm.directs} summary={nm.summarys}/>)}
  
 
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
function Welcome({name,logo,rate,direct,summary})
{
  return(
    <div className="Welcome">
      <img className="userinput"
      src={logo} alt="Logo" />;
       <h1>{name}</h1>
       <h3>Ratings:{rate}</h3>
       <h3>Directed by:{direct}</h3>
       <h3>Summary:</h3><span>{summary}</span>
       <Counter /> 
       <Counters />
      
      </div>
  );
}