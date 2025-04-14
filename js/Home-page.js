let recipes = JSON.parse(localStorage.getItem("AccountNow")).personalization;
let accNow = JSON.parse(localStorage.getItem("AccountNow"));
// Hành động chuyển trang
const gotoFood = document.getElementById("foods");
const gotoRecipes = document.getElementById("recipes");

gotoFood.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/FoodPage.html";
});

gotoRecipes.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/Recipes.html";
});
// render tát cả dữ liệu của cộng đồng

let listCard = document.getElementById("list-card");

render(recipes);

function render(array) {
    listCard.innerHTML = "";

    let totalQuantity = 0;
    let totalFat = 0;
    let totalCarb = 0;
    let totalProtein = 0;
    let totalEnergy = 0;


    array.forEach(elments => {
        totalEnergy = elments.ingredients.reduce((sum, element) => {
            return sum + element.macronutrients.engergy;
        }, 0);
        totalFat = elments.ingredients.reduce((sum, element) => {
            return sum + element.macronutrients.fat;
        }, 0);
        totalCarb = elments.ingredients.reduce((sum, element) => {
            return sum + element.macronutrients.carbohydrate;
        }, 0);
        totalProtein = elments.ingredients.reduce((sum, element) => {
            return sum + element.macronutrients.protein;
        }, 0);
        totalQuantity = elments.ingredients.reduce((sum, element) => {
            return sum + element.quantity;
        }, 0);
        listCard.innerHTML += `
        <article>
            <div>
                <img src="${elments.conerSrc}" class="illustration">
                <div class="Community-Recipes">
                    <img src="../assets/icons/Group.png" style="width: 20px; height: 14px;">
                    <p>Community Recipes</p>
                </div>
            </div>
            <div class="main-content-card">
                <h2 class = "show-detail-repices">${elments.name}</h2>
                <div class="author">
                    <p>${elments.author}</p>
                    <div class="like-container click-like">
                        <span class="heart-icon unlike"><i class="fa-regular fa-heart"></i></span>
                        <span class="heart-icon heart-none like">❤️</span>
                        <span class="like-count">${elments.numberLike}</span>
                    </div>

                </div>
                <div class="category-card">
                    <img src="../assets/icons/iconCategory.png">
                    <p id="category">&nbsp${elments.categorys}</p>
                </div>
                <div class="detail-dish-card">
                    <table>
                        <tr>
                            <th>by</th>
                            <th>Energy</th>
                            <th>Fat</th>
                            <th>Carbohydrate</th>
                            <th>Protein</th>
                        </tr>
                        <tr>
                            <td>${totalQuantity.toFixed(1)}</td>
                            <td>${totalEnergy.toFixed(1)}</td>
                            <td>${totalFat.toFixed(1)}</td>
                            <td>${totalCarb.toFixed(1)}</td>
                            <td>${totalProtein.toFixed(1)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </article>
        `;
    });
}

// Tính năng phân trang
const content = document.getElementById("content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumbersContainer = document.getElementById("pageNumbers");
let showDetailRepices = document.getElementsByClassName("show-detail-repices");

const itemsPerPage = 8;
let currentPage = 1;

const totalPages = Math.ceil(recipes.length / itemsPerPage);

function paginate(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = recipes.slice(start, end);
    render(pageItems);
}

function renderPageNumber() {
    const delta = 2;
    const maxVisiblePages = 5;

    let rangeStart = Math.max(2, currentPage - delta);
    let rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    if (currentPage <= delta + 2) {
        rangeStart = 2;
        rangeEnd = Math.min(totalPages - 1, maxVisiblePages - 2);
    }

    if (currentPage >= totalPages - (delta + 1)) {
        rangeStart = Math.max(2, totalPages - (maxVisiblePages - 3));
        rangeEnd = totalPages - 1;
    }

    pageNumbersContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-number");
        if (i === currentPage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentPage = i;
            paginate(currentPage);
            renderPageNumber();
            addClickEventToDetailButtons();
            like();
        });

        pageNumbersContainer.appendChild(button);
    }
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginate(currentPage);
        renderPageNumber();
        addClickEventToDetailButtons();
        like();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        paginate(currentPage);
        renderPageNumber();
        addClickEventToDetailButtons();
        like();
    }
});

paginate(currentPage);
renderPageNumber();


//Xem chi tiết repice
addClickEventToDetailButtons();

function addClickEventToDetailButtons() {
    const buttons = document.getElementsByClassName("show-detail-repices");
    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/pages/RecipesDetail.html";
        });
    });
}

//Tìm kiếm

const search = document.getElementById("search");
search.addEventListener("input", function () {
    const searchValue = (document.getElementById("search").value).toLowerCase();

    // console.log(filterCategory);

    let searchRecipes = [];
    if (searchValue.length === 0) {
        location.reload();
    } else {
        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].name).toLowerCase().includes(searchValue)) {
                searchRecipes.push(recipes[i]);
            }
        }
        render(searchRecipes);
    }
});

//Thêm mới repice

// let btnCretiveRecipes = document.getElementById("btn-cretive-recipes");

// btnCretiveRecipes.addEventListener("click", function () {
//     window.location.href = "http://127.0.0.1:5500/pages/AddNewRecipe.html";
// });

// Lọc theo category

let filterCategory = document.getElementById("dropdownMenuCategrys");

filterCategory.addEventListener("input", function () {
    let filterRecipes = [];
    if (filterCategory.value.length === 0 || filterCategory.value === "All category") {
        location.reload();
    } else {
        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].categorys).toLowerCase().includes(filterCategory.value.toLowerCase())) {
                filterRecipes.push(recipes[i]);
            }
        }
        render(filterRecipes);

    }
});

// Tự động thêm category để lọc
renderFilterCategorys(recipes);

function renderFilterCategorys(array) {
    dropdownMenuCategrys.innerHTML = "<option>All category</option>";
    array.forEach(element => {
        dropdownMenuCategrys.innerHTML += `
            <option >${element.categorys}</option>
        `;
    });
}

// Xắp xếp

// hirnt thị chuyển động icon xắp xếp
const sortIcon = document.getElementById("sortIcon");

let sortAscending = true;

sortIcon.addEventListener("click", function () {
    sortAscending = !sortAscending;
    sortIcon.innerHTML = sortAscending ? `<i class="fa-solid fa-arrow-up-wide-short"></i>` : `<i class="fa-solid fa-arrow-down-short-wide"></i>`;
});

// Thanh nav thu gọn
const hideSidebar = document.getElementById("btn-detail");
const sidebar = document.getElementById("nagative");

hideSidebar.addEventListener("click", function () {
    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
    } else {
        sidebar.classList.add("collapsed");
    }
});

// like
like();
let likeUser = [];

function like() {
    const likeButtons = document.querySelectorAll(".click-like");

    likeButtons.forEach((button, index) => {
        let liked = false;
        const unlike = button.querySelector(".unlike");
        const like = button.querySelector(".like");
        const likeCount = button.querySelector(".like-count");

        let count = parseInt(likeCount.textContent) || 0;

        button.addEventListener("click", () => {
            liked = !liked;

            if (liked) {
                count++;
                unlike.classList.add("heart-none");
                like.classList.remove("heart-none");
                button.classList.add("liked");
                recipes[index].like = true;
                recipes[index].numberLike++;
                accNow.personalization.push(recipes[index]);
                localStorage.setItem("Community Recipes", JSON.stringify(recipes));
                localStorage.setItem("AccountNow", JSON.stringify(accNow));
            } else {
                count--;
                unlike.classList.remove("heart-none");
                like.classList.add("heart-none");
                button.classList.remove("liked");
                recipes[index].like = false;
                recipes[index].numberLike--;
                accNow.personalization.splice(index, 1);
                localStorage.setItem("Community Recipes", JSON.stringify(recipes));
                localStorage.setItem("AccountNow", JSON.stringify(accNow));
            }

            if (recipes[index].like === true) {
                unlike.classList.add("heart-none");
                like.classList.remove("heart-none");
            }

            likeCount.textContent = count;

        });
    });
}

//Xắp xếp

// // Hàm tính tổng macronutrients cho một recipe
// function calculateTotalMacronutrients(recipe) {
//     let totalEnergy = 0;
//     let totalFat = 0;
//     let totalCarb = 0;
//     let totalProtein = 0;

//     if (Array.isArray(recipe.listChoiceFood)) {
//         recipe.listChoiceFood.forEach(food => {
//             const ratio = (food.gram || 0) / 100;

//             const energy = food.macronutrients?.energy || 0;
//             const fat = food.macronutrients?.fat || 0;
//             const carbohydrate = food.macronutrients?.carbohydrate || 0;
//             const protein = food.macronutrients?.protein || 0;

//             totalEnergy += energy * ratio;
//             totalFat += fat * ratio;
//             totalCarb += carbohydrate * ratio;
//             totalProtein += protein * ratio;
//         });
//     }

//     return {
//         energy: totalEnergy,
//         fat: totalFat,
//         carbohydrate: totalCarb,
//         protein: totalProtein
//     };
// }


// // Thêm tổng macronutrients vào từng công thức
// communityRepices.forEach(recipe => {
//     recipe.totalMacro = calculateTotalMacronutrients(recipe);
// });

// function sortRecipesByNutrient(nutrient) {
//     communityRepices.sort((a, b) => {
//         return b.totalMacro[nutrient] - a.totalMacro[nutrient];
//     });
// }

// // Gắn sự kiện cho dropdown
// document.getElementById("dropdownMenuCategrys").addEventListener("change", function () {
//     const selected = this.value;
//     if (selected) {
//         sortRecipesByNutrient(selected);
//         render();
//     }
// });
