var arr = [2, 7, 9, 1, 6, 1, 6, 3];


function isSpecial(arr)
{
    for (var i = 0; i < arr.length; i++)
    {
        if((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0))
        {
            return false ;
        }

}
    return true;
}
