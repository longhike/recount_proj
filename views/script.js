const userPage = document.getElementById("user-page");
const userEdit = document.getElementById("user-edit");

const homeButton = document.getElementById("home-button");
const treeButton = document.getElementById("tree-button");
const editButton = document.getElementById("edit-button");

const cols = document.getElementsByClassName("_col");

homeButton.addEventListener("click", (e) => {
  e.preventDefault();
  userPage.style.display = "block";
  userEdit.style.display = "none";
});

editButton.addEventListener("click", (e) => {
  e.preventDefault();
  userPage.style.display = "none";
  userEdit.style.display = "block";
});

for (let i = 0; i < cols.length; i++) {
  cols[i].addEventListener("click", (e) => {
    e.preventDefault();
    handlePopUp(e.target);
  });
}

function handlePopUp(div) {
  if (div.textContent !== undefined) {
    const current = div.textContent.split(" ")[0];
    if (current in famObj) {
      alert(parseFam(famObj[current]));
    }
  }
}

function parseFam(famObj) {
  return `
        CHILDREN: ${
          famObj.children.length > 0 ? famObj.children.join(", ") : "None listed"
        } \n
        SIBLINGS: ${
          famObj.siblings.length > 0 ? famObj.siblings.join(", ") : "None listed"
        } \n
        PARENTS: ${
          famObj.parents.length > 0 ? famObj.parents.join(", ") : "None listed"
        }
    `;
}
