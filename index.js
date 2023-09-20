var breaks = [];
var counter = 1;

function pomodoro()
{
    if (counter === 4){
        breaks.push(15);
        counter = 1;
    }
    
    else
    {
        breaks.push(5);
        counter++;
    }

    

    console.log(breaks);


}

