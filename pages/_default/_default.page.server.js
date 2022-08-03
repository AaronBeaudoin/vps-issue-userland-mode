import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { escapeInject as escape, dangerouslySkipEscape as unescape } from "vite-plugin-ssr";

export async function render(pageContext) {
  const { mode } = pageContext.exports;
  const { Page } = pageContext;
  let pageHtml;

  if (mode === "server-and-client" || mode === "server-only") {
    const page = createSSRApp({ render: _ => h(Page, {}) });
    pageHtml = await renderToString(page);
    
  } else if (mode === "client-only") {
    pageHtml = "";

  } else {
    throw "Invalid mode.";
  }

  return escape`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="page">${unescape(pageHtml)}</div>
      </body>
    </html>
  `;
}
