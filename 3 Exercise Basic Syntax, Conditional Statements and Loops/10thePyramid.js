function thePyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;

    let currentBase = base;
    let step = 1;

    
    while (currentBase > 2) {
        let outerLayer = currentBase * 4 - 4; 

        if (step % 5 === 0) {
            lapis += outerLayer * increment; 
        } else {
            marble += outerLayer * increment; 
        }

        let innerLayer = (currentBase - 2) * (currentBase - 2); 
        stone += innerLayer * increment;

        
        currentBase -= 2;
        step++;
    }

  
    gold += (currentBase * currentBase) * increment;

    
    height = Math.floor(step * increment);

    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

thePyramid (12, 1);