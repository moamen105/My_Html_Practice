var breaks = [];
var counter = 1;
var number = 1;


function pomodoro()
{
    if (counter === 4)
    {
        breaks.push(15);
        counter = 1;
    }
            
    else
    {
        breaks.push(5);
        counter++;
    }



}
while(number <= 9){
    pomodoro();
    number++;
}
console.log(breaks);

