let game = new Game (
    new Space (
        new Ship(
            [
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
                new Missile(),
            ]
        ),
        [ ]
    )
)

game.start()