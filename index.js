console.log("Hello")

shownotes()

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', (e) => {
    let titleTxt = document.getElementById("addTitle");
    let paraTxt = document.getElementById("addPara");
    let titles = localStorage.getItem("titles");
    let notes = localStorage.getItem("notes");
    if (notes == null || titles == null) {
        notesOBJ = [];
        titlesOBJ = [];
    }
    else {
        titlesOBJ = JSON.parse(titles)
        notesOBJ = JSON.parse(notes);
    }
    titlesOBJ.push(titleTxt.value)
    notesOBJ.push(paraTxt.value)

    titlesOBJ = JSON.stringify(titlesOBJ)
    notesOBJ = JSON.stringify(notesOBJ)

    localStorage.setItem("titles", titlesOBJ)
    localStorage.setItem("notes", notesOBJ)

    shownotes()
    titleTxt.value = ''
    paraTxt.value = ''

    // console.log(localStorage.getItem("titles")) 
    // console.log(localStorage.getItem("notes")) 

});

function shownotes() {
    let titles = localStorage.getItem("titles")
    let notes = localStorage.getItem("notes");
    let secondcard = document.getElementById("secondcard")
    
    titlesOBJ = JSON.parse(titles);
    notesOBJ = JSON.parse(notes);
    
    if (notes == null && titles == null) {
        notesOBJ = [];
        titlesOBJ = [];
        let HTML = `<div id="secondcardH1">                    
                        <h1>There is nothing to show here, Start by Clicking "Add Note"</h1>
                        <h1> You can Add any Title and then type in your note and then click "Add Note" </h1>
                     </div>`
        secondcard.innerHTML = HTML
    }
    else if(notesOBJ.length == 0 && titlesOBJ.length == 0){
        notesOBJ = [];
        titlesOBJ = [];
        HTML = `<div id="secondcardH1">                    
                            <h1>There is nothing to show here, Start by Clicking "Add Note"</h1>
                            <h1> You can Add any Title and then type in your note and then click "Add Note" </h1>
                         </div>`
        secondcard.innerHTML = HTML
        
    }   
    else {

        titlesOBJ = JSON.parse(titles);
        notesOBJ = JSON.parse(notes);

        let setting = document.getElementById("footer");      

        // console.log(titlesOBJ)
        // console.log(notesOBJ)
        let HTML = ''
        // console.log(titlesOBJ[0])
        for (key in titlesOBJ) {
            HTML += `<div class="inputCard">
        <h1>${titlesOBJ[key]}</h1>
        <p>${notesOBJ[key]}</p>
        <button class="inputTxt button" onclick="remove(${key})">Delete</button>
        </div> `
        }
        secondcard.innerHTML = HTML

    }

}



function remove(key) {
    console.log(`the key is ${key}`)
    let titles = localStorage.getItem("titles")
    let notes = localStorage.getItem("notes");
    if (notes == null || titles == null) {
        notesOBJ = [];
        titlesOBJ = [];
    }
    else {
        titlesOBJ = JSON.parse(titles)
        notesOBJ = JSON.parse(notes);
        console.log(notesOBJ)
        titlesOBJ.splice(key, 1)
        notesOBJ.splice(key, 1)
        console.log(notesOBJ)

        titlesOBJ = JSON.stringify(titlesOBJ)
        notesOBJ = JSON.stringify(notesOBJ)

        localStorage.setItem("titles", titlesOBJ)
        localStorage.setItem("notes", notesOBJ)

        
    }
    shownotes()
}


// ----------------------------------------------------------



let searchTxt = document.getElementById("searchTxt")
let inputCard = document.getElementsByClassName("inputCard")

searchTxt.addEventListener("input",()=>{
    console.log(searchTxt.value)
    let searchTxtVal = searchTxt.value.toLowerCase()
    

    for (let key = 0; key < inputCard.length; key++) {
        let inputCardTxt = inputCard[key].firstElementChild.innerText.toLowerCase()
        console.log('javascript'.includes(searchTxtVal))
        // console.log(inputCard[key].firstElementChild.innerText)
        if( inputCardTxt.includes(searchTxtVal))
        {
            inputCard[key].style.display = 'block';
        }
        else{
            inputCard[key].style.display = 'none';
        }
        
    }
}) 

// 

// for (let j = 0; j < b.length; j++) {
//     // console.log(a[i])
//     for (let i = 0; i < a.length; i++) {
//         if(b[j]==a[i]){
//             console.log(b[j])
//         }
        
//     }    
// }

// -------------------------------------------------------------------------





// searchTxt.addEventListener("input",()=>{
    //     console.log(searchTxt.value)
    //     let searchTxtVal = searchTxt.value.toLowerCase()  
    //     let a = Array.from(searchTxtVal)
    //     console.log(a)
    //     for (let i = 0; i < inputCard.length; i++) {
    //         let inputCardTxt = inputCard[i].firstElementChild.innerText.toLowerCase()
    //         b = Array.from(inputCardTxt)
    //         console.log(b)
    //         let d = []
    //         c= a.toString()
    //         console.log(c)
    //         d = b.toString()
    //         console.log(d)
    
    //         for(key in a){
    //             for(bKey in b ){
    //                 console.log(a.length)
    //                 if(c==d){
    //                     console.log("kkk")
    //                     inputCard[i].style.display = 'block';
    //                     break
    //                 }
    
    //                 else if (a[key] == (b[bKey]) || c.length == 0) {
    //                     console.log("hurray")
    //                     inputCard[i].style.display = 'block';
    //                     break
    //                 }
    //                 else {
    //                     inputCard[i].style.display = 'none';
                        
    //                 }
    //                 continue
    //                 // break
    
    //             }
    //         }
    //      }
    
    // })