window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", () => {
    const miniHeader = document.getElementById("mini-header");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        miniHeader.classList.add("visible");
      } else if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        miniHeader.classList.remove("visible");
      }
  
      lastScrollY = currentScrollY;
    });
  });  
var paths = document.querySelectorAll("path");
var data = [
    {id: "Дом Андромеда", name: "Дом Андромеда", description: "Дом Андромеда - это новый проект жилого комплекса, расположенный в центре города. Он состоит из 12-ти этажей, на которых расположены 72 квартиры. В доме будет функционировать частная школа, спортивный зал, бассейн и кафе.", price: "6.000.000 рублей"},
    {id: "Фигура_2", name: "Дом Зевса", description: "Дом Зевса находится в центре города, имеет 12 этажей. В доме функционирует частная школа, спортивный зал и кафе.", price: "От 6.000.000 рублей"},
    {id: "Фигура_3", name: "Дом на улице Пушкина", description: "Этот дом имеет 10 этажей, на которых расположены 50 квартир. В доме будет функционировать частная школа, спортивный зал и кафе.", price: "От 5.000.000 рублей"},
    {id: "Фигура_4", name: "Дом на улице Советская", description: "Этот дом имеет 12 этажей, на которых расположены 72 квартиры. В доме будет функционировать частная школа, спортивный зал, бассейн и кафе.", price: "От 7.000.000 рублей"},
    {id: "Фигура_5", name: "Дом на улице Ленина 2", description: "Этот дом имеет 10 этажей, на которых расположены 50 квартир. В доме будет функционировать частная школа, спортивный зал и кафе.", price: "От 6.000.000 рублей"},
    {id: "Фигура_6", name: "Дом Зодиак", description: "Этот дом имеет 12 этажей, на которых расположены 72 квартиры. В доме будет функционировать частная школа, спортивный зал, бассейн и кафе.", price: "От 8.000.000 рублей"},
    {id: "Фигура_7", name: "Дом на улице Советская 2", description: "Этот дом имеет 12 этажей, на которых расположены 72 квартиры. В доме будет функционировать частная школа, спортивный зал, бассейн и кафе.", price: "От 7.000.000 рублей"},
    {id: "Фигура_8", name: "ТЦ Москва", description: "Этот ТЦ расположен в центре города, имеет 12 этажей. В ТЦ функционирует частная школа, спортивный зал и кафе."},
    {id: "parking-1", name: "Парковка у ТЦ", description: "Парковка для автомобилей на 200 квадратных с подземным паркингом."},
    {id: "Фигура_10", name: "Детский сад", description: "Детский сад для детей от 1,5 до 7 лет. В саду функционируют 15 групп, в каждой из которых находится 20 детей."},
    {id: "Фигура_11", name: "Спорт площадка", description: "Спорт площадка для любителей спорта."},
    {id: "Фигура_12", name: "Парковка", description: "Парковка для автомобилей на 200 квадратных метров."},
    {id: "Фигура_13", name: "Парковка", description: "Парковка для автомобилей на 200 квадратных метров."},
    {id: "school", name: "Школа", description: "Школа на 600 человек. со столовой, спортзалом, библиотекой и кабинетами."},
    {id: "Фигура_15", name: "Церковь", description: "Церковь."},
    {id: "Фигура_14", name: "Больница", description: "Больница на 400 человек, со стационаром, кабинетами врачей, аптекой и диагностическим центром."},
    {id: "Фигура_17", name: "Парковка", description: "Парковка для автомобилей на 100 квадратных метров."},
    {id: "forest", name: "Лесная зона", description: "Лесная зона с множеством деревьев и зеленой травой. В лесу можно гулять, наслаждаться природой и свежим воздухом. Также там есть речка, в которой можно поплавать, множество кемпингов и спортивные залы."},
];
var tooltip = document.getElementById("tooltip");

paths.forEach(function (path) {
    path.addEventListener("mouseover", function (e) {
        var element = e.target;
        var id = element.id;
        var found = data.find(function (elem) {
            return elem.id === id;
        });
        if (found) {
            var inner = `<strong>${found.name}</strong><br>${found.description}`;
            if (found.price) {
                inner += `<br><strong class="fw-bold">Цена от:</strong> ${found.price}`;
            }
            tooltip.innerHTML = inner;
            tooltip.classList.add("show");
        }
    });
    path.addEventListener("mouseout", function () {
        tooltip.classList.remove("show");
    });
});
document.querySelector("#toggle-plans").addEventListener("click", function () {
  const plansContainer = document.querySelector("#popular-plans");
  if (plansContainer.classList.contains("show")) {
    plansContainer.classList.remove("show");
  } else {
    plansContainer.classList.add("show");
  }
});
