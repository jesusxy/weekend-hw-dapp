import React from 'react';

/**
 * 
 * performSearch = (query = 'germany') => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(responseData => {
        this.setState({
            results: responseData.results,
            loading: false
        });
     })
     .catch(error => {
            console.log('Error fetching and parsing data', error);
     });
}
 */

const Vote = () => {
    const [message, setMessage] = React.useState('');
    const [proposal, setProposal] = React.useState(null);

    
    const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3", "Proposal 4"];
    /**
     * move into a file with all constants
     */
    const api_url = process.env.REACT_APP_API_BASE_URL;

    /**
     * TODO:
     *  - pass proposal index as param to url
     *  - use radio buttons to render proposals 
     *  - use setProposal fn() to set index of selected proposal
     * 
     */
    const castVote = () => {
        const _proposal = proposal
        fetch(`${api_url}/cast-vote`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_proposal),
        })
        .then((response) => response.json())
        .then((data) => {
            setMessage(data.message);
        })
        .catch((error) => {
            console.error('Error: ', error);
        })
    }


    return(
        <div>
            <h2>Cast your Vote for one of the following Proposals</h2>
            <div>
                {PROPOSALS.map((proposal, idx) => {
                    return <span>{proposal}</span>
                })}
            </div>
            <span>{message}</span>
            <button onClick={() => castVote()}>Cast Your Vote</button>
        </div>
    );
}

export default Vote;