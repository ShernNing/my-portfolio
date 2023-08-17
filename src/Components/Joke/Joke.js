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



  //feedbackform
  const [score, setScore] = useState('4');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <5 && comment.length < 10) {
      alert('Please enter a comment');
      return
    }
    console.log('Form submitted')
    setComment('');
    setScore('5');
  }


  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textArea = isDisabled ? "Feedback please" : 'thank you'
  

  return (
    <div>
      <h1>The Joke Generator</h1>
      <h3>{joke}</h3>
      <button onClick={handleGenerateJoke}>Generate Joke</button>



      {/* feedbackform */}
      <div className="contactForm">
        <form action="submit" onSubmit={handleSubmit}>
          <fieldset>
            <h2>Score: {score}</h2>
            <input type="range" min={0} max={10} value={score} onChange={(e) => setScore(e.target.value)} />
            <label htmlFor="comment">Comments: </label>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder={textArea} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button type='submit' disabled={isDisabled}>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Joke;


