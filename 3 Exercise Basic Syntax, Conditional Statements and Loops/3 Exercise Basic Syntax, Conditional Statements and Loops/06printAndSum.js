function printAndSum(startNum, endNum) {
    
    let sum = 0;
    let allNums = "";

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        allNums += i + " ";
    }

    console.log(allNums);
    console.log(`Sum: ${sum}`)
}


printAndSum (5, 10);