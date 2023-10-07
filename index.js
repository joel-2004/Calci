console.log("hello");

function calculate(){
    
   let n1=parseFloat(document.getElementById("n1").value);
   let n2=parseFloat(document.getElementById("n2").value);
let regex=/[+*%/-]/;
   let sign=document.getElementById("sign").value;
let ans=document.getElementById("ans");
   //alert(typeof(n1)+n1+" "+n2+" "+sign+" "+typeof(sign));
let form =document.getElementById("form");

if (isNaN(n1) || isNaN(n2)) {
    alert("Please enter valid numbers for n1 and n2.");
    return false;
}
   if(!regex.test(sign))
   {
    alert("Enter a valid sign");
    return false;
   }

   switch(sign)
   {
    case "+":
        ans.style.display="inline";
        ans.value=`${n1}${sign}${n2}=${(n1+n2)}`;
        form.reset();
        break;
        case "-":
            ans.style.display="inline";
            ans.value=`${n1}${sign}${n2}=${(n1-n2)}`;
            form.reset();
            break;
            case "*":
                ans.style.display="inline";
                ans.value=`${n1}${sign}${n2}=${(n1*n2)}`;
                form.reset();
                break;
                case "/":
                    ans.style.display="inline";
                    if(n2==0)
                    {
                        ans.value="Cannot divide with 0";
                        return false;
                    }
                    ans.value=`${n1}${sign}${n2}=${(n1/n2)}`;
                    form.reset();
                    break;
                    case "%":
                        ans.style.display="inline";
                        if(n2==0)
                        {
                            ans.value="Cannot modulo with 0";
                            return false;
                        }
                   
                        ans.value=`${n1}${sign}${n2}=${(n1%n2)}`;
                        form.reset();
                        break;

   }
   form.reset();
   return false;
}