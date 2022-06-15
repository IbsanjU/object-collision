function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Pythagoras' theorem, is a fundamental relation in Euclidean geometry among the three sides of a right triangle.
 * c^2 = a^2 + b^2
 * a	=	side of right triangle
 * b	=	side of right triangle
 * c	=	hypotenuse
 * @param {Integer} x1
 * @param {Integer} y1
 * @param {Integer} x2
 * @param {Integer} y2
 * @returns distance between two points
 */
function distance(x1, y1, x2, y2) {
	const xDist = x2 - x1
	const yDist = y2 - y1

	return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { randomIntFromRange, randomColor, distance }
