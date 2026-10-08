import { i as __toESM } from "../_runtime.mjs";
import { L as init_performance, R as performance_default, j as TextureLoader, v as MathUtils, x as MeshStandardMaterial } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { a as useFrame, c as require_jsx_runtime, i as Canvas, l as require_react, n as ContactShadows, o as useLoader, r as Environment, t as Sparkles } from "../_libs/@react-three/drei+[...].mjs";
import { S as Layers, a as Sparkles$1, c as Scissors, d as Printer, f as Play, g as Package, j as Boxes, m as Pause, o as ShieldCheck, u as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PharmaManufacturing3D-BJRGwiNm.js
init_performance();
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pharma_sheet_print_default = "/assets/pharma-sheet-print-Cd63nGim.png";
var pharma_box_front_default = "/assets/pharma-box-front-Cpjh7SdK.png";
var pharma_box_side_default = "/assets/pharma-box-side-CyfHx60a.png";
var PHARMA_STAGES = [
	{
		id: 0,
		name: "01 Sheet Feed",
		title: "Virgin Medical Board Feeding",
		desc: "350 GSM virgin SBS food & pharma grade paperboard loaded with high-speed vacuum suction & guide-pin registration.",
		icon: Layers,
		color: "#38bdf8"
	},
	{
		id: 1,
		name: "02 Offset Print",
		title: "High-Precision 6-Color Printing",
		desc: "UV offset printing transfers Rx branding, composition, Schedule H warning box, barcodes and batch details with micron accuracy.",
		icon: Printer,
		color: "#e11d48"
	},
	{
		id: 2,
		name: "03 Lamination",
		title: "Barrier Gloss/Matte Lamination",
		desc: "Thermal barrier film applied across the sheet to protect against moisture, handling abrasion, and transit wear.",
		icon: Sparkles$1,
		color: "#f59e0b"
	},
	{
		id: 3,
		name: "04 Die-Punch",
		title: "Precision Die-Cutting & Creasing",
		desc: "Laser-cut steel rule dies punch out tuck-in flaps, dieline outline, and score creases for flawless machine folding.",
		icon: Scissors,
		color: "#10b981"
	},
	{
		id: 4,
		name: "05 Pasting & Fold",
		title: "Folder-Gluer Side-Seam Pasting",
		desc: "Automated glue nozzles dispense adhesive on side tabs while motorized belts fold the 4 panels into a ready carton sleeve.",
		icon: Boxes,
		color: "#6366f1"
	},
	{
		id: 5,
		name: "06 Finished 3D Box",
		title: "Completed Pharma Mono Carton",
		desc: "Fully formed medical box with tamper-evident seal, blister slot, and batch stamp ready for pharmaceutical packaging lines.",
		icon: Package,
		color: "#06b6d4"
	}
];
function ProductionScene({ progress, stage }) {
	const sheetTexture = useLoader(TextureLoader, pharma_sheet_print_default);
	const frontTexture = useLoader(TextureLoader, pharma_box_front_default);
	const sideTexture = useLoader(TextureLoader, pharma_box_side_default);
	const sceneGroup = (0, import_react.useRef)(null);
	const printRollerRef = (0, import_react.useRef)(null);
	const laminationRollerRef = (0, import_react.useRef)(null);
	const dieHeadRef = (0, import_react.useRef)(null);
	const finishedBoxRef = (0, import_react.useRef)(null);
	const sheetGroupRef = (0, import_react.useRef)(null);
	(0, import_react.useMemo)(() => new MeshStandardMaterial({
		color: "#f1f5f9",
		roughness: .85,
		metalness: .05
	}), []);
	const conveyorMat = (0, import_react.useMemo)(() => new MeshStandardMaterial({
		color: "#181e28",
		roughness: .35,
		metalness: .75
	}), []);
	const metalMat = (0, import_react.useMemo)(() => new MeshStandardMaterial({
		color: "#334155",
		roughness: .2,
		metalness: .9
	}), []);
	const chromeMat = (0, import_react.useMemo)(() => new MeshStandardMaterial({
		color: "#94a3b8",
		roughness: .1,
		metalness: .95
	}), []);
	useFrame((_, delta) => {
		if (sheetGroupRef.current) {
			if (progress < .16) {
				const feedT = progress / .16;
				sheetGroupRef.current.position.z = MathUtils.lerp(3.5, 0, feedT);
				sheetGroupRef.current.position.y = -.3;
				sheetGroupRef.current.visible = true;
			} else if (progress < .72) {
				sheetGroupRef.current.position.z = 0;
				sheetGroupRef.current.position.y = -.3;
				sheetGroupRef.current.visible = true;
			} else sheetGroupRef.current.visible = false;
		}
		if (printRollerRef.current) {
			if (progress >= .14 && progress <= .36) {
				printRollerRef.current.visible = true;
				const rollerT = (progress - .16) / .17;
				printRollerRef.current.position.z = MathUtils.lerp(-1.8, 1.8, MathUtils.clamp(rollerT, 0, 1));
				printRollerRef.current.rotation.x += delta * 12;
			} else printRollerRef.current.visible = false;
		}
		if (laminationRollerRef.current) {
			if (progress >= .31 && progress <= .52) {
				laminationRollerRef.current.visible = true;
				const lamT = (progress - .33) / .17;
				laminationRollerRef.current.position.z = MathUtils.lerp(-1.8, 1.8, MathUtils.clamp(lamT, 0, 1));
				laminationRollerRef.current.rotation.x += delta * 14;
			} else laminationRollerRef.current.visible = false;
		}
		if (dieHeadRef.current) {
			if (progress >= .48 && progress <= .68) {
				dieHeadRef.current.visible = true;
				const punchT = (progress - .5) / .16;
				const punchCycle = Math.sin(punchT * Math.PI * 4);
				dieHeadRef.current.position.y = MathUtils.lerp(1.6, .15, Math.max(0, punchCycle));
			} else dieHeadRef.current.visible = false;
		}
		if (finishedBoxRef.current) {
			if (progress >= .66) {
				finishedBoxRef.current.visible = true;
				const boxT = (progress - .66) / .34;
				if (boxT < .35) {
					const foldProgress = boxT / .35;
					finishedBoxRef.current.scale.setScalar(MathUtils.lerp(.4, 1, foldProgress));
					finishedBoxRef.current.position.y = MathUtils.lerp(-.2, .4, foldProgress);
					finishedBoxRef.current.rotation.y = foldProgress * Math.PI * .5;
				} else {
					const showcaseT = (boxT - .35) / .65;
					finishedBoxRef.current.scale.setScalar(1);
					finishedBoxRef.current.position.y = .4 + Math.sin(showcaseT * Math.PI * 2) * .08;
					finishedBoxRef.current.rotation.y = MathUtils.lerp(.5, .5 + Math.PI * 2, showcaseT);
					finishedBoxRef.current.rotation.x = Math.sin(showcaseT * Math.PI * 2) * .1;
				}
			} else finishedBoxRef.current.visible = false;
		}
	});
	const printReveal = progress < .16 ? 0 : progress < .33 ? (progress - .16) / .17 : 1;
	const laminationGloss = progress >= .33 ? .9 : .2;
	const laminationClearcoat = progress >= .33 ? 1 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: sceneGroup,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					-.65,
					0
				],
				material: conveyorMat,
				receiveShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.8,
					.4,
					4.8
				] })
			}),
			[-2.2, 2.2].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					x,
					-.38,
					0
				],
				material: metalMat,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.18,
					.22,
					4.6
				] })
			}, x)),
			Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					-.42,
					-2 + i * .5
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				material: chromeMat,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.06,
					.06,
					4.2,
					20
				] })
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: sheetGroupRef,
				position: [
					0,
					-.3,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						position: [
							0,
							0,
							0
						],
						castShadow: true,
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [3.2, 3.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#f8fafc",
							roughness: .8
						})]
					}),
					printReveal > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						position: [
							0,
							.005,
							0
						],
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [3.18, 3.18] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							map: sheetTexture,
							transparent: true,
							opacity: Math.min(1, printReveal),
							roughness: 1 - laminationGloss * .8,
							metalness: .1,
							clearcoat: laminationClearcoat,
							clearcoatRoughness: .08
						})]
					}),
					stage === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						position: [
							0,
							.01,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.8, 2.8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
							color: "#10b981",
							wireframe: true,
							transparent: true,
							opacity: .65
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				ref: printRollerRef,
				position: [
					0,
					.25,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				material: chromeMat,
				castShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.3,
					.3,
					3.4,
					32
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				ref: laminationRollerRef,
				position: [
					0,
					.25,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				material: new MeshStandardMaterial({
					color: "#f59e0b",
					metalness: .9,
					roughness: .15
				}),
				castShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.26,
					.26,
					3.4,
					32
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: dieHeadRef,
				position: [
					0,
					1.4,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						material: metalMat,
						castShadow: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							3.2,
							.45,
							3.2
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						position: [
							0,
							-.28,
							0
						],
						material: new MeshStandardMaterial({
							color: "#e2e8f0",
							metalness: .98,
							roughness: .08
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							2.9,
							.12,
							2.9
						] })
					}),
					[
						[-1.4, -1.4],
						[1.4, -1.4],
						[-1.4, 1.4],
						[1.4, 1.4]
					].map(([px, pz], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						position: [
							px,
							.5,
							pz
						],
						material: chromeMat,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.08,
							.08,
							1.2,
							16
						] })
					}, idx))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: finishedBoxRef,
				position: [
					0,
					.4,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						castShadow: true,
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							2,
							3.1,
							1.25
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#ffffff",
							roughness: .2,
							metalness: .05,
							clearcoat: 1,
							clearcoatRoughness: .08
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							0,
							.63
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.96, 3.06] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							map: frontTexture,
							roughness: .18,
							clearcoat: 1,
							clearcoatRoughness: .06
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							0,
							-.63
						],
						rotation: [
							0,
							Math.PI,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.96, 3.06] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							map: frontTexture,
							roughness: .18,
							clearcoat: 1,
							clearcoatRoughness: .06
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							1.01,
							0,
							0
						],
						rotation: [
							0,
							Math.PI / 2,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.22, 3.06] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							map: sideTexture,
							roughness: .25
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-1.01,
							0,
							0
						],
						rotation: [
							0,
							-Math.PI / 2,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.22, 3.06] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							map: sideTexture,
							roughness: .25
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							1.56,
							0
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.96, 1.22] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#0e7490",
							roughness: .2,
							metalness: .3
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							1.565,
							.52
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.7, .35] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#38bdf8",
							emissive: "#0284c7",
							emissiveIntensity: .6,
							metalness: .9,
							roughness: .1,
							iridescence: 1,
							iridescenceIOR: 1.6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						position: [
							1.4,
							-.7,
							.4
						],
						rotation: [
							.1,
							-.4,
							.2
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								1.6,
								2.2,
								.03
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#cbd5e1",
								metalness: .92,
								roughness: .15
							})]
						}), Array.from({ length: 10 }).map((_, bi) => {
							const bx = -.5 + bi % 2 * 1;
							const by = .8 - Math.floor(bi / 2) * .4;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									bx,
									by,
									.04
								],
								castShadow: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
									.12,
									.22,
									8,
									16
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#0284c7",
									metalness: .3,
									roughness: .2
								})]
							}, bi);
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				count: stage === 3 ? 45 : 18,
				scale: [
					4,
					3,
					4
				],
				size: stage === 3 ? 3.5 : 1.8,
				speed: .5,
				color: "#38bdf8",
				opacity: .6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					-.86,
					0
				],
				opacity: .7,
				scale: 7,
				blur: 2.5,
				far: 4
			})
		]
	});
}
function PharmaManufacturing3D() {
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [playbackSpeed, setPlaybackSpeed] = (0, import_react.useState)(1);
	const animFrameRef = (0, import_react.useRef)(null);
	const DURATION_MS = 16e3;
	(0, import_react.useEffect)(() => {
		let lastTime = performance_default.now();
		const loop = (time) => {
			const delta = time - lastTime;
			lastTime = time;
			if (isPlaying) setProgress((prev) => {
				if (!Number.isFinite(delta) || delta < 0) return prev;
				const step = Math.min(delta, 250) / DURATION_MS * playbackSpeed;
				const next = (Number.isFinite(prev) ? prev : 0) + step;
				return next >= 1 ? 0 : next;
			});
			animFrameRef.current = requestAnimationFrame(loop);
		};
		animFrameRef.current = requestAnimationFrame(loop);
		return () => {
			if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
		};
	}, [isPlaying, playbackSpeed]);
	const safeProgress = Number.isFinite(progress) ? Math.max(0, Math.min(.9999, progress)) : 0;
	const currentStageIndex = Math.max(0, Math.min(5, Math.floor(safeProgress * 6)));
	const activeStage = PHARMA_STAGES[currentStageIndex] ?? PHARMA_STAGES[0];
	const jumpToStage = (stageIdx) => {
		setProgress(Math.max(0, Math.min(5, stageIdx)) / 6 + .01);
	};
	const currentSeconds = (safeProgress * 16).toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col rounded-3xl border border-white/15 bg-gradient-to-b from-[#111420] via-[#0c0e16] to-[#090b11] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3.5 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex h-2.5 w-2.5 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-white",
						children: ["3D Manufacturing Line: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cyan",
							children: activeStage.name
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [currentSeconds, "s"] }),
							" / ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "16.0s" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlaybackSpeed((s) => s === 1 ? 1.5 : s === 1.5 ? 2 : 1),
						className: "rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-bold text-white/80 hover:bg-white/15 transition",
						children: [playbackSpeed, "x Speed"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] sm:aspect-[16/10] w-full min-h-[380px] bg-radial from-[#1e293b]/30 via-transparent to-transparent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
						shadows: true,
						dpr: [1, 2],
						camera: {
							position: [
								0,
								2.2,
								5.2
							],
							fov: 42
						},
						gl: {
							antialias: true,
							alpha: true
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .7 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
								position: [
									4,
									7,
									4
								],
								intensity: 2.2,
								castShadow: true,
								color: "#ffffff",
								"shadow-mapSize": [1024, 1024]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
								position: [
									-4,
									3,
									2
								],
								intensity: 1.4,
								color: "#38bdf8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
								position: [
									3,
									-1,
									3
								],
								intensity: 1,
								color: "#f59e0b"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, {
								preset: "city",
								environmentIntensity: .65
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
								fallback: null,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductionScene, {
									progress: safeProgress,
									stage: currentStageIndex
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute bottom-4 left-4 z-10 flex flex-col gap-1 rounded-2xl border border-white/15 bg-black/75 p-3.5 backdrop-blur-xl shadow-xl max-w-[280px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(activeStage.icon, {
								className: "h-4 w-4",
								style: { color: activeStage.color }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-xs font-bold text-white",
								children: activeStage.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 text-[11px] leading-relaxed text-white/70",
							children: activeStage.desc
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-semibold text-white/70 backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-cyan" }), " GMP Pharma Line"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 bg-[#090b11] p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: (e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						const clickPos = (e.clientX - rect.left) / rect.width;
						setProgress(Math.max(0, Math.min(1, clickPos)));
					},
					className: "relative h-2 w-full cursor-pointer rounded-full bg-white/10 overflow-hidden group",
					title: "Click to seek sequence",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-gradient-to-r from-cyan via-magenta to-yellow transition-[width] duration-75",
						style: { width: `${safeProgress * 100}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsPlaying(!isPlaying),
							className: "flex items-center gap-1.5 rounded-full bg-cyan px-3.5 py-1.5 text-xs font-bold text-ink shadow-md hover:bg-cyan/90 transition active:scale-95",
							children: [isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5" }), isPlaying ? "Pause" : "Play Line"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setProgress(0);
								setIsPlaying(true);
							},
							title: "Restart 3D Animation",
							className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 active:scale-95 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: PHARMA_STAGES.map((st, idx) => {
							const isActive = idx === currentStageIndex;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => jumpToStage(idx),
								className: `flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-[11px] font-bold transition-all ${isActive ? "border border-cyan bg-cyan/20 text-cyan shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-105" : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(st.icon, {
										className: "h-3 w-3",
										style: { color: isActive ? "#38bdf8" : "inherit" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden md:inline",
										children: st.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "md:hidden",
										children: ["0", idx + 1]
									})
								]
							}, st.id);
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { PHARMA_STAGES, PharmaManufacturing3D as default };
