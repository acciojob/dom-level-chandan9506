//your JS code here. If required.
const level = document.getElementById("level");


const numberOfParents = getNumberOfParents(level);
//alert("the level of the element is: ", numberOfParents);


function getNumberOfParents(level) {
    let count = 0;
    let parent = level.parentElement; // Start with the direct parent of the element

    // Traverse upwards until there are no more parent elements
    while (parent !== null) {
        count++; // Increment the count for each parent element found
        parent = parent.parentElement; // Move to the next parent element
    }

    return count;
	
	
}