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
    {
        id: "Фигура_3",
        name: "Детская площадка 3",
        description: "Это детская площадка 3"
    },
    {
        id: "Фигура_4",
        name: "Детская площадка 4",
        description: "Это детская площадка 4"
    },
    {
        id: "Фигура_5",
        name: "Детская площадка 5",
        description: "Это детская площадка 5"
    },
    {
        id: "Фигура_6",
        name: "Детская площадка 6",
        description: "Это детская площадка 6"
    },
    {
        id: "Фигура_7",
        name: "Детская площадка 7",
        description: "Это детская площадка 7"
    },
    {
        id: "Фигура_8",
        name: "Детская площадка 8",
        description: "Это детская площадка 8"
    },
    {
        id: "Фигура_1",
        name: "Детская площадка 1",
        description: "Это детская площадка 1"
    },
    {
        id: "Фигура_2",
        name: "Детская площадка 2",
        description: "Это детская площадка 2"
    },
    {
        id: "Дом-8",
        name: "Дом 8",
        description: "Это дом 8",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-7",
        name: "Дом 7",
        description: "Это дом 7",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-6",
        name: "Дом 6",
        description: "Это дом 6",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-5",
        name: "Дом 5",
        description: "Это дом 5",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-4",
        name: "Дом 4",
        description: "Это дом 4",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-3",
        name: "Дом 3",
        description: "Это дом 3",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-2",
        name: "Дом 2",
        description: "Это дом 2",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Дом-1",
        name: "Дом 1",
        description: "Это дом 1",
        price: "От 5.000.000 рублей"
    },
    {
        id: "Парки",
        name: "Парки",
        description: "Это парки"
    },
    {
        id: "Фигура_9",
        name: "Фигура 9",
        description: "Это фигура 9"
    }

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