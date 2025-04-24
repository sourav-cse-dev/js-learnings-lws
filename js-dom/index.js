// How is DOM look like
console.dir(document)
console.log(typeof(document))

// Hoe to find the title, URL, domain, head of the DOM
console.log(document.title)
console.log(document.URL);
console.log(document.domain)
console.log(document.head)
console.log(typeof(document.head));
console.log(document.body); // null
console.log(document.html); // undefined

// Manipulationg DOM
document.title = "Play with DOM";

// HTMLAllCollection
// HTMLAllCollection is a collection of all elements in the document
// It is a live collection, meaning that it updates automatically when the document changes
// It is an array-like object, meaning that it has a length property and can be accessed by index
// It is not an array, meaning that it does not have array methods like forEach, map, filter, etc.
// It is not a standard feature of the DOM, but it is supported by most browsers
// It is a legacy feature of the DOM, and it is not recommended to use it in modern web development

console.log(document.all);
console.log(document.all.length);
console.log(typeof(document.all)); // undefined

// It can be looped through using a for loop or for-of loop 
for(let element of document.all){
    console.log(element);
}

// It can be accessed by index
// For example, document.all[3] will return the fourth element in the collection
console.log(document.all[3]); // <html>...</html>

// It can be accessed by name
console.log(document.images);
console.log(document.links);
console.log(document.forms);