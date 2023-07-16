import _ from "lodash"

console.log(_.concat([10,15,20],[40,60]))


const suits = ['D', 'C', 'H', 'S']
const values = [2,3,4,5,6,7,8,9,10,"J","K","Q","A"]
let singleDeck = []

createDeck()

function createDeck(){
    for(let s=0;s<suits.length;s++){
        for(let v=0;v<values.length;v++){
            singleDeck.push(values[v]+suits[s])
        }
    }

}

let deck = []

const createBlack8 = (arr, n) => 
[].concat(...Array(n).fill(arr));

deck = createBlack8(singleDeck,8)

console.log(deck)




