const categories = document.querySelectorAll('.item');
console.log(`Number of categories:`,categories.length);

const categoriesArray = [...categories]
  .map(
    categories => `Category: ${categories.firstElementChild.textContent} 
Elements: ${categories.lastElementChild.children.length}`
  )
  .join("\n");
console.log(categoriesArray);