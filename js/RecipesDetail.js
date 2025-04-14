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
const ctx = document.getElementById('macronutrientChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fat', 'Carbohydrate', 'Protein'],
        datasets: [{
            data: [38.3, 48.9, 12.8],
            backgroundColor: ['#e85c73', '#f6a561', '#20b89e'],
            borderWidth: 1,
            hoverOffset: 20, // tăng size khi hover
        }]
    },
    options: {
        animation: {
            animateRotate: true,
            duration: 1500, // thời gian vẽ biểu đồ
            easing: 'easeInOutQuad' // hiệu ứng
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
            }
        }
    }
});

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
