console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const elementValue = document.querySelector(".value");
console.log(elementValue);

const elementArea = document.querySelector(".area-display.stat");
console.log(elementArea);

// // Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// // Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// // Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }

  for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }

  const allDivValues = document.querySelectorAll(".value");
  console.log(allDivValues);

  const allAreasOnPage = document.querySelectorAll(".area-display.stat");
  for (let i=0; i < allAreasOnPage.length; i++) {
    const area = allAreasOnPage[i];
    console.log(area);
  }
  