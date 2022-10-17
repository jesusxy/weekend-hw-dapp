# dApp Weekend Homework - Oct 15/16

This README file has our reports that go over each function execution, transaction hash, or the revert reason (if there was one) when 
interacting with the nest backend from our frontend.

**Group Members:**

- Adrian Sandoval
- Jesus Chavez
- Arjun Mukherjee
- Micah Bly
- Jose Marvn Henriquez

The frontend for this dApp is interacting with the nest backend that we worked on in class for lesson_14. 
Functions that were added to the backend. Before running `yarn start` on this project, you would have to run the nest project in order to be able to interact with the service.

```
async castVote(proposal: string) {
    const seed = process.env.MNEMONIC
    const wallet = ethers.Wallet.fromMnemonic(seed);
    const signer = wallet.connect(this.provider);
    const signedContract = this.tokenizedBallotContract.connect(signer);

    const votingPower = await this.erc20Contract.getPastVotes(signer.address, REFERENCE_BLOCK);
    const castVote = await signedContract.vote(proposal, votingPower);
    await castVote.wait();

    return {
      message: `A vote has succesfully been casted for proposal ${proposal}. Txn Hash: ${castVote.hash}`
    }
  }
     
```

```
 async getWinningProposal() {
    const seed = process.env.MNEMONIC
    const wallet = ethers.Wallet.fromMnemonic(seed);
    const signer = wallet.connect(this.provider);
    const signedContract = this.tokenizedBallotContract.connect(signer);

    const winningProposal = await this.tokenizedBallotContract.winnerName();

    return {
      winningProposal: winningProposal
    }

  }
```
