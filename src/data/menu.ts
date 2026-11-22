export type CategoryId = "breakfast" | "lunch" | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  note: string;
  price: number;
  category: CategoryId;
};

export const categories: {
  id: CategoryId;
  title: string;
  blurb: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "breakfast",
    title: "招牌港式早餐",
    blurb: "六點半已經熱滾滾。多士、通粉、公仔麵，配一杯奶茶就朝早。",
    image: "/photos/breakfast.jpg",
    imageAlt: "火腿蛋多士、通粉同港式奶茶",
  },
  {
    id: "lunch",
    title: "經典常餐 / 午餐",
    blurb: "飯、麵、意粉，例湯熱湯。一個人快餐，或者一家人慢慢食。",
    image: "/photos/lunch.jpg",
    imageAlt: "豬扒飯配例湯",
  },
  {
    id: "drinks",
    title: "香濃咖啡及手沖茶飲",
    blurb: "奶茶、鴛鴦、手沖。凍熱都有，坐低飲或者打包走。",
    image: "/photos/drinks.jpg",
    imageAlt: "港式奶茶同手沖咖啡",
  },
];

export const menu: MenuItem[] = [
  {
    id: "toast-set",
    name: "火腿蛋沙律蛋多士套餐",
    note: "厚多士、火腿蛋同沙律，配熱飲一杯",
    price: 42,
    category: "breakfast",
  },
  {
    id: "macaroni",
    name: "鮮茄通粉配煎蛋",
    note: "慢火茄汁，煎蛋可選全熟或流心",
    price: 46,
    category: "breakfast",
  },
  {
    id: "french-toast",
    name: "西多士配煉奶",
    note: "外脆內軟，煉奶另上",
    price: 32,
    category: "breakfast",
  },
  {
    id: "instant-noodle",
    name: "煎蛋餐肉公仔麵",
    note: "清湯底，餐肉香，朝早最穩陣",
    price: 40,
    category: "breakfast",
  },
  {
    id: "bolo-bao",
    name: "菠蘿油配凍奶茶",
    note: "酥皮牛油，凍奶茶解膩",
    price: 36,
    category: "breakfast",
  },
  {
    id: "pork-chop-rice",
    name: "豬扒飯配例湯",
    note: "厚切豬扒、熱飯、例湯",
    price: 68,
    category: "lunch",
  },
  {
    id: "shrimp-rice",
    name: "滑蛋蝦仁飯",
    note: "蛋要滑，蝦要彈",
    price: 72,
    category: "lunch",
  },
  {
    id: "beef-hofun",
    name: "招牌乾炒牛河",
    note: "鑊氣足，河粉爽口",
    price: 62,
    category: "lunch",
  },
  {
    id: "chicken-pasta",
    name: "白汁雞皇意粉",
    note: "奶油白汁，細路都鍾意",
    price: 66,
    category: "lunch",
  },
  {
    id: "baked-rice",
    name: "焗豬扒飯",
    note: "芝士面同飯都要有少少焦香",
    price: 70,
    category: "lunch",
  },
  {
    id: "milk-tea",
    name: "港式奶茶（熱／凍）",
    note: "茶香奶滑，唔會過甜",
    price: 22,
    category: "drinks",
  },
  {
    id: "yuenyeung",
    name: "鴛鴦",
    note: "咖啡同奶茶，各一半",
    price: 24,
    category: "drinks",
  },
  {
    id: "pourover",
    name: "手沖咖啡",
    note: "每日新鮮手沖，可以問師傅今日豆",
    price: 32,
    category: "drinks",
  },
  {
    id: "lemon-tea",
    name: "凍檸茶",
    note: "茶底厚，檸檬新鮮切",
    price: 22,
    category: "drinks",
  },
  {
    id: "lemon-honey",
    name: "凍檸蜜",
    note: "喉嚨乾、踩完單車，呢杯最對",
    price: 26,
    category: "drinks",
  },
];

export const WA_PHONE = "85257700978";
export const PHONE_DISPLAY = "5770 0978";
export const ADDRESS = "新界馬鞍山大水坑村115號地下";
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("事頭婆茶座 馬鞍山大水坑村115號");

export function waHref(text: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

export function orderMessage(
  lines: { name: string; qty: number; lineTotal: number }[],
  total: number,
) {
  const body = lines
    .map((line) => `・${line.name} × ${line.qty}　HK$${line.lineTotal}`)
    .join("\n");
  return [
    "你好，我想向事頭婆茶座落外賣單：",
    "",
    body,
    "",
    `合計 HK$${total}`,
    "",
    "請幫手確認可取餐時間，多謝！",
    `地址：${ADDRESS}`,
  ].join("\n");
}

export const INQUIRY_TEXT =
  "你好，我想查詢事頭婆茶座（大水坑村115號地下）。多謝！";

export const TAKEAWAY_TEXT =
  "你好，我想預訂事頭婆茶座外賣。請幫手落單，多謝！";

export const CATERING_TEXT = [
  "你好，我想查詢事頭婆茶座到會服務。",
  "",
  "活動類型：",
  "大約人數：",
  "日期同時間：",
  "預算／想食嘅菜式：",
  "",
  "多謝！",
].join("\n");

const OPEN_DAYS = new Set(["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"]);

export function shopStatus(now = new Date()): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Hong_Kong",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  const weekday = pick("weekday");
  if (weekday === "Tue") return { open: false, label: "逢星期二休息" };
  const mins = Number(pick("hour")) * 60 + Number(pick("minute"));
  const open = OPEN_DAYS.has(weekday) && mins >= 6 * 60 + 30 && mins < 17 * 60;
  return open
    ? { open: true, label: "而家營業中" }
    : { open: false, label: "今日已收檔" };
}
