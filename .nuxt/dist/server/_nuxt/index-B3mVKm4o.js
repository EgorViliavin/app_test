import { defineComponent, withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { z } from "zod";
import { useQuery } from "@tanstack/vue-query";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const schema = z.object({
      hello: z.string(),
      id: z.string()
    });
    const { data, error, suspense } = useQuery({
      queryKey: ["ul", "info"],
      queryFn: async () => {
        const response = await $fetch(
          "https://api.1clicom.ru/expert/?tenders&d",
          {
            method: "POST",
            body: {
              hello: "world new"
            }
          }
        );
        const { success, data: data2 } = schema.safeParse(response);
        if (!success && true) {
          throw new Error("Error");
        }
        return data2;
      },
      retry: false
    });
    [__temp, __restore] = withAsyncContext(() => suspense()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl">Hello world</h1><div class="flex flex-col"><pre>Data - ${ssrInterpolate(unref(data))}</pre><pre>Error - ${ssrInterpolate(unref(error))}</pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B3mVKm4o.js.map
