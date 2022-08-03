import { createSSRApp, createApp, h } from "vue";

export async function render(pageContext) {
  const { mode } = pageContext.exports;
  const { Page } = pageContext;

  if (mode === "server-and-client") {
    const page = createSSRApp({ render: _ => h(Page, {}) });
    page.mount("#page");

  } else if (mode === "server-only") {
    // Do nothing.

  } else if (mode === "client-only") {
    const page = createApp({ render: _ => h(Page, {}) });
    page.mount("#page");

  } else {
    throw "Invalid mode.";
  }
}
