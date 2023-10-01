function showAlert(){
    alert(" button clicked")
}

function changeh1(){
    document.getElementById("head1").innerHTML = "Changed";
}

function changeback(){
    document.getElementById("head1").innerHTML= "Changedback"
}

function mul(val){
    
    // const inputBox = document.getElementById("input-box")
    // const val = parseInt(inputBox.value)
    
    let a="";
    for(let i=1;i<=11;i++)
    {
        a=a+ val+" * "+i+" = "+val*i +"<br>";   
    }
    document.getElementById("multab").innerHTML= a
}

let radius=[1,2,3,4,5]

function calcArea(radius)
{
    let ans = []
    for(let i=0;i<radius.length;i++)
    {
        ans.push(Math.PI*radius[i]*radius[i])
    }
    return ans;
}


function calcDia(radius)
{
    let ans = []
    for(let i=0;i<radius.length;i++)
    {
        ans.push(2*radius[i])
    }
    return ans;
}
function calc(radius,logic){
    let ans = []
    for(let i=0;i<radius.length;i++)
    {
        ans.push(logic(radius[i]))
    }
    return ans;
}
function diam (num){return 2*num}

calc(radius, (num)=>{ return 2*num})
calc(radius, (num)=>{ return num*num*Math.PI})
