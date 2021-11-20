const ExampleData = [
    {
        playerId: 0000000001,
        username: "playerOne",
        highscores: {
            topScoreGameId1: gameForeignKey,
            topScoreGameId2: gameForeignKey,
            topScoreGameId3: gameForeignKey,
        },
        games: {
            inProgress: {
                inProgress1: gameForeignKey,
                inProgress2: gameForeignKey,
                inProgress3: gameForeignKey,
            },
            completed: {
                completedGame1: gameForeignKey,
                completedGame2: gameForeignKey,
                completedGame3: gameForeignKey,
            }
        },
    },
    {

    }
]