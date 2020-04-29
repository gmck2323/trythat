import React from 'react';
import Button from '@material-ui/core/Button';




const JokeOrTrivia = ({isFetching, entryq, joke, trivia}) => {

    return(
        <div>
        <h2>But First...</h2>
        <h3>Would you like a joke or some trivia?</h3>
        <Button variant="contained" color="primary" size="large" style={{marginRight: "50px"}} onClick={joke}>
            Joke!
        </Button>
        <Button variant="contained" color="secondary" size="large" onClick={trivia}>
            Trivia!
        </Button>
        <p>{isFetching ? 'Checking...' : ''}</p>
        <p><strong>{entryq ? entryq : ''}</strong></p>
        </div>
    );
}

export default JokeOrTrivia