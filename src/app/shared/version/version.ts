import {VERSION} from '@angular/material';

/** This material version will be used in footer and stackblitz. */
export const materialVersion = "0.0.0"; // VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string;
  title: string;
}

/** Doc site versions. We update the urls and titles manually */
// TODO(tinayuangao): Update the title with actual versions
export const docVersions: VersionInfo[] = [
  {
    url: 'https://rd-docs-dev.firebaseapp.com/',
    title: '0.0.0'
  },
  {
    url: `http://v5.material.angular.io`,
    title: '6.0.0-beta.4'
  }
];
