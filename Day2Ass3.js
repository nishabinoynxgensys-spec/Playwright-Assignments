/* . Create a function named `isOddOrEven` that takes a number as a parameter   
2. Declare and initialize the variable   
3.  Use a conditional statement to check if the number is divisible by 2  
4. Call the function and print the result  */
function isOddOrEven(num){
    
    if(num%2==0)
        console.log(`The number ${num} is even`);
    else
        console.log(`The number ${num} is odd`);
}
isOddOrEven(200);
isOddOrEven(203);