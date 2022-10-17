import React  from 'react';
import { ethers } from 'ethers';
import initWallet from '../utils/utils';

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
const Home = () => {
    const [walletAddress, setWalletAddress] = React.useState("Loading Wallet...");

    React.useEffect(() => {
        const initNewWallet = async () => {
            const newWallet = await initWallet();
            setWalletAddress(newWallet.address);
        }
        initNewWallet();
    }, []);

    return(
        <div>
            <h2>Home</h2>
            <div>
                <span>Your current wallet address is: {walletAddress} </span>
            </div>
        </div>
    );
}

export default Home;