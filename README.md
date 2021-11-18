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
- esLint
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
  [Heroku Docs / C-R-A Deploy Instructions](https://blog.heroku.com/deploying-react-with-zero-configuration)
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
  This was originally a one day app challenge.  The gameboard, scoreboards and announcements all rendered and functioned correctly for gameplay, but I was not able to implement a 'board selection' feature at the time so the ships were not movable.
  </p>

  <p>
  Since there is no back end, I decided to just host it on Heroku as a front end only app.  This might change.
  </p>

  <p>
  I have since done some work to refactor and compartmentalize the app.<br>
  I plan to add player 'board selection', possibly using react-beautiful-dnd.<br>
  I plan to try and make it full stack, possibly by tweaking the scoring system and making with some sort of arcade game style score board component.
  </p>