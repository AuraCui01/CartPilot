// CartPilot · 智能买手 · 静态 Demo
// HTML/CSS/JS 单页，无需构建。

// === 商品池：覆盖配饰 / 护肤 / 通勤 / 家居 / 数码 五类，价位从 ¥68 到 ¥1280 ===
const ITEM_POOL = {
  '配饰主推': [
    { name: 'Old Lane 复古斜纹领带', brand: 'Old Lane · 平价复古', price: 96, accent: '#ffb1bf',
      reason: '低预算下保留中古语义，是性价比方向的代表选项。', tags: ['中古','平价','法式'] },
    { name: 'Rue Marché 细纹中古领带', brand: 'Rue Marché · 真丝混纺', price: 128, accent: '#ff7a8a',
      reason: '友好价位下仍保持法式中古纹样，预算紧时的稳妥主推。', tags: ['中古','稳预算','法式'] },
    { name: 'Maison Aurore 复古丝巾', brand: 'Maison Aurore · 柔雾配色', price: 148, accent: '#ff8298',
      reason: '颜值优先时的视觉锚点，配色与你停留最久的笔记一致。', tags: ['法式','颜色协调','轻造型'] },
    { name: 'Maison Aurore 中古丝质领带', brand: 'Maison Aurore · 复古真丝', price: 168, accent: '#ff5d6c',
      reason: '对应你最近的"中古领带"搜索与法式穿搭长停留，本周购物车的风格锚点。', tags: ['法式','丝质','品牌质感'] },
    { name: 'Valen House 桑蚕丝丝巾', brand: 'Valen House · 高定线', price: 218, accent: '#e74c5c',
      reason: '更高品质的视觉与品牌兼顾，适合品牌优先模式下的预算抬升。', tags: ['桑蚕丝','品牌','高质感'] },
    { name: 'Valen House 手卷边领带', brand: 'Valen House · 手工卷边', price: 268, accent: '#c93b48',
      reason: '更贵但手感和工艺更强，适合品牌优先并放宽预算时的升级位。', tags: ['工艺','品牌','升级'] },
    { name: 'Bellis Atelier 限量丝巾', brand: 'Bellis Atelier · 季度限量', price: 388, accent: '#a83246',
      reason: '高预算下的造型重头戏，能成为整车的视觉中心。', tags: ['限量','造型中心','高预算'] },
    { name: 'Aurore Couture 套装领结', brand: 'Aurore Couture', price: 458, accent: '#8d2638',
      reason: '复古套装感的小件搭配位，适合高预算+品牌优先模式。', tags: ['套装感','品牌','高预算'] }
  ],
  '护肤补货': [
    { name: 'Mild Republic 舒缓精华 10ml', brand: 'Mild Republic', price: 68, accent: '#ffc7bb',
      reason: '极限低预算时的修护位补足。', tags: ['敏感肌','极低预算','修护'] },
    { name: 'Soft Formula 修护旅行装', brand: 'Soft Formula · 旅行组', price: 88, accent: '#ffc6bd',
      reason: '试错成本低的修护选择，适合预算紧的周补货。', tags: ['敏感肌','性价比','旅行装'] },
    { name: 'Barrier Lab 舒缓安瓶', brand: 'Barrier Lab · 清透瓶身', price: 118, accent: '#ffab8e',
      reason: '与整车配色一致的轻盈修护单品。', tags: ['敏感肌','轻盈视觉','协调'] },
    { name: 'Calm Theory B5 修护精华小样组', brand: 'Calm Theory · 敏感肌修护', price: 122, accent: '#ff9b85',
      reason: '回应"什么牌子的护肤品好用"的近期搜索，小样组降低试错成本。', tags: ['敏感肌','修护','低试错'] },
    { name: 'Derme Studio 神经酰胺精华', brand: 'Derme Studio · 修护精华', price: 168, accent: '#ff9e8b',
      reason: '在中预算下提升修护单品的成分完整度。', tags: ['神经酰胺','修护','中预算'] },
    { name: 'Edris Clinic 舒缓精华', brand: 'Edris Clinic · 临床线', price: 246, accent: '#e98778',
      reason: '更偏品牌背书的修护精华，适合预算放宽时的护肤升级位。', tags: ['品牌','成分','升级'] },
    { name: 'Lumi Atelier 抗老精华礼盒', brand: 'Lumi Atelier · 抗老', price: 358, accent: '#c97a6a',
      reason: '高预算下把护肤位从基础修护扩展到抗老体系。', tags: ['抗老','礼盒','高预算'] },
    { name: 'Edris Clinic 抗老套组', brand: 'Edris Clinic · 三件套', price: 528, accent: '#a36459',
      reason: '高预算+品牌优先模式下的护肤主力位。', tags: ['套组','抗老','高预算'] }
  ],
  '通勤点缀': [
    { name: 'Daily Loop 帆布挂绳', brand: 'Daily Loop', price: 68, accent: '#ffe0b3',
      reason: '极限低预算下保留通勤搭配位。', tags: ['通勤','极低预算','搭配'] },
    { name: 'Office Loop 极简杯套', brand: 'Office Loop · 桌面小物', price: 78, accent: '#ffd29a',
      reason: '通勤外扩到桌面与日常小物。', tags: ['通勤','外扩','桌面'] },
    { name: 'Office Loop 皮质钥匙扣', brand: 'Office Loop · 通勤小件', price: 96, accent: '#ffd5a3',
      reason: '预算模式下保留通勤搭配感的轻量配件。', tags: ['通勤','低预算','搭配'] },
    { name: 'Merit Lane 极简卡夹', brand: 'Merit Lane', price: 146, accent: '#ffb866',
      reason: '风格更极简的通勤搭配。', tags: ['通勤','极简','搭配'] },
    { name: 'Ligne Atelier 通勤卡包挂饰', brand: 'Ligne Atelier · 牛皮小件', price: 152, accent: '#ffb866',
      reason: '对应近期"通勤包"搜索，小皮件低成本更新主包风格。', tags: ['通勤','皮件','品牌感'] },
    { name: 'Avenu Studio 金属挂饰', brand: 'Avenu Studio · 柔金点缀', price: 188, accent: '#ffc784',
      reason: '颜值优先下放大配件的视觉存在感。', tags: ['通勤','造型感','视觉点睛'] },
    { name: 'Ligne Atelier 压纹证件夹', brand: 'Ligne Atelier · 压纹皮', price: 268, accent: '#e8a04a',
      reason: '品牌优先且预算抬升时的通勤升级单品。', tags: ['品牌','皮件','升级'] },
    { name: 'Merit Lane 帆布电脑袋', brand: 'Merit Lane · 通勤包', price: 326, accent: '#d49043',
      reason: '从配件升级到通勤主包，覆盖更核心场景。', tags: ['通勤','主包','场景升级'] }
  ],
  '家居补给': [
    { name: 'Bloom Daily 香薰蜡烛 90g', brand: 'Bloom Daily', price: 78, accent: '#f7c8d2',
      reason: '中预算开始引入轻量家居补给，提升使用频率。', tags: ['家居','香氛','日常'] },
    { name: 'Nordica Lab 亚麻抱枕套', brand: 'Nordica Lab', price: 138, accent: '#e7b9c2',
      reason: '提升整车的"家"维度，预算充足时纳入。', tags: ['家居','软装','质感'] },
    { name: 'Edris Maison 香氛喷雾', brand: 'Edris Maison · 法式香氛', price: 198, accent: '#d6a2b0',
      reason: '更高预算时的法式家居香氛位。', tags: ['法式','香氛','高质感'] },
    { name: 'Atelier Vert 法式藤编托盘', brand: 'Atelier Vert · 手工藤编', price: 276, accent: '#bb8d9a',
      reason: '高预算下的家居视觉中心。', tags: ['手工','法式','高预算'] }
  ],
  '数码周边': [
    { name: 'Cobalt Daily 编织充电线', brand: 'Cobalt Daily', price: 88, accent: '#bfd3f0',
      reason: '高预算覆盖完之后，再补足数码日常小物。', tags: ['数码','日常','补足'] },
    { name: 'Pivot Lab 桌面拓展坞', brand: 'Pivot Lab', price: 326, accent: '#9eb6dc',
      reason: '预算充足时引入桌面效率单品。', tags: ['数码','效率','桌面'] },
    { name: 'Vela Audio 通勤耳机', brand: 'Vela Audio', price: 698, accent: '#7990c7',
      reason: '高预算下纳入通勤数码核心单品。', tags: ['数码','通勤','核心'] },
    { name: 'Vela Audio Pro 降噪耳机', brand: 'Vela Audio · Pro 系列', price: 1280, accent: '#5d76b3',
      reason: '极高预算下的整车 hero 单品。', tags: ['数码','降噪','旗舰'] }
  ]
};

// 信号面板预设
const SIGNAL_PROFILES = {
  '品牌优先': {
    footnote: '你在"法式中古领带搭配"和"敏感肌修护精华"两类笔记上的停留更久，CartPilot 因此提高了中古、法式、丝质、敏感肌修护等标签的权重。',
    signals: [
      { label: '中古 / 法式', score: 88, detail: '停留 47分钟' },
      { label: '敏感肌修护', score: 81, detail: '收藏 5 次' },
      { label: '品牌质感', score: 74, detail: '模式加权' },
      { label: '通勤感', score: 63, detail: '搜索触发' }
    ]
  },
  '实用优先': {
    footnote: '你最近频繁搜索通勤场景与日常补货，CartPilot 把实用、耐用、稳预算等信号权重提到最高。',
    signals: [
      { label: '通勤场景', score: 86, detail: '搜索高频' },
      { label: '日常补给', score: 78, detail: '复购意图' },
      { label: '中古 / 法式', score: 62, detail: '风格次级' },
      { label: '敏感肌修护', score: 60, detail: '稳定需求' }
    ]
  },
  '颜值优先': {
    footnote: '颜值优先后，CartPilot 放大了你在视觉上停留最久的法式与柔和配色信号，购物车更偏"好看"和完整搭配感。',
    signals: [
      { label: '法式视觉', score: 91, detail: '停留 53分钟' },
      { label: '颜色协调', score: 82, detail: '视觉偏好' },
      { label: '敏感肌修护', score: 65, detail: '仍保留' },
      { label: '品牌质感', score: 61, detail: '次级约束' }
    ]
  },
  '性价比优先': {
    footnote: '切换为性价比后，CartPilot 优先保留你最近最强的意图，但单品选择向更友好的价位收敛，避免溢价。',
    signals: [
      { label: '性价比', score: 90, detail: '模式加权' },
      { label: '中古 / 法式', score: 76, detail: '仍保留' },
      { label: '敏感肌修护', score: 72, detail: '保留意图' },
      { label: '品牌质感', score: 48, detail: '次级' }
    ]
  }
};

// === 状态 ===
const state = {
  budget: 500, frequency: '每周', mode: '品牌优先',
  categories: new Set(['护肤', '配饰', '通勤包']),
  excludes: new Set(),
  variantIndex: 0,
  theme: 'light',
  items: []
};

const els = {
  budget: document.getElementById('budget'),
  budgetLabel: document.getElementById('budgetLabel'),
  frequency: document.getElementById('frequency'),
  modeSegment: document.getElementById('modeSegment'),
  categoryChips: document.getElementById('categoryChips'),
  excludeChips: document.getElementById('excludeChips'),
  budgetTotal: document.getElementById('budgetTotal'),
  budgetProgress: document.getElementById('budgetProgress'),
  budgetNote: document.getElementById('budgetNote'),
  metaSearch: document.getElementById('metaSearch'),
  metaStyle: document.getElementById('metaStyle'),
  metaMode: document.getElementById('metaMode'),
  signalPanel: document.getElementById('signalPanel'),
  sidebarSignals: document.getElementById('sidebarSignals'),
  signalFootnote: document.getElementById('signalFootnote'),
  cartStack: document.getElementById('cartStack'),
  footerSummary: document.getElementById('footerSummary'),
  footerHint: document.getElementById('footerHint'),
  toast: document.getElementById('toast'),
  approveBtn: document.getElementById('approveBtn'),
  refreshCart: document.getElementById('refreshCart'),
  miniRefresh: document.getElementById('miniRefresh'),
  successView: document.getElementById('successView'),
  mainView: document.getElementById('mainView'),
  successItems: document.getElementById('successItems'),
  successBudget: document.getElementById('successBudget'),
  successSummary: document.getElementById('successSummary'),
  backToCart: document.getElementById('backToCart'),
  themeToggle: document.getElementById('themeToggle'),
  menuToggle: document.getElementById('menuToggle'),
  sidebar: document.getElementById('sidebar'),
  footerBar: document.getElementById('footerBar')
};

const HEART_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.7-4.35-9.33-8.06C.86 10.2 1.5 6.5 4.4 5.2c2.27-1.02 4.7.05 5.6 1.4.9-1.35 3.33-2.42 5.6-1.4 2.9 1.3 3.54 5 1.73 7.74C18.7 16.65 12 21 12 21z"/></svg>';

function deepClone(o) { return JSON.parse(JSON.stringify(o)); }
function currentTotal() { return state.items.reduce((s, i) => s + i.price, 0); }
function categoryLabel(name) {
  if (name.includes('领带') || name.includes('丝巾') || name.includes('领结')) return '中古配饰';
  if (name.includes('精华') || name.includes('安瓶') || name.includes('修护') || name.includes('套组') || name.includes('礼盒')) return '敏感肌护肤';
  if (name.includes('卡夹') || name.includes('挂饰') || name.includes('钥匙') || name.includes('证件') || name.includes('电脑袋') || name.includes('挂绳') || name.includes('杯套')) return '通勤配件';
  if (name.includes('蜡烛') || name.includes('抱枕') || name.includes('香氛') || name.includes('托盘')) return '家居补给';
  if (name.includes('充电') || name.includes('耳机') || name.includes('拓展坞')) return '数码周边';
  return '生活补给';
}

// === 根据预算 + 模式，从池子里组装一份购物车 ===
function buildCartByBudget(budget, mode, variantIndex) {
  // 按模式给每个 slot 一个权重函数 (评分越高越优先)
  const scorer = {
    '品牌优先': it => it.tags.some(t=>t.includes('品牌'))?2:0,
    '实用优先': it => it.tags.some(t=>['日常','通勤','稳预算','补足','复购'].some(k=>t.includes(k)))?2:0,
    '颜值优先': it => it.tags.some(t=>['法式','颜色','造型','视觉','颜值'].some(k=>t.includes(k)))?2:0,
    '性价比优先': it => -it.price/100
  }[mode] || (()=>0);

  // 决定 slot 顺序与最大数量
  let slotOrder;
  if (budget <= 350) slotOrder = ['配饰主推','护肤补货','通勤点缀'];
  else if (budget <= 700) slotOrder = ['配饰主推','护肤补货','通勤点缀'];
  else if (budget <= 1000) slotOrder = ['配饰主推','护肤补货','通勤点缀','家居补给'];
  else slotOrder = ['配饰主推','护肤补货','通勤点缀','家居补给','数码周边'];

  // 每个 slot 的"目标价位" = 预算按 slot 平均分配 (随 variantIndex 偏移)
  const baseSlots = slotOrder.length;
  const out = [];
  let remaining = budget;
  const offsetSeed = (variantIndex * 37) % 100 / 100; // 0..1

  slotOrder.forEach((slot, idx) => {
    const slotsLeft = baseSlots - idx;
    // 目标价位：剩余预算 / 剩余 slot 数，并按 variant 上下浮动 ±25%
    const target = remaining / slotsLeft * (0.85 + offsetSeed * 0.3);

    const pool = ITEM_POOL[slot] || [];
    // 排序：综合 (目标价位接近) + 模式评分
    const ranked = pool.map(it => {
      const proximity = -Math.abs(it.price - target) / Math.max(target,1); // 越接近越大
      const score = proximity + scorer(it) * 0.4 + ((variantIndex + idx) % 3 === 0 ? 0.15 : 0);
      return { it, score };
    }).sort((a,b)=>b.score - a.score);

    // 在 variantIndex 偏移下，从 top 3 中挑一个
    const pickIndex = (variantIndex + idx) % Math.min(3, ranked.length);
    const picked = ranked[pickIndex].it;

    // 构造该 slot 的"更多选择"：从同 slot 池里再挑 6 个，按方向分类
    const alts = buildAlternativesForSlot(slot, picked, pool);

    out.push({
      slot,
      category: categoryLabel(picked.name),
      accent: picked.accent,
      name: picked.name,
      brand: picked.brand,
      price: picked.price,
      reason: picked.reason,
      tags: picked.tags,
      alternatives: alts
    });
    remaining -= picked.price;
  });

  // 如果总价远低于预算，尝试把最后一件升级到更贵的同 slot 商品
  let total = out.reduce((s,i)=>s+i.price,0);
  let tries = 0;
  while (total < budget * 0.92 && tries < 5) {
    // 找一件可升级的：在它所属 slot 中找一个价格高于它但仍不超总预算的
    let upgraded = false;
    for (let i = out.length - 1; i >= 0; i--) {
      const cur = out[i];
      const pool = ITEM_POOL[cur.slot];
      const headroom = budget - (total - cur.price);
      // 找一个价格更高但小于 headroom 的
      const candidates = pool.filter(p => p.price > cur.price && p.price <= headroom && p.name !== cur.name);
      if (candidates.length) {
        const next = candidates.sort((a,b)=>b.price - a.price)[0];
        out[i] = {
          ...cur,
          name: next.name, brand: next.brand, price: next.price, accent: next.accent,
          reason: next.reason, tags: next.tags,
          category: categoryLabel(next.name),
          alternatives: buildAlternativesForSlot(cur.slot, next, pool)
        };
        total = out.reduce((s,i)=>s+i.price,0);
        upgraded = true;
        break;
      }
    }
    if (!upgraded) break;
    tries++;
  }

  // 反过来：如果总价超过预算，降级最贵的那一件
  tries = 0;
  while (total > budget && tries < 5) {
    let downgraded = false;
    // 找最贵的那件
    let idxMax = 0;
    for (let i = 1; i < out.length; i++) if (out[i].price > out[idxMax].price) idxMax = i;
    const cur = out[idxMax];
    const pool = ITEM_POOL[cur.slot];
    const cheaper = pool.filter(p => p.price < cur.price && p.name !== cur.name)
                         .sort((a,b)=>b.price - a.price)[0];
    if (cheaper) {
      out[idxMax] = {
        ...cur, name: cheaper.name, brand: cheaper.brand, price: cheaper.price,
        accent: cheaper.accent, reason: cheaper.reason, tags: cheaper.tags,
        category: categoryLabel(cheaper.name),
        alternatives: buildAlternativesForSlot(cur.slot, cheaper, pool)
      };
      total = out.reduce((s,i)=>s+i.price,0);
      downgraded = true;
    }
    if (!downgraded) break;
    tries++;
  }

  return out;
}

function buildAlternativesForSlot(slot, picked, pool) {
  const others = pool.filter(p => p.name !== picked.name);
  const sameRange = others.filter(p => Math.abs(p.price - picked.price) <= picked.price * 0.18)
                          .slice(0, 2);
  const cheaper = others.filter(p => p.price < picked.price * 0.85)
                        .sort((a,b)=>b.price - a.price)[0];
  const upgrade = others.filter(p => p.price > picked.price * 1.15)
                        .sort((a,b)=>a.price - b.price)[0];
  const expand = others.filter(p => !sameRange.includes(p) && p !== cheaper && p !== upgrade)
                       .slice(0,1)[0];
  const swap = others.filter(p => !sameRange.includes(p) && p !== cheaper && p !== upgrade && p !== expand)
                     .slice(0,1)[0];

  const types = ['同风格 · 同价位','同风格 · 同价位','同风格 · 更便宜','同风格 · 升级款','风格外扩','形态替代'];
  const picks = [...sameRange, cheaper, upgrade, expand, swap].filter(Boolean);

  // 填满 6 个
  let fillers = others.filter(p => !picks.includes(p));
  while (picks.length < 6 && fillers.length) {
    picks.push(fillers.shift());
  }

  return picks.slice(0, 6).map((p, i) => ({
    type: types[i] || '替代',
    name: p.name,
    brand: p.brand,
    price: p.price,
    accent: p.accent,
    why: p.reason
  }));
}

function syncBudgetLabel() {
  const cycle = state.frequency === '每天' ? '天' : state.frequency === '每周' ? '周' : '月';
  if (els.budgetLabel) els.budgetLabel.textContent = `¥${state.budget} / ${cycle}`;
}

function showToast(title, detail) {
  if (!els.toast) return;
  els.toast.innerHTML = `<strong>${title}</strong><small>${detail}</small>`;
  els.toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function renderSignals() {
  const profile = SIGNAL_PROFILES[state.mode] || SIGNAL_PROFILES['品牌优先'];
  const html = profile.signals.map(s => `
    <div class="signal-item">
      <div class="signal-top"><span>${s.label}</span><span>${s.score} · ${s.detail}</span></div>
      <div class="signal-bar"><span style="width:${s.score}%"></span></div>
    </div>`).join('');
  if (els.signalPanel) els.signalPanel.innerHTML = html;
  if (els.sidebarSignals) els.sidebarSignals.innerHTML = html;
  if (els.signalFootnote) els.signalFootnote.textContent = profile.footnote;
  if (els.metaSearch) els.metaSearch.textContent = state.items[0]?.name.includes('领带') ? '中古领带' : state.items[0]?.name.includes('丝巾') ? '法式丝巾' : '法式配饰';
  if (els.metaStyle) els.metaStyle.textContent = profile.signals[0].label;
  if (els.metaMode) els.metaMode.textContent = state.mode;
}

function buildSwapCard(option, itemIndex, altIndex) {
  const hasImg = !!option.image;
  const styleVars = `--swap-accent:${option.accent}` + (hasImg ? `;--img:url('${option.image}')` : '');
  return `
    <article class="swap-card" style="${styleVars}">
      <div class="swap-thumb ${hasImg ? 'has-image' : ''}">
        <span class="swap-tag">${option.type}</span>
      </div>
      <strong>${option.name}</strong>
      <small>${option.brand}</small>
      <p>${option.why}</p>
      <div class="swap-card-footer">
        <span class="swap-price mono">${option.price}</span>
        <button class="small-btn primary" data-action="swap" data-item-index="${itemIndex}" data-alt-index="${altIndex}">换成这件</button>
      </div>
    </article>
  `;
}

function renderCart() {
  els.cartStack.innerHTML = state.items.map((item, itemIndex) => `
    <article class="product-card" data-product-index="${itemIndex}">
      <div class="product-main">
        <div class="thumb ${item.image ? 'has-image' : ''}" style="--accent:${item.accent}${item.image ? `;--img:url('${item.image}')` : ''}">
          <span class="thumb-badge">${item.category}</span>
          <span class="thumb-heart" aria-hidden="true">${HEART_SVG}</span>
          <div class="thumb-label">${item.slot}</div>
        </div>
        <div class="product-copy">
          <h3>${item.name}</h3>
          <div class="product-sub">${item.brand}</div>
          <div class="reason">${item.reason}</div>
          <div class="mini-tags">${item.tags.map(t => `<span>#${t}</span>`).join('')}</div>
        </div>
        <div class="product-side">
          <div>
            <div class="price mono">${item.price}</div>
            <div class="slot-note">${item.slot}</div>
          </div>
          <div class="product-actions">
            <button class="small-btn" data-action="remove" data-item-index="${itemIndex}">不想要</button>
          </div>
        </div>
      </div>
      <div class="swap-row">
        <div class="swap-row-head">
          <div>
            <h4>更多选择 <span>· 6 件</span></h4>
            <p>同款替代、性价比、升级款、风格外扩、形态替代——左右滑动选你更喜欢的那件。</p>
          </div>
        </div>
        <div class="swap-scroller">
          ${item.alternatives.map((o, ai) => buildSwapCard(o, itemIndex, ai)).join('')}
        </div>
      </div>
    </article>
  `).join('');
  bindCardActions();
  updateSummary();
}

function updateSummary() {
  const total = currentTotal();
  const pct = state.budget ? Math.min(100, Math.round(total / state.budget * 100)) : 0;
  if (els.budgetTotal) els.budgetTotal.textContent = `¥${total} / ¥${state.budget}`;
  if (els.budgetProgress) els.budgetProgress.style.width = `${pct}%`;
  if (els.budgetNote) els.budgetNote.textContent = `${state.frequency}一次 · ${state.mode} · 可直接确认`;
  if (els.footerSummary) els.footerSummary.textContent = `当前 ${state.items.length} 件商品，已占预算 ${pct}%`;
  if (els.footerHint) {
    els.footerHint.textContent = total > state.budget
      ? '当前已超预算，建议删除、换成更便宜的备选，或点"刷新购物车"整体重算。'
      : '替换或删除单件只更新预算条；切换模式或预算，请点"刷新购物车"整体重算。';
  }
  if (els.approveBtn) {
    els.approveBtn.disabled = state.items.length === 0;
    els.approveBtn.style.opacity = state.items.length === 0 ? 0.5 : 1;
  }
}

function applyVariant(notice) {
  state.items = buildCartByBudget(state.budget, state.mode, state.variantIndex);
  renderSignals();
  renderCart();
  if (notice) showToast('CartPilot 已刷新购物车', notice);
}

function bindCardActions() {
  document.querySelectorAll('[data-action="remove"]').forEach(btn => {
    btn.onclick = () => {
      const i = Number(btn.dataset.itemIndex);
      const r = state.items.splice(i, 1)[0];
      renderCart();
      showToast('已移除', `${r.name} 已从购物车删除。`);
    };
  });
  document.querySelectorAll('[data-action="swap"]').forEach(btn => {
    btn.onclick = () => {
      const ii = Number(btn.dataset.itemIndex);
      const ai = Number(btn.dataset.altIndex);
      const cur = state.items[ii];
      const next = deepClone(cur.alternatives[ai]);
      state.items[ii] = {
        ...cur,
        name: next.name,
        brand: `${next.brand} · 已替换`,
        price: next.price,
        reason: `已替换为「${next.type}」方案：${next.why}`,
        accent: next.accent,
        tags: [next.type, '已替换', '你的选择'],
        alternatives: cur.alternatives
          .filter((_, idx) => idx !== ai)
          .concat([{ type: '原始主推', name: cur.name, brand: cur.brand, price: cur.price, why: '想回到最初的主推就点这里。', accent: cur.accent }])
      };
      renderCart();
      showToast('已替换', `CartPilot 用「${next.name}」替代了当前商品。`);
    };
  });
}

function approveOrder() {
  const total = currentTotal();
  if (els.successItems) els.successItems.textContent = `${state.items.length} 件`;
  if (els.successBudget) els.successBudget.textContent = `¥${total}`;
  if (els.successSummary) els.successSummary.textContent = '购物车已模拟加入小红书商城。本次你保留了最终选择权，同时把"选品、比价、凑单、替代决策"压缩成了一次从上往下的确认流程。';
  if (els.mainView) els.mainView.style.display = 'none';
  if (els.successView) els.successView.classList.add('active');
  if (els.footerBar) els.footerBar.style.display = 'none';
  showToast('已确认', '购物车已模拟加入小红书商城。');
}

function backToCart() {
  if (els.mainView) els.mainView.style.display = '';
  if (els.successView) els.successView.classList.remove('active');
  if (els.footerBar) els.footerBar.style.display = '';
}

function attachEvents() {
  if (els.budget) els.budget.addEventListener('input', e => { state.budget = +e.target.value; syncBudgetLabel(); updateSummary(); });
  if (els.frequency) els.frequency.addEventListener('change', e => { state.frequency = e.target.value; syncBudgetLabel(); updateSummary(); });
  if (els.modeSegment) els.modeSegment.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      els.modeSegment.querySelectorAll('button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.mode = b.dataset.mode;
      state.variantIndex = 0;
      applyVariant(`你切换为「${state.mode}」，CartPilot 已按新的偏好。`);
    });
  });
  if (els.categoryChips) els.categoryChips.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    b.classList.toggle('active');
    const c = b.dataset.cat;
    b.classList.contains('active') ? state.categories.add(c) : state.categories.delete(c);
    showToast('品类偏好已更新', `当前偏好：${Array.from(state.categories).join(' / ') || '暂未选择'}`);
  }));
  if (els.excludeChips) els.excludeChips.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    b.classList.toggle('active');
    const v = b.dataset.exclude;
    b.classList.contains('active') ? state.excludes.add(v) : state.excludes.delete(v);
    showToast('屏蔽项已更新', state.excludes.size ? `已屏蔽：${Array.from(state.excludes).join('、')}` : '当前没有屏蔽项。');
  }));
  [els.refreshCart, els.miniRefresh].forEach(btn => btn && btn.addEventListener('click', () => {
    state.variantIndex += 1;
    applyVariant('CartPilot 根据当前预算、频率与偏好刷新了购物车。');
  }));
  if (els.approveBtn) els.approveBtn.addEventListener('click', approveOrder);
  if (els.backToCart) els.backToCart.addEventListener('click', backToCart);
  if (els.themeToggle) els.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    els.themeToggle.textContent = state.theme === 'light' ? '深色' : '浅色';
  });
  if (els.menuToggle) els.menuToggle.addEventListener('click', () => els.sidebar && els.sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (window.innerWidth <= 920 && els.sidebar && !els.sidebar.contains(e.target) && e.target !== els.menuToggle) {
      els.sidebar.classList.remove('open');
    }
  });
}

function init() { syncBudgetLabel(); applyVariant(); attachEvents(); }
init();

// Phone-embedded preferences hookup
(function(){
  const pFreq = document.getElementById('phoneFrequency');
  const pBudget = document.getElementById('phoneBudget');
  const pBudgetLabel = document.getElementById('phoneBudgetLabel');
  const pMode = document.getElementById('phoneModeSegment');
  if(!pFreq || !pBudget || !pMode) return;

  function syncLabel(){
    const cycle = state.frequency === '每天' ? '天' : state.frequency === '每周' ? '周' : '月';
    pBudgetLabel.textContent = `¥${state.budget} / ${cycle}`;
  }
  pFreq.value = state.frequency;
  pBudget.value = state.budget;
  syncLabel();

  pFreq.addEventListener('change', e => {
    state.frequency = e.target.value;
    syncLabel();
    if (typeof updateSummary === 'function') updateSummary();
  });
  // 预算滑动：实时重新组车（让用户看到购物车随预算变化）
  let budgetTimer = null;
  pBudget.addEventListener('input', e => {
    state.budget = +e.target.value;
    syncLabel();
    clearTimeout(budgetTimer);
    budgetTimer = setTimeout(() => {
      state.variantIndex = 0;
      applyVariant();
    }, 180);
  });
  pMode.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      pMode.querySelectorAll('button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.mode = b.dataset.mode;
      state.variantIndex = 0;
      applyVariant(`已切换为「${state.mode}」，CartPilot 重新为你填满了购物车。`);
    });
  });
})();
