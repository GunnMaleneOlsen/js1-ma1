//question 1
const cat = {
    complain : function(){
        console.log("Meow!");
    }
}

//question 2
const heading = document.querySelector("h3");
console.dir(heading);

//question 3
heading.style.fontSize = "2em";

//question 4
heading.classList.add("subheading");
console.log(heading.className);

//question 5
const paragraphs = document.querySelectorAll("p");

//question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerText = `<p> New paragraph </p>`;

//question 7
function catArray(){
    for(let i = 0; i <catArray.length; i++){
        const cats = [
            {
                name: "Blob",
                age: 10
            },
            {
                name: "Harold",
            },
            {
                name: "Blurt",
                age: 21
            }
        ];  
    }
    console.log(catArray.name[0]);
    console.log(catArray.name[1]);
    console.log(catArray.name[2]);
}
catArray(cats);

//question 8
function catLoop(catArray){
    let catsHTML = "";
    for (let i = 0; i <catArray.length; i++) {
        catsHTML += `<h5>${catArray[i].name}</h5>`;
        console.log(catsHTML);
        return catsHTML;
    }
}

//question 9
catLoop(cats); {
    resultsContainer.innerHTML =`<p> new paraghraph </p>`;
    return cats; 
};

//question 10
function catLoop(catArray) {
    catsHTML += `<p>${catArray[i].age}<p>`;
    if (age === false); {
        console.log("Age Unknown");
    }
    
};

const catsWrapper = `<div>
    <h5>${catArray[i].name}</h5>
    <p>${catArray[i].age}</p>
    </div>`;