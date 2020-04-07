const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVIGATION MENU

const navAnchorTags = document.querySelectorAll("nav a");
const navContents = Object.values(siteContent.nav);

function navigationLoop(){
  for (let i = 0; i < navAnchorTags.length; i++) {
    navAnchorTags[i].textContent = navContents[i];

  }
}
navigationLoop();

//CTA TEXT - BUTTON - CIRCLE IMAGE

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta.h1;

let ctaButtonText = document.querySelector("button");
ctaButtonText.textContent = siteContent.cta.button;

let ctaImage = document.querySelector("#cta-img");
ctaImage.src = "img/header-img.png"; //how do I set the src using the variables



//TOP CONTENT H4 TAGS

let h4Tags = document.querySelectorAll("h4");
h4Tags[0].textContent = siteContent["main-content"]["features-h4"];
h4Tags[1].textContent = siteContent["main-content"]["about-h4"];
h4Tags[2].textContent = siteContent["main-content"]["services-h4"];
h4Tags[3].textContent = siteContent["main-content"]["product-h4"];
h4Tags[4].textContent = siteContent["main-content"]["vision-h4"];

























console.log(h4Tags);
