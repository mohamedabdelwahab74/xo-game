let title = document.querySelector(".title");
let turn = 'X';
let squares = [];
function end(num1,num2,nam3) {          
    
    title.innerHTML = `${squares[num2]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+nam3).style.background = '#000';

    setInterval(function(){title.innerHTML +='.'},1000);    
    setTimeout(function(){location.reload()},1000)
    
}
function winner ()
{

    for(let i = 1; i<10; i++)
    {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    
    if(squares[1] == squares[2] &&  squares[2] == squares[3] && squares[1] !='')
    {
        end(1,2,3)
    }
    else if(squares[4] == squares[5] &&  squares[5] == squares[6] && squares[4] !='')
    {
        end(4,5,6)
    }

else if(squares[7] == squares[8] &&  squares[8] == squares[9] && squares[8] !='')
{
        end(7,8,9)
}




else if(squares[1] == squares[4] &&  squares[4] == squares[7] && squares[1] !='')
{
        end(1,4,7)
}

else if(squares[2] == squares[5] &&  squares[5] == squares[8] && squares[5] !='')
{
        end(2,5,8)
}

else if(squares[3] == squares[6] &&  squares[6] == squares[9] && squares[6] !='')
{
        end(3,6,9)
}



else if(squares[1] == squares[5] &&  squares[5] == squares[9] && squares[5] !='')
{
         end(1,5,9)
}   
else if(squares[3] == squares[5] &&  squares[5] == squares[7] && squares[5] !='')
{
        end(3,5,7)
}
}

function game(id)
{
    let element = document.getElementById(id)
    if (turn === 'X' && element.innerHTML == '') {

        element.innerHTML = 'X'
        turn ='O'
        title.innerHTML = 'O'

    }else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn ='X'
        title.innerHTML = 'X '
    }
    winner ()
}



// function fname() {
//     window.confirm("what is your name"); 

// }



// function myWatch() {
//     var myday = new Date();
//     var myHour = myday.getHours();
//     var myMin = myday.getMinutes();
//     var mySec = myday.getSeconds();

//     myMin = checkTime(myMin);
//     mySec = checkTime(mySec);

    
//  setTimeout( function (){
//     myWatch ();

//  },1000 );
//  document.getElementById( "myp").innerHTML= myHour +":" + myMin + ":" + mySec ;

//     // document.write( myHour +":" + myMin + ":" + mySec +"<br>");
// } 

// function checkTime(x) {
//     if (x<10) {
//         x = "0"+x;
//     }

// return x

// }    myWatch ();


// myWatch.onload = function myloaded(){
//     myWatch ();
// }


//
// var mymonth = myday.getMonth()+1;
// var myYear = myday.getFullYear()+1;

// document.write( myday +"<br> " + mymonth+ "<br> "+ myYear );




// var num1 = 4;
// document.write(num3 + "<br>");


// var num2 = Math.sqrt(num1);
// var num3 = Math.random(2);
// var num4 = Math.random( );
// var num5 = Math.pow(2,6);
// var num6 = Math.floor(5.9);
// var num7 = Math.ceil(5);
// var num8 = Math.round(5.9);
// var num9 = Math.round(5.3);
// var num10 = Math.abs(-5);


// document.write(num3 + "<br>");
// document.write(num4 + "<br>");
// document.write(num5 + "<br>");
// document.write(num6 + "<br>");
// document.write(num7 + "<br>");
// document.write("5.9 = " + num8 + "<br>");
// document.write("5.3 =" + num9 + "<br>");
// document.write(num10 + "<br>");





// var myname = "             MoHamed is my first    name                   ";
// var lastname = "ahmed    9I9PK ";

// var fullname = myname.concat(lastname)

// document.write(myname + lastname + "<br>");
// document.write(myname.charAt()+ "<br>");
// document.write(lastname.charAt()+ "<br>");
// document.write(myname.indexOf('m')+ "<br>");
// document.write(myname.lastIndexOf("my")+ "<br>");
// document.write(myname.toLowerCase()+ "<br>");
// document.write(myname.slice(0,9)+ "<br>");
// document.write(myname.slice() + "<br>");
// document.write(myname.trim()    + "<br>");
// document.write(myname.toLocaleUpperCase()+ "<br>");



// var nam1 = 3;
// var nam2 = 2.3;
// var nam3 = 123e5;
// var nam4 = new Number(13);

// document.write( nam1 + "<br>");
// document.write( nam2 + "<br>");
// document.write( nam3 + "<br>");
// document.write( nam4 + "<br>");


// var myname=[ "mohamed","abdelwahab","ahmed", "mohamed"];

// for (var index = 0; index < 4; index++) {
//     var element = myname[index];
//     document.write(element + " ");
// }
 

// function personInfo(id , name , lastname , age) {
//     this.id = id;
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
// }

//     this.ChangePersonAge =   function(params) {
//         alert(params);
//         this.age = params;
//     }
//     this.ChangeName = changePersonName;
//     function changePersonName(params) {
//         this.name = params;
//     }

// myperson = new personInfo(2,"mohamed" ,"abdelwahab",23);
// myperson2 = new personInfo(3,"mohamed","abdelwahab",23);
// myperson3 = new personInfo(4,"mohamed","abdelwahab",23);
// document.write(myperson.age);
// myperson.ChangePersonage(32);
//  document.write(myperson.age);

// document.write(myperson.name+ " "+ myperson.lastname+" "+myperson.age);
// document.write("<br>")
// document.write(myperson2.name+ " "+ myperson2.lastname+" "+myperson2.age);
// document.write("<br>")
// document.write(myperson3.name+ " "+ myperson3.lastname+" "+myperson3.age);


// person={
//     name:"mohamed",
//     lastname:"abdelwahab",
//     age:"23"
// }

// document.write(person.name+" "+person.lastname+" "+person.age)


// document.write((100).toFixed()); 


// var cat = new Object ();
// cat.name = "bobos";
// cat.age = "2";
// cat.color="white";
// document.write(''+cat.name +'<br>' cat.age);


// function fname(num1) {
//     alert("my age is : " + num1 + (""));
    
// }
// // name()

// function MyAge(num1) {
//     if(num1>40){
//         alert('لسه شباب') 
//     }else if (num1>100) {
//         alert('ربنا يدك الصخة')
//     } else {
//         alert('انت لسه بترضع')
        
//     }
//     function name(params) {
        
//     }
    
//     alert(num1);
