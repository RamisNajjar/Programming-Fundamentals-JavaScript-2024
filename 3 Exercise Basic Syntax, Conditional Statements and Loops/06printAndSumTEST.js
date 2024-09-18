function printAndSum(startNum, endNum) {
    
    let sum = 0;
    let allNums = "";

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        allNums += i;
        console.log(allNums);
        
       
    }

    // console.log(`Sum: ${sum}`)
}

// this can be used as an example of a pyramid model !!

printAndSum (5, 10);