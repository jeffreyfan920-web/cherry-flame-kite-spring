import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minus, c as Clock, i as Plus, l as Bike, o as MapPin, r as Sunrise, s as Coffee, t as UtensilsCrossed } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_nol0mjS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "breakfast",
		title: "招牌港式早餐",
		blurb: "六點半已經熱滾滾。多士、通粉、公仔麵，配一杯奶茶就朝早。",
		image: "/photos/breakfast.jpg",
		imageAlt: "火腿蛋多士、通粉同港式奶茶"
	},
	{
		id: "lunch",
		title: "經典常餐 / 午餐",
		blurb: "飯、麵、意粉，例湯熱湯。一個人快餐，或者一家人慢慢食。",
		image: "/photos/lunch.jpg",
		imageAlt: "豬扒飯配例湯"
	},
	{
		id: "drinks",
		title: "香濃咖啡及手沖茶飲",
		blurb: "奶茶、鴛鴦、手沖。凍熱都有，坐低飲或者打包走。",
		image: "/photos/drinks.jpg",
		imageAlt: "港式奶茶同手沖咖啡"
	}
];
var menu = [
	{
		id: "toast-set",
		name: "火腿蛋沙律蛋多士套餐",
		note: "厚多士、火腿蛋同沙律，配熱飲一杯",
		price: 42,
		category: "breakfast"
	},
	{
		id: "macaroni",
		name: "鮮茄通粉配煎蛋",
		note: "慢火茄汁，煎蛋可選全熟或流心",
		price: 46,
		category: "breakfast"
	},
	{
		id: "french-toast",
		name: "西多士配煉奶",
		note: "外脆內軟，煉奶另上",
		price: 32,
		category: "breakfast"
	},
	{
		id: "instant-noodle",
		name: "煎蛋餐肉公仔麵",
		note: "清湯底，餐肉香，朝早最穩陣",
		price: 40,
		category: "breakfast"
	},
	{
		id: "bolo-bao",
		name: "菠蘿油配凍奶茶",
		note: "酥皮牛油，凍奶茶解膩",
		price: 36,
		category: "breakfast"
	},
	{
		id: "pork-chop-rice",
		name: "豬扒飯配例湯",
		note: "厚切豬扒、熱飯、例湯",
		price: 68,
		category: "lunch"
	},
	{
		id: "shrimp-rice",
		name: "滑蛋蝦仁飯",
		note: "蛋要滑，蝦要彈",
		price: 72,
		category: "lunch"
	},
	{
		id: "beef-hofun",
		name: "招牌乾炒牛河",
		note: "鑊氣足，河粉爽口",
		price: 62,
		category: "lunch"
	},
	{
		id: "chicken-pasta",
		name: "白汁雞皇意粉",
		note: "奶油白汁，細路都鍾意",
		price: 66,
		category: "lunch"
	},
	{
		id: "baked-rice",
		name: "焗豬扒飯",
		note: "芝士面同飯都要有少少焦香",
		price: 70,
		category: "lunch"
	},
	{
		id: "milk-tea",
		name: "港式奶茶（熱／凍）",
		note: "茶香奶滑，唔會過甜",
		price: 22,
		category: "drinks"
	},
	{
		id: "yuenyeung",
		name: "鴛鴦",
		note: "咖啡同奶茶，各一半",
		price: 24,
		category: "drinks"
	},
	{
		id: "pourover",
		name: "手沖咖啡",
		note: "每日新鮮手沖，可以問師傅今日豆",
		price: 32,
		category: "drinks"
	},
	{
		id: "lemon-tea",
		name: "凍檸茶",
		note: "茶底厚，檸檬新鮮切",
		price: 22,
		category: "drinks"
	},
	{
		id: "lemon-honey",
		name: "凍檸蜜",
		note: "喉嚨乾、踩完單車，呢杯最對",
		price: 26,
		category: "drinks"
	}
];
var WA_PHONE = "85257700978";
var PHONE_DISPLAY = "5770 0978";
var ADDRESS = "新界馬鞍山大水坑村115號地下";
var MAPS_HREF = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("事頭婆茶座 馬鞍山大水坑村115號");
function waHref(text) {
	return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}
function orderMessage(lines, total) {
	return [
		"你好，我想向事頭婆茶座落外賣單：",
		"",
		lines.map((line) => `・${line.name} × ${line.qty}　HK$${line.lineTotal}`).join("\n"),
		"",
		`合計 HK$${total}`,
		"",
		"請幫手確認可取餐時間，多謝！",
		`地址：${ADDRESS}`
	].join("\n");
}
var INQUIRY_TEXT = "你好，我想查詢事頭婆茶座（大水坑村115號地下）。多謝！";
var TAKEAWAY_TEXT = "你好，我想預訂事頭婆茶座外賣。請幫手落單，多謝！";
var CATERING_TEXT = [
	"你好，我想查詢事頭婆茶座到會服務。",
	"",
	"活動類型：",
	"大約人數：",
	"日期同時間：",
	"預算／想食嘅菜式：",
	"",
	"多謝！"
].join("\n");
var OPEN_DAYS = /* @__PURE__ */ new Set([
	"Mon",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
]);
function shopStatus(now = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "Asia/Hong_Kong",
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(now);
	const pick = (type) => parts.find((part) => part.type === type)?.value ?? "";
	const weekday = pick("weekday");
	if (weekday === "Tue") return {
		open: false,
		label: "逢星期二休息"
	};
	const mins = Number(pick("hour")) * 60 + Number(pick("minute"));
	return OPEN_DAYS.has(weekday) && mins >= 390 && mins < 1020 ? {
		open: true,
		label: "而家營業中"
	} : {
		open: false,
		label: "今日已收檔"
	};
}
function Home() {
	const [cart, setCart] = (0, import_react.useState)({});
	const [notice, setNotice] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setStatus(shopStatus());
		tick();
		const id = window.setInterval(tick, 6e4);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!notice) return;
		const id = window.setTimeout(() => setNotice(null), 2200);
		return () => window.clearTimeout(id);
	}, [notice]);
	const lines = (0, import_react.useMemo)(() => {
		return menu.filter((item) => (cart[item.id] ?? 0) > 0).map((item) => {
			const qty = cart[item.id] ?? 0;
			return {
				item,
				qty,
				lineTotal: qty * item.price
			};
		});
	}, [cart]);
	const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);
	const count = lines.reduce((sum, line) => sum + line.qty, 0);
	const orderHref = count > 0 ? waHref(orderMessage(lines.map((line) => ({
		name: line.item.name,
		qty: line.qty,
		lineTotal: line.lineTotal
	})), total)) : waHref(TAKEAWAY_TEXT);
	function add(item) {
		setCart((current) => ({
			...current,
			[item.id]: (current[item.id] ?? 0) + 1
		}));
		setNotice(`已加入：${item.name}`);
	}
	function changeQty(id, next) {
		setCart((current) => {
			const copy = { ...current };
			if (next <= 0) delete copy[id];
			else copy[id] = next;
			return copy;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: count > 0 ? "pb-36 md:pb-0" : "pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-moss font-serif text-lg text-foam",
								children: "事"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-serif text-lg leading-none text-ink",
									children: "事頭婆茶座"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block truncate text-xs text-muted",
									children: "大水坑村 · 朝早六點半"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm text-ink md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#menu",
									className: "hover:text-caramel-deep",
									children: "招牌美食"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#catering",
									className: "hover:text-caramel-deep",
									children: "到會服務"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#visit",
									className: "hover:text-caramel-deep",
									children: "店舖位置與營業時間"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waHref(INQUIRY_TEXT),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-wa px-4 text-sm font-medium text-foam hover:bg-moss-deep",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "WhatsApp 落單 / 查詢"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "WhatsApp"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#menu",
							className: "shrink-0 text-ink",
							children: "招牌美食"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#catering",
							className: "shrink-0 text-ink",
							children: "到會服務"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#visit",
							className: "shrink-0 text-ink",
							children: "店舖位置與營業時間"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full bg-caramel-soft px-3 py-1 text-xs font-medium text-caramel-deep",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: status?.open ? "size-2 rounded-full bg-wa" : "size-2 rounded-full bg-seal" }),
									status ? status.label : "星期一、三至日 06:30 – 17:00",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "· 星期二休息"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl text-ink md:text-5xl",
								children: "大水坑村的人情味茶座，由朝早六點半開始溫暖你的一天"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base text-muted md:text-lg",
								children: "新鮮出爐嘅港式早餐、香濃咖啡同茶飲。村口地下舖，單車同駕車都好泊。一個人坐、一家人坐，都有位。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#menu",
									className: "inline-flex h-12 items-center justify-center rounded-full bg-moss px-6 text-sm font-medium text-foam hover:bg-moss-deep",
									children: "瀏覽餐牌"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: orderHref,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-moss px-6 text-sm font-medium text-moss hover:bg-moss-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "text-wa" }), "一鍵 WhatsApp 預訂外賣"]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/hero.jpg",
								alt: "事頭婆茶座早上市內，木桌同一杯奶茶",
								className: "aspect-4/3 w-full rounded-card object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute bottom-4 left-4 rounded-full bg-paper/95 px-4 py-2 text-sm text-ink",
								children: "大水坑村 115 號地下"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-6xl px-4 pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunrise, {
										className: "size-5",
										"aria-hidden": true
									}),
									title: "早晨 6:30 準時開檔",
									text: "星期一、三至日。村口第一口熱飲，唔使行去商場。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, {
										className: "size-5",
										"aria-hidden": true
									}),
									title: "香濃咖啡與港式茶飲",
									text: "奶茶、鴛鴦、手沖。坐低飲，或者打包上山都得。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, {
										className: "size-5",
										"aria-hidden": true
									}),
									title: "街坊及單車友友善",
									text: "附近好泊。踩完單車、揸車經過，落嚟飲杯先。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, {
										className: "size-5",
										"aria-hidden": true
									}),
									title: "公司 / 派對到會",
									text: "小型聚會、辦公室午餐。WhatsApp 講人數同時間就得。"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "menu",
						className: "mx-auto max-w-6xl px-4 py-12 md:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-caramel-deep",
								children: "參考餐牌"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-serif text-3xl text-ink md:text-4xl",
								children: "精選餐牌"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-sm text-muted",
								children: "以下菜式同港幣價錢為網站示範，方便你預先估算。實際款式以店內餐牌為準。"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-12",
								children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: category.image,
										alt: category.imageAlt,
										className: "mb-5 aspect-video w-full rounded-card object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-ink",
										children: category.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: category.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2",
										children: menu.filter((item) => item.category === category.id).map((item) => {
											const qty = cart[item.id] ?? 0;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "border-b border-line py-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-baseline gap-3",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
																className: "font-serif text-lg text-ink",
																children: item.name
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mb-1 hidden h-px flex-1 border-b border-dotted border-line sm:block" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "ml-auto shrink-0 font-medium text-caramel-deep tabular-nums sm:ml-0",
																children: ["HK$", item.price]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-muted",
														children: item.note
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-3 flex flex-wrap items-center gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "button",
															onClick: () => add(item),
															className: "inline-flex h-11 items-center gap-1 rounded-full border border-moss bg-foam px-4 text-sm font-medium text-moss hover:bg-moss-soft",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
																className: "size-4",
																"aria-hidden": true
															}), "加入預訂清單"]
														}), qty > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-sm text-moss",
															children: [
																"已加入 ",
																qty,
																" 份"
															]
														}) : null]
													})
												]
											}, item.id);
										})
									})
								] }, category.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSlip, {
								lines,
								total,
								count,
								orderHref: count > 0 ? orderHref : null,
								onChange: changeQty
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "catering",
						className: "bg-moss text-foam",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/catering.jpg",
								alt: "到會拼盤同奶茶，適合小型聚會",
								className: "aspect-video w-full rounded-card object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-caramel-soft",
									children: "到會 Catering"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-serif text-3xl md:text-4xl",
									children: "公司活動、細派對，交俾我哋"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-foam/85",
									children: "適合辦公室午餐、屋企細聚、單車隊落山之後嘅一餐。人數、時間、想食早餐定常餐，WhatsApp 講一聲，我哋幫手計份量。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waHref(CATERING_TEXT),
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-foam px-6 text-sm font-medium text-moss hover:bg-caramel-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, {}), "快速查詢到會"]
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "visit",
						className: "mx-auto max-w-6xl px-4 py-14 md:py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-start gap-8 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-caramel-deep",
									children: "點樣搵我哋"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-serif text-3xl text-ink md:text-4xl",
									children: "位置與營業時間"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-card border-2 border-double border-seal bg-foam px-5 py-4 text-seal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-2xl",
										children: "逢星期二休息"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm",
										children: ["星期一、三至日　06:30 – 17:00", status ? `　·　${status.label}` : null]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-6 space-y-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "mt-0.5 size-5 shrink-0 text-moss",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-medium text-ink",
											children: "地址"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-muted",
											children: ADDRESS
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											className: "mt-0.5 size-5 shrink-0 text-moss",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-medium text-ink",
											children: "電話 / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+85257700978",
											className: "text-moss underline-offset-2 hover:underline",
											children: PHONE_DISPLAY
										}) })] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-card bg-paper p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl text-ink",
										children: "交通貼士"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 space-y-2 text-sm text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "鄰近大水坑村，115 號地下，行入村就見到。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "駕車：附近泊車方便，落單前後都唔使兜圈。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "單車：舖前可以鎖車，踩完先飲杯凍嘢。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "街坊步行幾步就到，一個人食都唔使客氣。" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_HREF,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-moss px-6 text-sm font-medium text-foam hover:bg-moss-deep",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4",
										"aria-hidden": true
									}), "打開 Google Maps 導航"]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/exterior.jpg",
								alt: "大水坑村茶座外貌，門前可停單車",
								className: "aspect-4/3 w-full rounded-card object-cover"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-8 text-center text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-base text-ink",
						children: "事頭婆茶座"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: ADDRESS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: ["星期一、三至日 06:30 – 17:00 · 逢星期二休息 · ", PHONE_DISPLAY]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "餐牌價錢僅供估算，實際款式以店內餐牌為準。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: count > 0 ? orderHref : waHref(INQUIRY_TEXT),
				target: "_blank",
				rel: "noreferrer",
				className: `fixed right-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-wa px-5 text-sm font-medium text-foam shadow-lg hover:bg-moss-deep ${count > 0 ? "bottom-24 md:bottom-5" : "bottom-5"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, {}), "WhatsApp"]
			}),
			count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-moss-deep bg-moss-deep px-4 py-3 text-foam md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-foam/75",
						children: "預訂清單"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium tabular-nums",
						children: [
							count,
							" 項 · HK$",
							total
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: orderHref,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-11 items-center rounded-full bg-foam px-4 text-sm font-medium text-moss",
						children: "發送 WhatsApp 預訂"
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				"aria-live": "polite",
				children: notice
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-24 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm text-foam md:bottom-6",
				children: notice
			}) : null
		]
	});
}
function Feature({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-line bg-paper p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-full bg-moss-soft text-moss",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-serif text-lg text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: text
			})
		]
	});
}
function OrderSlip({ lines, total, count, orderHref, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-card border border-line bg-foam p-5 lg:sticky lg:top-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-muted",
				children: "外賣估算"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-serif text-2xl text-ink",
				children: "預訂清單"
			}),
			lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "未有菜式。撳「加入預訂清單」，下面會自動計總數。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-ink",
							children: line.item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-caramel-deep tabular-nums",
							children: ["HK$", line.lineTotal]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `減少 ${line.item.name}`,
								onClick: () => onChange(line.item.id, line.qty - 1),
								className: "grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 text-center text-sm tabular-nums",
								children: line.qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `增加 ${line.item.name}`,
								onClick: () => onChange(line.item.id, line.qty + 1),
								className: "grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
							})
						]
					})]
				}, line.item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-baseline justify-between border-t border-line pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted",
					children: ["總金額", count > 0 ? ` · ${count} 項` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-serif text-3xl text-ink tabular-nums",
					children: ["HK$", total]
				})]
			}),
			orderHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: orderHref,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-wa text-sm font-medium text-foam hover:bg-moss-deep",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, {}), "發送 WhatsApp 預訂"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: true,
				className: "mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-line text-sm font-medium text-muted",
				children: "發送 WhatsApp 預訂"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "實際款式以店內餐牌為準。發送後會開 WhatsApp，清單已經整理好。"
			})
		]
	});
}
function WhatsAppMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: `size-4 fill-current ${className}`,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.56.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z" })
	});
}
//#endregion
export { Home as component };
