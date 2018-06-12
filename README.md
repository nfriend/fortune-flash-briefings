# fortune-flash-briefings
Small utilities that power the Fortune Cookie and Oddly Specific Fortunes Alexa flash briefings

## Installing on Ubuntu Server

1. Ensure `nodejs` is installed on the server
    1. `apt-get` installs an old version - use this method instead: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
2. Copy both files to `/etc/cron.daily` and remove the `.js` extension
3. Update the permissions on both files to be executable: `sudo chmod u+x <file>`
4. Test the jobs using `sudo run-parts --report /etc/cron.hourly`.
    1. Note: this will run _all_ cron jobs in the `cron.hourly` directory. Don't do this if there are other jobs that you don't want to trigger.  You can also replace `--report` with `--test` as described here: https://askubuntu.com/a/39732/393384.
5. Ensure the files are updated by making GET requests to these two URLs:
    1. https://nathanfriend.io/flash-briefings/fortune-cookie.json
    2. https://nathanfriend.io/flash-briefings/oddly-specific-fortunes.json
6. ???
7. Profit.

## Developing

1. Run `npm install`.  Note - node dependencies should only be used for development, since the dependencies won't be available when the scripts run on the server.
2. Run `npm run test`.