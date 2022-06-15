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

/**
 * @param {Circle} c Circle
 * @param {Array<Circle>} cs circles array
 * @returns boolean
 */
function noIntersection(c, cs) {
	for (const c2 of cs) {
		if (distance(c.x, c.y, c2.x, c2.y) < c.radius + c2.radius) return false
	}
	return true
}

function randomUnfilled(imageData) {
	let pdata = imageData.data
	let possibilities = []
	for (let i = 0; i < pdata.length / 4; i++) {
		if (pdata[i] == 0 && pdata[i + 1] == 0 && pdata[i + 2] == 0 && pdata[i + 3] == 0) {
			possibilities.push({
				x: i % imageData.width,
				y: Math.floor(i / imageData.width)
			})
		}
	}
	let pi = Math.floor(Math.random() * possibilities.length)
	console.log(possibilities[pi])
	return possibilities[pi]
}

module.exports = { randomIntFromRange, randomColor, distance, noIntersection, randomUnfilled }
