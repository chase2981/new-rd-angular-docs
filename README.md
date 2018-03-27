# @rd/docs site

[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![NSP Status][nsp-image]][nsp-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Downloads][npm-downloads-image]][npm-downloads-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]
[![node][node-image]][node-link]
[![GitHub release][github-release-image]][github-release-link]
[![npm bundle size (minified)][npm-bundle-size-image]][npm-bundle-size-link]


[circleci-badge]: https://circleci.com/gh/chase2981/new-rd-angular.svg?style=shield
[circleci-link]: https://circleci.com/gh/chase2981/new-rd-angular/tree/master
[codecov-image]: https://codecov.io/gh/chase2981/new-rd-angular/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/chase2981/new-rd-angular
[nsp-image]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e/badge
[nsp-link]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e
[dependency-image]: https://david-dm.org/chase2981/new-rd-angular/status.svg
[dependency-link]: https://david-dm.org/chase2981/new-rd-angular
[dev-dependency-image]: https://david-dm.org/chase2981/new-rd-angular/dev-status.svg
[dev-dependency-link]: https://david-dm.org/chase2981/new-rd-angular?type=dev
[peer-dependency-image]: https://david-dm.org/chase2981/new-rd-angular/peer-status.svg
[peer-dependency-link]: https://david-dm.org/chase2981/new-rd-angular?type=peer
[node-link]: https://github.com/chase2981/new-rd-angular/blob/master/SSWebUI/package.json
[github-release-image]: https://img.shields.io/github/release/chase2981/new-rd-angular.svg
[github-release-link]: https://github.com/chase2981/new-rd-angular/releases


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
