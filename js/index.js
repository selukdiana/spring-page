import { debounce } from "./debounce.js";

const springComponents = [
  {
    img: "./imgs/spring-boot.svg",
    title: "Spring Boot",
    description:
      "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    version: "3.4.4",
    versionsAddition: "9",
  },
  {
    img: "./imgs/spring-framework.svg",
    title: "Spring Framework",
    description:
      "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
    version: "6.2.5",
    versionsAddition: "8",
  },
  {
    img: "./imgs/spring-data.svg",
    title: "Spring Data",
    description:
      "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    version: "2014.1.4",
    versionsAddition: "7",
  },
  {
    img: "./imgs/spring-cloud.svg",
    title: "Spring Cloud",
    description:
      "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices..",
    version: "2024.0.1",
    versionsAddition: "8",
  },
  {
    img: "./imgs/spring-data-flow.svg",
    title: "Spring Cloud Data Flow",
    description:
      "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    version: "2.11.5",
    versionsAddition: "7",
  },
];
const headerData = [
  {
    title: "Why Spring",
    list: [
      "Overview",
      "Generative AI",
      "Microservices",
      "Web Applications",
      "Cloud",
      "Event Driven",
      "Batch",
    ],
  },
  {
    title: "Learn",
    list: ["Overview", "Generative AI", "Microservices", "Web Applications"],
  },
  {
    title: "Projects",
    list: ["Overview", "Generative AI", "Microservices"],
  },
  {
    title: "Academy",
    list: ["Overview", "Generative AI"],
  },
  {
    title: "Solutions",
    list: ["Overview", "Generative AI", "Microservices"],
  },
  {
    title: "Community",
    list: ["Overview", "Generative AI", "Microservices"],
  },
];

const showHeader = function (dataArr) {
  return dataArr.map(function (elem) {
    let headerHtml = "";
    headerHtml += '<li class="list-header__item">';
    headerHtml += '<a href="#">' + elem.title + "</a>";
    headerHtml += '<ul class="list-item__dropdown dropdown-list">';
    headerHtml += elem.list
      .map(function (listItem) {
        return (
          '<li><a class="dropdown-list__item" href="#">' +
          listItem +
          "</a></li>"
        );
      })
      .join("");
    headerHtml += "</ul></li>";
    return headerHtml;
  });
};

const showComponents = function (dataArr) {
  return dataArr.length === 0
    ? ["No results"]
    : dataArr.map(function (elem) {
        let componentsHtml = "";
        componentsHtml += '<a class="components__card" href="#">';
        componentsHtml += '<div class="card__header header-card">';
        componentsHtml += '<div class="header-card__img">';
        componentsHtml +=
          '<img src="' + elem.img + '" alt="' + elem.title + '" />';
        componentsHtml += "</div>";
        componentsHtml += "<h3>" + elem.title + "</h3>";
        componentsHtml += "</div>";
        componentsHtml +=
          '<div class="card__description"><p>' +
          elem.description +
          "</p></div>";
        componentsHtml +=
          '<div class="card__footer footer-card"><span class="footer-card__version">' +
          elem.version +
          "</span>";
        componentsHtml +=
          '<span class="footer-card__addition">+ ' +
          elem.versionsAddition +
          " versions</span></div></a>";
        return componentsHtml;
      });
};

const addEventListeners = function () {
  const burger = document.querySelector("#burger-toggle");
  const burgerClickHandler = function () {
    const navigation = document.querySelector(".nav-header");
    if (this.checked) {
      navigation.dataset.isOpened = "true";
    } else {
      delete navigation.dataset.isOpened;
    }
  };
  burger.addEventListener("change", burgerClickHandler);

  const componentsSearch = document.querySelector("#components-search");
  const inputHandler = function () {
    const val = this.value;
    const componentsContent = document.querySelector(".components__content");
    const filteredSpringComponents = springComponents.filter(function (elem) {
      return elem.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
    componentsContent.innerHTML = showComponents(filteredSpringComponents).join(
      ""
    );
  };
  const debouncedInputHandler = debounce(
    inputHandler.bind(componentsSearch),
    300
  );
  componentsSearch.addEventListener("input", debouncedInputHandler);
};

const componentsContent = document.querySelector(".components__content");
componentsContent.innerHTML = showComponents(springComponents).join("");

const headerList = document.querySelector(".list-header");
headerList.innerHTML = showHeader(headerData).join("");

addEventListeners();
