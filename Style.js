// console.log("Style.css")

// let socialMedia = document.getElementById("socialMedia").firstElementChild
// let socialMediaUl = document.querySelector(".socialMediaUl")
// console.log(socialMedia)
// socialMedia.addEventListener('click',(e)=>{
//     socialMediaUl.classList.toggle("socialMediaDisplay")
// })





let socialMedia = document.getElementById("aSocialMedia")
let socialMediaUl = document.querySelector(".socialMediaUl")
document.addEventListener('click',(e)=>{
    // console.log(e.target.id)
    let aID = e.target.id
    if(aID =="aSocialMedia" || aID=="socialMedia"){
        socialMediaUl.classList.toggle("socialMediaDisplay")
    }
    else{
        socialMediaUl.classList.remove("socialMediaDisplay")
    }
})
