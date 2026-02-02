let topslide = document.getElementById("topslide");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    topslide.style.display = "block";
  } else {
    topslide.style.display = "none";
  } 
});
topslide.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function openAuth() {
  if (auth.style.display === "block") {
    auth.style.display = "none";
  } else {
    auth.style.display = "block";
  }
}
function closeAuth() {
  auth.style.display = "none";
}

// experince ========================
gsap.from(".trainingExp-card", {
  opacity: 0,
  y: 60,
  duration: 1,
});

let sidebor = document.querySelector(".sidebar");
let xmark = document.querySelector(".fa-xmark");
let bars = document.querySelector(".fa-bars");
bars.addEventListener("click", () => {
  sidebor.style.transition='all 0.5s'
  if (sidebor.style.height == "100%") {
    sidebor.style.height = "0%";
  } else {
    sidebor.style.height = "100%";
    bars.style.display = "none";
    xmark.style.display = "block";
    xmark.style.color = "aqua";
  }
});
xmark.addEventListener("click", () => {
  sidebor.style.transition='all 0.5s'
  if (sidebor.style.height == "100%") {
    sidebor.style.height = "0%";
    bars.style.display = "block";
    xmark.style.display = "none";
  } else {
    sidebor.style.height = "100%";
  }
});

let a_links = document.querySelectorAll('.sidebar a')
let about = document.querySelector('.myabout')
function myFunction(x) {
  if (x.matches) {
    about.addEventListener("click", () => {
      if (document.documentElement.scrollTop===0) {
          document.documentElement.scrollTop = 900;
      }
  document.documentElement.scrollTop = 900;
});
    // If media query matches
    xmark.style.display = "none";
    bars.style.display = "block";
    a_links.forEach(A_L => {
  A_L.addEventListener('click',()=>{
     if (sidebor.style.height == "100%") {
      sidebor.style.transition='all 0.5s'
    sidebor.style.height = "0%";
    bars.style.display = "block";
    xmark.style.display = "none";
  } else {
    sidebor.style.height = "100%";

    xmark.style.color = "aqua";
  }
})
  })
  } else {
    xmark.style.display = "none";
    bars.style.display = "none";
  }
}
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 480px)");
// Call listener function at run time
myFunction(x);
// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

sendFeedback.onclick = () => {
  const feedback = {
    name: f_name.value,
    email: f_email.value,
    msg: f_msg.value,
  };
  localStorage.setItem("feedback", JSON.stringify(feedback));
  alert("Thank you for your feedback!");
};
// resume
// Resume links (yahan baad me apna actual link daal dena)
const resumeViewLink =
  "img/Resume.pdf";
const resumeDownloadLink =
  "img/Resume.pdf";

document.getElementById("viewResumeBtn").href = resumeViewLink;
document.getElementById("downloadResumeBtn").href = resumeDownloadLink;

///////////////////////  blog section
let blgData = JSON.parse(localStorage.getItem("blg_learning_data")) || [];
const blgContainer = document.getElementById("blg_entry_container");

function blgRender(filter = "all") {
  blgContainer.innerHTML = "";
  blgData
  .filter((e) => filter === "all" || e.tech === filter)
  .forEach((e) => { 
      const card = document.createElement("div");
      card.className = "blg_card";
      card.innerHTML = `
      <div class="blg_card_head">
      <strong>${e.title} (${e.tech.toUpperCase()})</strong>
      <span>+</span>
      </div>
      <div class="blg_card_body">
      <p>${e.desc}</p>
      <pre><code>${e.code}</code></pre>
      </div>`;
      blgContainer.appendChild(card);
      
  //  let mon =  e.code.replace(/[;:/-]/g, match => {
  //       return `<span style="color:#ff1bf7">${match}</span>`;
  //     });
//     e.code.replace(/[{}.]/g, matche=>{
//   return `<span style="color:yellow">${matche}</span>`;
// })
console.log(e.code);
      card.querySelector(".blg_card_head").onclick = () => {
        const body = card.querySelector(".blg_card_body");
        body.style.display = body.style.display === "block" ? "none" : "block";
      };
    });
}
 


blgRender();

document.getElementById("blg_save_btn").onclick = () => {
  if (!blg_title_input.value || !blg_desc_input.value || !blg_code_input.value)
    return alert("Fill all fields");

  blgData.unshift({
    title: blg_title_input.value,
    tech: blg_tech_select.value,
    desc: blg_desc_input.value,
    code: blg_code_input.value,
  });
  localStorage.setItem("blg_learning_data", JSON.stringify(blgData));
  blgRender();
  blg_title_input.value = blg_desc_input.value = blg_code_input.value = "";
};

document.querySelectorAll(".blg_filter_btn").forEach((btn) => {
  btn.onclick = () => blgRender(btn.dataset.blg);
});
const p = document.getElementById("split");
const text = p.innerText;
p.innerHTML = text
  .split("")
  .map((word) => `<span>${word}</span>`)
  .join("");
gsap.from("#split span", {
  y: 40,
  opacity: 0,
  delay: 1,
  stagger: 0.2,
  duration: 0.4,
});

const herotext = document.querySelector(".herorow1 p");
let alltext = herotext.innerText;
herotext.innerHTML = alltext
.split(" ")
.map((word) => `<span>${word}</span>`)
.join(' ')
gsap.from(".herorow1 p span", {
  opacity: 0,
  stagger: 0.2,
  duration: 0.9,
});

