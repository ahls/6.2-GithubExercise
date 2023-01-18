function countDown(seconds)
{
    for(let i = 1; i <seconds; i++)
    {
        setTimeout(function(){console.log(i)},1000*(seconds - i))
    }
    setTimeout(function(){console.log("DONE!")},seconds * 1000);
}

function generateRandomNumber()
{
    return Math.floor(Math.random()*1100)/1000
}
function pickRandomNumber(currentCount)
{
    let randomNumber = generateRandomNumber();
    console.log(randomNumber)
    if(randomNumber>0.75)
    {
        if(currentCount == 1)
        {
            console.log(`${randomNumber} was found on the first try! how lucky :D`);
        }
        else
        {
            console.log(`${randomNumber} was found after ${currentCount} tries`);
        }
    }
    else
    {
        console.log(`${randomNumber} was picked!\nI will try again!`);
        setTimeout(pickRandomNumber,1000,currentCount+1)
    }
}
function randomGame()
{
    setTimeout(pickRandomNumber,1000,1)
}