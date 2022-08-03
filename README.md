# `vps-issue-userland-mode`

All of the issues I'm running into with VPS right now are things that stop working properly when I switch my `.page.vue` file to `.page.client.vue` or `.page.server.vue`.

- HMR doesn't work in client-only pages.
- UnoCSS doesn't work in server-only pages.
- Tailwind CSS doesn't work in client-only pages.

I don't know how to fix these issues, but I do know what I'm trying to accomplish in the first place by making pages client-only or server-only.

So, to try and remove these issues, in this example I just define all my pages as `.page.vue` and export a `mode` from my pages which I use in [`_default.page.server.js`](pages/_default/_default.page.server.js) and [`_default.page.client.js`]((pages/_default/_default.page.client.js)) to manually change the behavior.

## The Downside?

The only downside I can think of is that for "server-only" pages, I'm still sending all my client JS to my page—it's just unused. Not sure how I would get around this, if at all, but considering all the issues I'm avoiding by using this approach right now, it feels like it's worth it.

## My Question

Is this technique a bad practice for one reason or another? It seems pretty nice to me, but I want to know if there are any major reasons you can think of why I wouldn't want to do this; maybe due to some limitation(s) I'm not aware/haven't though of.
