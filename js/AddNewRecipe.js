const dataAccNow = JSON.parse(localStorage.getItem("AccountNow"));
const communityFood = JSON.parse(localStorage.getItem("Community Foods"));
const communityRecipes = JSON.parse(localStorage.getItem("Community Recipes"));
const Units = localStorage.getItem("Units").split(",");
let percentageFat = 0;
let percentageProtein = 0;
let percentageCarbohhydrate = 0;
let listTotalMicros = [];
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


//Biểu đồ tròn


//Biểu đò tròn tự tính
let circle;

function drawCircle() {
    const ctx = document.getElementById('macronutrientChart').getContext('2d');

    if (circle) {
        circle.destroy();
    }

    circle = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fat', 'Carbohydrate', 'Protein'],
            datasets: [{
                data: [percentageFat, percentageCarbohhydrate, percentageProtein],
                backgroundColor: ['#e85c73', '#f6a561', '#20b89e'],
                borderWidth: 1,
                hoverOffset: 20
            }]
        },
        options: {
            animation: {
                animateRotate: true,
                duration: 1500,
                easing: 'easeInOutQuad'
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#222',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#aaa',
                    cornerRadius: 4,
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            let value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}



// Chuyển hướng trang

const gotoFood = document.getElementById("foods");
const gotoHome = document.getElementById("home");
const gotoRecipes = document.getElementById("recipes");

gotoFood.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/FoodPage.html";
});

gotoHome.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/HomePage.html";
});

gotoRecipes.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/Recipes.html";
});


//Danh sách food để thêm vào Recipes

const listFood = document.getElementById("listFoods");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumbersContainer = document.getElementById("pageNumbers");

let currentPage = 1;
const itemsPerPage = 5;

const totalPages = Math.ceil(communityFood.length / itemsPerPage);

function render(data) {
    listFood.innerHTML = "";
    data.forEach(food => {
        listFood.innerHTML += `
        <div class="boat-list-food">
            <div class="food-menu">
            
                <div class="name-food-brand">
                    <p>${food.name}</p>
                    <p>${food.source}</p>
                </div>
                <div class="nutri-food">
                    <table>
                        <tr>
                            <th>${food.macronutrients.engergy}</th>
                            <th>${food.macronutrients.fat}</th>
                            <th>${food.macronutrients.carbohydrate}</th>
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
            </div>
            <i class="fa-solid fa-plus btn-add-food"></i>
        </div>
        `;
    });
}

let filteredFood = [...communityFood];

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

//Tìm kiêm
search.addEventListener("input", function () {
    const searchValue = search.value.toLowerCase();

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
    clickAddFood();
});

//Hiển thị danh sách lọc
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
    clickAddFood();
});

//Xắp xếp
sort();
function sort() {
    const dropdownSort = document.getElementById("dropdownMenuNutrient");

    dropdownSort.addEventListener("change", function () {
        const sortBy = dropdownSort.value;

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
        clickAddFood();

    });

}


// Hành động thêm food
let totalEnergy = 0;
let totalFat = 0;
let totalCarbohhydrate = 0;
let totalProtein = 0;
let totalFiber = 0;
let totalQuantity = 0

listChoiceFood = [];
clickAddFood();

function clickAddFood() {
    const buttons = document.getElementsByClassName("btn-add-food");


    Array.from(buttons).forEach((button, index) => {
        button.addEventListener("click", function () {
            renderColorBorder();
            listChoiceFood.push(communityFood[index]);
            renderChoiceFood();
            calcNumberAndDraw();
        });
    });
}

//Tính toán để vẽ biểu đồ

function calcNumberAndDraw() {
    totalEnergy = 0;
    totalFat = 0;
    totalCarbohhydrate = 0;
    totalProtein = 0;
    totalFiber = 0;
    totalQuantity = 0;
    totalEnergy = listChoiceFood.reduce((sum, element) => {
        return sum + element.macronutrients.engergy;
    }, 0);
    totalFat = listChoiceFood.reduce((sum, element) => {
        return sum + element.macronutrients.fat;
    }, 0);
    totalCarbohhydrate = listChoiceFood.reduce((sum, element) => {
        return sum + element.macronutrients.carbohydrate;
    }, 0);
    totalProtein = listChoiceFood.reduce((sum, element) => {
        return sum + element.macronutrients.protein;
    }, 0);
    totalFiber = listChoiceFood.reduce((sum, element) => {
        return sum + element.micronutrients.fiber;
    }, 0);
    totalQuantity = listChoiceFood.reduce((sum, element) => {
        return sum + element.quantity;
    }, 0);
    percentageFat = Math.ceil(((totalFat) / (totalFat + totalCarbohhydrate + totalProtein)) * 100);
    percentageProtein = Math.ceil(((totalProtein) / (totalFat + totalCarbohhydrate + totalProtein)) * 100);
    percentageCarbohhydrate = Math.ceil(((totalCarbohhydrate) / (totalFat + totalCarbohhydrate + totalProtein)) * 100);
    totalEnergy = totalEnergy.toFixed(1);
    totalFat = totalFat.toFixed(1);
    totalCarbohhydrate = totalCarbohhydrate.toFixed(1);
    totalProtein = totalProtein.toFixed(1);
    totalFiber = totalFiber.toFixed(1);
    drawCircle();
    renderColorBorder();
}

// Hiển thị danh sách các food đã được chọn

function renderChoiceFood() {
    const boxIngredientDetail = document.getElementById("list-add-foods");
    boxIngredientDetail.innerHTML = "";

    listChoiceFood.forEach((element, index) => {
        const li = document.createElement("li");
        li.className = "box-ingredient-detail";
        li.innerHTML = `
            <p>&nbsp;${element.name}</p>
            <i class="fa-solid fa-trash" style="cursor:pointer;"></i>
        `;

        // Hành động xóa
        li.querySelector("i").addEventListener("click", () => {
            listChoiceFood.splice(index, 1);
            renderChoiceFood();
            calcNumberAndDraw();
        });
        boxIngredientDetail.appendChild(li);
    });
    // console.log(listChoiceFood);

    listTotalMicros = sumMicronutrients(listChoiceFood);
    // console.log(listTotalMicros);
    renderListMic();
}

//Hiển thị 4 vòng tròn trên biểu đồ tròn

renderColorBorder();
function renderColorBorder() {
    let noteMacronutrientsPerPortion = document.getElementById("note-macronutrients-per-portion");
    noteMacronutrientsPerPortion.innerHTML = "";

    //Tự tính năng lượng
    let energy = document.getElementById("energy-value");
    energy.innerHTML = "";
    energy.innerHTML = `
    <span id="energy-value" >${totalEnergy}</span>`;

    //Tự tính quantity
    let finalQuantity = document.getElementById("finalQuantity");
    finalQuantity.innerHTML = "";
    finalQuantity.innerHTML = `
    <span id="finalQuantity" style = "background-color: #fff; border: none;">${totalQuantity} g</span>`;

    noteMacronutrientsPerPortion.innerHTML = `
    <div class="circle">
        <div class="circle-macronutrients circleZero" id="circle-macronutrients-fat">
            ${totalFat}g
        </div>
        <span>Fat</span>
    </div>
    <div class="circle">
        <div class="circle-macronutrients" id="circle-macronutrients-carb">
            ${totalCarbohhydrate}g
        </div>
        <span>Carbohydrate</span>
    </div>
    <div class="circle">
        <div class="circle-macronutrients" id="circle-macronutrients-protein">
            ${totalProtein}g
        </div>
        <span>Protein</span>
    </div>
    <div class="circle">
        <div class="circle-macronutrients" id="circle-macronutrients-fiber">
            ${totalFiber}g
        </div>
        <span>Fiber</span>
    </div>`;

    let circleMacronutrientsFat = document.getElementById("circle-macronutrients-fat");
    let circleMacronutrientsCarb = document.getElementById("circle-macronutrients-carb");
    let circleMacronutrientsProtein = document.getElementById("circle-macronutrients-protein");
    let circleMacronutrientsFiber = document.getElementById("circle-macronutrients-fiber");
    if (totalFat === "0.0" || totalFat === 0) {
        circleMacronutrientsFat.classList.add("circleZero");
        circleMacronutrientsFat.classList.remove("circle-macronutrients");
    }
    if (totalProtein === "0.0" || totalProtein === 0) {
        circleMacronutrientsProtein.classList.add("circleZero");
        circleMacronutrientsProtein.classList.remove("circle-macronutrients");
    }
    if (totalCarbohhydrate === "0.0" || totalCarbohhydrate === 0) {
        circleMacronutrientsCarb.classList.add("circleZero");
        circleMacronutrientsCarb.classList.remove("circle-macronutrients");
    }
    if (totalFiber === "0.0" || totalFiber === 0) {
        circleMacronutrientsFiber.classList.add("circleZero");
        circleMacronutrientsFiber.classList.remove("circle-macronutrients");
    }
}

//Tính thành phần dinh dưỡng
function sumMicronutrients(micros) {
    const result = new Micronutrient(
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    );

    for (let key of Object.keys(result)) {
        for (let m of micros) {
            const value = m.micronutrients?.[key];
            result[key] += (typeof value === 'number') ? parseInt(value) : 0;
        }
    }

    return result;
}

// Chức năng thêm ảnh

const buttonAddImg = document.getElementById("btn-add-img");
const boxInputImg = document.getElementById("box-input-img");
const coating = document.getElementById("coating");

buttonAddImg.addEventListener("click", function () {
    boxInputImg.classList.add("show");
    coating.classList.add("show");
});

//luw ảnh
const saveAddImg = document.getElementById("save-box-add-img");
//hủy luu
const cancleAddImg = document.getElementById("cancle-box-img");
//dóng
const closeBoxAddImg = document.getElementById("close-box-add-img");

cancleAddImg.addEventListener("click", () => {
    boxInputImg.classList.remove("show");
    coating.classList.remove("show");
});

closeBoxAddImg.addEventListener("click", () => {
    boxInputImg.classList.remove("show");
    coating.classList.remove("show");
});

const inputLinkImg = document.getElementById("input-link-img");
let inputLinkImgValue;
const imageRecipes = document.getElementById("image-recipes");

inputLinkImg.addEventListener("input", () => {
    inputLinkImgValue = inputLinkImg.value;
});


saveAddImg.addEventListener("click", () => {
    if (inputLinkImgValue.length > 0) {
        boxInputImg.classList.remove("show");
        coating.classList.remove("show");
        imageRecipes.classList.add("show");
        buttonAddImg.classList.add("hidde");
        imageRecipes.src = inputLinkImgValue;
    } else {
        boxInputImg.classList.remove("show");
        coating.classList.remove("show");
    }
});

imageRecipes.addEventListener("click", () => {
    buttonAddImg.classList.remove("hidde");
    imageRecipes.classList.remove("show");
});


//Hiển thị tên tài khoản
renderNameAcc();

function renderNameAcc() {
    const acc = document.getElementById("acc");
    acc.innerHTML = "";
    acc.innerHTML = `
    <a href="w" id="acc"><span>${dataAccNow.username}</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-user"></i></a>`;
}

//tên tác giả mặc định
renderNameRecipes();

function renderNameRecipes() {
    const nameRecipes = document.getElementById("nameRecipes");
    nameRecipes.innerHTML = "";
    nameRecipes.innerHTML = `
    <span id="nameRecipes" style = "background-color: #fff; border: none;">${dataAccNow.username}</span>`;
}

//Valid giá trị không được để trống

//In ra các mic
renderListMic()

function renderListMic() {
    const listMic = document.getElementById("list-mic");
    listMic.innerHTML = "";
    let keys = [];
    let values = [];
    if (listChoiceFood.length === 0) {
        //Tự tính mic(Chưa có)

        for (let key in communityFood[0].micronutrients) {
            keys.push(key);
        }

        for (let i = 0; i < keys.length; i++) {
            listMic.innerHTML += `
        <li>
            <span>${keys[i]}</span>
            <div>
                <span>0</span>
                <span>${Units[i]}</span>
            </div>
        </li>`;
        }
    } else {
        //Tự tính mic(Chưa có)

        for (let key in communityFood[0].micronutrients) {
            keys.push(key);
        }

        for (let key in listTotalMicros) {
            values.push(listTotalMicros[key]);
        }

        for (let i = 0; i < keys.length; i++) {
            listMic.innerHTML += `
        <li>
            <span>${keys[i]}</span>
            <div>
                <span>${values[i]}</span>
                <span>${Units[i]}</span>
            </div>
        </li>`;
        }
    }
}

//Lấy danh category của Recipes
let listAddCategory = document.getElementById("list-add-categorys");

listAddCategory.innerHTML = "<option disabled selected>Add category</option>";
communityRecipes.forEach(element => {
    listAddCategory.innerHTML += `
    <option>${element.categorys}</option>`;
});

//Hành động tim 
const clickLike = document.getElementById("click-like");
let unlike = document.getElementById("unlike");
let like = document.getElementById("like");
let likeCount = document.getElementById("likeCount");
let liked = false;
let count = 0;
let statuLike = false;

clickLike.addEventListener("click", () => {
    liked = !liked;
    if (liked) {
        count++;
        unlike.classList.add("heart-none");
        like.classList.remove("heart-none");
        clickLike.classList.add("liked");
        statuLike = false;
    } else {
        count--;
        unlike.classList.remove("heart-none");
        like.classList.add("heart-none");
        clickLike.classList.remove("liked");
        statuLike = false;
    }
    likeCount.textContent = count;
});


//lưu dữ liệu đã đăng nhập và valid
function validateField(value, element) {
    value === "" ? element.classList.add("error") : element.classList.remove("error");
}

const btnSaveRecipes = document.getElementById("btn-save-recipes");

btnSaveRecipes.addEventListener("click", function () {
    // Cập nhật lại giá trị mới nhất từ các input
    let nameValue = document.getElementById("name").value;
    let descriptionValue = document.getElementById("description").value;
    let totalTimeValue = document.getElementById("totalTime").value;
    let preparationTimeValue = document.getElementById("preparationTime").value;
    let portions = document.getElementById("portions").value;
    let cookingMethodsValue = document.getElementById("input-method").value;
    let listAddCategorysValue = document.getElementById("list-add-categorys").value;
    let inputCreativeCategoryValue = document.getElementById("input-creative-category").value;

    let boxName = document.getElementById("box-name");
    let boxDescription = document.getElementById("box-description");
    let boxTotalTime = document.getElementById("box-totalTime");
    let boxPreparationTime = document.getElementById("box-preparationTime");
    let boxPortions = document.getElementById("box-portions");
    let boxInputMethod = document.getElementById("box-input-method");
    let boxListAddCategorys = document.getElementById("box-list-add-categorys");
    let boxInputCreativeCategory = document.getElementById("box-input-creative-category");

    let inputCategory;
    if (inputCreativeCategoryValue === "") {
        if (listAddCategorysValue === "" || listAddCategorysValue === "Add category") {
            boxListAddCategorys.classList.add("error");
            boxInputCreativeCategory.classList.add("error");
        } else {
            inputCategory = listAddCategorysValue;
            boxListAddCategorys.classList.remove("error");
            boxInputCreativeCategory.classList.remove("error");
        }
    } else {
        inputCategory = inputCreativeCategoryValue;
        boxListAddCategorys.classList.remove("error");
        boxInputCreativeCategory.classList.remove("error");
    }

    validateField(nameValue, boxName);
    validateField(descriptionValue, boxDescription);
    validateField(totalTimeValue, boxTotalTime);
    validateField(preparationTimeValue, boxPreparationTime);
    validateField(portions, boxPortions);
    validateField(cookingMethodsValue, boxInputMethod);

    if (!(nameValue === "")
        && !(descriptionValue === "")
        && !(totalTimeValue === "")
        && !(preparationTimeValue === "")
        && !(portions === "")
        && !(inputCategory === "")
        && !(cookingMethodsValue === "")
    ) {
        const myRecipesCre = new Recipe(
            inputLinkImgValue,
            nameValue,
            descriptionValue,
            dataAccNow.username,
            totalTimeValue,
            preparationTimeValue,
            totalQuantity,
            portions,
            listChoiceFood,
            cookingMethodsValue,
            inputCategory,
            statuLike,
            count,
            Date.now()
        );
        communityRepices.push(myRecipesCre);
        console.log(communityRepices);
        localStorage.setItem("Community Recipes", JSON.stringify(communityRepices));
        
        window.location.href = "http://127.0.0.1:5500/pages/Recipes.html";
    }
    
});