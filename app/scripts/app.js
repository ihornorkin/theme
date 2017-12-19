/* Example import node_modules*/
/* import 'slick-carousel'; */

const mainModule = (function () {
	let elements = {};

	const cacheDOM = function () {
		const self = {};

		/* self.elementName = $(); */
		return self;
	};

/* Usage element
	elements.elementName and other js code
	*/

/* Example function
	const exampleFunction = function () {
		do code
	}
	*/

	/* Declarate function in array */
	const init = function () {
		elements = cacheDOM();
		/* exampleFunction(); */
	};

	return {
		init
	};
})();

/* Initilisation function */

document.addEventListener('DOMContentLoaded', () => {
	mainModule.init();
});
