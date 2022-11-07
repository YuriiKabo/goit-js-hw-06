const catList = document.querySelectorAll(".item");
console.log("Number of categories: ", catList.length);
console.log("");
for (const catItem of catList) {
  console.log("Category: ", catItem.firstElementChild.textContent);

  const subCatList = catItem.lastElementChild;
  console.log("Elements: ", subCatList.childElementCount);
  console.log("");
}
