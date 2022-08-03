# `vps-issue-userland-mode`

Most of the issue I'm running into with VPS are things that stop working properly when I switch my `.page.vue` file to `.page.client.vue` or `.page.server.vue`.

To try and remove these issues, in this example I just define all my pages as `.page.vue` and export a `mode` from my pages which I use in [`_default.page.server.js`](pages/_default//_default.page.server.js) and [`_default.page.client.js`]((pages/_default//_default.page.client.js)) to manually change the behavior.

## The Downside?

The only downside I can think of is that for "server-only" pages, I'm still sending all my client JS to my page—it's just unused. Not sure how I would get around this, if at all, but considering all the issues I'm avoiding by using this approach right now, it feels like it's worth it.

## My Question

Is this technique a bad practice for one reason or another? It seems pretty nice to me, but I want to know if there are any major reasons you can think of why I wouldn't want to do this; maybe due to some limitation(s) I'm not aware/haven't though of.
