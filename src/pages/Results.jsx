import React from 'react';

const Results = () => {
    const [message, setMessage] = React.useState('');

    const getWinningProposal = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/query-results`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setMessage(data.message);
        })
        .catch((error) => {
            console.error('Error: ', error);
        })
    }

    /**
     * for now we can make the API call when component mounts
     * 
     * future improvements:
     *  - add button to click to see the winning proposal
     * 
     */
    
    React.useEffect(() => {
        getWinningProposal();
        return () => { setMessage('') };
    }, []);

    return(
        <div>
            <h2>The Winning Proposal is: </h2>
            <span>{message}</span>
        </div>
    );
}

export default Results;