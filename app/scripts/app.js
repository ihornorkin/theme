import $ from 'jquery';

const mainModule = (function () {
	let cachedDOM = {};

	const cacheDOM = function () {
		const self = {};

		/* self.elementName = $(); */

		return self;
	};

/* Usage element
	cacheDOM.elementName and othe js code
*/

/* Example function
	const exampleFunction = function () {
		do code
	}
*/

/* Declarate function in array */
	const init = function () {
		cachedDOM = cacheDOM();
		/* exampleFunction(); */
	};

	return {
		init
	};
})();

/* Initilisation function */

$(document).ready(function () {
	mainModule.init();
});
