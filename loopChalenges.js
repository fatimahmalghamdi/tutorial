// print Print odds 1-20
for (var i=1; i<=20; i++)
{
    if (i%2 !=0)
        console.log(i);
}

console.log("-----------------");

//Decreasing Multiples of 3
for (var i=100; i>=0; i--)
{
    if (i%3 ==0)
        console.log(i);
}

console.log("-----------------");

//Print the sequence
for (var i=4; i>=-3.5; i -= 1.5)
{
    console.log(i);
}

console.log("-----------------");

//Sigma
var sum=0;
for (var i=0; i<=100; i++)
{
    sum += i;
}
console.log(sum);

console.log("-----------------");

//Factorial
var fac=1;
for (var i=1; i<=100; i++)
{
    fac *= i;
}
console.log(fac);



