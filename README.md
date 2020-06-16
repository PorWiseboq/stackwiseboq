# Boilerplate for StackBlend Platform

The purpose of this repository is for forking and being used with StackBlend platform. The forked repository will be your assets under the MIT License.

## Connect your GitHub developer (a separate one from mainly use) account
1. Go to [StackBlend signup page](https://pages.github.com/).
2. Enter your existing email with a new generated password and submit.
3. On the profile menu, click "Settings".
4. Please logout from your main GitHub account and create a new one, dedicated for this project.
5. From "GitHub Account", click "Connect to a Developer Account".
6. Please confirm that the GitHub account is the dedicated one, connect.
  - Organization Or User Alias: [Your New Dedicated Alias]
  - Project Nam: demo
  - Develop Branch (Save): develop
  - Staging Branch (Deploy): staging
7. Click "Update Profile".

## Local testing step:
1. Open command line or terminal with a preferred project directory.
2. git clone git@github.com:tkomkrit/demo.git
3. git checkout develop
4. npm install
5. npm run build
6. npm run watch

## Remote testing on Heroku:
1. Open StackBlend editor, waiting for loading.
2. Click on "Deploy" button.
3. Wait for deployment, not longer than two minutes.
4. If there was no problems, the new updates will be visible at: https://conone-demo-staging.herokuapp.com/.
5. Otherwise, please clone, check, and fix defects using the "Local testing step" but with a branch "staging" instead of the "develop".
