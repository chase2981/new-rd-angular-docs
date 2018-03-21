var writeFile = require('fs').writeFile;
var argv = require('yargs').argv;

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';
const isDev = environment === 'dev';

if(!environment)
  throw Error('Please provide a valid environment as input (npm run config -- --environment=dev)')

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  matGaId: "${isProd ? 'UA-8594346-24' : isDev ? '' : ''}",
  ngGaId: "${isProd ? 'UA-8594346-15' : isDev ? 'UA-8594346-26' : ''}",
  rd: {
     coreApiKey: "${process.env.RD_CORE_API_KEY_DEV || ''}",
     coreSecretKey: "${process.env.RD_CORE_SECRET_KEY_DEV || ''}",
  }
};
`

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});