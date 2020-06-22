var heading=document.createElement('h5');
var h=document.createTextNode("Generating an 8-digit number with Unique elements");
heading.appendChild(h);
document.body.append(heading);
var btn=document.createElement('Button');//Button for Generating Number everytime it is clicked.
btn.setAttribute('onclick','func()');
var txt=document.createTextNode("Generate Number");
btn.appendChild(txt);
document.body.append(btn);
var out=document.createElement('p');
out.setAttribute('id','numb')
document.body.append(out);
function func(){
    var arr=[]//Array for storing the numbers.
    arr[0]=Math.floor((Math.random()*9)+1);
    for(let i=1;i<8;i++)
    {
        let temp=Math.floor((Math.random()*9)+0);
        while(arr.includes(temp)==true)
        {
            temp=Math.floor((Math.random()*9)+0);
        }
        arr[i]=temp;
    }
    let str=arr.join("");
    document.getElementById('numb').innerText=str;
}