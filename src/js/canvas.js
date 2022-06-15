import utils, { distance, randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

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
		this.radius = radius
		this.color = color
	}

	draw() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.strokeStyle = this.color
		c.stroke()
		c.closePath()
	}

	update() {
		this.draw()
	}
}

// Implementation
let circles = []
function init() {
	circles = []

	for (let i = 0; i < 50; i++) {
		const x = randomIntFromRange(0, innerWidth)
		const y = randomIntFromRange(0, innerHeight)
		const radius =  randomIntFromRange(8, 50)
		const color =  randomColor(colors)
		circles.push(new Circle(x, y, radius, color))
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, canvas.width, canvas.height)

	// c.fillText('IbsanjU', mouse.x, mouse.y)
	circles.forEach((object) => {
		object.update()
	})
	circles[1].x = mouse.x - circles[1].radius
	circles[1].y = mouse.y

	if (distance(circles[0].x, circles[0].y, circles[1].x, circles[1].y) < circles[0].radius + circles[1].radius) {
		console.log('collided')
		circles[0].color = 'orange'
	} else {
		circles[0].color = 'black'
	}

	console.log(distance(circles[0].x, circles[0].y, circles[1].x, circles[1].y))
}

init()
animate()
