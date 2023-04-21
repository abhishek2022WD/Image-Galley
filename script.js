let imageListUrl = 'img.json'; 
var imageList;
let htmlToReturn = "",
        i = 0;

async function loadProducts(imageListUrl) {

    fetch(imageListUrl)                   
        .then(response => response.json())  
        .then(json => {
            imageList = json;
            imageList.imageData.forEach((element) => {
                htmlToReturn =
                    `<div class="imgCard">
                    <img src="${element.imgSrc}" alt="" class="cardImg">
                    <div class="hoverPart">
                    <p class="cardImgName">${element.imgName}</p>
                    <button class="imgDownloadBtn">Download</button>
                    </div>
                    </div>`

                document.querySelector('#imageCardArea').innerHTML += htmlToReturn;
            });

        })
}
loadProducts(imageListUrl);





// Code breakdown
// 1. `let imageListUrl = 'imgDataFile.json';` - This declares a variable `imageListUrl` and assigns the URL of the JSON file that contains the image data.

// 2. `var imageList;` - This declares a variable `imageList` that will be used to store the image data from the JSON file.

// 3. `let htmlToReturn = "", i = 0;` - This declares two variables `htmlToReturn` and `i`, both initialized to `""` and `0` respectively.

// 4. `async function loadProducts(imageListUrl) {` - This declares an asynchronous function `loadProducts` that takes `imageListUrl` as a parameter.

// 5. `fetch(imageListUrl)` - This fetches the JSON file using the `fetch` function.

// 6. `.then(response => response.json())` - This converts the response to JSON format.

// 7. `.then(json => {` - This takes the JSON data and runs a callback function.

// 8. `imageList = json;` - This assigns the JSON data to the `imageList` variable.

// 9. `imageList.imageData.forEach((product) => {` - This loops through each image data object in the `imageData` array of the `imageList`.

// 10. `htmlToReturn =` - This assigns a string of HTML code to the `htmlToReturn` variable.

// 11. `${product.imgSrc}` and `${product.imgName}` - These are template literals that allow dynamic values to be inserted into the HTML code.

// 12. `document.querySelector('#imageCardArea').innerHTML += htmlToReturn;` - This appends the HTML code to the `#imageCardArea` element in the DOM.

// 13. `});` - This ends the loop.

// 14. `}` - This ends the second `.then()` method.

// 15. `}` - This ends the `loadProducts` function.

// 16. `loadProducts(imageListUrl);` - This calls the `loadProducts` function with the `imageListUrl` variable as a parameter.

