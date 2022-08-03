let div = document.createElement("div");
div.style.height="360px";
div.style.width="960px";
div.innerHTML="<strong>960 x 360px</strong>";
div.classList.add("big-div")

document.body.append(div);

let wrapper=document.createElement("div")
wrapper.classList.add("wrapper")
document.body.append(wrapper)

 

let main1=document.createElement("div")
main1.classList.add("first-main")
document.body.append(main1);

let div2=document.createElement("div");
div2.style.height="180px";
div2.style.width="290px";
div2.innerHTML="<strong>290 x 180px</strong>";
div2.classList.add("small-div");


document.body.append(div2);



let texts=document.createElement("div")
texts.style.height="100px"
texts.style.width="270px"


document.body.append(texts)
let title=document.createElement("p");
title.innerHTML="<em>Picture text</em>";

let text=document.createElement("p");
text.innerHTML="Random text about the picture ";

let text2=document.createElement("p");
text2.innerText="Read More >>"
text2.style.color="orange"



texts.append(title,text,text2)

main1.append(div2,texts)



let main2=document.createElement("div")
main1.classList.add("second-main")
document.body.append(main2);

let div3=document.createElement("div");
div3.style.height="180px";
div3.style.width="290px";
div3.innerHTML="<strong>290 x 180px</strong>";
div3.classList.add("small-div");
document.body.append(div3);

let texts2=document.createElement("div")
texts2.style.height="100px"
texts2.style.width="270px"

let title2=document.createElement("p");
title2.innerHTML="<em>Picture text</em>";

let text3=document.createElement("p");
text3.innerHTML="Random text about the picture ";

let text4=document.createElement("p");
text4.innerText="Read More >>"
text4.style.color="orange"


texts2.append(title2,text3,text4)

main2.append(div3,texts2)


let main3=document.createElement("div")
main3.classList.add("second-main")
document.body.append(main3);



let div4=document.createElement("div");
div4.style.height="180px";
div4.style.width="290px";
div4.innerHTML="<strong>290 x 180px</strong>";
div4.classList.add("small-div");
document.body.append(div4);
 
let texts3=document.createElement("div")
texts3.style.height="100px"
texts3.style.width="270px"


let title3=document.createElement("p");
title3.innerHTML="<em>Picture text</em>";

let text5=document.createElement("p");
text5.innerHTML="Random text about the picture ";

let text6=document.createElement("p");
text6.innerText="Read More >>"
text6.style.color="orange"

texts3.append(title3,text5,text6)

main3.append(div4,texts3)


wrapper.append(main1,main2,main3)















