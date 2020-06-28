# Boilerplate for StackBlend Platform

The purpose of this repository is for forking and being used with StackBlend platform. The forked repository will be your assets under the MIT License ([read more on terms of service, section 2: Use License](https://www.softenstorm.com/stackblend-policy-and-terms)).

## Ask administrator for the access
### You will receive:
1. An email account associated with @wiseboq.com
2. A GitHub account under the above email.

## Development on StackBlend platform
1. Go to [StackBlend signup page](https://staging.stackblend.com/).
2. Enter your existing email with a new generated password and submit.
3. On the profile menu, click "Settings".
4. Please logout from your main GitHub account and create a new one, dedicated for this project.
5. From "GitHub Account", click "Connect to a Developer Account".
6. Please confirm that the GitHub account is the dedicated one, connect.
  - Organization Or User Alias: WiseBoq
  - Project Name: wiseboq-site
  - Feature Branch (Isolate Save): feature/___branch___
  - Develop Branch (Merged Save): develop
  - Staging Branch (Deploy): staging
  - Endpoint (For Testing APIs): https://develop.wiseboq.com
7. Click "Update Profile".

## Local testing step
1. Open command line or terminal with a preferred project directory.
2. git clone git@github.com:WiseBoq/wiseboq-site.git
3. git checkout develop
4. npm install
5. npm run build
6. npm run watch

## Remote testing on Heroku
1. Open StackBlend editor, waiting for loading.
2. Click on "Deploy" button.
3. Wait for deployment, not longer than two minutes.
4. If there was no problems, the new updates will be visible at: https://conone-demo-staging.herokuapp.com/.
5. Otherwise, please clone, check, and fix defects using the "Local testing step" but with a branch "staging" instead of the "develop".

## Collaboration
### Slack
[Invitation](https://join.slack.com/t/softenstorm/shared_invite/zt-fm08d9tc-juhyX_9~ACTPVzhcfXcT8A)

## Servers and infrastructures
### Heroku
Username : engineers@wiseboq.com
Password : bhGA[a48236J67Y8
