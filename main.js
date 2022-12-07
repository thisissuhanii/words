main()

async function main() {

  // INITIALIZAING STEPS (SKIP TO THE BOTTOM TO WRITE YOUR OWN CODE)

  // Check website compatibility
  if(navigator.userAgent.indexOf("Safari") != -1
  && navigator.userAgent.indexOf("Chrome") == -1) {
    alert("Please switch to a browser that supports Web3 (Chrome, Firefox, Brave, Edge, or Opera)");
    return;
  }

  // Check if MetaMask is installed
  if(!window.ethereum) {
    alert("No Web3 Provider detected, please install MetaMask (https://metamask.io)");
    return;
  }

  // (REQUIRED) Connect to a Web3 provider (MetaMask in most cases)
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  // If the network changes, refresh the page. (e.g. the user switches from mainnet to mumbai)
  provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        window.location.reload();
    }
  });

  // (REQUIRED) Connect to signed-in account. If not signed in, MetaMask will prompt you to sign in
  await provider.send("eth_requestAccounts", []);

  // Check if user is connected to mumbai
  const chainId = await provider.getNetwork();
  if(chainId.chainId != 80001) {
    alert("Please switch to the mumbai Test Network in MetaMask. The page will refresh automatically after switching.");
    return;
  }

  // (REQUIRED) These are your primary variables for interacting with your smart contract
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  const contractWithSigner = contract.connect(signer);

  //----------------------------------------------------//
  //-----------ADD YOUR CODE BELOW THIS LINE------------//
  //----------------------------------------------------//


  readVotes();

  let fontScale = 10;
  let baseFontSize = 12;

  cheese.onclick = async function() {
    contractWithSigner.vote("cheese")
    let voteCount = await contract.getVotes("cheese")
    voteCount++;
    cheese.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  cheese.onclick = async function() {
    contractWithSigner.vote("cheese")
    let voteCount = await contract.getVotes("cheese")
    voteCount++;
    cheese.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }



  async function readVotes() {
    let cheeseVotes = await contract.getVotes("cheese")
    cheese.style.fontSize = baseFontStize + (fontScale * cheeseVotes) + "px";

    let cheeseVotes = await contract.getVotes("cheese")
    cheese.style.fontSize = baseFontStize + (fontScale * cheeseVotes) + "px";

    let cheeseVotes = await contract.getVotes("cheese")
    cheese.style.fontSize = baseFontStize + (fontScale * cheeseVotes) + "px";
  }
}