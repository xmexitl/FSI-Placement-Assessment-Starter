// First, tell us your name
let yourName = "Xochi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let menus = document.querySelectorAll(".menu")
let totalQty = document.querySelector("#qty-total")
const buttons = document.querySelectorAll(".button-container")



//GINGERBREAD
let plusGingerBtn = document.querySelector("#add-gb")//button
let minusGingerBtn = document.querySelector("#minus-gb") //button
let gingerQty = document.querySelector("#qty-gb") //location
gingerBtn = parseInt(buttons.textContent)

plusGingerBtn.addEventListener('click', (e) => {
    gingerPosCount = parseInt(gingerQty.textContent);
    gingerPosCount = gingerPosCount + 1;
    gingerQty.textContent = gingerPosCount;

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount + 1;
    totalQty.textContent = totalQtyCount;
    
});

minusGingerBtn.addEventListener('click', (e) => {
    gingerNegCount = parseInt(gingerQty.textContent);
    gingerNegCount = gingerNegCount - 1;
    if (gingerNegCount === -1) {
        gingerQty.textContent === 0
    } else {
        gingerQty.textContent = gingerNegCount;
    }

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount - 1;
    if (totalQtyCount === -1) {
        totalQty.textContent === 0
    } else {
        totalQty.textContent = totalQtyCount;
    }
});



//CHOC CHIP
let plusChocBtn = document.querySelector("#add-cc")
let minusChocBtn = document.querySelector("#minus-cc")
let chocQty = document.querySelector("#qty-cc")

plusChocBtn.addEventListener('click', (e) => {
    chocPosCount = parseInt(chocQty.textContent);
    chocPosCount = chocPosCount + 1;
    chocQty.textContent = chocPosCount;

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount + 1;
    totalQty.textContent = totalQtyCount;
})

minusChocBtn.addEventListener('click', (e) => {
    chocNegCount = parseInt(chocQty.textContent);
    chocNegCount = chocNegCount - 1;
    if (chocNegCount === -1) {
        chocQty.textContent === 0
    } else {
        chocQty.textContent = chocNegCount;
    }

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount - 1;
    if (totalQtyCount === -1) {
        totalQty.textContent === 0
    } else {
        totalQty.textContent = totalQtyCount;
    }
})

//SUGAR SPRINKLE
let plusSugarBtn = document.querySelector("#add-sugar")
let minusSugarBtn = document.querySelector("#minus-sugar")
let sugarQty = document.querySelector("#qty-sugar")

plusSugarBtn.addEventListener('click', (e) => {
    sugarPosCount = parseInt(sugarQty.textContent);
    sugarPosCount = sugarPosCount + 1;
    sugarQty.textContent = sugarPosCount;

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount + 1;
    totalQty.textContent = totalQtyCount;
})

minusSugarBtn.addEventListener('click', (e) => {
    sugarNegCount = parseInt(sugarQty.textContent);
    sugarNegCount = sugarNegCount - 1;
    if (sugarNegCount === -1) {
        sugarQty.textContent === 0
    } else {
        sugarQty.textContent = sugarNegCount
    };
    totalQty

    totalQtyCount = parseInt(totalQty.textContent);
    totalQtyCount = totalQtyCount - 1;
    if (totalQtyCount === -1) {
        totalQty.textContent === 0
    } else {
        totalQty.textContent = totalQtyCount;
    }
})
