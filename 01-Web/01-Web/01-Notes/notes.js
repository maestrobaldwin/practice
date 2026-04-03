/* creating the input of an interactive web page, create variable input 
vocabulary: 
1. let = variable declaration 
2. const = constant declaration 
3. boolean = true/false values 
4. string = text values
5. number = numerical values
6. function = a block of code that performs a specific task
7. console.log() = a method used to print output to the console
8. if / else statement = a control flow statement that executes different code based on a condition
9. && = logical AND operator, used to combine multiple conditions
10. === equals
11. <= or >=
12. || = logical OR operator, used to combine multiple conditions
13. const resultElement = document.getElementById("result"); = selects an element from the HTML document with the id "result" and assigns it to the variable resultElement
    it allows you to manipulate the content of that HTMLelement using JavaScript
    the HTML element can have text or not - and when the results of the javascript populate via the ID, it appears on the webpage
14. .innerHTML = a property that allows you to get or set the HTML content of an element
    console.log (element.innerHTML) = prints in the console the current property of the HTML element
15. querySelector() = a method that returns the first element that matches a specified CSS selector(s) in the document
    We can use querySelector to select elements based on their class, id, or other attributes. For example, document.querySelector(".my-class") would select the first element with the class "my-class". This method is useful for selecting elements that may not have a unique id or for selecting elements based on their position in the DOM.
    We use . for class and # for id when using querySelector. For example, document.querySelector("#my-id") would select the element with the id "my-id".
    querySelector only returns the first matching element. If there are multiple elements that match the selector, only the first one will be returned. If you want to select all matching elements, you can use the querySelectorAll() method instead.
16. If there a multiple classes with the same name, you can speccify the class with the appropriate element.
    p.prompt = the paragraph with class prompt
    To access a class with two prompts we use ".class1.class2"
17. variable_name.lenght generates the length of the element in the html page
18. getElementsByTagName () links to the HTML tag names
19. getElementsByClassName () links to the HTLM class names
20. querySelectorAll() - gets array-like lists of all elements
    Great thing about querySelectorAll() it works with class and tag
    Can look for tag or class of multiple elements
    querySelectorAll(".movie, .tech, .school") looks for any/all of those tags/classes in the elements
    can also look for IDs (".tag, .class, h3")
    getElementsByClassName - ("class_name") no .
    getELementById ("id_name")
    getELementsByTagName("tag_name")
    when using querySelector(".class #id tag")
    tags don't require identifies (#, .)
    id = #
    class = .
21. el[0] will return the first element in an array
    Ex. p.innerText = el[2].innerHTML will display the 3rd item in the el array
22. ".sport.news" searches for the element with tag/class combination (no , to seperate them)
23. document.getElementById("name").innerHTML = "Updated Text" --> links the HTML document section to the javascript and .innerHTML chances the element
24. .setAttribute("src", "https://xxxxxx"); - changes the listed attribute to the new link
25. To selected a section of the HTML and set it to a specific text:
    document.querySelector("p").innerHTML = "Text" --> This doesn't create a variable, just the text assigned to the tag.
26. const usernname = document.getElementById("username").value; --> this creates a variable that is linked to the input field in the HTML document. The .value property allows you to get the current value of the input field, which can be used in your JavaScript code for further processing or manipulation.
    Example:   
    function register() {
        const paragraph = document.querySelector("p");
        const username = document.getElementById("username").value;
        paragraph.innerHTML = username;
        }
27. We can change/update attributes in javascript
    Example:
    function changeAttribute() {
        const el = document.querySelector("img");
        el.src = "https://www.example.com/new-image.jpg";
}
    This function retreives the src of the image element on the html page, then the function changes that image src to the new link provided.

28. We can also change input types in javascript
    Example:
    function chnageQuestionType() {
        const el = document.querySelector("input");
        el.type = "checkbox";
    }   
        This function retreives the input element on the html page, then the function changes that input type to a checkbox. This can be used to change the type of input based on user interaction or other conditions in your JavaScript code.

29. We can also change the style of a website by linking to a new or existing css file.
    Example:
    function addStyleSheet() {
        const el = document.querySelector("link"); --> this selects the link element in the HTML document, which is used to link to external stylesheets.
        el.href = "style.css"; --> this changes the href attribute of the link element to "style.css", which is the name of the new stylesheet you want to apply to the webpage. This allows you to dynamically change the styling of your webpage by linking to different CSS files based on user interaction or other conditions in your JavaScript code.
}
30. .innerText = a property that allows you to get or set the text content of an element, without including any HTML tags. This is useful when you want to manipulate the text content of an element without affecting its structure or styling. For example, if you have a paragraph element with some text and you want to update that text, you can use the innerText property to set the new text value while keeping the existing HTML structure intact.
31. set a constant variable to =document.querySelector("img") --> this creates a constant variable that is linked to the image element in the HTML document. By using querySelector, you can select the first image element on the page and assign it to the variable. This allows you to manipulate the properties of that image element, such as changing its source or alt text, using JavaScript.
    then use the variable plus .src to change the image source to a new link. This is a common way to dynamically update the content of a webpage based on user interaction or other conditions in your JavaScript code.
    Example:
    const imageElement = document.querySelector("img");
    imageElement.src = "https://www.example.com/new-image.jpg";

    This works with any tag, not just images. You can select any element using querySelector and then manipulate its properties accordingly.
    "input" - then update the type & placeholder to change the input type and placeholder text
    "link" - then update the href to change the stylesheet
        variable.href="style.css";
    "a" - then update the href to change the link destination
    "img" - then update the src to change the image source
32. img.getAttribute("src") - this retrieves the current value of the src attribute of the image element. This can be useful for checking the current image source before updating it or for other logic in your JavaScript code.
33. setAttribute() - this method allows you to set the value of an attribute for a specified element. For example, if you want to change the source of an image, you can use the setAttribute method like this:
    const imageElement = document.querySelector("img");
    imageElement.setAttribute("src", "https://www.example.com/new-image.jpg");
    This will change the src attribute of the image element to the new URL provided. The setAttribute method can be used to change any attribute of an element, such as href for links, type for inputs, or even custom data attributes.
    - in setAttribute("attribute_name", "new_value")
    - const el = document.querySelector("tag_name"); --> this selects which tag we are looking for.
    - const imageStyle = el.getAttribute("style"); --> this retrieves the current value of the style attribute of the selected element. This can be useful for checking the current styling of an element before updating it or for other logic in your JavaScript code.
    - document.querySelector("p").innerText = imageStyle; --> this sets the text content of the first paragraph element to the value of the imageStyle variable, which contains the current style attribute of the selected element. This allows you to display the current styling information on the webpage for debugging or informational purposes.



*/