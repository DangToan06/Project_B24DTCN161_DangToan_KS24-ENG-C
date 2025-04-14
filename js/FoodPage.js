let allAcc = JSON.parse(localStorage.getItem("User"));
let accNow = JSON.parse(localStorage.getItem("AccountNow"));
// Thanh nav thu gọn
const hideSidebar = document.getElementById("btn-detail");
const sidebar = document.getElementById("nagative");

hideSidebar.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
});

//HIỂN THỊ TÊN TÀI KHẢN HIỆN TẠI
let accountNow = JSON.parse(localStorage.getItem("AccountNow"));
let nameAccount = accountNow.username;
let account = document.getElementById("userName");
let account2 = document.getElementById("Account");
account.innerHTML = "";
account2.innerHTML = "";
account.innerHTML = `<span id="userName">${nameAccount}</span>`;
account2.innerHTML = `<p id="Account" style="background-color: #fff; border: none;">${nameAccount}</p>`;


//ĐĂNG XUẤT
let signOut = document.getElementById("signOut");
signOut.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/Sign-in.html";
});

// hành động user muốn lọc chất dinh dưỡng 
const dropdownIconNutrient = document.getElementById("dropdownIconNutrient");
const dropdownMenuNutrient = document.getElementById("dropdownMenuNutrient");
const selectedNutrient = document.getElementById("selected-nutrient");
const sortIcon = document.getElementById("sortIcon");

let sortAscending = true;

dropdownIconNutrient.addEventListener("click", function () {
    dropdownMenuNutrient.style.display = dropdownMenuNutrient.style.display === "block" ? "none" : "block";
    dropdownIconNutrient.classList.toggle("rotate");
});

function selectOption(value) {
    selectedNutrient.textContent = value;
    dropdownMenuNutrient.style.display = "none";
    dropdownIconNutrient.classList.remove("rotate");
}

sortIcon.addEventListener("click", function () {
    sortAscending = !sortAscending;
    sortIcon.innerHTML = sortAscending ? `<i class="fa-solid fa-arrow-up-wide-short"></i>` : `<i class="fa-solid fa-arrow-down-short-wide"></i>`;
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
        dropdownMenuNutrient.style.display = "none";
        dropdownIconNutrient.classList.remove("rotate");
    }
});

//Hành động lọc categorys
const dropdownIconCategorys = document.getElementById("dropdownIconCategorys");
const dropdownMenuCategrys = document.getElementById("dropdownMenuCategrys");
const selectedCategorys = document.getElementById("selected-categorys");

dropdownIconCategorys.addEventListener("click", function () {
    dropdownMenuCategrys.style.display = dropdownMenuCategrys.style.display === "block" ? "none" : "block";
    dropdownIconCategorys.classList.toggle("rotate");
});

function selectCategory(value) {
    selectedCategorys.textContent = value;
    dropdownMenuCategrys.style.display = "none";
    dropdownIconCategorys.classList.remove("rotate")
}

document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
        dropdownMenuCategrys.style.display = "none";
        dropdownIconCategorys.classList.remove("rotate");
    }
});

// Tìm kiếm theo tên
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();

    const filteredFoods = myFoods.filter(food =>
        food.name.toLowerCase().includes(keyword)
    );

    currentPage = 1;
    templateData = filteredFoods;
    paginate(currentPage);
    renderPageNumbers();
});


// Hành động chuyển trang

const gotoRecipes = document.getElementById("recipes");
const gotoHome = document.getElementById("home");

gotoRecipes.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/Recipes.html";
});

gotoHome.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/HomePage.html";
});

// Phan trang
const listFood = document.getElementById("listFoods");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumbersContainer = document.getElementById("pageNumbers");

let currentPage = 1;
const itemsPerPage = 9;

templateData = [];
accountNow.myFoods.forEach(myFood => {
    templateData.push({
        name: myFood.name,
        author: myFood.source,
        macronutrients: myFood.macronutrients,
        micronutrient: myFood.micronutrients
    });
});

localStorage.setItem("myFood", JSON.stringify(templateData));

const totalPages = Math.ceil(templateData.length / itemsPerPage);

function render(data) {
    listFood.innerHTML = "";
    data.forEach((food, index) => {
        listFood.innerHTML += `
        <div class="food-menu" data-index="${index}">
            <div class="name-food-brand">
                <p>${food.name}</p>
                <p>${food.author}</p>
            </div>
            <div class="nutri-food">
                <table>
                    <tr>
                        <th>${food.macronutrients.engergy}</th>
                        <th>${food.macronutrients.carbohydrate}</th>
                        <th>${food.macronutrients.fat}</th>
                        <th>${food.macronutrients.protein}</th>
                    </tr>
                    <tr>
                        <td>Energy</td>
                        <td>Fat</td>
                        <td>Carbohydrate</td>
                        <td>Protein</td>
                    </tr>
                </table>
            </div>
        </div>`;
    });
}


function paginate(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = templateData.slice(start, end);
    render(pageItems);
}

function renderPageNumbers() {
    pageNumbersContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-number");
        if (i === currentPage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentPage = i;
            paginate(currentPage);
            renderPageNumbers();
        });

        pageNumbersContainer.appendChild(button);
    }
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginate(currentPage);
        renderPageNumbers();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        paginate(currentPage);
        renderPageNumbers();
    }
});

paginate(currentPage);
renderPageNumbers();

// XEM, DONG , LƯU MÓN ĂN 

const foodInformation = document.getElementById("food-information");
const btnCloseDetailFood = document.getElementById("btn-close-detail-food");
const btnCloseTableDetail = document.getElementById("btn-close-table-detail");
const btnSaveTableDetail = document.getElementById("btn-save-table-detail");

listFood.addEventListener("click", function (event) {
    const foodCard = event.target.closest(".food-menu");
    if (foodCard) {
        const index = foodCard.dataset.index;
        const selectedFood = templateData[index];
        if (selectedFood) {
            foodInformation.style.display = "block";
            renderMicronutrientsDetail(selectedFood);
        }
        renderMacronutrientsDetail(accNow.myFoods[index]);
        renderAuthor(accNow.myFoods[index]);
    }
});


[btnCloseDetailFood, btnCloseTableDetail, btnSaveTableDetail].forEach(btn => {
    btn.addEventListener("click", () => {
        foodInformation.style.display = "none";
    });
});


// Render chi tiết micronutrients
function renderMicronutrientsDetail(foodItem) {
    
    const listMicronutrientsDetail = document.getElementById("list-micronutrients");
    listMicronutrientsDetail.innerHTML = "";


    let temp = foodItem.micronutrient;
    // console.log(temp);

    for (let key in temp) {
        const value = foodItem.micronutrient[key] ?? "";

        listMicronutrientsDetail.innerHTML += `
            <div class="element-micronutrients">
                <p>${key}</p>
                <p>${value}</p>
                <p>mg</p>
            </div>
        `;
    }
}

//render chi tiết mac

function renderMacronutrientsDetail(foodItem) {
    const listMacronutrientsDetail = document.getElementById("macronutrients-row");
    listMacronutrientsDetail.innerHTML = "";

    if (!foodItem || !foodItem.macronutrients) return;

    const macronutrients = foodItem.macronutrients;

    const units = {
        engergy: "kcal",
        fat: "g",
        carbohydrate: "g",
        protein: "g"
    };

    const labels = {
        engergy: "Energy",
        fat: "Fat",
        carbohydrate: "Carbohydrate",
        protein: "Protein"
    };

    const firstRowKeys = ["engergy", "fat"];
    const secondRowKeys = ["carbohydrate", "protein"];

    listMacronutrientsDetail.innerHTML += `
        <div class="macronutrients-row">
            ${firstRowKeys.map(key => `
                <div class="macronutrients-col">
                    <p>${labels[key]}</p>
                    <p>${macronutrients[key] ?? ""}</p>
                    <p>${units[key]}</p>
                </div>
            `).join("")}
        </div>
    `;

    listMacronutrientsDetail.innerHTML += `
        <div class="macronutrients-row">
            ${secondRowKeys.map(key => `
                <div class="macronutrients-col">
                    <p>${labels[key]}</p>
                    <p>${macronutrients[key] ?? ""}</p>
                    <p>${units[key]}</p>
                </div>
            `).join("")}
        </div>
    `;
}


//render chi tiết tên tác giả

function renderAuthor(foodItem) {
    let listAuthor = document.getElementById("main-information");
    listAuthor.innerHTML = "";
    listAuthor.innerHTML = `
    <div class="main-information-row">
        <div class="main-information-col">
            <p>Name</p>
            <p>${foodItem.name}</p>
        </div>
        <div class="main-information-col">
            <p>Source</p>
            <p>${foodItem.source}</p>
        </div>
    </div>
    <div class="main-information-row">
        <div class="main-information-col">
            <p>Category</p>
            <p>${foodItem.category}</p>
        </div>
        <div class="main-information-col quantity">
            <p style="flex: 1;">Quantity</p>
            <p style="flex: 1; background-color: white;">${foodItem.quantity}</p>
            <p style="flex: 1; background-color: white;">grams</p>
        </div>
    </div>
    `;
}

//render mic-cretive
renderMicronutrients();

function renderMicronutrients() {
    let listMicronutrientsCretive = document.getElementById("list-micronutrients-cretive");
    listMicronutrientsCretive.innerHTML = "";
    for (let key in temptCretiveFood) {
        listMicronutrientsCretive.innerHTML += `
        <div class="element-micronutrients-cretive">
            <p>${key}</p>
            <p><input type="text" id="${key}"></p>
            <p>mg</p>
        </div>
       `;
    }
}

// THÊM FOOD
const btnCloseTableCretive = document.getElementById("btn-close-table-cretive");
const btnSaveTableCretive = document.getElementById("btn-save-table-cretive");
const foodCretive = document.getElementById("food-cretive");
const btnCloseCretiveFood = document.getElementById("btn-close-cretive-food");
const createFood = document.getElementById("create-food");
[btnCloseTableCretive, btnCloseCretiveFood].forEach(btn => {
    btn.addEventListener("click", () => foodCretive.style.display = "none");
});
createFood.addEventListener("click", () => {
    foodCretive.style.display = "block";
});



btnSaveTableCretive.addEventListener("click", () => {
    let nameValue = document.getElementById("name").value;
    let categoryValue = document.getElementById("category").value;
    let quantityValue = parseFloat(document.getElementById("quantity").value);

    let energyValue = parseFloat(document.getElementById("energy").value);
    let fatValue = parseFloat(document.getElementById("fat").value);
    let carbohydrateValue = parseFloat(document.getElementById("carbohydrate").value);
    let proteinValue = parseFloat(document.getElementById("protein").value);

    const macro = new Macronutrient(energyValue, carbohydrateValue, fatValue, proteinValue);

    const micronutrientValues = [];
    for (let key in temptCretiveFood) {
        const value = parseFloat(document.getElementById(key)?.value);
        micronutrientValues.push(isNaN(value) ? null : value);
    }
    const micro = new Micronutrient(...micronutrientValues);

    accountNow.myFoods.push(new Food(
        Date.now(),
        nameValue,
        nameAccount,
        categoryValue,
        quantityValue,
        macro,
        micro
    ));

    allAcc[(accountNow.id) - 1].myFoods.push(new Food(
        Date.now(),
        nameValue,
        nameAccount,
        categoryValue,
        quantityValue,
        macro,
        micro
    ));

    foodCretive.style.display = "none";
    localStorage.setItem("AccountNow", JSON.stringify(accountNow));
    localStorage.setItem("User", JSON.stringify(allAcc));
    location.reload();
});



