const userPage = document.getElementById("user-page");
// const userTree = document.getElementById("user-tree");
const userEdit = document.getElementById("user-edit");

const homeButton = document.getElementById("home-button");
const treeButton = document.getElementById("tree-button");
const editButton = document.getElementById("edit-button");

homeButton.addEventListener("click", (e) => {
    e.preventDefault()
    userPage.style.display = "block"
    // userTree.style.display = "none"
    userEdit.style.display = "none"
})

// treeButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     userPage.style.display = "none"
//     userEdit.style.display = "none"
//     // userTree.style.display = "block"
// })

editButton.addEventListener("click", (e) => {
    e.preventDefault()
    userPage.style.display = "none"
    // userTree.style.display = "none"
    userEdit.style.display = "block"
    
})

document.getElementsByClassName('_col')[0].addEventListener("click", (e) => {
    e.preventDefault()
    e.target.style = "data-toggle: popover"
    e.target.style = "data-placement: right"
    e.target.style = `data-content: Hannah's fam`
})
function handlePopover (div, content) {
    div.style = "data-toggle: popover"
    div.style = "data-placement: right"
    div.style = `data-content: ${content}`
}