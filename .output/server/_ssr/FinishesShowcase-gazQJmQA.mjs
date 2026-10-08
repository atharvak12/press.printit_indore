import { i as __toESM } from "../_runtime.mjs";
import { j as TextureLoader, s as Color } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { a as useFrame, c as require_jsx_runtime, i as Canvas, l as require_react, n as ContactShadows, o as useLoader, r as Environment, t as Sparkles } from "../_libs/@react-three/drei+[...].mjs";
import { M as ArrowRight, S as Layers, T as Eye, a as Sparkles$1, k as Camera, l as RotateCw, o as ShieldCheck, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinishesShowcase-gazQJmQA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var listeners = /* @__PURE__ */ new Set();
var scrollSceneStore = {
	pointer: {
		x: 0,
		y: 0
	},
	heroFold: 0,
	heroScroll: 0,
	pharmaFold: 0,
	finishesScroll: 0,
	reducedMotion: false
};
function notifyScrollStore() {
	listeners.forEach((fn) => fn(scrollSceneStore));
}
new Color("#3fb4e0"), new Color("#e0498f"), new Color("#f0cf5a"), new Color("#15161c");
new Color("#f4efe2"), new Color("#cfc7ba"), new Color("#101219"), new Color("#d8432b"), new Color("#4fb8e0"), new Color("#d1487e"), new Color("#e9c34c");
var finish_gold_default = "/assets/finish-gold-BDYeDQwr.jpg";
var finish_spotuv_default = "/assets/finish-spotuv-B5MViUjh.jpg";
var finish_kraft_default = "/assets/finish-kraft-Dye-_BY9.jpg";
var finish_holo_default = "/assets/finish-holo-CMwo9dg1.jpg";
function FinishesBox({ finish, reducedMotion }) {
	const group = (0, import_react.useRef)(null);
	const cardMesh = (0, import_react.useRef)(null);
	const goldTexture = useLoader(TextureLoader, finish_gold_default);
	const spotUvTexture = useLoader(TextureLoader, finish_spotuv_default);
	const kraftTexture = useLoader(TextureLoader, finish_kraft_default);
	const holoTexture = useLoader(TextureLoader, finish_holo_default);
	const currentTexture = (0, import_react.useMemo)(() => {
		switch (finish) {
			case "gold": return goldTexture;
			case "spotuv": return spotUvTexture;
			case "kraft": return kraftTexture;
			case "holo": return holoTexture;
			default: return goldTexture;
		}
	}, [
		finish,
		goldTexture,
		spotUvTexture,
		kraftTexture,
		holoTexture
	]);
	const matConfig = (0, import_react.useMemo)(() => {
		switch (finish) {
			case "gold": return {
				baseColor: "#12141c",
				roughness: .25,
				metalness: .85,
				clearcoat: .8
			};
			case "spotuv": return {
				baseColor: "#0f1118",
				roughness: .15,
				metalness: .3,
				clearcoat: 1
			};
			case "kraft": return {
				baseColor: "#8f693e",
				roughness: .85,
				metalness: .05,
				clearcoat: 0
			};
			case "holo": return {
				baseColor: "#0f1422",
				roughness: .2,
				metalness: .75,
				clearcoat: 1
			};
			default: return {
				baseColor: "#12141c",
				roughness: .3,
				metalness: .5,
				clearcoat: .5
			};
		}
	}, [finish]);
	useFrame((state, delta) => {
		if (!group.current) return;
		const p = reducedMotion ? .5 : scrollSceneStore.finishesScroll;
		const ptrX = scrollSceneStore.pointer.x;
		const ptrY = scrollSceneStore.pointer.y;
		const targetRotY = reducedMotion ? -.2 : (p - .5) * Math.PI * 1.5 + ptrX * .45;
		const targetRotX = reducedMotion ? .1 : (p - .5) * -.4 + ptrY * -.3;
		const floatY = reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 1.8) * .06;
		const damp = Math.min(1, delta * 4);
		group.current.rotation.y += (targetRotY - group.current.rotation.y) * damp;
		group.current.rotation.x += (targetRotX - group.current.rotation.x) * damp;
		group.current.position.y += (floatY - group.current.position.y) * damp;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: [
			0,
			0,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: cardMesh,
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.7,
					3.8,
					.35
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: matConfig.baseColor,
					roughness: matConfig.roughness,
					metalness: matConfig.metalness
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.178
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.6, 3.7] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					map: currentTexture,
					roughness: matConfig.roughness,
					metalness: matConfig.metalness,
					clearcoat: matConfig.clearcoat,
					clearcoatRoughness: .1,
					reflectivity: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.178
				],
				rotation: [
					0,
					Math.PI,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.6, 3.7] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: currentTexture,
					roughness: matConfig.roughness,
					metalness: matConfig.metalness
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					1.34,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.02,
					3.8,
					.36
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: finish === "gold" ? "#fde047" : finish === "holo" ? "#38bdf8" : "#94a3b8",
					emissive: finish === "gold" ? "#eab308" : finish === "holo" ? "#0284c7" : "#475569",
					emissiveIntensity: .5
				})]
			})
		]
	});
}
var registered = false;
function ensureGsap() {
	if (!registered && typeof window !== "undefined") {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		registered = true;
	}
}
/**
* As #hero scrolls out of view (top to bottom of the section passing the
* top of the viewport), heroScroll goes 0 -> 1.
*/
function initHeroScrollTrigger(sectionId) {
	ensureGsap();
	const el = document.getElementById(sectionId);
	if (!el) return () => {};
	const trigger = ScrollTrigger.create({
		trigger: el,
		start: "top top",
		end: "bottom top",
		scrub: .5,
		onUpdate: (self) => {
			scrollSceneStore.heroScroll = self.progress;
			notifyScrollStore();
		}
	});
	return () => trigger.kill();
}
/**
* As #pharma scrolls into view, pharmaFold goes 0 -> 1, which
* PackagingBox uses to fold its flaps closed around the bottom panel.
*/
function initPharmaScrollTrigger(sectionId) {
	ensureGsap();
	const el = document.getElementById(sectionId);
	if (!el) return () => {};
	const trigger = ScrollTrigger.create({
		trigger: el,
		start: "top 85%",
		end: "top 20%",
		scrub: .6,
		onUpdate: (self) => {
			scrollSceneStore.pharmaFold = self.progress;
			notifyScrollStore();
		}
	});
	return () => trigger.kill();
}
/**
* As #finishes scrolls into view, finishesScroll goes 0 -> 1 to rotate
* and display specular light effects on the 3D finish swatch.
*/
function initFinishesScrollTrigger(sectionId) {
	ensureGsap();
	const el = document.getElementById(sectionId);
	if (!el) return () => {};
	const trigger = ScrollTrigger.create({
		trigger: el,
		start: "top 85%",
		end: "bottom 30%",
		scrub: .6,
		onUpdate: (self) => {
			scrollSceneStore.finishesScroll = self.progress;
			notifyScrollStore();
		}
	});
	return () => trigger.kill();
}
/** Normalized window pointermove -> scrollSceneStore.pointer, for camera/scene parallax. */
function initPointerParallax() {
	if (typeof window === "undefined") return () => {};
	const handler = (e) => {
		scrollSceneStore.pointer.x = e.clientX / window.innerWidth * 2 - 1;
		scrollSceneStore.pointer.y = e.clientY / window.innerHeight * 2 - 1;
	};
	window.addEventListener("pointermove", handler, { passive: true });
	return () => window.removeEventListener("pointermove", handler);
}
/** Renders nothing — just registers/cleans up the scroll + pointer listeners for its scene. */
function ScrollScene({ mode, sectionId }) {
	(0, import_react.useEffect)(() => {
		let modeCleanup = () => {};
		if (mode === "hero") modeCleanup = initHeroScrollTrigger(sectionId);
		else if (mode === "pharma") modeCleanup = initPharmaScrollTrigger(sectionId);
		else if (mode === "finishes") modeCleanup = initFinishesScrollTrigger(sectionId);
		const parallaxCleanup = initPointerParallax();
		return () => {
			modeCleanup();
			parallaxCleanup();
		};
	}, [mode, sectionId]);
	return null;
}
var PHONE = "+916354535789";
var FINISH_DETAILS = {
	gold: {
		name: "24K Metallic Hot Foil Stamping",
		image: finish_gold_default,
		tagline: "Mirrored, metallic luxury that catches every ray of light",
		description: "Heat-pressed metallic foils create an ultra-reflective, premium finish that commands attention. Ideal for logos, titles, and ornate border flourishes.",
		bestFor: [
			"Luxury Perfume & Cosmetic Boxes",
			"VIP Visiting Cards",
			"Invitation & Gift Packaging",
			"Certificates"
		],
		tactileFeel: "Smooth metallic inlay with subtle edge deboss",
		specs: "Gold, Rose Gold, Silver, Copper & Holographic foils"
	},
	spotuv: {
		name: "Precision Raised Spot UV Varnish",
		image: finish_spotuv_default,
		tagline: "Contrast deep velvet matte with liquid high-gloss highlights",
		description: "A high-build glossy polymer is cured onto specific areas over a velvet-matte laminated card, creating dramatic contrast and tactile depth.",
		bestFor: [
			"Mono Cartons",
			"Premium Book Covers",
			"Corporate Folders",
			"Product Packaging"
		],
		tactileFeel: "Raised 3D gloss ridges against silky matte backdrop",
		specs: "Spot gloss up to 60 microns elevation"
	},
	kraft: {
		name: "Textured Kraft Board & 3D Embossing",
		image: finish_kraft_default,
		tagline: "Earth-friendly, organic warmth with sculpted 3D relief",
		description: "Virgin unbleached kraft board stamped with custom brass dies to raise your logo into a physical 3D relief without using plastic laminates.",
		bestFor: [
			"Eco Packaging",
			"Artisan Food & Sweet Boxes",
			"Garment Tags",
			"Organic Cosmetics"
		],
		tactileFeel: "Warm fibrous grain with deep sculpted paper relief",
		specs: "280–450 GSM virgin biodegradable kraft board"
	},
	holo: {
		name: "Holographic Tamper-Proof Security Seal",
		image: finish_holo_default,
		tagline: "Prismatic color-shift for authenticity and anti-counterfeiting",
		description: "Multi-spectrum diffraction foils that shift colors as the angle changes. Widely required for pharmaceutical cartons, FMCG seals, and high-value merchandise.",
		bestFor: [
			"Medicine Packaging",
			"Pharma Security Seals",
			"Electronics Cartons",
			"Warranty Cards"
		],
		tactileFeel: "Micro-etched optical diffraction foil surface",
		specs: "Custom 2D/3D holographic patterns & void tamper evidence"
	}
};
function FinishesShowcase() {
	const [activeFinish, setActiveFinish] = (0, import_react.useState)("gold");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
	const [viewMode, setViewMode] = (0, import_react.useState)("3d");
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReducedMotion(motionQuery.matches);
		const listener = () => setReducedMotion(motionQuery.matches);
		motionQuery.addEventListener("change", listener);
		return () => motionQuery.removeEventListener("change", listener);
	}, []);
	const detail = FINISH_DETAILS[activeFinish];
	const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello PRINTIT, I am interested in custom printing with ${detail.name}. Please share details and pricing.`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "finishes",
		className: "section-pad relative overflow-hidden bg-[#090b11] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan/15 blur-[130px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-magenta/15 blur-[130px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container relative mx-auto px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "eyebrow-dark",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "h-3.5 w-3.5 text-cyan" }), " Interactive 3D Finish Lab"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
									children: ["Touch, light & texture. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-cmyk",
										children: "In real 3D."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-8 text-white/70",
									children: "See actual photographic finishes and interactive 3D light reflections. Click any finish to inspect surface textures, specs, and real-world sample imagery."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md self-start md:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setViewMode("3d"),
								className: `flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition ${viewMode === "3d" ? "bg-cyan text-ink shadow-sm" : "text-white/70 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-3.5 w-3.5" }), " 3D Live View"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setViewMode("photo"),
								className: `flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition ${viewMode === "photo" ? "bg-cyan text-ink shadow-sm" : "text-white/70 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-3.5 w-3.5" }), " Real Photo Macro"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							{
								id: "gold",
								label: "Gold Foil Stamping",
								icon: Sparkles$1,
								image: finish_gold_default
							},
							{
								id: "spotuv",
								label: "Spot UV Gloss",
								icon: Layers,
								image: finish_spotuv_default
							},
							{
								id: "kraft",
								label: "Embossed Kraft",
								icon: Eye,
								image: finish_kraft_default
							},
							{
								id: "holo",
								label: "Holographic Seal",
								icon: ShieldCheck,
								image: finish_holo_default
							}
						].map(({ id, label, icon: Icon, image }) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveFinish(id),
								className: `group flex items-center gap-3 rounded-2xl border p-2 text-left transition-all duration-300 ${activeFinish === id ? "border-cyan bg-white/10 shadow-[0_0_25px_rgba(56,189,248,0.35)] ring-1 ring-cyan" : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: image,
									alt: label,
									className: "h-12 w-12 rounded-xl object-cover border border-white/20 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[11px] font-bold text-white/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Finish" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "block truncate text-xs font-bold text-white group-hover:text-cyan transition-colors",
										children: label
									})]
								})]
							}, id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex aspect-square max-h-[560px] w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur-2xl shadow-2xl overflow-hidden",
							children: viewMode === "3d" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-none absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
										className: "h-3.5 w-3.5 animate-spin text-cyan",
										style: { animationDuration: "6s" }
									}), "Scroll or move cursor to gleam light"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-none absolute bottom-4 right-4 z-10 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md",
									children: ["3D Finish: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-cyan",
										children: detail.name
									})]
								}),
								mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-full w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
										shadows: true,
										dpr: [1, 2],
										camera: {
											position: [
												0,
												0,
												6.2
											],
											fov: 42
										},
										gl: {
											antialias: true,
											alpha: true
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .8 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
												position: [
													4,
													5,
													4
												],
												intensity: 2.4,
												castShadow: true,
												color: "#ffffff"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
												position: [
													-4,
													2,
													3
												],
												intensity: 1.5,
												color: "#38bdf8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
												position: [
													3,
													-3,
													2
												],
												intensity: 1.2,
												color: "#f59e0b"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "studio" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
												fallback: null,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinishesBox, {
													finish: activeFinish,
													reducedMotion
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
												count: 30,
												scale: [
													5,
													5,
													3
												],
												size: 1.8,
												speed: .4,
												color: "#ffffff",
												opacity: .35
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
												position: [
													0,
													-2.1,
													0
												],
												opacity: .65,
												scale: 8,
												blur: 2.5,
												far: 4
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollScene, {
										mode: "finishes",
										sectionId: "finishes"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center text-sm text-white/50",
									children: "Loading 3D Finish Canvas..."
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-full w-full overflow-hidden rounded-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: detail.image,
										alt: detail.name,
										className: "h-full w-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold bg-black/60 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md",
											children: "📸 Actual Production Macro Sample"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setViewMode("3d"),
											className: "font-bold text-cyan hover:underline bg-black/60 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md",
											children: "Switch to 3D Orbit →"
										})]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan",
										children: "PREMIUM PRINT FINISH"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: detail.image,
										alt: detail.name,
										className: "h-10 w-10 rounded-lg object-cover border border-white/20"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl",
									children: detail.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium text-cyan",
									children: detail.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-7 text-white/75",
									children: detail.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] font-bold uppercase tracking-wider text-white/50",
											children: "Tactile Feel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-sm font-semibold text-white/90",
											children: detail.tactileFeel
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-white/10 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold uppercase tracking-wider text-white/50",
												children: "Specifications"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm font-semibold text-white/90",
												children: detail.specs
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-white/10 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold uppercase tracking-wider text-white/50",
												children: "Recommended Applications"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 flex flex-wrap gap-1.5",
												children: detail.bestFor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80",
													children: item
												}, item))
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "btn-primary",
									children: ["Quote This Finish on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setViewMode(viewMode === "3d" ? "photo" : "3d"),
									className: "btn-ghost-dark",
									children: [
										viewMode === "3d" ? "View Real Photo" : "View in 3D",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})]
							})]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { FinishesShowcase as default };
