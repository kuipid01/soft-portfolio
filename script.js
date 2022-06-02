const iconHandle = document.querySelectorAll(".skill")
const linkLi = document.querySelectorAll(".navli")
const hamburgerHandle = document.getElementById("habOpen");
const ulLinks = document.querySelector(".links__ul")
const ulLinkClose = document.querySelector(".close")
iconHandle.forEach(icon => {
    icon.addEventListener('click',() => {
        
        const mainDesc = icon.lastElementChild;
        mainDesc.classList.toggle("active")
    })
})
hamburgerHandle.addEventListener('click', () => {
   ulLinks.style.display="flex";
   ulLinkClose.style.display="flex";
   hamburgerHandle.style.display="none"
})
ulLinkClose.addEventListener('click', () => {
    
     ulLinks.style.display="none";
     ulLinkClose.style.display="none";
     hamburgerHandle.style.display="flex"
 })
linkLi.forEach(link => {
    link.addEventListener("click", () => {
        
        ulLinks.style.display="none";
        ulLinkClose.style.display="none";
        hamburgerHandle.style.display="flex"
    })
})