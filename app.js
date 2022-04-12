let game = new Game (
    'started',
    new Space (
        new Ship(
            [
                new Missile(),
                new Missile()
            ]
        ),
        [
            new Rock(),
            new Rock()
        ]
    )
)