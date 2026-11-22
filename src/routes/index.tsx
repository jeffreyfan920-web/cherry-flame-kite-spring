import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Bike,
  Clock,
  Coffee,
  MapPin,
  Minus,
  Plus,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";
import {
  ADDRESS,
  CATERING_TEXT,
  INQUIRY_TEXT,
  MAPS_HREF,
  PHONE_DISPLAY,
  TAKEAWAY_TEXT,
  categories,
  menu,
  orderMessage,
  shopStatus,
  waHref,
  type MenuItem,
} from "@/data/menu";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(shopStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const id = window.setTimeout(() => setNotice(null), 2200);
    return () => window.clearTimeout(id);
  }, [notice]);

  const lines = useMemo(() => {
    return menu
      .filter((item) => (cart[item.id] ?? 0) > 0)
      .map((item) => {
        const qty = cart[item.id] ?? 0;
        return { item, qty, lineTotal: qty * item.price };
      });
  }, [cart]);

  const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const orderHref =
    count > 0
      ? waHref(
          orderMessage(
            lines.map((line) => ({
              name: line.item.name,
              qty: line.qty,
              lineTotal: line.lineTotal,
            })),
            total,
          ),
        )
      : waHref(TAKEAWAY_TEXT);

  function add(item: MenuItem) {
    setCart((current) => ({ ...current, [item.id]: (current[item.id] ?? 0) + 1 }));
    setNotice(`已加入：${item.name}`);
  }

  function changeQty(id: string, next: number) {
    setCart((current) => {
      const copy = { ...current };
      if (next <= 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  }

  return (
    <div className={count > 0 ? "pb-36 md:pb-0" : "pb-24"}>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-moss font-serif text-lg text-foam">
              事
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg leading-none text-ink">
                事頭婆茶座
              </span>
              <span className="mt-1 block truncate text-xs text-muted">大水坑村 · 朝早六點半</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-ink md:flex">
            <a href="#menu" className="hover:text-caramel-deep">
              招牌美食
            </a>
            <a href="#catering" className="hover:text-caramel-deep">
              到會服務
            </a>
            <a href="#visit" className="hover:text-caramel-deep">
              店舖位置與營業時間
            </a>
          </nav>
          <a
            href={waHref(INQUIRY_TEXT)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-wa px-4 text-sm font-medium text-foam hover:bg-moss-deep"
          >
            <WhatsAppMark />
            <span className="hidden sm:inline">WhatsApp 落單 / 查詢</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
        <nav className="flex gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm md:hidden">
          <a href="#menu" className="shrink-0 text-ink">
            招牌美食
          </a>
          <a href="#catering" className="shrink-0 text-ink">
            到會服務
          </a>
          <a href="#visit" className="shrink-0 text-ink">
            店舖位置與營業時間
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-caramel-soft px-3 py-1 text-xs font-medium text-caramel-deep">
              <span
                className={
                  status?.open
                    ? "size-2 rounded-full bg-wa"
                    : "size-2 rounded-full bg-seal"
                }
              />
              {status ? status.label : "星期一、三至日 06:30 – 17:00"}
              <span className="text-muted">· 星期二休息</span>
            </p>
            <h1 className="font-serif text-4xl text-ink md:text-5xl">
              大水坑村的人情味茶座，由朝早六點半開始溫暖你的一天
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
              新鮮出爐嘅港式早餐、香濃咖啡同茶飲。村口地下舖，單車同駕車都好泊。一個人坐、一家人坐，都有位。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex h-12 items-center justify-center rounded-full bg-moss px-6 text-sm font-medium text-foam hover:bg-moss-deep"
              >
                瀏覽餐牌
              </a>
              <a
                href={orderHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-moss px-6 text-sm font-medium text-moss hover:bg-moss-soft"
              >
                <WhatsAppMark className="text-wa" />
                一鍵 WhatsApp 預訂外賣
              </a>
            </div>
          </div>
          <figure className="relative">
            <img
              src="/photos/hero.jpg"
              alt="事頭婆茶座早上市內，木桌同一杯奶茶"
              className="aspect-4/3 w-full rounded-card object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper/95 px-4 py-2 text-sm text-ink">
              大水坑村 115 號地下
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<Sunrise className="size-5" aria-hidden />}
              title="早晨 6:30 準時開檔"
              text="星期一、三至日。村口第一口熱飲，唔使行去商場。"
            />
            <Feature
              icon={<Coffee className="size-5" aria-hidden />}
              title="香濃咖啡與港式茶飲"
              text="奶茶、鴛鴦、手沖。坐低飲，或者打包上山都得。"
            />
            <Feature
              icon={<Bike className="size-5" aria-hidden />}
              title="街坊及單車友友善"
              text="附近好泊。踩完單車、揸車經過，落嚟飲杯先。"
            />
            <Feature
              icon={<UtensilsCrossed className="size-5" aria-hidden />}
              title="公司 / 派對到會"
              text="小型聚會、辦公室午餐。WhatsApp 講人數同時間就得。"
            />
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-caramel-deep">參考餐牌</p>
              <h2 className="mt-1 font-serif text-3xl text-ink md:text-4xl">精選餐牌</h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              以下菜式同港幣價錢為網站示範，方便你預先估算。實際款式以店內餐牌為準。
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.id}>
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    className="mb-5 aspect-video w-full rounded-card object-cover"
                  />
                  <h3 className="font-serif text-2xl text-ink">{category.title}</h3>
                  <p className="mt-1 text-sm text-muted">{category.blurb}</p>
                  <ul className="mt-2">
                    {menu
                      .filter((item) => item.category === category.id)
                      .map((item) => {
                        const qty = cart[item.id] ?? 0;
                        return (
                          <li key={item.id} className="border-b border-line py-5">
                            <div className="flex items-baseline gap-3">
                              <h4 className="font-serif text-lg text-ink">{item.name}</h4>
                              <span className="mb-1 hidden h-px flex-1 border-b border-dotted border-line sm:block" />
                              <span className="ml-auto shrink-0 font-medium text-caramel-deep tabular-nums sm:ml-0">
                                HK${item.price}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-muted">{item.note}</p>
                            <div className="mt-3 flex flex-wrap items-center gap-3">
                              <button
                                type="button"
                                onClick={() => add(item)}
                                className="inline-flex h-11 items-center gap-1 rounded-full border border-moss bg-foam px-4 text-sm font-medium text-moss hover:bg-moss-soft"
                              >
                                <Plus className="size-4" aria-hidden />
                                加入預訂清單
                              </button>
                              {qty > 0 ? (
                                <span className="text-sm text-moss">已加入 {qty} 份</span>
                              ) : null}
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>

            <OrderSlip
              lines={lines}
              total={total}
              count={count}
              orderHref={count > 0 ? orderHref : null}
              onChange={changeQty}
            />
          </div>
        </section>

        <section id="catering" className="bg-moss text-foam">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-16">
            <img
              src="/photos/catering.jpg"
              alt="到會拼盤同奶茶，適合小型聚會"
              className="aspect-video w-full rounded-card object-cover"
            />
            <div>
              <p className="text-sm text-caramel-soft">到會 Catering</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">公司活動、細派對，交俾我哋</h2>
              <p className="mt-4 text-foam/85">
                適合辦公室午餐、屋企細聚、單車隊落山之後嘅一餐。人數、時間、想食早餐定常餐，WhatsApp 講一聲，我哋幫手計份量。
              </p>
              <a
                href={waHref(CATERING_TEXT)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-foam px-6 text-sm font-medium text-moss hover:bg-caramel-soft"
              >
                <WhatsAppMark />
                快速查詢到會
              </a>
            </div>
          </div>
        </section>

        <section id="visit" className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-caramel-deep">點樣搵我哋</p>
              <h2 className="mt-1 font-serif text-3xl text-ink md:text-4xl">位置與營業時間</h2>

              <div className="mt-6 rounded-card border-2 border-double border-seal bg-foam px-5 py-4 text-seal">
                <p className="font-serif text-2xl">逢星期二休息</p>
                <p className="mt-1 text-sm">
                  星期一、三至日　06:30 – 17:00
                  {status ? `　·　${status.label}` : null}
                </p>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-moss" aria-hidden />
                  <div>
                    <dt className="font-medium text-ink">地址</dt>
                    <dd className="text-muted">{ADDRESS}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-moss" aria-hidden />
                  <div>
                    <dt className="font-medium text-ink">電話 / WhatsApp</dt>
                    <dd>
                      <a href="tel:+85257700978" className="text-moss underline-offset-2 hover:underline">
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 rounded-card bg-paper p-5">
                <h3 className="font-serif text-xl text-ink">交通貼士</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>鄰近大水坑村，115 號地下，行入村就見到。</li>
                  <li>駕車：附近泊車方便，落單前後都唔使兜圈。</li>
                  <li>單車：舖前可以鎖車，踩完先飲杯凍嘢。</li>
                  <li>街坊步行幾步就到，一個人食都唔使客氣。</li>
                </ul>
              </div>

              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-moss px-6 text-sm font-medium text-foam hover:bg-moss-deep"
              >
                <MapPin className="size-4" aria-hidden />
                打開 Google Maps 導航
              </a>
            </div>
            <img
              src="/photos/exterior.jpg"
              alt="大水坑村茶座外貌，門前可停單車"
              className="aspect-4/3 w-full rounded-card object-cover"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p className="font-serif text-base text-ink">事頭婆茶座</p>
        <p className="mt-1">{ADDRESS}</p>
        <p className="mt-1">星期一、三至日 06:30 – 17:00 · 逢星期二休息 · {PHONE_DISPLAY}</p>
        <p className="mt-3">餐牌價錢僅供估算，實際款式以店內餐牌為準。</p>
      </footer>

      <a
        href={count > 0 ? orderHref : waHref(INQUIRY_TEXT)}
        target="_blank"
        rel="noreferrer"
        className={`fixed right-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-wa px-5 text-sm font-medium text-foam shadow-lg hover:bg-moss-deep ${
          count > 0 ? "bottom-24 md:bottom-5" : "bottom-5"
        }`}
      >
        <WhatsAppMark />
        WhatsApp
      </a>

      {count > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-moss-deep bg-moss-deep px-4 py-3 text-foam md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-foam/75">預訂清單</p>
              <p className="font-medium tabular-nums">
                {count} 項 · HK${total}
              </p>
            </div>
            <a
              href={orderHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-foam px-4 text-sm font-medium text-moss"
            >
              發送 WhatsApp 預訂
            </a>
          </div>
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
      {notice ? (
        <div className="fixed bottom-24 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm text-foam md:bottom-6">
          {notice}
        </div>
      ) : null}
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-card border border-line bg-paper p-5">
      <div className="grid size-10 place-items-center rounded-full bg-moss-soft text-moss">{icon}</div>
      <h2 className="mt-4 font-serif text-lg text-ink">{title}</h2>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </article>
  );
}

function OrderSlip({
  lines,
  total,
  count,
  orderHref,
  onChange,
}: {
  lines: { item: MenuItem; qty: number; lineTotal: number }[];
  total: number;
  count: number;
  orderHref: string | null;
  onChange: (id: string, next: number) => void;
}) {
  return (
    <aside className="rounded-card border border-line bg-foam p-5 lg:sticky lg:top-28">
      <p className="text-xs tracking-wide text-muted">外賣估算</p>
      <h3 className="mt-1 font-serif text-2xl text-ink">預訂清單</h3>
      {lines.length === 0 ? (
        <p className="mt-4 text-sm text-muted">未有菜式。撳「加入預訂清單」，下面會自動計總數。</p>
      ) : (
        <ul className="mt-4 divide-y divide-line">
          {lines.map((line) => (
            <li key={line.item.id} className="flex items-center gap-3 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{line.item.name}</p>
                <p className="text-sm text-caramel-deep tabular-nums">HK${line.lineTotal}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label={`減少 ${line.item.name}`}
                  onClick={() => onChange(line.item.id, line.qty - 1)}
                  className="grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-cream"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-6 text-center text-sm tabular-nums">{line.qty}</span>
                <button
                  type="button"
                  aria-label={`增加 ${line.item.name}`}
                  onClick={() => onChange(line.item.id, line.qty + 1)}
                  className="grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-cream"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
        <span className="text-sm text-muted">總金額{count > 0 ? ` · ${count} 項` : ""}</span>
        <span className="font-serif text-3xl text-ink tabular-nums">HK${total}</span>
      </div>
      {orderHref ? (
        <a
          href={orderHref}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-wa text-sm font-medium text-foam hover:bg-moss-deep"
        >
          <WhatsAppMark />
          發送 WhatsApp 預訂
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-line text-sm font-medium text-muted"
        >
          發送 WhatsApp 預訂
        </button>
      )}
      <p className="mt-3 text-xs text-muted">實際款式以店內餐牌為準。發送後會開 WhatsApp，清單已經整理好。</p>
    </aside>
  );
}

function WhatsAppMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-4 fill-current ${className}`} aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.56.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
    </svg>
  );
}
