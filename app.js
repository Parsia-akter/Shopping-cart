function incrimentDecriment(productName,price,isIncrement)
{   
    let input= document.getElementById(productName+'-input')
    let inputValue=input.value
    if(isIncrement)
    {
        inputValue=parseInt(inputValue)+1
    }
    else if(inputValue>0)
    {
        inputValue=parseInt(inputValue)-1
    }
    input.value=inputValue;

    let productPrice = document.getElementById(productName+'-price')
    productPrice.innerText=price*inputValue
    calcuculation();
}
function getInput(productName)
{
    return input=document.getElementById(productName+'-price').innerText
}
function calcuculation()
{
    const phonePrice=getInput('phone')
    const casePrice=getInput('case')
    const subtotal=phonePrice+casePrice
    const tax=(subtotal*1)/100;
    const totalPrice= parseInt(subtotal) + parseFloat(tax) ;
    document.getElementById('subtotal').innerText=subtotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('total').innerText=totalPrice;
}

document.getElementById('case-plus').addEventListener('click',function()
{
  incrimentDecriment('case',59,true);   
})
document.getElementById('case-minus').addEventListener('click',function()
{   
   incrimentDecriment('case',59,false)  
})
document.getElementById('phone-plus').addEventListener('click',function()
{
    incrimentDecriment('phone',1200,true)
})
document.getElementById('phone-minus').addEventListener('click',function()
{
    incrimentDecriment('phone',1200,false)
})