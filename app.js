let BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

    let msg=document.querySelector(".msg");
let i=0;
for(let select of dropdowns){
    for(currCode in countryList){
    // console.log(currCode,countryList[code]);
    let newOption=document.createElement("option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    if(select.name==="from"&& currCode==="USD"){
        newOption.selected="selected";
    }else if(select.name ==="to"&&currCode ==="INR"){
        newOption.selected="selected";
    }
     select.append(newOption);
}


select.addEventListener("change",(evt)=>{
  updateFlag(evt.target);
});
}
const updateFlag=(element)=>{
    let currCode=element.value;
    // console.log(currCode);
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amVal=amount.value;
     if(amVal==="" || amVal<0){
        amVal=1;
        amount.value="1";
     }
     console.log(fromCurr.value,toCurr.value);
     const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

      let response= await fetch(URL);
      let data=await response.json();
    //   let rate=data[toCurr.value.toLowerCase()];
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
      console.log(rate);    
     let finalAmount=amVal*rate;
     msg.innerText=`${amVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    });

