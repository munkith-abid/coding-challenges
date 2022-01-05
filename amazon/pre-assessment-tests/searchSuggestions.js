'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

function searchSuggestions(repository, customerQuery) {
    if(customerQuery.length < 2){
        return [];
    }
    const listOfLists = [];
    const repoStr = repository.join(',').toLowerCase();
    console.log(repoStr);
    console.log(repository);
    for(let i = 2; i <= customerQuery.length; i++){
        let qSubstr = customerQuery.substring(0, i);
        console.log(qSubstr);
        const re = new RegExp(`\\b${qSubstr}\\w*`, 'gi');
        const list = repoStr.match(re)?.sort().slice(0, 3);
        console.log(list)
        if(list)
        listOfLists.push(list);
    }    
    return listOfLists;
}