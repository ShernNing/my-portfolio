import { useState, useEffect } from 'react';

function Joke() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => 
    await fetch(`https://api.chucknorris.io/jokes/random?`)
    .then(response => response.json())
    .then(data => {
      setJoke(data.value)
      console.log(data.value);
  });

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleGenerateJoke = (e) => {
    e.preventDefault();
    fetchJoke();
  }
  

  return (
    <div>
      <h1>The Joke Generator</h1>
      <h3>{joke}</h3>
      <form>
        <button onClick={handleGenerateJoke}>Generate Joke</button>
      </form>
    </div>
  )
}

export default Joke;


