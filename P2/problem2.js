//Check Odd or Even
function oddOrEven(num1, num2) {
  let fromNum, toNum;
  if (num1 > num2) {
    fromNum = num2;
    toNum = num1;
  } else {
    fromNum = num1;
    toNum = num2;
  }

  for (let i = fromNum; i <= toNum; i++) {
    if (i % 2 == 0) console.log(i + " is Even");
    else console.log(i + " is Odd");
  }
}

oddOrEven(1, 10);


//Get sum of Evens and sum of odds between two numbers
let sumOfOdd=0, sumOfEven=0;

function sum(num1, num2) {
    let fromNum, toNum;
    if (num1 > num2) {
      fromNum = num2;
      toNum = num1;
    } else {
      fromNum = num1;
      toNum = num2;
    }
  
    for (let i = fromNum; i <= toNum; i++) {
      if (i % 2 == 0) sumOfEven += i;
      else sumOfOdd +=i;
    }
  }

  sum(1, 10)
  console.log("Sum Of Evens = "+sumOfEven)
  console.log("Sum Of Odds = "+sumOfOdd)

  //Find Max number in an array
  function findMax(numbers){
    let max = numbers[0];
    for (const element of numbers) {
        if (element>max)
            max = element;
    }
    console.log(max)
  }

  findMax([10,-5,3])
