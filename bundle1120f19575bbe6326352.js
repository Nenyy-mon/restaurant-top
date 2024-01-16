/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const About = () => {
  let content = document.querySelector('#content');
  let about = document.querySelector('#about');
  let text = document.createElement('p');
  text.setAttribute('id', 'text');
  text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et magna erat. Fusce elementum nulla congue tellus finibus tincidunt. Vestibulum id felis nec lectus viverra vehicula. Quisque lobortis felis sed eros elementum congue. Sed in interdum justo. Nullam malesuada quam eget enim ultrices placerat. Suspendisse eu porttitor erat. Maecenas suscipit ligula ornare, pharetra nisl sit amet, gravida massa. Aenean ac mi vitae arcu tempus convallis vel id erat. Pellentesque at efficitur quam. Phasellus feugiat lorem sed odio rhoncus, vel gravida lectus varius.Pellentesque iaculis eget odio nec blandit.Aliquam enim risus, malesuada sed rhoncus at, vestibulum volutpat massa.Pellentesque convallis metus sit amet mi interdum condimentum.Morbi auctor nunc metus, nec pulvinar neque scelerisque sed.Morbi vel molestie libero, sed sollicitudin risus.Donec ut posuere justo.Proin posuere purus id pharetra blandit.Fusce non varius quam.Nunc at sapien quis sem interdum mollis.Sed mi neque, dignissim sed magna non, porttitor blandit velit.Nam varius augue euismod, dictum enim eget, ultrices ligula. Suspendisse potenti.In dignissim turpis non posuere euismod.Nulla facilisi.Nunc venenatis facilisis augue.In a quam commodo nulla pellentesque ultricies at nec sem.Sed et pharetra nibh.Nunc mi urna, fermentum in velit a, sollicitudin imperdiet purus.Vestibulum odio ante, vulputate vitae eros vitae, aliquet dignissim erat.Integer interdum consequat augue ac facilisis.Sed nec convallis nulla.Suspendisse sed efficitur nunc, sed facilisis eros. Nunc dui leo, rhoncus quis sapien quis, feugiat mattis mauris.Morbi pulvinar luctus quam, id venenatis turpis lobortis ac.Curabitur sollicitudin volutpat quam sit amet semper.In aliquam efficitur volutpat.Aliquam mollis, leo at ornare pretium, nunc metus vestibulum purus, nec hendrerit dolor ante ac mi.Nulla facilisi.Nunc vitae dolor imperdiet, consequat quam et, mattis ligula.Nulla vel volutpat nisi.Vivamus tempus neque vel velit sagittis cursus.Vivamus ornare ornare magna, at dapibus quam sollicitudin in.Morbi venenatis massa libero, nec luctus arcu luctus eget.Mauris ultricies arcu non purus rhoncus, a convallis erat tempor.Pellentesque dictum, erat eu pharetra ultrices, neque tellus lobortis ex, id sagittis eros lacus sed purus.Quisque in euismod leo.Aenean at quam sit amet quam pharetra feugiat";
  console.log(text);
  about.appendChild(text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contact = () => {
  let content = document.querySelector('#content');
  let contact = document.querySelector('#contact');
  let number = document.createElement('p');
  number.innerHTML = ' +3856-4465-123513-call-mee';
  contact.appendChild(number);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bgNav_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bgNav.jpg */ "./src/bgNav.jpg");

function Footer() {
  let foot = document.getElementById('footer');
  foot.style.backgroundImage = `url(${_bgNav_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  foot.innerHTML = 'All content done by' + ' ';
  let aTag = document.createElement('a');
  aTag.setAttribute('href', "https://www.instagram.com/jasamsone/");
  aTag.setAttribute('target', 'blank');
  aTag.setAttribute('id', 'atag');
  aTag.innerHTML = 'jasamsone';
  foot.appendChild(aTag);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Menu = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Menu items
  let content = document.querySelector('#content');
  let menu = document.querySelector('#menu');
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'list');
  menu.appendChild(ul);
  function listEl() {
    var array = ['Elixir of the youth', 'Lilith of the Fox hill', 'Pork belly', 'Cinammon chicken', 'Beef Buns', 'Ramen'];
    for (let i = 0; i < array.length; i++) {
      var text = array[i];
      var list = document.getElementById('list');
      var listItem = document.createElement("li");
      listItem.innerHTML = text;
      list.appendChild(listItem);
    }
  }
  listEl();

  ////////////////////////////////////////// working time
  let workingTime = document.createElement('ul');
  workingTime.setAttribute('id', 'workTime');
  menu.appendChild(workingTime);
  function workEl() {
    var array = [' Mo - 08:00 - 16-00', ' Tu - 08:00 - 16-00', ' Wed 08:00 - 16-00', ' Thr - 08:00 - 16-00', ' Fri - 08:00 - 16-00', ' Sat - 08:00 - 16-00', ' Sun - 08:00 - 16-00'];
    for (let i = 0; i < array.length; i++) {
      var text = array[i];
      var list = document.getElementById('workTime');
      var listItem = document.createElement("li");
      listItem.innerHTML = text;
      list.appendChild(listItem);
    }
  }
  workEl();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/tabChange.js":
/*!**************************!*\
  !*** ./src/tabChange.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabChange)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");

function tabChange(el) {
  let about = document.querySelector('#about');
  let menu = document.querySelector('#menu');
  let contact = document.querySelector('#contact');
  let allCont = document.getElementsByClassName('container');
  if (el === 'one') {
    console.log(el);
    for (let i = 0; i < allCont.length; i++) {
      allCont[i].classList.add('hidden');
    }
    menu.classList.remove('hidden');
  } else if (el === 'two') {
    console.log(el);
    for (let i = 0; i < allCont.length; i++) {
      allCont[i].classList.add('hidden');
    }
    about.classList.remove('hidden');
  } else if (el === 'three') {
    console.log(el);
    for (let i = 0; i < allCont.length; i++) {
      allCont[i].classList.add('hidden');
    }
    contact.classList.remove('hidden');
  } else {
    console.log(el);
    for (let i = 0; i < allCont.length; i++) {
      allCont[i].classList.add('hidden');
    }
    menu.classList.remove('hidden');
  }
}

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _tabChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabChange */ "./src/tabChange.js");
/* harmony import */ var _bgNav_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgNav.jpg */ "./src/bgNav.jpg");


let tabActive;
const tabs = () => {
  const divBut = document.createElement('div');
  divBut.classList.add('mainBut');
  document.body.append(divBut);
  document.getElementById("nav").insertBefore(divBut, document.getElementById("nav").firstChild);
  divBut.style.backgroundImage = `url(${_bgNav_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
  const tabOne = document.createElement('button');
  tabOne.classList.add('one');
  tabOne.innerHTML = 'MENU';
  tabOne.addEventListener('click', () => {
    tabActive = tabOne.className;
    (0,_tabChange__WEBPACK_IMPORTED_MODULE_0__["default"])(tabActive);
    console.log(tabActive);
    if (tabOne.className == tabActive) {}
    tabTwo.classList.remove('active');
    tabThree.classList.remove('active');
    tabOne.classList.add("active");
  });
  const tabTwo = document.createElement('button');
  tabTwo.classList.add('two');
  tabTwo.innerHTML = 'ABOUT';
  tabTwo.addEventListener('click', () => {
    tabActive = tabTwo.className;
    (0,_tabChange__WEBPACK_IMPORTED_MODULE_0__["default"])(tabActive);
    tabOne.classList.remove('active');
    tabThree.classList.remove('active');
    tabTwo.classList.add("active");
  });
  const tabThree = document.createElement('button');
  tabThree.classList.add('three');
  tabThree.innerHTML = 'CONTACT';
  tabThree.addEventListener('click', () => {
    tabActive = tabThree.className;
    (0,_tabChange__WEBPACK_IMPORTED_MODULE_0__["default"])(tabActive);
    tabOne.classList.remove('active');
    tabTwo.classList.remove('active');
    tabThree.classList.add("active");
  });
  divBut.appendChild(tabOne);
  divBut.appendChild(tabTwo);
  divBut.appendChild(tabThree);
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  height: fit-content;
}
body {
  margin: 0;
  padding: 0;
  height: fit-content;
  overflow-x: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#content {
  width: 100%;
  height: fit-content;
  height: 100vh;
}
#nav {
  width: 100%;
  height: 100%;
}
.mainBut {
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
button {
  border: none;
  padding: 10px;
  width: 100px;
  font-weight: 700;
  background: none;
  color: azure;
  opacity: 0.6;
  transition: 500ms;
}
button:hover {
  opacity: 1;
}
.active {
  opacity: 1;
}
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 0;
  height: 100px;
  width: 100%;
  color: white;
  background-position: top;
  background-size: auto;
}
#atag {
  color: #5075d9;
  text-decoration: none;
  transition: 0.5s;
}
#atag:hover {
  color: #385194;
}
#menu,
#about {
  background-color: #f0bc5d;
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
}
#list {
  width: 100%;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px 30px 10px;
  border: 1px solid #385194;
}
#workTime {
  width: 100%;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px 30px 10px;
  border: 1px solid #385194;
}
li {
  font-weight: 600;
  padding: 10px;
  text-transform: uppercase;
  color: #2a3e75;
}
.hidden {
  display: none !important;
}
.container {
  display: block;
}

#text {
  margin-top: 0;
  width: 70%;
  padding-top: 30px;
  padding-bottom: 50px;
  text-align: center;
  font-size: 10px;
  text-overflow: ellipsis;
  color: #2a3e75;
}
#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0bc5d;
  height: 100%;
  font-weight: 900;
  color: #2a3e75;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB;wEACsE;AACxE;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,2BAA2B;EAC3B,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,aAAa;EACb,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":["html {\r\n  height: fit-content;\r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: fit-content;\r\n  overflow-x: hidden;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n}\r\n#content {\r\n  width: 100%;\r\n  height: fit-content;\r\n  height: 100vh;\r\n}\r\n#nav {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.mainBut {\r\n  background-position: center;\r\n  background-size: cover;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 200px;\r\n}\r\nbutton {\r\n  border: none;\r\n  padding: 10px;\r\n  width: 100px;\r\n  font-weight: 700;\r\n  background: none;\r\n  color: azure;\r\n  opacity: 0.6;\r\n  transition: 500ms;\r\n}\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n.active {\r\n  opacity: 1;\r\n}\r\n#footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  bottom: 0;\r\n  height: 100px;\r\n  width: 100%;\r\n  color: white;\r\n  background-position: top;\r\n  background-size: auto;\r\n}\r\n#atag {\r\n  color: #5075d9;\r\n  text-decoration: none;\r\n  transition: 0.5s;\r\n}\r\n#atag:hover {\r\n  color: #385194;\r\n}\r\n#menu,\r\n#about {\r\n  background-color: #f0bc5d;\r\n  width: 100%;\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 0;\r\n}\r\n#list {\r\n  width: 100%;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 30px 0px 30px 10px;\r\n  border: 1px solid #385194;\r\n}\r\n#workTime {\r\n  width: 100%;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 30px 0px 30px 10px;\r\n  border: 1px solid #385194;\r\n}\r\nli {\r\n  font-weight: 600;\r\n  padding: 10px;\r\n  text-transform: uppercase;\r\n  color: #2a3e75;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n}\r\n.container {\r\n  display: block;\r\n}\r\n\r\n#text {\r\n  margin-top: 0;\r\n  width: 70%;\r\n  padding-top: 30px;\r\n  padding-bottom: 50px;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  text-overflow: ellipsis;\r\n  color: #2a3e75;\r\n}\r\n#contact {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #f0bc5d;\r\n  height: 100%;\r\n  font-weight: 900;\r\n  color: #2a3e75;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/bgNav.jpg":
/*!***********************!*\
  !*** ./src/bgNav.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bgNav.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");






function component() {
  (0,_tabs__WEBPACK_IMPORTED_MODULE_5__.tabs)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
document.body.appendChild(component());
})();

/******/ })()
;
//# sourceMappingURL=bundle1120f19575bbe6326352.js.map