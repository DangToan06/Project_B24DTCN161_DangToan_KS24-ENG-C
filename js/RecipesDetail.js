const tempDetailDataRecipes = JSON.parse(localStorage.getItem("temp detail data recipes"));
const Units = localStorage.getItem("Units").split(",");
const communityFood = JSON.parse(localStorage.getItem("Community Foods"));
let accNow = JSON.parse(localStorage.getItem("AccountNow"));
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
gotoFood.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/FoodPage.html";
});

const gotoHome = document.getElementById("home");
gotoHome.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/HomePage.html";
});

const gotoRecipes = document.getElementById("recipes");
gotoRecipes.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/pages/Recipes.html";
});

//Hiển thị tất cả dữ liệu chi tiết của phần tử đó


//thông tin cơ bản
renderInformationBasic();

function renderInformationBasic() {
    const textBoartBasicInformation = document.getElementById("text-boart-basic-information");
    textBoartBasicInformation.innerHTML = "";
    textBoartBasicInformation.innerHTML = `
        <h3>Basic information</h3>
        <p>Check and edit recipe's basic infomation</p>
        <div class="box-boart-basic-information">
            <span>Name</span>
            <span>${tempDetailDataRecipes.name}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Description</span>
            <span>${tempDetailDataRecipes.description}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Author</span>
            <span>${tempDetailDataRecipes.author}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Total time</span>
            <span>${tempDetailDataRecipes.totalTime}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Preparation time</span>
            <span>${tempDetailDataRecipes.preparationTime}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Final weight</span>
            <span>${tempDetailDataRecipes.finalWeight}</span>
        </div>
        <div class="box-boart-basic-information">
            <span>Portions</span>
            <span>${tempDetailDataRecipes.portions}</span>
        </div>
        `;
}

//Ảnh minh họa
renderImage();

function renderImage() {
    const srcImg = document.getElementById("image-recipes");
    srcImg.innerHTML = "";
    srcImg.innerHTML = `<img class="image-recipes" id="image-recipes" src="${tempDetailDataRecipes.conerSrc}">`;
}

//category
renderCategory();

function renderCategory(){
    let categoryCardDetail = document.getElementById("category-card-detail");
    categoryCardDetail.innerHTML = " ";
    categoryCardDetail.innerHTML =`
        <img src="../assets/icons/iconCategory.png">
        <span id="category"><p>${tempDetailDataRecipes.categorys}</p></span>
    `;
}

// Bảng thành phần
renderIngredients()
function renderIngredients() {
    const ingredients = document.getElementById("ingredients");
    ingredients.innerHTML = `
    <h4>Ingredients</h4>
    <p>Search and add ingredients to the recipe</p>
    `;

    (tempDetailDataRecipes.ingredients).forEach(element => {
        ingredients.innerHTML += `
        <div class="box-ingredient-detail">
            ${element.name}
        </div>
    `;
    });
}

// Phương thức tạo món
renderMethod();

function renderMethod(){
    const cookingMethodBox = document.getElementById("cooking-method-box");
    cookingMethodBox.innerHTML = "";
    cookingMethodBox.innerHTML = `
    <p>1</p>
    <p>${tempDetailDataRecipes.cookingMethods}</p>
    `;
}

//Hiển thị thành phần chính

let totalEnergy = 0;
let totalFat = 0;
let totalCarb = 0;
let totalProtein = 0;
let totalFiber = 0;

calcNumberAndDraw();

function calcNumberAndDraw() {
    totalEnergy = 0;
    totalFat = 0;
    totalCarbohhydrate = 0;
    totalProtein = 0;
    totalFiber = 0;
    // totalQuantity = 0;
    totalEnergy = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
        return sum + element.macronutrients.engergy;
    }, 0);
    totalFat = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
        return sum + element.macronutrients.fat;
    }, 0);
    totalCarbohhydrate = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
        return sum + element.macronutrients.carbohydrate;
    }, 0);
    totalProtein = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
        return sum + element.macronutrients.protein;
    }, 0);
    totalFiber = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
        return sum + element.micronutrients.fiber;
    }, 0);
    // totalQuantity = tempDetailDataRecipes.ingredients.reduce((sum, element) => {
    //     return sum + element.quantity;
    // }, 0);
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

// vẽ vòng tròn ờ 4 thuộc tính chính
renderColorBorder();

function renderColorBorder() {
    let noteMacronutrientsPerPortion = document.getElementById("note-macronutrients-per-portion");
    noteMacronutrientsPerPortion.innerHTML = "";

    //Tự tính năng lượng
    let energy = document.getElementById("energy-value");
    energy.innerHTML = "";
    energy.innerHTML = `
    <span id="energy-value" >${totalEnergy}</span>`;

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

let listChoiceFood = tempDetailDataRecipes.ingredients;

listTotalMicros = sumMicronutrients(listChoiceFood)

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

//Hiển thị thành phần chi tiết
renderListMic()

function renderListMic() {
    const listMic = document.getElementById("list-mic");
    listMic.innerHTML = "";
    let keys = [];
    let values = [];
    if (tempDetailDataRecipes.ingredients.length === 0) {
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

//Tên người dùng

let userName = document.getElementById("nameUser");
userName.innerHTML = "";

userName.innerHTML = `<span id="nameUser">${accNow.username}</span>`;

//Nút sign out 
let signOut = document.getElementById("btn-sign-out");

signOut.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/pages/Sign-in.html";
});
