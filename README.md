# fortune-flash-briefings

Small utilities that power the [Fortune
Cookie](https://www.amazon.ca/Nathan-Friend-Fortune-Cookie/dp/B07DMYQPTS) and
[Oddly Specific Fortunes](https://www.amazon.com/gp/product/B07DNTS3MP) Alexa
flash briefings.

## Installing on Ubuntu Server

**This is no longer necessary.** Deployment is now the responsibility of a
scheduled GitLab pipeline in the
[`website-3.0-docker`](https://gitlab.com/nfriend/website-3.0-docker) project.

1. Ensure `nodejs` is installed on the server
   1. `apt-get` installs an old version - use this method instead:
      https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
2. Copy both files to `/etc/cron.daily` and remove the `.js` extension
3. Update the permissions on both files to be executable: `sudo chmod u+x <file>`
4. Test the jobs using `sudo run-parts --report /etc/cron.hourly`.
   1. Note: this will run _all_ cron jobs in the `cron.hourly` directory. Don't
      do this if there are other jobs that you don't want to trigger. You can
      also replace `--report` with `--test` as described here:
      https://askubuntu.com/a/39732/393384.
5. Ensure the files are updated by making GET requests to these two URLs:
   1. https://nathanfriend.io/flash-briefings/fortune-cookie.json
   2. https://nathanfriend.io/flash-briefings/oddly-specific-fortunes.json
6. ???
7. Profit.

## Developing

1. Run `node update-fortune-cookie.js` or `node update-oddly-specific-fortunes.js`
