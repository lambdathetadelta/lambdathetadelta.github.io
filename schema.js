"use strict";
// Contacts kept in here for easier editing
// document.write(`
// <script type="application/ld+json">
// {
//     "@context": "https://schema.org/",
//     "@type": "Organization",
//     "contactPoint": [
//         {
//             "@type" : "ContactPoint",
//             "telephone" : "+1-510-846-8127",
//             "contactType" : "membership inquiries",
//             "areaServed" : "US",
//             "availableLanguage" : "English"
//         } ,
//         {
//             "@type" : "ContactPoint",
//             "telephone" : "+1-626-518-2022",
//             "contactType" : "membership inquiries",
//             "areaServed" : "US",
//             "availableLanguage" : "English"
//         } ,
//         {
//             "@type" : "ContactPoint",
//             "telephone" : "+1-702-686-3501",
//             "contactType" : "membership inquiries",
//             "areaServed" : "US",
//             "availableLanguage" : "English"
//         } ,
//         {
//             "@type" : "ContactPoint",
//             "telephone" : "+1-646-345-3790",
//             "contactType" : "membership inquiries",
//             "areaServed" : "US",
//             "availableLanguage" : "English"
//         } 
//     ]
// }
// </script>
// `);

const supplementaryData = {
    "@context": "https://schema.org/",
    "@type": "Organization",
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
            "telephone" : "+1-646-345-3790",
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