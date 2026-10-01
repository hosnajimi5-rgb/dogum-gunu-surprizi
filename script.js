
function hearts(){
 for(let i=0;i<7;i++){
  const h=document.createElement("div"); h.className="heart";
  h.textContent=["❤️","💖","💕","✨","🤍"][Math.floor(Math.random()*5)];
  h.style.left=Math.random()*100+"vw"; h.style.fontSize=(18+Math.random()*20)+"px";
  h.style.animationDuration=(3+Math.random()*3)+"s"; document.body.appendChild(h);
  setTimeout(()=>h.remove(),6500);
 }
}
function openGift(){
 const gift=document.getElementById("gift"), secret=document.getElementById("secret");
 gift.textContent="🎉";
 gift.style.animation="pop .5s ease";
 secret.style.display="block";
 secret.innerHTML="🎁 Asıl hediyen bir sonraki sayfada...<br><a class='btn' href='final.html'>💌 Mektubu Aç</a>";
 for(let i=0;i<35;i++){
  const c=document.createElement("div"); c.className="confetti"; c.textContent=["🎉","🎊","✨","🤍","🥳"][Math.floor(Math.random()*5)];
  c.style.left=Math.random()*100+"vw"; c.style.animationDelay=Math.random()+"s";
  document.body.appendChild(c); setTimeout(()=>c.remove(),4000);
 }
}
setInterval(hearts,1800); hearts();
