import utils, { distance, noIntersection, randomColor, randomIntFromRange, randomUnfilled } from './utils'
import { resolveCollision } from './utils_elastic_collision'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
}

const colors = ['#41C5C5', '#7ECEFD', '#3FA6E5', '#FD7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
	mouse.x = event.clientX
	mouse.y = event.clientY
})

addEventListener('resize', () => {
	canvas.width = innerWidth
	canvas.height = innerHeight

	init()
})

// Objects
class Circle {
	constructor(x, y, radius, color) {
		this.x = x
		this.y = y
		this.velocity = {
			x: randomIntFromRange(0.3, 2.5),
			y: randomIntFromRange(0.3, 2.5)
		}
		this.radius = radius
		this.color = color
		this.mass = 1
		this.opacity = 0
	}

	draw() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.save() // save state before fill
		c.globalAlpha = this.opacity
		c.fillStyle = this.color
		c.fill()
		c.restore() // restore the prev state
		c.strokeStyle = this.color
		c.stroke()
		c.closePath()
	}

	update(circles) {
		this.draw()
		for (let i = 0; i < circles.length; i++) {
			const c = circles[i]
			if (this === c) continue
			if (distance(c.x, c.y, this.x, this.y) - (c.radius + this.radius) < 0) {
				console.log('collided')
				resolveCollision(this, c)
			}
		}
		if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
			this.velocity.x = -this.velocity.x
		}
		if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
			this.velocity.y = -this.velocity.y
		}

		// mouse collision
		if (distance(mouse.x, mouse.y, this.x, this.y) < 30) {
			console.log('mouse collided')
			this.opacity+=0.02
		}

		this.x += this.velocity.x
		this.y += this.velocity.y
	}
}

// Implementation
let circles = []
function init() {
	circles = []

	for (let i = 0; i < 100; i++) {
		const radius = randomIntFromRange(8, 30)
		let x = randomIntFromRange(radius, canvas.width - radius)
		let y = randomIntFromRange(radius, canvas.height - radius)
		const color = randomColor(colors)
		let add = true
		if (i !== 0) {
			let count = 0
			for (let j = 0; j < circles.length; j++) {
				if (!noIntersection(new Circle(x, y, radius, color), circles)) {
					x = randomIntFromRange(radius, canvas.width - radius)
					y = randomIntFromRange(radius, canvas.height - radius)
					count++
					if (count < 10) j = -1
					else add = false
				} else {
					add = true
					break
				}
			}
		}
		if (add) circles.push(new Circle(x, y, radius, color))
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, canvas.width, canvas.height)

	// c.fillText('IbsanjU', mouse.x, mouse.y)
	circles.forEach((object) => {
		object.update(circles)
	})
}

// let maxR = 50
// setInterval(() => {
// 	// c.clearRect(0, 0, canvas.width, canvas.height)
// 	const imageData = c.getImageData(0, 0, canvas.width, canvas.height)
// 	const p = randomUnfilled(imageData)
// 	let r = 1
// 	while (noIntersection({ x: p.x + r, y: p.y + r, r: r }, circles) && r < maxR) {
// 		r++
// 	}
// 	circles.push(new Circle(p.x, p.y, r - 1, randomColor(colors)))
// }, 1000)

init()
animate()
