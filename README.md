# @rd docs site

# contributing
* clone the repo and `cd` into it
* `npm install`
2) set env variables
* `cp .env.example .env`
3) convert newly set env variables to
new typescript output file (i.e. src/environments/environment.*.ts)
* npm run config -- --environment=dev
* npm run config -- --environment=prod

** make sure .env file is never checked in, which it should already be in the .gitignore, so you should already be good!

## preview
https://rd-docs-dev.firebaseapp.com/
