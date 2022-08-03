# `vps-issue-userland-mode`

1. `npm install`.
2. `npm run dev`.
3. Go to `index.page.vue`.
4. Change `Hello World!` to `Hello World! 2`.
5. Note that HMR doesn't work.
6. Go to `_default.page.client.js`.
7. Change `pageContext.pageProps || {}` to just `{}`.
8. Note that HMR works now!
