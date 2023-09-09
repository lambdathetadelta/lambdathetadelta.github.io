"use strict";

const supplementaryData = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "name": "Lambda Theta Delta",
    "alternateName": "LTD",
    "contactPoint": [
        {
            "@type" : "ContactPoint",
            "telephone" : "+1-510-846-8127",
            "contactType" : "membership inquiries",
            "areaServed" : "US",
            "availableLanguage" : "English"
        } ,
        {
            "@type" : "ContactPoint",
            "telephone" : "+1-626-518-2022",
            "contactType" : "membership inquiries",
            "areaServed" : "US",
            "availableLanguage" : "English"
        } ,
        {
            "@type" : "ContactPoint",
            "telephone" : "+1-702-686-3501",
            "contactType" : "membership inquiries",
            "areaServed" : "US",
            "availableLanguage" : "English"
        } ,
        {
            "@type" : "ContactPoint",
            "telephone" : "+1-714-588-9737",
            "contactType" : "membership inquiries",
            "areaServed" : "US",
            "availableLanguage" : "English"
        } 
    ]
};
  
const contactElement = document.createElement("script");

contactElement.type = "application/ld+json";
contactElement.textContent = JSON.stringify(supplementaryData);
  
document.head.appendChild(contactElement);

const faviconElement = document.createElement("link")
faviconElement.type = "image/png";
faviconElement.rel = "link";
faviconElement.href = "imgs/LTDCrestWhiteV1.png";

document.head.appendChild(faviconElement);