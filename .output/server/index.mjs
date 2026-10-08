globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2a9-legISWJE+9U8d4h9F1R+rQXRhU8\"",
		"mtime": "2026-10-08T09:21:11.584Z",
		"size": 681,
		"path": "../public/favicon.svg"
	},
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"18-+oL+Es1XZdIOibUzsrl9W9r73L0\"",
		"mtime": "2026-10-08T09:21:11.584Z",
		"size": 24,
		"path": "../public/_redirects"
	},
	"/assets/Box_Mockups_OK_3-removebg-preview-DWioCHjd.png": {
		"type": "image/png",
		"etag": "\"2fc16-0zw/uzmYlVaSq8B3FpNg39SXTMw\"",
		"mtime": "2026-10-08T09:21:11.231Z",
		"size": 195606,
		"path": "../public/assets/Box_Mockups_OK_3-removebg-preview-DWioCHjd.png"
	},
	"/assets/FinishesShowcase-BGTu6cg3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f543-Yfp4hEATSUugKVRgvjlZFub4sKw\"",
		"mtime": "2026-10-08T09:21:11.227Z",
		"size": 128323,
		"path": "../public/assets/FinishesShowcase-BGTu6cg3.js"
	},
	"/assets/PORTFOLIO FINAL-tAoXrowR.jpg": {
		"type": "image/jpeg",
		"etag": "\"34d88-i/Vxetv82e37wLEanAkBpeLPlCI\"",
		"mtime": "2026-10-08T09:21:11.238Z",
		"size": 216456,
		"path": "../public/assets/PORTFOLIO FINAL-tAoXrowR.jpg"
	},
	"/assets/PharmaManufacturing3D-Bo7ffOXc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"380b-GAt4GdAoC3KLWHvM9rtoYKDplJo\"",
		"mtime": "2026-10-08T09:21:11.227Z",
		"size": 14347,
		"path": "../public/assets/PharmaManufacturing3D-Bo7ffOXc.js"
	},
	"/assets/finish-gold-BDYeDQwr.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2d3-sn7GozZo91+wkENA2m8R9YE+lRU\"",
		"mtime": "2026-10-08T09:21:11.241Z",
		"size": 53971,
		"path": "../public/assets/finish-gold-BDYeDQwr.jpg"
	},
	"/assets/finish-holo-CMwo9dg1.jpg": {
		"type": "image/jpeg",
		"etag": "\"17070-UR8NQmdMLeS8gHb3AGSd62RJfCg\"",
		"mtime": "2026-10-08T09:21:11.241Z",
		"size": 94320,
		"path": "../public/assets/finish-holo-CMwo9dg1.jpg"
	},
	"/assets/finish-kraft-Dye-_BY9.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ea9-jBIpeqztZs+O8bJbRt2SbyDq+m0\"",
		"mtime": "2026-10-08T09:21:11.242Z",
		"size": 32425,
		"path": "../public/assets/finish-kraft-Dye-_BY9.jpg"
	},
	"/assets/finish-spotuv-B5MViUjh.jpg": {
		"type": "image/jpeg",
		"etag": "\"e200-YP70xBWIvDOiLA+43r/Q/APAH3Q\"",
		"mtime": "2026-10-08T09:21:11.242Z",
		"size": 57856,
		"path": "../public/assets/finish-spotuv-B5MViUjh.jpg"
	},
	"/assets/hero-press-ZEPjkrT8.jpg": {
		"type": "image/jpeg",
		"etag": "\"200a5-CjUUq5G9nMNn9tkyE7W85n2O9fA\"",
		"mtime": "2026-10-08T09:21:11.244Z",
		"size": 131237,
		"path": "../public/assets/hero-press-ZEPjkrT8.jpg"
	},
	"/assets/p-bags-CJfWYYuC.jpg": {
		"type": "image/jpeg",
		"etag": "\"76e5-OERqqi9hWmluVnX3r88WCAhTv58\"",
		"mtime": "2026-10-08T09:21:11.246Z",
		"size": 30437,
		"path": "../public/assets/p-bags-CJfWYYuC.jpg"
	},
	"/assets/logo-white-CzLtJ25F.png": {
		"type": "image/png",
		"etag": "\"5da9-mdoXJN0PxXN9F7W5727sO2Bb+tI\"",
		"mtime": "2026-10-08T09:21:11.245Z",
		"size": 23977,
		"path": "../public/assets/logo-white-CzLtJ25F.png"
	},
	"/assets/p-files-Dam8a6Xa.jpeg": {
		"type": "image/jpeg",
		"etag": "\"33a6b-TdRRuRlcAEY2JA9PqfmxkXB3BRI\"",
		"mtime": "2026-10-08T09:21:11.249Z",
		"size": 211563,
		"path": "../public/assets/p-files-Dam8a6Xa.jpeg"
	},
	"/assets/index-D5bp70V4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53dad-uxbndkOwnj0lz3CSEU0c6wIoVNk\"",
		"mtime": "2026-10-08T09:21:11.226Z",
		"size": 343469,
		"path": "../public/assets/index-D5bp70V4.js"
	},
	"/assets/p-brochure-5gp_6mKh.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab9c-6NH2qRUdqwlMP389DlINNwdnvT0\"",
		"mtime": "2026-10-08T09:21:11.248Z",
		"size": 43932,
		"path": "../public/assets/p-brochure-5gp_6mKh.jpg"
	},
	"/assets/p-magazines-DrJIeFCg.jpg": {
		"type": "image/jpeg",
		"etag": "\"16283-cdq3SE2lT/tupgeJwq3/wMEVO1I\"",
		"mtime": "2026-10-08T09:21:11.252Z",
		"size": 90755,
		"path": "../public/assets/p-magazines-DrJIeFCg.jpg"
	},
	"/assets/p-posters-C7E4PMvK.jpg": {
		"type": "image/jpeg",
		"etag": "\"11b2a-e2jofHPLk/mdfNAFbxcE1/571kY\"",
		"mtime": "2026-10-08T09:21:11.253Z",
		"size": 72490,
		"path": "../public/assets/p-posters-C7E4PMvK.jpg"
	},
	"/assets/p-standees-CaXZrsJD.jpg": {
		"type": "image/jpeg",
		"etag": "\"14824-rsCnPkYSeDbxoUmREqx01Q/c6Ps\"",
		"mtime": "2026-10-08T09:21:11.254Z",
		"size": 84004,
		"path": "../public/assets/p-standees-CaXZrsJD.jpg"
	},
	"/assets/p-flyers-DnCDViDi.jpg": {
		"type": "image/jpeg",
		"etag": "\"14be7-EW4jLfoGOXxHMEai7ncdfEikSD4\"",
		"mtime": "2026-10-08T09:21:11.251Z",
		"size": 84967,
		"path": "../public/assets/p-flyers-DnCDViDi.jpg"
	},
	"/assets/p-stationery-B3S4kKLj.jpg": {
		"type": "image/jpeg",
		"etag": "\"b458-Cf6XYLIoElzMGz9/CQJw3P7o9kE\"",
		"mtime": "2026-10-08T09:21:11.255Z",
		"size": 46168,
		"path": "../public/assets/p-stationery-B3S4kKLj.jpg"
	},
	"/assets/Sparkles-GH8gN6gQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5780-zppYM2Tuo9u2+Iqn6PtfRD4rXv8\"",
		"mtime": "2026-10-08T09:21:11.227Z",
		"size": 939904,
		"path": "../public/assets/Sparkles-GH8gN6gQ.js"
	},
	"/assets/pharma-box-side-CyfHx60a.png": {
		"type": "image/png",
		"etag": "\"5aa6-nbRzPuVswlCpQGyxJPmNRrwOQFA\"",
		"mtime": "2026-10-08T09:21:11.259Z",
		"size": 23206,
		"path": "../public/assets/pharma-box-side-CyfHx60a.png"
	},
	"/assets/pharma-sheet-print-Cd63nGim.png": {
		"type": "image/png",
		"etag": "\"c5f6-0p3VuQtF3IIXaWea/g+SJVc719E\"",
		"mtime": "2026-10-08T09:21:11.260Z",
		"size": 50678,
		"path": "../public/assets/pharma-sheet-print-Cd63nGim.png"
	},
	"/assets/pharma-box-front-Cpjh7SdK.png": {
		"type": "image/png",
		"etag": "\"4d1f-DmwxNWv7WPIZlsDossaSdYNEYu8\"",
		"mtime": "2026-10-08T09:21:11.257Z",
		"size": 19743,
		"path": "../public/assets/pharma-box-front-Cpjh7SdK.png"
	},
	"/assets/print it brochure-DDZy2Xvp.jpg": {
		"type": "image/jpeg",
		"etag": "\"10bcf-LL1DWPI1KmRsmPDCaH6ggmN5Oxw\"",
		"mtime": "2026-10-08T09:21:11.261Z",
		"size": 68559,
		"path": "../public/assets/print it brochure-DDZy2Xvp.jpg"
	},
	"/assets/ChatGPT Image Jul 30_ 2026_ 11_14_52 AM-DpmGVnSN.png": {
		"type": "image/png",
		"etag": "\"1a880f-7XImx1ZshtsG8bfiNLJ6LN/hyBE\"",
		"mtime": "2026-10-08T09:21:11.235Z",
		"size": 1738767,
		"path": "../public/assets/ChatGPT Image Jul 30_ 2026_ 11_14_52 AM-DpmGVnSN.png"
	},
	"/assets/routes-CXSL2Ie2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9f9-bY5mc+WrDFYc6FYlGyrun/zGFA4\"",
		"mtime": "2026-10-08T09:21:11.229Z",
		"size": 55801,
		"path": "../public/assets/routes-CXSL2Ie2.js"
	},
	"/assets/sparkles-2d1stwdC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ca-ORppX8Qxjq88yXhoGi+VjUROhUA\"",
		"mtime": "2026-10-08T09:21:11.229Z",
		"size": 2250,
		"path": "../public/assets/sparkles-2d1stwdC.js"
	},
	"/assets/styles-DMqJJbiG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e04d-lcLoRgI5Rnlt5p0IeZ47ymy6GI4\"",
		"mtime": "2026-10-08T09:21:11.265Z",
		"size": 122957,
		"path": "../public/assets/styles-DMqJJbiG.css"
	},
	"/assets/Box_Mockups_OK_3-7rlFofMP.png": {
		"type": "image/png",
		"etag": "\"212542-1Gnj+hpZl61op47at43a82K9/rE\"",
		"mtime": "2026-10-08T09:21:11.229Z",
		"size": 2172226,
		"path": "../public/assets/Box_Mockups_OK_3-7rlFofMP.png"
	},
	"/assets/sticker-D5-cyE9V.png": {
		"type": "image/png",
		"etag": "\"1e4acb-q8hZkOu1wMT1i8uiYCeCt7OISkM\"",
		"mtime": "2026-10-08T09:21:11.262Z",
		"size": 1985227,
		"path": "../public/assets/sticker-D5-cyE9V.png"
	},
	"/assets/tw-YI1ZL7Zs.png": {
		"type": "image/png",
		"etag": "\"27e64a-Qr6Pn2bacp8vNSDZJpRvhODRm3o\"",
		"mtime": "2026-10-08T09:21:11.266Z",
		"size": 2614858,
		"path": "../public/assets/tw-YI1ZL7Zs.png"
	},
	"/assets/Brochure_Mockup_2-DUuQFZ5X.png": {
		"type": "image/png",
		"etag": "\"6c4f98-3PPuqHcgU1gXG2DvNAQXGOP/U6g\"",
		"mtime": "2026-10-08T09:21:11.232Z",
		"size": 7098264,
		"path": "../public/assets/Brochure_Mockup_2-DUuQFZ5X.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_D2X4q7 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_D2X4q7
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
