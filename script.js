// below code is from vertical tabs tutorial
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}
document.getElementById("defaultOpen").click();

// below code is from read more tutorial
function milkFunction() {
    var dotsMilk = document.getElementById("dotsMilk");
    var moreMilk = document.getElementById("moreMilk");
    var milkText = document.getElementById("milkButton");
    if (dotsMilk.style.display === "none") {
        dotsMilk.style.display = "inline";
        milkText.innerHTML = "Read more";
        moreMilk.style.display = "none";
    } else {
        dotsMilk.style.display = "none";
        milkText.innerHTML = "Read less";
        moreMilk.style.display = "inline";
    }
}

function cheeseFunction() {
    var dotsCheese = document.getElementById("dotsCheese");
    var moreCheese = document.getElementById("moreCheese");
    var cheeseText = document.getElementById("cheeseButton");
    if (dotsCheese.style.display === "none") {
        dotsCheese.style.display = "inline";
        cheeseText.innerHTML = "Read more";
        moreCheese.style.display = "none";
    } else {
        dotsCheese.style.display = "none";
        cheeseText.innerHTML = "Read less";
        moreCheese.style.display = "inline";
    }
}

function creamFunction() {
    var dotsCream = document.getElementById("dotsCream");
    var moreCream = document.getElementById("moreCream");
    var creamText = document.getElementById("creamButton");
    if (dotsCream.style.display === "none") {
        dotsCream.style.display = "inline";
        creamText.innerHTML = "Read more";
        moreCream.style.display = "none";
    } else {
        dotsCream.style.display = "none";
        creamText.innerHTML = "Read less";
        moreCream.style.display = "inline";
    }
}

// I added two more of the code, and changed the variables so that the "read more" button would work for all three tabs.