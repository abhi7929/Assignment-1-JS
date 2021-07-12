function mod(n,d)
{
  const res=(n/d)|0;
  return n - (res*d);
}

for(var i=1;i<=100;i=i+1)
{
    if(mod(i,15)===0)
    {
      console.log("FizzBuzz");
    }
    else if(mod(i,5)===0)
    {
      console.log("Buzz");
    }
    else if(mod(i,3)===0)
    {
      console.log("Fizz");
    }
    else
    {
      console.log(i);
    }
    
}