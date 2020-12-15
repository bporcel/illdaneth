////////EVENT LISTENERS/////////////////////////////////////////////////
//to avoid errors, wait until it is loaded to add the listeners
window.addEventListener("load", () => {
    //Listeners for Level 0 buttons -> display L1 items
    document.getElementById("I1").addEventListener("click", () => dropL1("I1-Div"));
    document.getElementById("I2").addEventListener("click", () => dropL1("I2-Div"));
    document.getElementById("I3").addEventListener("click", () => dropL1("I3-Div"));

    //Listeners for Item 1 tree - Raza
    //Level 1 -> display L2 items
    document.getElementById("I1.1").addEventListener("mouseover", () => dropL2("I1.1-Div","Item1Tree"));
    document.getElementById("I1.2").addEventListener("mouseover", () => dropL2("I1.2-Div","Item1Tree"));
    document.getElementById("I1.3").addEventListener("mouseover", () => dropL2("I1.3-Div","Item1Tree"));
    
    //Level 2 ->display L3 items
    document.getElementById("I1.1.1").addEventListener("mouseover", () => dropL3("I1.1.1-Div", "I1.1-Div", "Item1Tree"));
    document.getElementById("I1.1.2").addEventListener("mouseover", () => dropL3("I1.1.2-Div", "I1.1-Div", "Item1Tree"));
    document.getElementById("I1.1.3").addEventListener("mouseover", () => dropL3("I1.1.3-Div", "I1.1-Div", "Item1Tree"));

    document.getElementById("I1.2.1").addEventListener("mouseover", () => dropL3("I1.2.1-Div", "I1.2-Div", "Item1Tree"));
    document.getElementById("I1.2.2").addEventListener("mouseover", () => dropL3("I1.2.2-Div", "I1.2-Div", "Item1Tree"));
    document.getElementById("I1.2.3").addEventListener("mouseover", () => dropL3("I1.2.3-Div", "I1.2-Div", "Item1Tree"));

    document.getElementById("I1.3.1").addEventListener("mouseover", () => dropL3("I1.3.1-Div", "I1.3-Div", "Item1Tree"));
    document.getElementById("I1.3.2").addEventListener("mouseover", () => dropL3("I1.3.2-Div", "I1.3-Div", "Item1Tree"));
    document.getElementById("I1.3.3").addEventListener("mouseover", () => dropL3("I1.3.3-Div", "I1.3-Div", "Item1Tree"));

    //Listeners for Item 2 tree - Reinos
    //Level 1 -> display L2 items
    document.getElementById("I2.1").addEventListener("mouseover", () => dropL2("I2.1-Div","Item2Tree"));
    document.getElementById("I2.2").addEventListener("mouseover", () => dropL2("I2.2-Div","Item2Tree"));
    document.getElementById("I2.3").addEventListener("mouseover", () => dropL2("I2.3-Div","Item2Tree"));

    //Level 2 ->display L3 items
    document.getElementById("I2.1.1").addEventListener("mouseover", () => dropL3("I2.1.1-Div", "I2.1-Div", "Item2Tree"));
    document.getElementById("I2.1.2").addEventListener("mouseover", () => dropL3("I2.1.2-Div", "I2.1-Div", "Item2Tree"));
    //document.getElementById("I2.1.3").addEventListener("mouseover", dropI2_1_3);

    document.getElementById("I2.2.1").addEventListener("mouseover", () => dropL3("I2.2.1-Div", "I2.2-Div", "Item2Tree"));
    document.getElementById("I2.2.2").addEventListener("mouseover", () => dropL3("I2.2.2-Div", "I2.2-Div", "Item2Tree"));
    document.getElementById("I2.2.3").addEventListener("mouseover", () => dropL3("I2.2.3-Div", "I2.2-Div", "Item2Tree"));

    document.getElementById("I2.3.1").addEventListener("mouseover", () => dropL3("I2.3.1-Div", "I2.3-Div", "Item2Tree"));
    document.getElementById("I2.3.2").addEventListener("mouseover", () => dropL3("I2.3.2-Div", "I2.3-Div", "Item2Tree"));
    document.getElementById("I2.3.3").addEventListener("mouseover", () => dropL3("I2.3.3-Div", "I2.3-Div", "Item2Tree"));

    //Listeners for Item 3 tree - //Religiones
    //Level 1 -> display L2 items
    document.getElementById("I3.1").addEventListener("mouseover", () => dropL2("I3.1-Div","Item3Tree"));
    document.getElementById("I3.2").addEventListener("mouseover", () => dropL2("I3.2-Div","Item3Tree"));
    document.getElementById("I3.3").addEventListener("mouseover", () => dropL2("I3.3-Div","Item3Tree"));

    //Level 2 ->display L3 items
    document.getElementById("I3.1.1").addEventListener("mouseover", () => dropL3("I3.1.1-Div", "I3.1-Div", "Item3Tree"));
    document.getElementById("I3.1.2").addEventListener("mouseover", () => dropL3("I3.1.2-Div", "I3.1-Div", "Item3Tree"));
    document.getElementById("I3.1.3").addEventListener("mouseover", () => dropL3("I3.1.3-Div", "I3.1-Div", "Item3Tree"));

    document.getElementById("I3.2.1").addEventListener("mouseover", () => dropL3("I3.2.1-Div", "I3.2-Div", "Item3Tree"));
    document.getElementById("I3.2.2").addEventListener("mouseover", () => dropL3("I3.2.2-Div", "I3.2-Div", "Item3Tree"));
    document.getElementById("I3.2.3").addEventListener("mouseover", () => dropL3("I3.2.3-Div", "I3.2-Div", "Item3Tree"));

    document.getElementById("I3.3.1").addEventListener("mouseover", () => dropL3("I3.3.1-Div", "I3.3-Div", "Item3Tree"));
    document.getElementById("I3.3.2").addEventListener("mouseover", () => dropL3("I3.3.2-Div", "I3.3-Div", "Item3Tree"));
    document.getElementById("I3.3.3").addEventListener("mouseover", () => dropL3("I3.3.3-Div", "I3.3-Div", "Item3Tree"));
}, { once: true });
////////EVENT AND LISTENERS-------------------------------------------------

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtndos')) {
        clearNavBar();
    }
}

//Handler for level 0 buttons -> display Level 1 items
// When the user clicks on the button, toggle between hiding and showing the dropdown content
function dropL1(Item) {
    //clear the navigation bar of any visible dropdown menus
    clearNavBar();
    //and display the clicked menu
    document.getElementById(Item).classList.toggle("show");
}
//Handler for level 1 items -> display Level 2 items
//when the user hovers over a level 1 item, display its corresponding items
function dropL2(Item, ItemTree) {
    //clear the menus of that dropdown tree (if any is visible)
    clearNavBarTree(ItemTree);
    //and display the hovered option's menu
    document.getElementById(Item).classList.add("show"); 
}
//handler for level 2 items -> display Level 3 items
//when the user hovers over a level 2 item, display its corresponding items
function dropL3(Item, ItemParent, ItemTree) {
    //clear the menus of that dropdown tree (if any is visible)
    clearNavBarTree(ItemTree);
    //re-display the parent node
    document.getElementById(ItemParent).classList.add("show"); 
    //and display the hovered option's menu
    document.getElementById(Item).classList.add("show");
    
}

//hide all the elements of a given item-tree from the navigation bar
function clearNavBarTree(treeClass){
    let dropdowns = document.getElementsByClassName(treeClass);
    let i;
    for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

//hide every item from the navigation bar (be sure to add the corresponding instruction here when adding new items)
function clearNavBar(){
    //Level 0
    document.getElementById("I1-Div").classList.remove("show");
    document.getElementById("I2-Div").classList.remove("show");
    document.getElementById("I3-Div").classList.remove("show");
    //Level 1
    document.getElementById("I1.1-Div").classList.remove("show"); 
    document.getElementById("I1.2-Div").classList.remove("show"); 
    document.getElementById("I1.3-Div").classList.remove("show"); 
    document.getElementById("I2.1-Div").classList.remove("show");
    document.getElementById("I2.2-Div").classList.remove("show");
    document.getElementById("I2.3-Div").classList.remove("show");
    document.getElementById("I3.1-Div").classList.remove("show");
    document.getElementById("I3.2-Div").classList.remove("show");
    document.getElementById("I3.3-Div").classList.remove("show");
    //Level 2
    document.getElementById("I1.1.1-Div").classList.remove("show");
    document.getElementById("I1.1.2-Div").classList.remove("show");
    document.getElementById("I1.1.3-Div").classList.remove("show");
    document.getElementById("I1.2.1-Div").classList.remove("show");
    document.getElementById("I1.2.2-Div").classList.remove("show");
    document.getElementById("I1.2.3-Div").classList.remove("show");
    document.getElementById("I1.3.1-Div").classList.remove("show");
    document.getElementById("I1.3.2-Div").classList.remove("show");
    document.getElementById("I1.3.3-Div").classList.remove("show");
    //-----
    document.getElementById("I2.1.1-Div").classList.remove("show");
    document.getElementById("I2.1.2-Div").classList.remove("show");
    document.getElementById("I2.2.1-Div").classList.remove("show");
    document.getElementById("I2.2.2-Div").classList.remove("show");
    document.getElementById("I2.2.3-Div").classList.remove("show");
    document.getElementById("I2.3.1-Div").classList.remove("show");
    document.getElementById("I2.3.2-Div").classList.remove("show");
    document.getElementById("I2.3.3-Div").classList.remove("show");
    //-----
    document.getElementById("I3.1.1-Div").classList.remove("show");
    document.getElementById("I3.1.2-Div").classList.remove("show");
    document.getElementById("I3.1.3-Div").classList.remove("show");
    document.getElementById("I3.2.1-Div").classList.remove("show");
    document.getElementById("I3.2.2-Div").classList.remove("show");
    document.getElementById("I3.2.3-Div").classList.remove("show");
    document.getElementById("I3.3.1-Div").classList.remove("show");
    document.getElementById("I3.3.2-Div").classList.remove("show");
    document.getElementById("I3.3.3-Div").classList.remove("show");
}