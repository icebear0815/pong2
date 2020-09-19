input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.move(-1)
        paddleB.move(-1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleB.get(LedSpriteProperty.X) < 4) {
        paddleA.move(1)
        paddleB.move(1)
    }
})
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directionX = randint(-1, 1)
let directionY = 1
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    if (ball.isTouching(paddleA) || ball.isTouching(paddleB)) {
        directionY = -1
        directionX = randint(-1, 1)
    }
    basic.pause(500)
})
