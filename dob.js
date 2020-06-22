//function to get the current age,months etc.
var f = document.createElement("FORM");
document.body.appendChild(f);
var i = document.createElement("INPUT");
i.setAttribute("type", "date");
i.setAttribute('id','dob');
var l=document.createElement('label');
var txt2=document.createTextNode('Date of Birth');
l.appendChild(txt2);
f.appendChild(i);
f.appendChild(l);
var btn=document.createElement('button');
btn.setAttribute('onclick','func()');
var txt=document.createTextNode("Calculate");
btn.appendChild(txt);
document.body.append(btn);
var pp=document.createElement('p');
pp.setAttribute('id','disp');
document.body.appendChild(pp);
function func(){
    var dob=document.getElementById("dob").value;
    var current_time=new Date();
    //For Reference
    var days=[31,28,31,30,31,30,31,31,30,31,30,31];
    //To get the month,date and year from input
    var dob_v=dob.split("-");
    var dob_val=dob_v.map(v=>+v);
    //Calculating Current age
    var curr_day=+current_time.getDate();
    var curr_month=+current_time.getMonth()+1;
    var curr_year=+current_time.getFullYear();
    var diff_m=0,diff_d=0,diff_y=0;//For getting the difference of mpnth,day,year respectively.
    //diff_y=curr_year-dob_val[0];
    //diff_m=curr_month-dob_val[1];
    //diff_d=curr_day-dob_val[2];
    var h=0,m=0,s=0;
    if(curr_year-dob_val[0]==0)
    {
        
        if(curr_month-dob_val[1]==0)
        {
            
            if(curr_day-dob_val[2]==0)
            {
              console.log(current_time.getHours()+" hours and "+current_time.getMinutes()+" minutes");
            }
            else
            {
                diff_d=curr_day-dob_val[2];
                console.log("Age is "+diff_d+" days"+" and "+current_time.getHours()+" hours or");
                h=diff_d*24+(current_time.getHours());
                console.log(h+" hours or");
                console.log(h*60+" minutes");
            }

        }
        else
        {
            
            let c=dob_val[1];
            while(c<=curr_month)
            {
                if(c==2)
                  diff_d+=2;
                if(c==dob_val[1])
                  diff_d+=(days[dob_val[1]-1]-dob_val[2]);
                else if(c==curr_month)
                  diff_d+=curr_day;
                else
                  diff_m++;
                c++;
            }
            
            if(diff_d==30){diff_m++;
                diff_d-=30;}
            else if(diff_d>30)
            {
             diff_m++;
             diff_d-=30;//here 
            }
            
            console.log(diff_m+" months and "+diff_d+" days");//Add days,hours,minutes
        }
        
    }
    else
    {
        let mn=curr_month+(12-dob_val[1]); //months between the years
        diff_y=(mn==12)?1:0;
        if(mn<12)
        {
            diff_y=0;
            diff_m=mn-1;
            diff_d=days[dob_val[1]-1]-dob_val[2];
            diff_d+=curr_day;
            if(diff_d==30){diff_m++
                diff_d-=30;}
            else if(diff_d>30)
            {
             diff_m++;
             diff_d-=30;
            }
            console.log(diff_y+" years "+diff_m+" months and "+diff_d+" days");

        }
        else 
        {
            diff_y=curr_year-dob_val[0];
            let c=dob_val[1];
            while(c<=curr_month)
            {
                if(c==dob_val[1])
                  diff_d+=(days[dob_val[1]]-dob_val[2]);
                else if(c==curr_month)
                  diff_d+=curr_day;
                else
                  diff_m++;
                c++;
            }
            
              
            if(diff_d==30){diff_m++;
                diff_d-=30;}
            else if(diff_d>30)
            {
             diff_m++;
             diff_d-=30;
            }
            if(curr_day==dob_val[2])
              diff_d=0;
            console.log(diff_y+" years and "+diff_m+" and "+diff_d+" days");

        }

    }
    var str=diff_y+" years "+diff_m+" months and "+diff_d+" days ";
    
    h=diff_y*12*30*24+diff_m*30*24+diff_d*24;
    m=h*60;
    s=m*60;
    var str2="OR "+h+" hours ";
    var str3="OR "+m+" minutes ";
    var str4="OR "+s+ " seconds ";
    console.log(str);
    document.getElementById('disp').innerText=str+str2+str3+str4;
    
   
}
