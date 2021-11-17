<p align="center" >

# BattleShip
## Based on The Classic Board Game
</p>

### Tech Stack
- JavaScript
- React
- esLint
- react-beautiful-dnd

### Deployment
- #### Current location
 - [https://th-battleship.herokuapp.com/](https://th-battleship.herokuapp.com/)

- #### Deployed to Heroku using the quick deploy feature
  <p>
  1. Check if Heroku CLI is installed
  ```
  heroku --version
  ```
  Installed, update, and/or proceed.
  </p>
  <p>
  2. Log in to Heroku through the CLI / browser
  ```
  heroku login
  ```
  Follow prompts and log in.
  </p>
  <p>
  3. Create your Heruko App through the command line
  [https://blog.heroku.com/deploying-react-with-zero-configuration](Heroku Docs / C-R-A Deploy Instructions)
  ```
  heroku create -b https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "react-create-app on Heroku"
  git push heroku master
  heroku open
  ```
  </p>

- #### CI / CD
  - none at this time
  - can be set up with webhook to auto-update with push to master on github
  - this is an ittermittent app and likely won't need much maintainence, so manual will provide regular interaction / practice with maintainence processes
  - manual deployment through CLI or [Heroku.com](Heroku) dashboard is currently necessary
    - ##### CLI
      <p>
      - In your terminal
      ```git push heroku master
      heroku open
      ```
      </p>
      
    - #### Heroku
      - [Heroku.com](Heroku)
      - log in
      - select your app
      - click deploy
      -scroll down to bottom and click "Manual Deploy" button

### Background
<p>
This was originally a one day app challenge.  The gameboard, scoreboards and announcements all rendered and functioned correctly for gameplay, but I was not able to implement a 'board selection' feature at the time so the ships were not movable.
</p>
<p>
I have since done some work to refactor and compartmentalize the app.
</p>