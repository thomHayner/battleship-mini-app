const { Pool, Client } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'battleshipUser',
    // max: 20,
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 2000,
});
const client = new Client ({

})

const addScores = (req, res) => {
    pool.query( INSERT INTO "highScores" () VALUES () )
})

const getHighScoreList = (req, res) => {
    // pool.query()
    console.log(req.body)
}

const getAllGamesInProgress = () => {
    pool.query()
// links to database go here
};

const getOneGameToLoad = () => {
    pool.query()
// links to database go here
};

module.exports = { getHighScoreList, getAllGamesInProgress, getOneGameToLoad }