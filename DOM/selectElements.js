/*
getElementsByName  - same name ke multiple value select krne ke liye

getElementsByTagName - sare same tag ko select krne ke liye
getElementsByClassName - sari same classes ko select krne ke liye


querySelector - kewal ek matching value select krega
querySelectorAll - sari matching values select krega

querySelector , querySelectorAll se har cheez select kr sakte - (tag , class , id ,pseudo class)

querySelector('h1');
querySelector('#id1');
querySelector('.cls1');
querySelector('h1:nth-child(2)');

// ------------------------------------------------------------------

let ele = document.querySelector('h1');
console.log(ele)
console.log(ele.parentElement)
console.log(ele.parentNode)
console.log(ele.children)
console.log(ele.childNodes)
console.log(ele.nextElementSibling)     // Gives you the next sibling element (skips over text nodes and comments).



ele.children - isse kewal children tags ko select kr skte . return HTMLCollection (HTMLCollection is only html tags)
               (Only includes elements, not text, comments, or whitespace.)

ele.childNodes - Returns a NodeList of all child nodes — text, comment, and element nodes.



// ------------------------------------------------------------------

note - document.querySelector  , DOM se element ko select krta hai

       aur querySelector DOM tree ko traverse krke element ko select krega

*/