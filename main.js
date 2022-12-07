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

  dynamic.onclick = async function() {
    contractWithSigner.vote("dynamic")
    let voteCount = await contract.getVotes("dynamic")
    voteCount++;
    dynamic.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  impactful.onclick = async function() {
    contractWithSigner.vote("impactful")
    let voteCount = await contract.getVotes("impactful")
    voteCount++;
    impactful.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  implicit.onclick = async function() {
    contractWithSigner.vote("implicit")
    let voteCount = await contract.getVotes("implicit")
    voteCount++;
    implicit.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  nostalgic.onclick = async function() {
    contractWithSigner.vote("nostalgic")
    let voteCount = await contract.getVotes("nostalgic")
    voteCount++;
    nostalgic.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  mundane.onclick = async function() {
    contractWithSigner.vote("mundane")
    let voteCount = await contract.getVotes("mundane")
    voteCount++;
    mundane.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  inherent.onclick = async function() {
    contractWithSigner.vote("inherent")
    let voteCount = await contract.getVotes("inherent")
    voteCount++;
    inherent.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  ambiguous.onclick = async function() {
    contractWithSigner.vote("ambiguous")
    let voteCount = await contract.getVotes("ambiguous")
    voteCount++;
    ambiguous.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  pedagogy.onclick = async function() {
    contractWithSigner.vote("pedagogy")
    let voteCount = await contract.getVotes("pedagogy")
    voteCount++;
    pedagogy.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  provoke.onclick = async function() {
    contractWithSigner.vote("provoke")
    let voteCount = await contract.getVotes("provoke")
    voteCount++;
    provoke.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  deconstruct.onclick = async function() {
    contractWithSigner.vote("deconstruct")
    let voteCount = await contract.getVotes("deconstruct")
    voteCount++;
    deconstruct.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  subjective.onclick = async function() {
    contractWithSigner.vote("subjective")
    let voteCount = await contract.getVotes("subjective")
    voteCount++;
    subjective.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  evocative.onclick = async function() {
    contractWithSigner.vote("evocative")
    let voteCount = await contract.getVotes("evocative")
    voteCount++;
    evocative.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  interesting.onclick = async function() {
    contractWithSigner.vote("interesting")
    let voteCount = await contract.getVotes("interesting")
    voteCount++;
    interesting.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  contemporary.onclick = async function() {
    contractWithSigner.vote("contemporary")
    let voteCount = await contract.getVotes("contemporary")
    voteCount++;
    contemporary.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  intentional.onclick = async function() {
    contractWithSigner.vote("intentional")
    let voteCount = await contract.getVotes("intentional")
    voteCount++;
    intentional.style.fontSize = baseFontSize + (fontScale * voteCount) + "px";
  }

  async function readVotes() {
    let dynamicVotes = await contract.getVotes("dynamic")
    dynamic.style.fontSize = baseFontStize + (fontScale * dynamicVotes) + "px";

    let impactfulVotes = await contract.getVotes("impactful")
    impactful.style.fontSize = baseFontStize + (fontScale * impactfulVotes) + "px";

    let implicitVotes = await contract.getVotes("implicit")
    implicit.style.fontSize = baseFontStize + (fontScale * implicitVotes) + "px";

    let nostalgicVotes = await contract.getVotes("nostalgic")
    nostalgic.style.fontSize = baseFontStize + (fontScale * nostalgicVotes) + "px";

    let mundaneVotes = await contract.getVotes("mundane")
    mundane.style.fontSize = baseFontStize + (fontScale * mundaneVotes) + "px";
    
    let inherentVotes = await contract.getVotes("inherent")
    inherent.style.fontSize = baseFontStize + (fontScale * inherentVotes) + "px";

    let ambiguousVotes = await contract.getVotes("ambiguous")
    ambiguous.style.fontSize = baseFontStize + (fontScale * ambiguousVotes) + "px";

    let pedagogyVotes = await contract.getVotes("pedagogy")
    pedagogy.style.fontSize = baseFontStize + (fontScale * pedagogyVotes) + "px";

    let provokeVotes = await contract.getVotes("provoke")
    provoke.style.fontSize = baseFontStize + (fontScale * provokeVotes) + "px";

    let deconstructVotes = await contract.getVotes("deconstruct")
    deconstruct.style.fontSize = baseFontStize + (fontScale * deconstructVotes) + "px";

    let subjectiveVotes = await contract.getVotes("subjective")
    subjective.style.fontSize = baseFontStize + (fontScale * subjectiveVotes) + "px";

    let evocativeVotes = await contract.getVotes("evocative")
    evocative.style.fontSize = baseFontStize + (fontScale * evocativeVotes) + "px";

    let interestingVotes = await contract.getVotes("interesting")
    interesting.style.fontSize = baseFontStize + (fontScale * interestingVotes) + "px";

    let contemporaryVotes = await contract.getVotes("contemporary")
    contemporary.style.fontSize = baseFontStize + (fontScale * contemporaryVotes) + "px";

    let intentionalVotes = await contract.getVotes("intentional")
    intentional.style.fontSize = baseFontStize + (fontScale * intentionalVotes) + "px";
  }
}