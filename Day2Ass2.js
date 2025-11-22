/* Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript 
 
Hints to Solve:  
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For 
`runTests`, use a `switch` statement to handle different `testType` values, including a default case. 
 
Expected Outcome:  
Upon completion, you should be able to:  - Understand and implement different conditional statements using Javascript */

function launchBrowser(browserName)
{
if (browserName == "Chrome")
    console.log("Browser is Chrome");
else 
    if (browserName == "Firefox")
    console.log("Browser is Firefox");
else 
    if (browserName == "Edge")
    console.log("Browser is Edge");
}
function runTests(testType)
{
switch (testType) {
        case "smoke":
            console.log("perform smoke testing")
            break;
        case "sanity":
            console.log("perform sanity testing")
            break;
        case "regression":
            console.log("perform regression testing")
            break;
        default:
            console.log("perform smoke testing")
            break;
}
}
launchBrowser("Chrome");
runTests("sanity");
