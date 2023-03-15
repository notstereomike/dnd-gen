"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHandler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/generate.js\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function generateHandler(req, res) {\n    const { race , gender , class: charClass  } = req.body;\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: generatePrompt(race, gender, charClass),\n        temperature: 0.7,\n        max_tokens: 200\n    });\n    const result = completion.data.choices[0].text;\n    res.status(200).json({\n        result\n    });\n};\nfunction generatePrompt(race, gender, charClass) {\n    const raceString = capitalizeFirstLetter(race);\n    const genderString = capitalizeFirstLetter(gender);\n    const classString = capitalizeFirstLetter(charClass);\n    return `Generate a 200 word backstory for a ${genderString} ${raceString} ${classString}.\n\nBackstory:`;\n}\nfunction capitalizeFirstLetter(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCO0FBRTBCO0FBRWxELE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBYSxDQUFDO0lBQ3RDRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0NBQ25DLENBQUM7QUFDRixNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQVMsQ0FBQ0MsYUFBYSxDQUFDO0FBRTVCLGVBQWVNLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEQsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLE1BQU0sR0FBRUMsS0FBSyxFQUFFQyxTQUFTLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO0lBRW5ELE1BQU1DLFVBQVUsR0FBRyxNQUFNVCxNQUFNLENBQUNVLGdCQUFnQixDQUFDO1FBQy9DQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxNQUFNLEVBQUVDLGNBQWMsQ0FBQ1QsSUFBSSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsQ0FBQztRQUMvQ08sV0FBVyxFQUFFLEdBQUc7UUFDaEJDLFVBQVUsRUFBRSxHQUFHO0tBQ2hCLENBQUM7SUFFRixNQUFNQyxNQUFNLEdBQUdQLFVBQVUsQ0FBQ1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUk7SUFDOUNoQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFTCxNQUFNO0tBQUUsQ0FBQyxDQUFDO0NBQ2xDO0FBRUQsU0FBU0gsY0FBYyxDQUFDVCxJQUFJLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFO0lBQy9DLE1BQU1lLFVBQVUsR0FBR0MscUJBQXFCLENBQUNuQixJQUFJLENBQUM7SUFDOUMsTUFBTW9CLFlBQVksR0FBR0QscUJBQXFCLENBQUNsQixNQUFNLENBQUM7SUFDbEQsTUFBTW9CLFdBQVcsR0FBR0YscUJBQXFCLENBQUNoQixTQUFTLENBQUM7SUFFcEQsT0FBTyxDQUFDLG9DQUFvQyxFQUFFaUIsWUFBWSxDQUFDLENBQUMsRUFBRUYsVUFBVSxDQUFDLENBQUMsRUFBRUcsV0FBVyxDQUFDOztVQUVoRixDQUFDLENBQUM7Q0FFWDtBQUVELFNBQVNGLHFCQUFxQixDQUFDRyxHQUFHLEVBQUU7SUFDbEMsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuRCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvZ2VuZXJhdGUuanNcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyByYWNlLCBnZW5kZXIsIGNsYXNzOiBjaGFyQ2xhc3MgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwMlwiLFxuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmFjZSwgZ2VuZGVyLCBjaGFyQ2xhc3MpLFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgbWF4X3Rva2VuczogMjAwLFxuICB9KTtcblxuICBjb25zdCByZXN1bHQgPSBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdCB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQocmFjZSwgZ2VuZGVyLCBjaGFyQ2xhc3MpIHtcbiAgY29uc3QgcmFjZVN0cmluZyA9IGNhcGl0YWxpemVGaXJzdExldHRlcihyYWNlKTtcbiAgY29uc3QgZ2VuZGVyU3RyaW5nID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGdlbmRlcik7XG4gIGNvbnN0IGNsYXNzU3RyaW5nID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGNoYXJDbGFzcyk7XG5cbiAgcmV0dXJuIGBHZW5lcmF0ZSBhIDIwMCB3b3JkIGJhY2tzdG9yeSBmb3IgYSAke2dlbmRlclN0cmluZ30gJHtyYWNlU3RyaW5nfSAke2NsYXNzU3RyaW5nfS5cblxuQmFja3N0b3J5OmA7XG5cbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwiZ2VuZXJhdGVIYW5kbGVyIiwicmVxIiwicmVzIiwicmFjZSIsImdlbmRlciIsImNsYXNzIiwiY2hhckNsYXNzIiwiYm9keSIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInN0YXR1cyIsImpzb24iLCJyYWNlU3RyaW5nIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiZ2VuZGVyU3RyaW5nIiwiY2xhc3NTdHJpbmciLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();