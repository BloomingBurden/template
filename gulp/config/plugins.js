import replace from 'gulp-replace'; // Search and replace
import plumber from 'gulp-plumber'; // mistake event
import notify from 'gulp-notify'; // message
import sync from 'browser-sync'; // localServer;
import newer from 'gulp-newer'; // Is it new file?


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    sync: sync,
    newer: newer,
}

