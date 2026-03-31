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

*/
