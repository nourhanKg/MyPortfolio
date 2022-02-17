//scroll to top btn
//Get the button:
const mybutton = document.getElementById("scroll");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunctionBtn()};

function scrollFunctionBtn() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "flex";
    } else {
    mybutton.style.display = "none";
    }
}

//explore project
//get elements
const overlay = document.getElementById("overlay");
const detailsBtn = document.getElementsByClassName("details");
const closeBtn = document.getElementsByClassName("closed");

let projectDescrip;

function openDetails(e) {
    const projectClicked = e.target;
    const exploreDiv = projectClicked.parentElement;
    const projectCard = exploreDiv.parentElement;
    projectDescrip = projectCard.children[2];
    overlay.classList.toggle("hidden");
    projectDescrip.classList.toggle("hidden");
}

function closeDetails(e) {
    overlay.classList.toggle("hidden");
    projectDescrip.classList.toggle("hidden");
}

for(let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", openDetails);
    closeBtn[i].addEventListener("click", closeDetails);
}
overlay.addEventListener("click", closeDetails);
document.addEventListener("keydown", function(event){
    if(event.key === "Escape") {
        closeDetails();
    }
});

//show more work
const showMoreBtn = document.getElementById("showMore");
const moreWork = document.getElementById("otherWork");

function showMore() {
    moreWork.classList.toggle("hidden");
    moreWork.classList.contains("hidden") ? showMoreBtn.innerHTML = "Show More...." : showMoreBtn.innerHTML = "Show Less....";
}
showMoreBtn.addEventListener("click", showMore);