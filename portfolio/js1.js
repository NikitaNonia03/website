
let options={
  startAngle:-1.55,
  size:150,
  value:0.85,
  fill:{gradient:["#a445b2", "#fa4299"]}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event,progress,stepValue){
 $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2))+"%")
});
$(".js .bar").circleProgress({
  value:0.70
})
$(".php .bar").circleProgress({
  value:0.60
})
 const sr=ScrollReveal({
                     origin:top,
                     distance:'80px',
                     duration:2000,
                     reset:true
 })
sr.reveal('.text',{delay:200})
 sr.reveal('.profile',{delay:200})
 sr.reveal('#about',{delay:200})
sr.reveal('.about-col-1',{delay:200})
sr.reveal('.about-col-2',{delay:200})
sr.reveal('#skill',{delay:200})
 sr.reveal('.professional-skill',{delay:200})
 sr.reveal('.card',{delay:200})
 sr.reveal('#heading',{delay:200})
sr.reveal('.work',{delay:200})
sr.reveal('#contact',{delay:200})

var sidemeu=document.getElementById("sidemenu");
function openmenu(){
  sidemeu.style.right = "0";
}
function closemenu(){
  sidemeu.style.right = "-400px";
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNnThJqLA8uT6nXytnU12IWAk0zffvls0jF9xk23y6CH7BktQfw6elfAde8NX8G_P9Eg/exec'
  const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent sucessfully";
        setTimeout(function(){
          msg.innerHTML="";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
