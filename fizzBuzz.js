/*
* Challenge #0
* THE FAMOUS "FIZZ BUZZ"
*
* Statement: 
*   Write a program that displays on the console the
*   numbers from 1 to 100 (both included and with a line break in between each print)
*   substituting the following:
* 		        
*   - Multiples of 3 for the word "fizz".
*   - Multiples of 5 for the word "buzz".
*   - Multiples of 3 and 5 at the same time for the word "fizzbuzz".
*/

const fizBuzz = () => {
    for (let i = 0; i <= 100; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
        
    }
}

fizBuzz()