import { message } from "./component/message.js";

const detailContainer = document.querySelector(".blog-specific");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://blog.gulce.no/wp-json/wp/v2/posts" + "/" + id + "?per_page=100&_embed";

async function getSinglePost() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        createHtml(details);
      
    }
    catch(error) {
        detailContainer.innerHTML = message("error", error);
    }
    
}



getSinglePost();

function createHtml(details) {
    detailContainer.innerHTML = `
    <h1>${details.title.rendered}</h1>
   ${details.content.rendered}
   <div class="modal-section">
    </div>
    `
    const clickImg = document.querySelector("figure img");
            clickImg.addEventListener("click", biggerImg);
}


 function  biggerImg() {
    let postImg = this;   

    const modalSection = document.querySelector(".modal-section");
     
    modalSection.style.display = "flex";
    modalSection.innerHTML = `<img src="${postImg.src}" alt="${postImg.alt}" />`

     document.onclick = function (event) {
        if (event.target === modalSection) {
            modalSection.style.display = "none";
         }
        
    } 
}

