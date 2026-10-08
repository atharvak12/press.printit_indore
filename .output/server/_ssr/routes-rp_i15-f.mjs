import { i as __toESM, r as __exportAll } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { A as BriefcaseBusiness, C as Instagram, D as CircleCheck, E as Clock3, M as ArrowRight, O as ChevronRight, S as Layers, _ as PackageCheck, a as Sparkles, b as MapPin, d as Printer, g as Package, h as Palette, i as Star, j as Boxes, n as X, o as ShieldCheck, p as Phone, r as Truck, s as Search, t as Zap, v as MessageCircle, w as Factory, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { n as EMAIL, r as PHONE$1 } from "./router-Dz3Cl7Se.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-rp_i15-f.js
var routes_rp_i15_f_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_press_default = "/assets/hero-press-ZEPjkrT8.jpg";
var PORTFOLIO_FINAL_default = "/assets/PORTFOLIO%20FINAL-tAoXrowR.jpg";
var ChatGPT_Image_Jul_30__2026__11_14_52_AM_default = "/assets/ChatGPT%20Image%20Jul%2030_%202026_%2011_14_52%20AM-DpmGVnSN.png";
var print_it_brochure_default = "/assets/print%20it%20brochure-DDZy2Xvp.jpg";
var Box_Mockups_OK_3_default = "/assets/Box_Mockups_OK_3-7rlFofMP.png";
var products = [
	{
		slug: "business-cards",
		name: "Business Cards",
		image: "/assets/tw-YI1ZL7Zs.png",
		blurb: "300–350gsm art card with matt, gloss or spot UV finish.",
		basePer100: 180,
		minQty: 100,
		category: "Corporate",
		specs: "350 GSM • Spot UV & Foil"
	},
	{
		slug: "brochures",
		name: "Brochures",
		image: "/assets/p-brochure-5gp_6mKh.jpg",
		blurb: "Bi-fold and tri-fold brochures on premium art paper.",
		basePer100: 650,
		minQty: 100,
		category: "Marketing",
		specs: "170 GSM Art Paper • Folded"
	},
	{
		slug: "flyers",
		name: "Flyers & Leaflets",
		image: "/assets/p-flyers-DnCDViDi.jpg",
		blurb: "A4, A5 and DL flyers, single or double sided.",
		basePer100: 320,
		minQty: 250,
		category: "Marketing",
		specs: "130–170 GSM • High-Speed"
	},
	{
		slug: "almanac-school",
		name: "School Almanac",
		image: "/assets/Brochure_Mockup_2-DUuQFZ5X.png",
		blurb: "Custom school almanacs with student information, academic calendars, activities, and premium printed pages.",
		basePer100: 3200,
		minQty: 50,
		category: "Publications",
		specs: "Perfect Binding • Hard Cover"
	},
	{
		slug: "packaging",
		name: "Mono Carton Boxes",
		image: PORTFOLIO_FINAL_default,
		blurb: "Custom mono carton boxes for sweet boxes, mehendi cones, cosmetics, FMCG products, and retail packaging — designed, printed and finished to match your brand.",
		basePer100: 2400,
		minQty: 100,
		category: "Packaging",
		specs: "300–400 GSM • Custom Die-Cut"
	},
	{
		slug: "posters",
		name: "Posters & Displays",
		image: "/assets/p-posters-C7E4PMvK.jpg",
		blurb: "High-impact posters for promotions, events and retail — A3, A2, A1 and custom sizes printed on premium paper and display stocks.",
		basePer100: 900,
		minQty: 50,
		category: "Marketing",
		specs: "A3 to A1 • Vivid CMYK"
	},
	{
		slug: "stationery",
		name: "Business Stationery",
		image: "/assets/p-stationery-B3S4kKLj.jpg",
		blurb: "Professional business essentials including letterheads, envelopes, visiting cards, bills, invoices, forms and customised office stationery.",
		basePer100: 450,
		minQty: 100,
		category: "Corporate",
		specs: "Bond & Executive Paper"
	},
	{
		slug: "magazines",
		name: "Magazines & Catalogues",
		image: "/assets/p-magazines-DrJIeFCg.jpg",
		blurb: "Premium magazines, product catalogues, company profiles and brochures with sharp printing, quality paper and professional binding.",
		basePer100: 4800,
		minQty: 50,
		category: "Publications",
		specs: "Saddle-stitch / Perfect bind"
	},
	{
		slug: "stickers",
		name: "Stickers & Labels",
		image: "/assets/sticker-D5-cyE9V.png",
		blurb: "Custom stickers for every brand and product — FMCG labels, cosmetic bottle stickers, metallic labels, paper stickers, opaque stickers, transparent labels and more, with premium finishes.",
		basePer100: 250,
		minQty: 100,
		category: "Packaging",
		specs: "Vinyl, Chromo, Waterproof"
	},
	{
		slug: "standees",
		name: "Standees & Banners",
		image: "/assets/p-standees-CaXZrsJD.jpg",
		blurb: "Roll-up standees, flex banners and backdrops.",
		basePer100: 85e3,
		minQty: 1,
		category: "Marketing",
		specs: "Aluminum base • Star flex"
	},
	{
		slug: "bags",
		name: "Paper Bags",
		image: "/assets/p-bags-CJfWYYuC.jpg",
		blurb: "Custom printed paper carry bags for retail brands.",
		basePer100: 2200,
		minQty: 100,
		category: "Packaging",
		specs: "Kraft / Art Card • D-cut & Rope"
	},
	{
		slug: "files",
		name: "Printed Files",
		image: "/assets/p-files-Dam8a6Xa.jpeg",
		blurb: "Custom printed office files, paper files, plastic files and presentation folders with professional finishing.",
		basePer100: 1200,
		minQty: 100,
		category: "Corporate",
		specs: "Clip & Ring mechanism"
	}
];
var sides = [{
	id: "single",
	label: "Single Side",
	mult: 1
}, {
	id: "double",
	label: "Double Side",
	mult: 1.6
}];
var papers = [
	{
		id: "std",
		label: "Standard 80gsm",
		mult: 1
	},
	{
		id: "premium",
		label: "Premium 100gsm ",
		mult: 1.2
	},
	{
		id: "lux",
		label: "Luxury 120gsm ",
		mult: 1.55
	}
];
var finishes = [
	{
		id: "none",
		label: "No Finish",
		mult: 1
	},
	{
		id: "matt",
		label: "Matt Lamination",
		mult: 1.15
	},
	{
		id: "gloss",
		label: "Gloss Lamination",
		mult: 1.15
	},
	{
		id: "spotuv",
		label: "Spot UV",
		mult: 1.35
	},
	{
		id: "foil",
		label: "Gold / Silver Foil",
		mult: 1.6
	}
];
function PriceCalculator() {
	const [productSlug, setProductSlug] = (0, import_react.useState)(products[0].slug);
	const [qty, setQty] = (0, import_react.useState)(500);
	const [side, setSide] = (0, import_react.useState)("double");
	const [paper, setPaper] = (0, import_react.useState)("premium");
	const [finish, setFinish] = (0, import_react.useState)("matt");
	const product = products.find((p) => p.slug === productSlug);
	const changeProduct = (slug) => {
		setProductSlug(slug);
		const next = products.find((p) => p.slug === slug);
		if (next) setQty(Math.max(next.minQty, 500));
	};
	const price = (0, import_react.useMemo)(() => {
		const sideM = sides.find((s) => s.id === side).mult;
		const paperM = papers.find((p) => p.id === paper).mult;
		const finM = finishes.find((f) => f.id === finish).mult;
		const per100 = product.basePer100 * sideM * paperM * finM;
		const volume = qty >= 5e3 ? .75 : qty >= 2e3 ? .85 : qty >= 1e3 ? .92 : 1;
		return Math.round(per100 / 100 * qty * volume);
	}, [
		product,
		qty,
		side,
		paper,
		finish
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "calculator",
		className: "rounded-2xl bg-[#11141e] shadow-card p-6 md:p-10 border border-white/10 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold uppercase tracking-wider text-white/60",
						children: "Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: productSlug,
						onChange: (e) => changeProduct(e.target.value),
						className: "mt-2 w-full rounded-lg border border-white/15 bg-[#171b26] text-white px-4 py-3 font-medium outline-none focus:border-primary",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p.slug,
							className: "bg-[#171b26] text-white",
							children: p.name
						}, p.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-white/60",
							children: ["Quantity: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-bold",
								children: qty.toLocaleString("en-IN")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: product.minQty,
							max: 1e4,
							step: product.minQty,
							value: qty,
							onChange: (e) => setQty(parseInt(e.target.value)),
							className: "mt-3 w-full accent-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[11px] text-white/50 mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Min ", product.minQty] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10,000+" })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Print Sides",
						options: sides,
						value: side,
						onChange: setSide
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Paper",
						options: papers,
						value: paper,
						onChange: setPaper
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, {
						label: "Finish",
						options: finishes,
						value: finish,
						onChange: setFinish
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-[#080a0f] text-white p-8 border border-white/10 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-cyan font-bold",
						children: "Instant Estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-3xl font-bold text-white",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm text-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quantity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: qty.toLocaleString("en-IN")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sides" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: sides.find((s) => s.id === side).label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: papers.find((p) => p.id === paper).label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Finish" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: finishes.find((f) => f.id === finish).label
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-white/60",
							children: "Indicative estimate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-5xl font-bold text-gradient-cmyk",
							children: ["₹", price.toLocaleString("en-IN")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-white/50 mt-2",
							children: [
								"≈ ₹",
								(price / qty).toFixed(2),
								" per unit • Indicative pricing. Final quote depends on exact size, material, finishing and delivery requirements."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition shadow-lg",
							children: "Confirm & Send Enquiry"
						})
					]
				})]
			})]
		})
	});
}
function FieldGroup({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wider text-white/60",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex flex-wrap gap-2",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(o.id),
			className: `rounded-full border px-3 py-1.5 text-sm transition ${value === o.id ? "bg-primary text-white border-primary shadow-sm" : "bg-white/5 border-white/15 text-white/80 hover:border-white/35 hover:bg-white/10"}`,
			children: o.label
		}, o.id))
	})] });
}
var logo_white_default = "/assets/logo-white-CzLtJ25F.png";
function CmykScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
					const currentProgress = totalHeight > 0 ? window.scrollY / totalHeight * 100 : 0;
					setProgress(Math.min(100, Math.max(0, currentProgress)));
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 right-0 z-[60] h-[3px] bg-black/10 overflow-hidden pointer-events-none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full transition-[width] duration-150 ease-out",
			style: {
				width: `${progress}%`,
				background: "linear-gradient(90deg, #00A3E0 0%, #E6007E 35%, #FFDD00 70%, #15161C 100%)",
				boxShadow: "0 0 10px rgba(0, 163, 224, 0.7), 0 0 5px rgba(230, 0, 126, 0.5)"
			}
		})
	});
}
var PHONE = "+916354535789";
function SampleKitBanner() {
	const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello PRINTIT, I would like to request a Free Print & Paper Sample Swatch Kit for my business. Please share delivery details.")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-y border-black/10 bg-gradient-to-r from-[#11141d] via-[#1b2230] to-[#11141d] text-white py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-12 -left-12 h-44 w-44 rounded-full bg-cyan/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-magenta/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container relative mx-auto px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-between gap-8 lg:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl text-center lg:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Free Tactile Swatch Kit"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
								children: "Feel our paper stocks, boards & finishes before placing your order."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-white/75 sm:text-base",
								children: "Get an actual physical sample box containing 100–400 GSM art card, unbleached kraft, metallic boards, and live samples of Spot UV, Foil Stamping, and Die-cuts sent to your office."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/70 lg:justify-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-cyan" }), " 12+ Paper & Board Weights"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-cyan" }), " Foil & Spot UV Finishes"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-cyan" }), " Free Dispatch Across India"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan to-blue-500 px-7 py-3.5 text-sm font-bold text-ink shadow-[0_0_25px_rgba(63,180,224,0.4)] transition hover:scale-105 hover:shadow-[0_0_35px_rgba(63,180,224,0.6)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, { className: "h-5 w-5" }), " Request Free Sample Kit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#calculator",
							className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10",
							children: "Quick Price Calculator"
						})]
					})]
				})
			})
		]
	});
}
function TiltCard({ children, className = "", maxTilt = 8, scale = 1.02, glare = true }) {
	const cardRef = (0, import_react.useRef)(null);
	const [style, setStyle] = (0, import_react.useState)({
		transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
		glareX: 50,
		glareY: 50,
		glareOpacity: 0
	});
	const handleMouseMove = (e) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = (y - centerY) / centerY * -maxTilt;
		const rotateY = (x - centerX) / centerX * maxTilt;
		setStyle({
			transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
			glareX: x / rect.width * 100,
			glareY: y / rect.height * 100,
			glareOpacity: .22
		});
	};
	const handleMouseLeave = () => {
		setStyle({
			transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
			glareX: 50,
			glareY: 50,
			glareOpacity: 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className: `relative transition-transform duration-200 ease-out will-change-transform ${className}`,
		style: {
			transform: style.transform,
			transformStyle: "preserve-3d"
		},
		children: [children, glare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ease-out overflow-hidden",
			style: {
				opacity: style.glareOpacity,
				background: `radial-gradient(circle 320px at ${style.glareX}% ${style.glareY}%, rgba(255,255,255,0.45), transparent 70%)`
			},
			"aria-hidden": "true"
		})]
	});
}
var SHOWCASE_ITEMS = [
	{
		id: "packaging",
		label: "Custom Mono Cartons",
		tag: "Packaging & Boxes",
		title: "Tuck Mono Cartons",
		description: "Engineered with 350 GSM virgin SBS food-grade paperboard, interlocking tuck flaps, and luxury hot foil stamping.",
		image: "/assets/Box_Mockups_OK_3-removebg-preview-DWioCHjd.png",
		isCutout: true,
		badges: [
			{
				text: "350 GSM Virgin Board",
				icon: Layers,
				color: "text-cyan"
			},
			{
				text: "Spot UV & Gold Foil",
				icon: Sparkles,
				color: "text-amber-400"
			},
			{
				text: "Laser Die-Cut Creases",
				icon: Package,
				color: "text-rose-400"
			},
			{
				text: "ISO 9001 & GMP Grade",
				icon: ShieldCheck,
				color: "text-emerald-400"
			}
		],
		pricing: "From ₹4.50 / box",
		leadTime: "48–72h Fast Dispatch"
	},
	{
		id: "brochures",
		label: "Brochures & Catalogs",
		tag: "Commercial Print",
		title: "Multi-Page Lookbooks & Catalogues",
		description: "High-volume 6-color offset printing with velvet soft-touch lamination, metallic foiling, and precision binding.",
		image: PORTFOLIO_FINAL_default,
		isCutout: false,
		badges: [
			{
				text: "170–300 GSM Imported Art",
				icon: Layers,
				color: "text-cyan"
			},
			{
				text: "Velvet Soft-Touch Film",
				icon: Sparkles,
				color: "text-amber-400"
			},
			{
				text: "Center Stitch / Perfect Bind",
				icon: Package,
				color: "text-rose-400"
			},
			{
				text: "CMYK Color Calibrated",
				icon: Printer,
				color: "text-emerald-400"
			}
		],
		pricing: "From ₹8.50 / copy",
		leadTime: "24–48h Quick Run"
	},
	{
		id: "stationery",
		label: "Corporate Identity Kits",
		tag: "Luxury Stationery",
		title: "Executive Business Stationery",
		description: "Premium gold-foiled visiting cards, watermark letterheads, debossed presentation folders, and corporate envelopes.",
		image: ChatGPT_Image_Jul_30__2026__11_14_52_AM_default,
		isCutout: false,
		badges: [
			{
				text: "450 GSM Heavy Textured",
				icon: Layers,
				color: "text-cyan"
			},
			{
				text: "24K Metallic Hot Foil",
				icon: Sparkles,
				color: "text-amber-400"
			},
			{
				text: "Blind Embossed Logos",
				icon: Star,
				color: "text-rose-400"
			},
			{
				text: "Custom Boxed Sets",
				icon: ShieldCheck,
				color: "text-emerald-400"
			}
		],
		pricing: "From ₹350 / 100 cards",
		leadTime: "Same-Day Dispatch"
	}
];
function HeroShowcase() {
	const [activeTab, setActiveTab] = (0, import_react.useState)(0);
	const current = SHOWCASE_ITEMS[activeTab];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-cyan/20 via-rose-500/10 to-indigo-500/15 blur-3xl opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex flex-wrap items-center gap-2",
				children: SHOWCASE_ITEMS.map((item, idx) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab(idx),
						className: `rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${idx === activeTab ? "bg-gradient-to-r from-cyan to-blue-500 text-ink shadow-[0_4px_20px_rgba(56,189,248,0.35)] scale-105" : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white"}`,
						children: item.label
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
				maxTilt: 6,
				scale: 1.015,
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#141824]/90 via-[#0f121a]/85 to-[#090b11]/95 p-6 backdrop-blur-xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex h-2 w-2 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-cyan" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-extrabold uppercase tracking-widest text-white/80",
									children: current.tag
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.leadTime })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-5 flex min-h-[260px] sm:min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute h-48 w-48 rounded-full bg-radial from-cyan/30 via-transparent to-transparent blur-2xl" }),
								current.isCutout ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex items-center justify-center py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: current.image,
										alt: current.title,
										loading: "eager",
										className: "max-h-[250px] sm:max-h-[280px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: current.image,
										alt: current.title,
										loading: "eager",
										className: "h-[240px] sm:h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[10px] font-bold text-white shadow-lg backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-cyan" }), " PRINTIT Certified"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-white sm:text-2xl",
								children: current.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm",
								children: current.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-2",
							children: current.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-semibold text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: `h-3.5 w-3.5 shrink-0 ${b.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: b.text
								})]
							}, b.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-white/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-white/50",
								children: "Starting Rate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-extrabold text-cyan",
								children: current.pricing
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#calculator",
								className: "flex items-center gap-1.5 rounded-full bg-cyan px-4 py-2 text-xs font-bold text-ink transition-transform hover:scale-105 hover:bg-cyan/90 active:scale-95 shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estimate in Calculator" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						})
					]
				})
			})
		]
	});
}
var FinishesShowcase = (0, import_react.lazy)(() => import("./FinishesShowcase-gazQJmQA.mjs"));
var PharmaManufacturing3D = (0, import_react.lazy)(() => import("./PharmaManufacturing3D-DbdKz0O_.mjs"));
var WHATSAPP = `https://wa.me/${PHONE$1}`;
var INSTAGRAM = "https://www.instagram.com/press.printit_indore";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-[#090b11] text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmykScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 w-full bg-[#090b11]" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinishesShowcase, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PharmaSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleKitBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{
			href: "#services",
			label: "Services"
		},
		{
			href: "#finishes",
			label: "3D Finishes",
			badge: "3D"
		},
		{
			href: "#products",
			label: "Products"
		},
		{
			href: "#calculator",
			label: "Pricing"
		},
		{
			href: "#why",
			label: "Why Us"
		},
		{
			href: "#contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/15 bg-[#090b11]/95 backdrop-blur-2xl shadow-[0_12px_35px_rgba(0,0,0,0.7)]" : "border-b border-white/10 bg-[#090b11]/80 backdrop-blur-xl"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto flex h-20 sm:h-24 items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "group flex items-center gap-3.5 focus:outline-none",
					"aria-label": "PRINTIT home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_white_default,
						alt: "PRINTIT Press & Packaging",
						width: 200,
						height: 80,
						className: "h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-2 lg:gap-3 md:flex",
					children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						className: "group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-cyan/40 bg-cyan/15 px-2 py-0.5 text-[10px] font-bold text-cyan group-hover:bg-cyan group-hover:text-ink transition-colors",
							children: item.badge
						})]
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white active:scale-95 transition",
						onClick: () => setOpen(!open),
						"aria-label": "Toggle navigation",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 bg-[#090b11]/98 px-5 py-6 md:hidden shadow-2xl backdrop-blur-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-cyan/20 border border-cyan/40 px-2 py-0.5 text-[10px] font-bold text-cyan",
							children: item.badge
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-white/40" })]
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noreferrer",
								onClick: () => setOpen(false),
								className: "flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 text-sm font-bold text-black shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+916354535789`,
								onClick: () => setOpen(false),
								className: "flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-cyan" }),
									" Call ",
									"+916354535789"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#calculator",
								onClick: () => setOpen(false),
								className: "btn-primary justify-center text-sm py-3 mt-1",
								children: ["Calculate Price ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] text-white/40",
						children: "Indore Press Facility • Mon–Sat 9:30 AM–8:00 PM"
					})
				]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "hero hero-printing relative isolate overflow-hidden bg-[#090b11] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_press_default,
				alt: "Commercial offset printing press",
				className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,11,17,.98)_0%,rgba(9,11,17,.92)_45%,rgba(9,11,17,.65)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 hero-grid opacity-25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-printing-sticky container relative mx-auto grid items-center gap-10 px-4 pt-8 pb-12 lg:pt-12 lg:pb-16 lg:grid-cols-2 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-cyan" }), " Printing & Packaging from Indore · Since 1997"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-8xl",
							children: ["Print that makes your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-cmyk",
								children: "brand visible."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl",
							children: "Premium offset printing, pharmaceutical packaging, medical stationery and custom printed products — crafted with industrial precision, consistency and care."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#calculator",
								className: "btn-primary btn-lg",
								children: ["Calculate Instant Price ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#finishes",
								className: "btn-ghost-dark btn-lg",
								children: ["Explore 3D Finishes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1.5 inline h-4 w-4 text-cyan" }), " 25+ years press experience"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1.5 inline h-4 w-4 text-cyan" }), " Custom quantities & finishes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1.5 inline h-4 w-4 text-cyan" }), " Pan-India delivery"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroShowcase, {})
				})]
			})
		]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-white/10 bg-[#0c0f17] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto grid grid-cols-2 divide-x divide-y divide-white/10 px-4 md:grid-cols-4 md:divide-y-0",
			children: [
				["25+", "Years of experience"],
				["Since 1997", "Printing expertise"],
				["Custom", "Sizes, papers & finishes"],
				["Pan-India", "Business deliveries"]
			].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-7 text-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-bold tracking-tight text-white md:text-3xl",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs font-semibold uppercase tracking-[.16em] text-white/50",
					children: label
				})]
			}, label))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "section-pad bg-[#090b11] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What we do",
				title: "From blank paper to a finished brand experience.",
				text: "One printing partner for everyday business stationery, high-volume commercial jobs, and specialized custom packaging."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Printer,
						title: "Commercial Offset Printing",
						desc: "High-volume, color-calibrated printing for brochures, catalogues, stationery, books, and marketing campaigns."
					},
					{
						icon: Sparkles,
						title: "High-Speed Digital Printing",
						desc: "Fast production for short runs, urgent needs, personalized marketing collateral, flyers, and event badges."
					},
					{
						icon: Boxes,
						title: "Custom Mono Cartons & Boxes",
						desc: "Retail packaging, sweet boxes, cosmetic cartons, and corrugated outer boxes engineered for shelf appeal."
					},
					{
						icon: ShieldCheck,
						title: "Pharma & Medical Stationery",
						desc: "Medicine cartons, tamper-evident labels, prescription pads, patient files, and GMP compliant literature."
					},
					{
						icon: Palette,
						title: "Luxury Finishes & Foiling",
						desc: "24K metallic hot foil, spot UV gloss, embossing, debossing, matte lamination, and laser die-cutting."
					},
					{
						icon: BriefcaseBusiness,
						title: "Corporate Identity Essentials",
						desc: "Executive letterheads, luxury visiting cards, presentation folders, invoice books, and custom paper bags."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					maxTilt: 6,
					scale: 1.02,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "service-card group h-full flex flex-col justify-between",
						style: { "--delay": `${i * 60}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "service-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-white",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 h-5 w-5 text-white/50 transition group-hover:translate-x-1 group-hover:text-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-white/70",
								children: s.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore capabilities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
						})]
					})
				}, s.title))
			})]
		})
	});
}
function ProductsGrid() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const categories = [
		"All",
		"Packaging",
		"Marketing",
		"Corporate",
		"Publications"
	];
	const filteredProducts = products.filter((p) => {
		const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
		const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.blurb.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "section-pad bg-[#0c0f17] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our products",
						title: "Printed products for every part of your business.",
						text: "Explore popular formats with indicative pricing. Select any product to estimate instant pricing or share custom dimensions on WhatsApp."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full md:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search products, boxes, cards...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-white/15 bg-[#141824] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedCategory(cat),
						className: `rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${selectedCategory === cat ? "bg-cyan text-ink shadow-sm scale-105" : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"}`,
						children: cat === "All" ? `All Products (${products.length})` : cat
					}, cat))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: filteredProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						maxTilt: 6,
						scale: 1.015,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#calculator",
							className: "product-card group flex h-full flex-col justify-between",
							style: { "--delay": `${i * 35}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "product-image-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: `${p.name} printing by PRINTIT`,
										loading: "lazy",
										width: 800,
										height: 600,
										className: "product-image"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "product-badge",
										children: "PRINTIT"
									}),
									p.specs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10",
										children: p.specs
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-white",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-cyan transition group-hover:translate-x-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 text-sm leading-6 text-white/65",
									children: p.blurb
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-white/10 px-5 py-3 flex items-center justify-between text-xs bg-white/[0.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-white/60",
									children: [
										"From ₹",
										p.basePer100,
										"/100"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold uppercase tracking-wider text-cyan group-hover:underline",
									children: "Calculate & Quote →"
								})]
							})]
						})
					}, p.slug))
				})
			]
		})
	});
}
function PharmaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pharma",
		className: "section-pad overflow-hidden bg-[#090b11] text-white relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow-dark",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-cyan" }), " Medical & pharmaceutical printing"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-4xl font-bold tracking-tight sm:text-5xl",
					children: "Precision printing for healthcare & pharma."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg leading-8 text-white/70",
					children: "From medicine packaging with tamper-evident folds to doctor prescription pads, we assist hospitals, clinics, and pharmaceutical brands in maintaining a pristine, GMP-compliant printed standard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [
						"Medicine boxes & mono cartons",
						"Pharmaceutical product labels",
						"Prescription pads & Rx stationery",
						"Doctor files & OPD folders",
						"Patient information leaflets & inserts",
						"Medical hospital letterheads & bills"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-white/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-cyan shrink-0" }), item]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs font-bold text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-cyan animate-pulse" }), "Live 3D Manufacturing Line"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan text-[11px]",
								children: "6 Automated Stages"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center text-[10px] font-semibold text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-white/10 py-1.5",
									children: "01 Sheet Feed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-white/10 py-1.5",
									children: "02 Print Rx"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-white/10 py-1.5",
									children: "03 Lamination"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-white/10 py-1.5",
									children: "04 Die-Punch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-white/10 py-1.5",
									children: "05 Pasting"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-cyan/20 py-1.5 text-cyan font-bold",
									children: "06 3D Box"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-[11px] text-white/50",
							children: "Use the interactive 3D video controls on the right to scrub, pause, or inspect each manufacturing stage."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "btn-primary btn-lg",
						children: ["Get a Pharma Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE$1}`,
						className: "btn-ghost-dark btn-lg",
						children: ["Call Pharma Desk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan/15 via-rose-500/10 to-indigo-500/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex aspect-[16/10] w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111420] text-sm text-white/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mb-2 h-6 w-6 animate-spin rounded-full border-2 border-cyan border-t-transparent" }), "Loading 3D Pharma Manufacturing Line..."]
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PharmaManufacturing3D, {})
				})]
			})]
		})
	});
}
function CalculatorSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "calculator",
		className: "section-pad bg-[#090b11] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Quick estimate",
					title: "Start with a rough price. Finish with a real quote.",
					text: "Use our dynamic price calculator for an instant estimate, then share your specs directly to our team on WhatsApp for final scheduling."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCalculator, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-white/50",
					children: "Estimates are indicative. Final quotation depends on exact dimensions, paper stock GSM, custom finishes, and delivery destination."
				})
			]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "section-pad bg-[#0c0f17] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why PRINTIT",
				title: "A print partner that understands the finer details.",
				text: "Good printing is not just ink on paper. It is about substrate thickness, color fidelity, finishing longevity, and getting the final product right every time."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Clock3,
						title: "Reliable On-Time Turnaround",
						desc: "Clear timelines and proactive production scheduling for both everyday commercial batches and urgent dispatches."
					},
					{
						icon: ShieldCheck,
						title: "Precision Quality Checks",
						desc: "Multi-point pre-press review, color density calibration, and post-finishing inspection before goods are packed."
					},
					{
						icon: Factory,
						title: "25+ Years Print Engineering",
						desc: "Extensive craftsmanship across offset printing, mono carton packaging, corporate stationery, and die-cutting."
					},
					{
						icon: Truck,
						title: "Pan-India Logistics Support",
						desc: "Local pickup in Indore or secured courier and freight dispatch to client warehouses and outlets across India."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					maxTilt: 6,
					scale: 1.02,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "why-card h-full flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-7 w-7 text-cyan" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-bold text-lg text-white",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-white/65",
								children: item.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-3 border-t border-white/10 text-xs font-semibold text-cyan",
							children: "PRINTIT Quality Assured"
						})]
					})
				}, item.title))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-[#090b11] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How it works",
				title: "Simple process. Industrial output."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-4",
				children: [
					[
						"01",
						"Share Your Requirements",
						"Tell us your product type, dimensions, quantity, paper stock, and finish preferences."
					],
					[
						"02",
						"Instant Quotation",
						"Our estimators evaluate your specifications and provide a competitive, transparent quote."
					],
					[
						"03",
						"Pre-Press & Proofing",
						"Artwork files are checked for bleed, CMYK color profiles, and die-line accuracy."
					],
					[
						"04",
						"Production & Delivery",
						"Printing, lamination, die-cutting, packaging, and timely dispatch to your address."
					]
				].map(([number, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					maxTilt: 6,
					scale: 1.02,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "process-card h-full flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "process-number",
								children: number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-bold text-lg text-white",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-white/65",
								children: desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 text-[11px] font-bold uppercase tracking-wider text-white/40",
							children: ["Step ", number]
						})]
					})
				}, number))
			})]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-[#0c0f17] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected work",
					title: "Print products that are built to be noticed.",
					text: "A visual sample of the commercial, corporate, and packaging print solutions produced by PRINTIT."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "btn-ghost-dark",
					children: ["Start your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						image: PORTFOLIO_FINAL_default,
						label: "Custom Packaging & Boxes"
					},
					{
						image: ChatGPT_Image_Jul_30__2026__11_14_52_AM_default,
						label: "Printed Corporate Stationery"
					},
					{
						image: print_it_brochure_default,
						label: "Brochures & Marketing Materials"
					},
					{
						image: Box_Mockups_OK_3_default,
						label: "Mono Cartons & Product Boxes"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					maxTilt: 6,
					scale: 1.02,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "portfolio-card group h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.label,
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "portfolio-caption",
							children: item.label
						})]
					})
				}, item.label))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-[#090b11] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Customer experience",
				title: "Quality is easiest to notice in the final product.",
				text: "We focus on dependable production, clear communication, and practical paper and finishing recommendations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: [
					"Clear communication and transparent estimates from initial query to final delivery.",
					"Invaluable guidance on paper weights, spot UV contrasts, and structural carton folding.",
					"Our go-to printing press in Indore for repeat corporate stationery and marketing orders."
				].map((text, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					maxTilt: 5,
					scale: 1.01,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quote-card h-full flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl leading-none text-cyan font-serif",
							children: "“"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg font-semibold leading-7 text-white/90",
							children: text
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex items-center gap-2 text-sm text-white/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-cyan" }), " Verified Client Review"]
						})]
					})
				}, idx))
			})]
		})
	});
}
function Contact() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function handleSubmit(e) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const message = `Hello PRINTIT, I need a quotation.\nName: ${String(form.get("name") || "")}\nPhone: ${String(form.get("phone") || "")}\nRequirement: ${String(form.get("requirement") || "")}`;
		window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
		setSubmitted(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-pad pt-8 bg-[#0c0f17] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-panel border border-white/10 bg-gradient-to-br from-[#121520] to-[#0c0e14]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-cyan" }), " Get a quotation"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-4xl font-bold tracking-tight sm:text-5xl text-white",
						children: "Have a printing requirement?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg leading-8 text-white/70",
						children: "Tell us what you want to print. For the most accurate quotation, include approximate quantity, size, paper GSM, and desired finishes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 grid gap-4 text-sm text-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE$1}`,
								className: "contact-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-cyan" }),
									" ",
									PHONE$1
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${EMAIL}`,
								className: "contact-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-cyan" }),
									" ",
									EMAIL
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: INSTAGRAM,
								target: "_blank",
								rel: "noreferrer",
								className: "contact-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-cyan" }), " @press.printit_indore"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-cyan shrink-0" }), " Rambali Nagar Industrial Area, Indore, Madhya Pradesh"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE$1}`,
							className: "btn-primary",
							children: ["Call for Quotation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-ghost-dark",
							children: ["WhatsApp Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "contact-form",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								placeholder: "Your name"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								required: true,
								type: "tel",
								placeholder: "+91 ..."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							placeholder: "you@company.com"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Printing requirement", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "requirement",
							required: true,
							rows: 5,
							placeholder: "Example: 1,000 medicine boxes, 350 GSM board, matte lamination and gold foil on logo..."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "btn-primary w-full justify-center",
							children: ["Send Enquiry on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-cyan",
							children: "WhatsApp opened with your enquiry. If it did not open, use the WhatsApp button on the left."
						})
					]
				})]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/10 bg-[#06070a] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto grid gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_white_default,
						alt: "PRINTIT",
						className: "h-11 w-auto brightness-110"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-6 text-white/65",
						children: "Commercial offset, digital printing, and custom packaging solutions for businesses that value consistency, color accuracy, and presentation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "WhatsApp",
								className: "social-btn border-white/15 text-white/70 hover:text-white hover:border-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								"aria-label": "Contact",
								className: "social-btn border-white/15 text-white/70 hover:text-white hover:border-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								"aria-label": "Email",
								className: "social-btn border-white/15 text-white/70 hover:text-white hover:border-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTAGRAM,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "social-btn border-white/15 text-white/70 hover:text-white hover:border-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Services",
					links: [
						"Commercial Offset Printing",
						"High-Speed Digital Printing",
						"Custom Mono Cartons",
						"Pharma & Medical Printing",
						"Luxury Finishes & Foiling"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Products",
					links: [
						"Business Cards",
						"Brochures & Catalogues",
						"Flyers & Leaflets",
						"Mono Carton Boxes",
						"Stickers & Labels"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Company",
					links: [
						"Why PRINTIT",
						"How it works",
						"3D Finishes",
						"Price Calculator",
						"Contact"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container mx-auto flex flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PRINTIT Printing, Packaging & Designing Solutions."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Indore, Madhya Pradesh · Serving commercial printing across India" })]
			})
		})]
	});
}
function FooterColumn({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-sm font-bold uppercase tracking-wider text-white",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3 text-sm text-white/65",
		children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: link === "Contact" ? "#contact" : link === "Price Calculator" ? "#calculator" : link === "Why PRINTIT" ? "#why" : link === "3D Finishes" ? "#finishes" : link === "How it works" ? "#services" : "#products",
			className: "hover:text-cyan transition-colors",
			children: link
		}) }, link))
	})] });
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP,
		target: "_blank",
		rel: "noreferrer",
		className: "whatsapp-float group",
		"aria-label": "Chat on WhatsApp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-16 rounded-xl bg-black/90 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-white/15",
				children: "💬 Fast WhatsApp Quote"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute -top-1 -right-1 flex h-3.5 w-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
		]
	});
}
function SectionHeading({ eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow-dark",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl",
				children: title
			}),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component, routes_rp_i15_f_exports as t };
