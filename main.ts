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
basic.forever(function () {
	
})
