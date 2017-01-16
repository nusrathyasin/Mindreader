function guess(){
	    var num1,num2;
	    num1=document.getElementById("num").value;
	    if (isNaN(num1)){
	        alert("Please enter Number ");
	    }
	    else{
	        num2 = num1 - 4;
	        num2 = 2 * num2;
	        num2 = parseInt(num2) + parseInt(20);
	        num2 = num2/4;
	        num2 = num2 - 20;
	    }
	    document.getElementById("demo1").innerHTML = num2;
	   }
function myFunction(){
	   var a;
	   a=document.getElementById("as").value;
	   result = parseInt(a) + parseInt(7) ;
	   result=result*3;
	   document.getElementById("as").value= result;
	}
function trick(){
	   var b,result2,result3,result0;
	   var month =["Month","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
	   b=document.getElementById("ad").value;
	   b = b - 21;
	   b = b/13;
	   result0 = b.toFixed(0)
	   result2 = b - b.toFixed(0);
	   result3 = result2 * 13;
	   result3 = result3.toFixed(0);
	   document.getElementById("demo").innerHTML = result0 + " " + month[result3];
	}
