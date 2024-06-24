import React, {useEffect, useState} from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
      if (response.ok) {
        const newJoke = await response.json();
        setJoke(newJoke);
      }
    };
    void fetchData();
  }, []);
  const updateJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
    if (response.ok) {
      const newJoke = await response.json();
      setJoke(newJoke);
    }
  };
  return (
    <div style={{background: 'whitesmoke'}}>
      <h2>Joke For Today:</h2>
      <button onClick={updateJoke} className="button-28" role="button">Update Joke</button>
      <article className={'Joke'} style={{margin: '0 auto'}}>
        {
          joke ? (
            <>
              <h1>{joke.joke || joke.setup}</h1>
              <div className="Info">
                <div className="Delivery">{joke.delivery ? joke.delivery : null}</div>
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )
        }
      </article>
    </div>

  );
};

export default Jokes;