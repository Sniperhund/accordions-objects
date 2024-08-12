/* 

----- Udskriv acoordions via JS: -----
- lav et array med objekter (et objekt for hver accordion)
    - Hvert object skal have følgende keys: title og bodytext 

- for at få dem udskrevet, skal der forEach'es over array'et med objekter
- i forEach'en udskrives html'en hver accordion (inde i ``)




----- Funktionalitet (åbn & lukke): -----
- Hver accordion har class'en .accordion. gem dem ned i en variabel ( brug querySelectorAll), og foreach over dem, så hver enkel kan trykkes på
    - brug e.currentTarget
- husk 'classList.toggle' istedet for 'add'

*/

/*
    <div class="accordion">
        <div class="title">
            <h2>Overskrift</h2>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="panel">
            <p>Brødtekst</p>
        </div>
    </div>
*/

/**
 * @typedef {Object} AccordionData
 * @property {string} title - The title of the accordion
 * @property {string} text - The body text of the accordion
 */

/**
 * @param {AccordionData} accordionData - An accordion
 */
function createAccordion(accordionData) {
    const accordion = document.createElement("div")
    accordion.classList.add("accordion")

    accordion.innerHTML = `
        <div class="title">
            <h2>${accordionData.title}</h2>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="panel">
            <p>${accordionData.text}</p>
        </div>
    `

    document.querySelector(".container").appendChild(accordion)

    accordion.addEventListener("click", (event) => {
        accordion.classList.toggle("active")

        const icon = accordion.querySelector(".fa-solid")

        if (accordion.classList.contains("active")) {
            icon.classList.remove("fa-chevron-down")
            icon.classList.add("fa-chevron-up")
        } else {
            icon.classList.add("fa-chevron-down")
            icon.classList.remove("fa-chevron-up")
        }
    })
}

/**
 * @type {AccordionData[]}
 */
const accordions = [
    {
        title: "Overskrift 1",
        text: "Jeg kan godt lide kage",
    },
    {
        title: "Overskrift 2",
        text: "Især en god drømmekage",
    },
    {
        title: "Overskrift 3",
        text: "Det gør bare hele dagen så meget bedre, medmindre man ikke når at få et stykke :(",
    },
]

accordions.forEach((accordion) => createAccordion(accordion))
