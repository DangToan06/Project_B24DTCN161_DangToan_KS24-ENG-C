let allAcc = JSON.parse(localStorage.getItem("User"));
let accNow = JSON.parse(localStorage.getItem("AccountNow"));
let tempDataFood;
let communityFood = JSON.parse(localStorage.getItem("AccountNow")).myFoods
let filteredFood = [...communityFood];



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
    const pageItems = filteredFood.slice(start, end);
    render(pageItems);
}

function renderPageNumbers() {
    const totalPages = Math.ceil(filteredFood.length / itemsPerPage);
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
            clickAddFood();
        });

        pageNumbersContainer.appendChild(button);
    }
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginate(currentPage);
        renderPageNumbers();
        clickAddFood();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        paginate(currentPage);
        renderPageNumbers();
        clickAddFood();
    }
});

paginate(currentPage);
renderPageNumbers();

// XEM, DONG , LƯU MÓN ĂN 

const foodInformation = document.getElementById("food-information");
const btnCloseDetailFood = document.getElementById("btn-close-detail-food");
const btnCloseTableDetail = document.getElementById("btn-close-table-cretive");
const btnSaveTableDetail = document.getElementById("btn-save-table-detail");

listFood.addEventListener("click", function (event) {
    const foodCard = event.target.closest(".food-menu");
    if (foodCard) {
        const index = foodCard.dataset.index;
        tempDataFood = index;
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
                <p class="editable" data-key="${key}">${value}</p>
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
                    <p class="editable" data-key="${labels[key]}">${macronutrients[key] ?? ""}</p>
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
                    <p class="editable" data-key="${labels[key]}">${macronutrients[key] ?? ""}</p>
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
            <p class="editable" data-key="name">${foodItem.name}</p>
        </div>
        <div class="main-information-col">
            <p>Source</p>
            <p data-key="source">${foodItem.source}</p>
        </div>
    </div>
    <div class="main-information-row">
        <div class="main-information-col">
            <p>Category</p>
            <p class="editable" data-key="category">${foodItem.category}</p>
        </div>
        <div class="main-information-col quantity">
            <p style="flex: 1;">Quantity</p>
            <p style="flex: 1; background-color: white;" class="editable" data-key="quantity">${foodItem.quantity}</p>
            <p style="flex: 1; background-color: white;">grams</p>
        </div>
    </div>
    `;
    editDetailFood()
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

let demo;
// chỉnh sửa dữ liệu
function editDetailFood() {
    let btnEdit = document.getElementById("btn-edit");
    const saveBtn = document.getElementById("btn-save-table-detail");
    const editableEls = document.querySelectorAll(".editable");

    btnEdit.addEventListener("click", () => {
        editableEls.forEach(el => {
            const value = el.textContent;
            el.innerHTML = `<input type="text" value="${value}" class = "input-edit">`;
        });
    });

    saveBtn.addEventListener("click", () => {
        const foodData = {};

        editableEls.forEach(el => {
            const input = el.querySelector("input");
            if (input) {
                el.textContent = input.value;
            }
            const key = el.getAttribute("data-key");
            if (key) {
                foodData[key] = el.textContent.trim();
            }
        });

        const foodEdit = new Food(
            Date.now(),
            foodData.name,
            foodData.source,
            foodData.category,
            parseFloat(foodData.quantity),
            new Macronutrient(Number(foodData.Energy), Number(foodData.Carbohydrate), Number(foodData.Fat), Number(foodData.Protein)),
            new Micronutrient(
                0.0, 5.2, 13.0, 130.0, null, 0.23, 0.0,
                0.0, 0.0, 0.4, null, 2.8, 0.0, 0.0, 0.0,
                0.0, 64.0, 2.8, 89.0, 152.0, 318.0, 1.4, 0.35,
                null, 0.43, 0.0, 0.21, 0.17, 1.1, null, 149.0,
                0.0, 0.0, 0.6, 1.7, 1.0, null
            )
        )
        demo = foodEdit;
        communityFood.push(demo);
        let index = communityFood.length - 2;
        communityFood.splice(index, 1);
        render(communityFood)
    });
}


//Xắp xếp
sort();

function sort() {
    const dropdownSort = document.getElementById("dropdownMenuNutrient");

    dropdownSort.addEventListener("change", function () {
        const sortBy = dropdownSort.value;
        console.log("1");

        if (sortBy === "Protein") {
            filteredFood = [...communityFood].sort((a, b) => {
                return b.macronutrients.protein - a.macronutrients.protein;
            });
        } else if (sortBy === "Fats") {
            filteredFood = [...communityFood].sort((a, b) => {
                return b.macronutrients.fat - a.macronutrients.fat;
            });
        } else if (sortBy === "Carbohydrate") {
            filteredFood = [...communityFood].sort((a, b) => {
                return b.macronutrients.carbohydrate - a.macronutrients.carbohydrate;
            });
        } else if (sortBy === "Energy") {
            filteredFood = [...communityFood].sort((a, b) => {
                return b.macronutrients.engergy - a.macronutrients.engergy;
            });
        } else {
            filteredFood = [...communityFood]
        }


        currentPage = 1;
        paginate(currentPage);
        renderPageNumbers();
    });

}

//Danh sach loc
const dropdownMenuCategrys = document.getElementById("dropdownMenuCategrys");

dropdownMenuCategrys.innerHTML = "<option selected>All categorys</option>";

communityFood.forEach(element => {
    dropdownMenuCategrys.innerHTML += `<option>${element.category}</option>`;
});


dropdownMenuCategrys.addEventListener("input", () => {
    const categoryValue = dropdownMenuCategrys.value.toLowerCase();

    if (categoryValue === 'all categorys') {
        filteredFood = [...communityFood];
    } else {
        filteredFood = communityFood.filter(item =>
            item.category.toLowerCase().includes(categoryValue)
        );
    }
    currentPage = 1;
    paginate(currentPage);
    renderPageNumbers();
});


//Tìm kiếm

let search = document.getElementById("search");

search.addEventListener("input", function () {
    const searchValue = search.value.toLowerCase();
    console.log("1");

    if (searchValue.length === 0) {
        filteredFood = [...communityFood];
    } else {
        filteredFood = communityFood.filter(item =>
            item.name.toLowerCase().includes(searchValue)
        );
    }

    currentPage = 1;
    paginate(currentPage);
    renderPageNumbers();
});

//Valid không để trống
// function validateField(value, element) {
//     value === "" ? element.classList.add("errorr") : element.classList.remove("errorr");
// }

btnSaveTableCretive.addEventListener("click", () => {
    let nameValue = document.getElementById("name").value;
    let categoryValue = document.getElementById("category").value;
    let quantityValue = parseFloat(document.getElementById("quantity").value);

    let energyValue = parseFloat(document.getElementById("energy").value);
    let fatValue = parseFloat(document.getElementById("fat").value);
    let carbohydrateValue = parseFloat(document.getElementById("carbohydrate").value);
    let proteinValue = parseFloat(document.getElementById("protein").value);

    let boxName = document.getElementById("box-name");
    let category = document.getElementById("category");
    let boxQuantity = document.getElementById("box-quantity");

    let boxEnergy = document.getElementById("box-energy");
    let boxFat = document.getElementById("box-fat");
    let boxCarbohydrate = document.getElementById("box-carbohydrate");
    let boxProtein = document.getElementById("box-protein");

    // validateField(nameValue, boxName);
    // validateField(categoryValue, category);
    // validateField(quantityValue, boxQuantity);
    // validateField(energyValue, boxEnergy);
    // validateField(fatValue, boxFat);
    // validateField(carbohydrateValue, boxCarbohydrate);
    // validateField(proteinValue, boxProtein);

    nameValue === "" ? boxName.classList.add("errorr") : boxName.classList.remove("errorr");
    categoryValue === "" ? category.classList.add("errorr") : category.classList.remove("errorr");
    quantityValue === "" ? boxQuantity.classList.add("errorr") : boxQuantity.classList.remove("errorr");
    energyValue === "" ? boxEnergy.classList.add("errorr") : boxEnergy.classList.remove("errorr");
    fatValue === "" ? boxFat.classList.add("errorr") : boxFat.classList.remove("errorr");
    carbohydrateValue === "" ? boxCarbohydrate : boxCarbohydrate.classList.remove("errorr");
    proteinValue === "" ? boxProtein.classList.add("errorr") : boxProtein.classList.remove("errorr");
    if (
        !(nameValue === "")
        && !(categoryValue === "")
        && !(quantityValue === "")
        && !(energyValue === "")
        && !(fatValue === "")
        && !(carbohydrateValue === "")
        && !(proteinValue === "")
    ) {
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
    }
});