let game = new Game (
    'started',
    new Space (
        new Ship(
            [
                new Missile(),
                new Missile()
            ]
        ),
        // null,
        [
            new Rock(),
            new Rock()
        ]
    )
)

game.start()