// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract WordsInArt {
    // words
    // no. of votes accumulated
    mapping(string => uint256) public wordsToVotes;
    // user can onlt mint upto 7 times
    uint256 public constant maxVotes = 7;

    event VotedEvent(string word, uint voteCount);

    constructor() {
        wordsToVotes["dynamic"] = 0;
        wordsToVotes["impactful"] = 0;
        wordsToVotes["implicit"] = 0;
    }

    function vote(string memory _word) public {
        require (wordsToVotes[_word] < maxVotes, "Max votes reached")
        wordsToVotes[_word]++;
        
        emit VotedEvent(_word, wordsToVotes[_word]);
    }

    function getVotes(string memory _word) public view returns (uint256) {
        return wordsToVotes[_word];
    }
}