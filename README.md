# fortune-flash-briefings

Small utilities that power the [Fortune
Cookie](https://www.amazon.ca/Nathan-Friend-Fortune-Cookie/dp/B07DMYQPTS) and
[Oddly Specific Fortunes](https://www.amazon.com/gp/product/B07DNTS3MP) Alexa
flash briefings.

## Deployment

Regeneration and deployment of these files is handled by a scheduled pipeline in
the [`website-3.0-docker`](https://gitlab.com/nfriend/website-3.0-docker)
project (specifically, the `regenerate jsons` job).

## Developing

1. Run `node update-fortune-cookie.js` or `node update-oddly-specific-fortunes.js`
