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

  const descriptions = document.querySelectorAll(".description-display");

  // for (let desc of descriptions.values()) {
  //   let content = desc.innerText;
  //   console.log(content);
  // }

  // for (let desc of descriptions.values()) {
  //   let content = desc.innerText;

  //   if (content.length > 250) {
  //     content = content.slice(0, 250);
  //     content = content + "...";
  //   }
  //   console.log(content);
  // }

  // for (let desc of descriptions.values()) {
  //   let content = desc.innerText;
  
  //   if (content.length > 250) {
  //     content = content.slice(0, 250);
  //     content = content + "...";
  //   }
  
  //   desc.innerText = content;
  //   console.log(desc.innerText);
  // }

  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    // desc.innerText = content;
    desc.innerHTML = content;
    console.log(desc.innerHTML);
  }

  const ratings = document.querySelectorAll(".rating-display .value");

  for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

//To create a new element with text:
//First, select the parks on the page using the park class as a selector:
const parks = document.querySelectorAll(".park-display");

//get the number of parks using the length property of the list:
const numberParks = parks.length;

//create a new element. In this case, you should use a <div>:
const newElement = document.createElement("div");

//set the text of this element with the innerText property
newElement.innerText = `${numberParks} exciting parks to visit`;

//add header_statement style in css file and then add this class to the new element, as follows:
newElement.classList.add("header-statement");

//Add the new element to the page/DOM. To add:
//select the <header> element and use the appendChild() method to add the new element to the <header>
const header = document.querySelector("header");
header.appendChild(newElement);

// //Removing DOM elements / removing the first park from the page
// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);

  