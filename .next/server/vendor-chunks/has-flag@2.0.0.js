"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag@2.0.0";
exports.ids = ["vendor-chunks/has-flag@2.0.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/has-flag@2.0.0/node_modules/has-flag/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/has-flag@2.0.0/node_modules/has-flag/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (flag, argv) {\n\targv = argv || process.argv;\n\n\tvar terminatorPos = argv.indexOf('--');\n\tvar prefix = /^-{1,2}/.test(flag) ? '' : '--';\n\tvar pos = argv.indexOf(prefix + flag);\n\n\treturn pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzLWZsYWdAMi4wLjAvbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJO0FBQ3RCOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWstZG9jcy8uL25vZGVfbW9kdWxlcy8ucG5wbS9oYXMtZmxhZ0AyLjAuMC9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanM/NjZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbGFnLCBhcmd2KSB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblxuXHR2YXIgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0dmFyIHByZWZpeCA9IC9eLXsxLDJ9Ly50ZXN0KGZsYWcpID8gJycgOiAnLS0nO1xuXHR2YXIgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/has-flag@2.0.0/node_modules/has-flag/index.js\n");

/***/ })

};
;