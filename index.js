var readlineSync = require('readline-sync');
var chalk = require('chalk');
console.log("\n\n\n");
console.log("LET'S SOLVE THE REACT QUIZ ?");
console.log("----------------------------------------");
console.log("write correct option");
console.log('\n');
var userName = readlineSync.question('May I have your name? ');
var q = [];
var a = ['a', 'b', 'c', 'd', 'a'];
console.log('\n\n');
q[0] = readlineSync.question('(1) Which of the following command is used to create react app ?  \n\n (a) npx create-react-app appname \n (b) npx create react app appname \n (c) npx create_react_app appname \n (d) npx create:react:app:appname \n\n Your Answer :  ');
q[1] = readlineSync.question('\n(2) Which is the default port number on which react application runs ?  \n\n (a) 4000 \n (b) 3000 \n (c) 5000 \n (d) 7000 \n\n Your Answer :  ');
q[2] = readlineSync.question('\n(3) Which of the following is true regarding babel ?  \n\n (a) Compiler \n (b) Transpiler \n (c) both a and b \n (d) none of above \n\n Your Answer :  ');
q[3] = readlineSync.question('\n(4) Reactjs is maintained by ?  \n\n (a) Google \n (b) Amazon \n (c) Flipkart \n (d) Facebook \n\n Your Answer :  ');
q[4] = readlineSync.question('\n(5) React is a ?  \n\n (a) Libray \n (b) Framework \n (c) IDE \n (d) Interpreter \n\n Your Answer :  ');
let count = 0;
for (let i = 0; i < 5; i++) {
  if (q[i] == a[i])
    count++;
}
if (count < 3)
  console.log(chalk.red("\n\nfailed"));
else
  console.log(chalk.green("\n\nPass"));

console.log(chalk.yellow(`\n\nDear ${userName} You have scored ${count} out of 5`));