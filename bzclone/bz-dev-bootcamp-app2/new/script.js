
// d=[1,2,3,4,5,6,7,8,9,10]

// const twi = d.map(num=>num*2)
// console.log(twi)

// const eve = d.filter((num)=>!(num%2))
// console.log(eve);

// const odd = d.filter((num)=>num%2)
// console.log(odd);

// const sum=d.filter((sum,num)=>sum+=num)
// console.log("Sum of array is ",sum); 



async function getdata(url){
    try{

        let data= await fetch(url)
        data = await data.json();
        let a = ""
        for(let i=0;i<data.products.length;i++)
        {
            a+=`<tr><td>${data.products[i].brand}</td><td>${data.products[i].category}</td><td><img height='100' width='100' src=${data.products[i].images[0]}></td></tr>`
            // a+="<tr><td>"+(data.products[i].brand)+"</td><td>"+(data.products[i].category)+"</td><td><img height='100' width='100' src="+data.products[i].images[0]+"></td></tr>"
        }
        document.getElementById("data").innerHTML = a
    }
    catch(error){
        console.log('Error', error)
    }    
}
getdata('https://dummyjson.com/products')