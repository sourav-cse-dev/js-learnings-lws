// Changing DOM elements after selection
// Selection
let headerElement = document.getElementById("header");

// Changing - text content
// textContent is used to set or return the text content of the specified node and all its descendants
// It is a read/write property, so we can change it
headerElement.textContent = "To-Do Apps";
console.log(headerElement.textContent); // To-Do Apps

// Changing - innerText
// innerText is used to set or return the text content of the specified node and all its descendants
// It is a read/write property, so we can change it
// headerElement.innerText = "To-Do Apps2";
// console.log(headerElement.innerText); 
// TO-DO APPs2

// Changing - innerHTML
// innerHTML is used to set or return the HTML content (inner HTML) of an element
// It is a read/write property, so we can change it
// headerElement.innerHTML = "<h1>To-Do Apps3</h1>";
// console.log(headerElement.innerHTML); 
// <h1>To-Do Apps3</h1>

// Styling DOM elements after selection
// Selection
let headerElement2 = document.getElementById("header2");
// Styling
headerElement2.style.color = "red"; // Change text color to red
headerElement2.style.backgroundColor = "blue"; // Change background color to blue
headerElement2.style.fontSize = "20px"; // Change font size to 20px
headerElement2.style.fontWeight = "bold"; // Change font weight to bold
headerElement2.style.textAlign = "center"; // Change text alignment to center
headerElement2.style.border = "2px solid black"; // Add a border
headerElement2.style.padding = "10px"; // Add padding
headerElement2.style.margin = "10px"; // Add margin
headerElement2.style.borderRadius = "5px"; // Add border radius
headerElement2.style.boxShadow = "2px 2px 5px gray"; // Add box shadow
headerElement2.style.textTransform = "uppercase"; // Change text to uppercase
headerElement2.style.textDecoration = "underline"; // Add underline
headerElement2.style.fontFamily = "Arial, sans-serif"; // Change font family
headerElement2.style.lineHeight = "1.5"; // Change line height
headerElement2.style.letterSpacing = "1px"; // Change letter spacing
headerElement2.style.wordSpacing = "2px"; // Change word spacing
headerElement2.style.opacity = "0.8"; // Change opacity
headerElement2.style.transition = "all 0.3s ease"; // Add transition effect
headerElement2.style.cursor = "pointer"; // Change cursor to pointer
headerElement2.style.textShadow = "1px 1px 2px black"; // Add text shadow
headerElement2.style.filter = "blur(2px)"; // Add blur effect
headerElement2.style.transform = "rotate(10deg)"; // Add rotation
headerElement2.style.boxSizing = "border-box"; // Change box sizing
headerElement2.style.display = "flex"; // Change display to flex
headerElement2.style.flexDirection = "column"; // Change flex direction to column
headerElement2.style.justifyContent = "center"; // Change justify content to center
headerElement2.style.alignItems = "center"; // Change align items to center
headerElement2.style.flexWrap = "wrap"; // Change flex wrap to wrap
