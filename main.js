//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = function(n, m){
    for (let i = 0; i < m.length; i++){
        let searchfor = m[i]
        let found = n.search(searchfor)
        if (found > 0) {
            console.log('Matched dog_name')
        } else {
            console.log('No Matches')
        }
    }
}
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let my_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i,1, 'even index')
        }
    }
    console.log(arr)
}
replaceEvens(my_arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Codewars:

//https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
function multiply(a, b){
    return a * b;
  }

  
//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
function divisors(integer) {
    let my_arr = [];
    let is_prime = false;
    for (let i = 2; i < integer; i++){
      if (integer % i == 0){
        my_arr.push(i);
        is_prime = true;
      }
    }
    
    if (is_prime == false){
      return integer + ' is prime'
    }
    return my_arr
  };