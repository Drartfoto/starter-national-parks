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

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event);
// });

// firstBtn.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Select the `nameSorter` link
//const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
// nameSorter.addEventListener("click", (event) => { // log in the console blinks for a moment and then disappears.
//   console.log("You clicked the name sorter");
// });

// nameSorter.addEventListener("click", (event) => { // prevents console from blicking and instead it directs you to follow the link that was clicked.
//   event.preventDefault();
//   console.log("You clicked the name sorter");
// });

// //building the event handler step by step for name.
// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1. Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

//building the event handler step by step for name.
// Select the `ratingSorter` link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();

// 1. Get the main element
  const main = document.querySelector("main");

// 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

// 3. Empty the main element
  main.innerHTML = "";

// 4. Create an array
  const parksArray = Array.from(parksList);

// 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

// 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

// console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

const favoriteButtonClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = "#c8e6c9";
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
// const main = () => {
//   // select the nameSorter link
//   const nameSorter = document.querySelector("#name-sorter");

//   // add an event listener
//   nameSorter.addEventListener("click", nameSorterClickHandler);

//   // select the ratingSorter link
//   const ratingSorter = document.querySelector("#rating-sorter");

//   // add an event listener
//   ratingSorter.addEventListener("click", ratingSorterClickHandler);

//   // select all the buttons for all the parks
//   const allBtns = document.querySelectorAll(".rate-button");

//   // iterate the list of buttons and add an event handler to each
//   allBtns.forEach((btn) => {
//     btn.addEventListener("click", favoriteButtonClickHandler);
//   });
// };

// Add event listener for DOMContentLoaded
//window.addEventListener("DOMContentLoaded", main);

// Form Submission
const submitHandler = (event) => {
  event.preventDefault();
  console.log("The form was submitted");
};

const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);
