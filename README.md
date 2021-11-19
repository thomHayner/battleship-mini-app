<div align="center" >

# BattleShip

## Based on The Classic Board Game

</div>

### Current location

- [https://th-battleship.herokuapp.com/](https://th-battleship.herokuapp.com/)

### Tech Stack
<details>
  <summary>Front End</summary>

- JavaScript
- React
- react-beautiful-dnd

</details>

### Deployment
<details>
  <summary>Heroku Quick Deploy</summary>

  1. Check if Heroku CLI is installed, take necessary action, then login.
  ```shell
  heroku --version
  ```
  Installed, update, and/or proceed.

  </br>

  2. Log in to Heroku through the CLI / browser
  ```shell
  heroku login
  ```
  Follow prompts and log in.

  </br>

  3. Create your Heruko App through the command line
  [Heroku Docs / C-R-A Runtime QuickDeploy Instructions](https://blog.heroku.com/deploying-react-with-zero-configuration)
  ```shell
  heroku create -b https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "react-create-app on Heroku"
  git push heroku master
  heroku open
  ```

</details>

### CI / CD
<details>
  <summary>Heroku / Git Integration</summary>

  - no major CI / CD at this time
  - can be set up with webhook to auto-update with push to master on github
  - this is an ittermittent app and likely won't need much maintainence, so manual will provide regular interaction / practice with maintainence processes
  - manual deployment through CLI or [Heroku](Heroku.com) dashboard is currently necessary
    <details>
      <summary>CLI</summary>

      - In your terminal
      ```shell
      git push heroku master
      heroku open
      ```

    </details>

    <details>
      <summary>Heroku Dashboard</summary>

      - [Heroku](Heroku.com)
      - log in
      - select your app
      - click deploy
      - scroll down to bottom and click "Manual Deploy" button

    </details>

</details>

### Background

  <p>
  This was originally a one day app challenge.  The gameboard, scoreboards and announcements all rendered and functioned correctly for gameplay, but I was not able to implement a 'board selection' feature at the time so the ships were not movable and the board configuration (where the ships were plced) never changed.
  </p>

  <p>
  The app is mostly vanilla JavaScript, with a little bit of React to make the UI.<br>
  There is a recursive function in 'src/Logic/shipPlacer.js'.
  </p>

  <p>
  I have since done some work to refactor and compartmentalize the app.<br>
  I also added a randomizer for the board configuration.<br>
  I plan to add player 'board selection', possibly using react-beautiful-dnd.<br>
  </p>

  <p>
  Since there is no back end, I decided to just host it on Heroku as a front end only app.<br>
  I could try and make it full stack, possibly by making some sort of arcade game style score board component that saves high scores, or a way to save a game in thiddle and then come back to it, however, I doubt that many people will ever play this, so I will porbably just leave it as a portfolio project displaying an app written in JavaScript.
  </p>