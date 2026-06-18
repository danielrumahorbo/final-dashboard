const DEFAULT_MERCHANTS = [
  { code:'KGB-KOPINARA-001', name:'Kopi Nara Boulevard', category:'Coffee Shop', address:'Jl. Boulevard Raya, Kelapa Gading', promo:'Free upsize untuk min. transaksi Rp50.000', quota:50, qrScans:142, salesVolume30:18800000, freq30:524, lat:-6.1586, lng:106.9087 },
  { code:'KGB-BAKMIJAYA-005', name:'Bakmi Jaya Gading', category:'F&B', address:'Jl. Boulevard Barat Raya, Kelapa Gading', promo:'Diskon 10% maks. Rp20.000 min. Rp100.000', quota:40, qrScans:126, salesVolume30:24200000, freq30:476, lat:-6.1628, lng:106.9044 },
  { code:'KGB-LAUNDRYFRESH-002', name:'Laundry Fresh Kiloan', category:'Laundry', address:'Jl. Gading Kirana Timur, Kelapa Gading', promo:'Free 1 kg laundry min. 5 kg', quota:35, qrScans:104, salesVolume30:12800000, freq30:312, lat:-6.1598, lng:106.9164 },
  { code:'KGB-MIEPEDAS-016', name:'Mie Pedas Boulevard', category:'F&B', address:'Jl. Boulevard Timur, Kelapa Gading', promo:'Free topping min. pembelian Rp60.000', quota:35, qrScans:99, salesVolume30:17400000, freq30:398, lat:-6.1671, lng:106.9147 },
  { code:'KGB-AYAMKREMES-010', name:'Ayam Kremes Sari Rasa', category:'F&B', address:'Jl. Pegangsaan Dua, Kelapa Gading', promo:'Free es teh min. paket berdua', quota:30, qrScans:87, salesVolume30:15300000, freq30:351, lat:-6.1708, lng:106.9155 },
  { code:'KGB-SALONMAYA-004', name:'Maya Beauty Salon', category:'Salon', address:'Ruko Gading Batavia, Kelapa Gading', promo:'Free hair vitamin min. treatment Rp120.000', quota:25, qrScans:76, salesVolume30:9500000, freq30:152, lat:-6.1549, lng:106.9141 },
  { code:'KGB-APOTEKSEHAT-008', name:'Apotek Sehat Gading', category:'Apotek', address:'Jl. Kelapa Hybrida, Kelapa Gading', promo:'Voucher Rp10.000 min. transaksi Rp100.000', quota:30, qrScans:64, salesVolume30:8600000, freq30:226, lat:-6.1518, lng:106.9059 },
  { code:'KGB-KLINIKARUNA-012', name:'Klinik Aruna Medika', category:'Klinik', address:'Jl. Kelapa Nias, Kelapa Gading', promo:'Free konsultasi singkat untuk new CIF', quota:20, qrScans:51, salesVolume30:19600000, freq30:118, lat:-6.1512, lng:106.9117 },
  { code:'KGB-BENGKELSINAR-019', name:'Bengkel Sinar Motor', category:'Bengkel', address:'Jl. Raya Pegangsaan Dua, Kelapa Gading', promo:'Free check ringan min. service Rp150.000', quota:25, qrScans:35, salesVolume30:7200000, freq30:91, lat:-6.1742, lng:106.9198 },
  { code:'KGB-ROTIHARMONI-020', name:'Roti Harmoni Gading', category:'Bakery', address:'Jl. Boulevard Raya Blok QA, Kelapa Gading', promo:'Free pastry min. pembelian Rp75.000', quota:30, qrScans:61, salesVolume30:11000000, freq30:271, lat:-6.1644, lng:106.9108 },
  { code:'KGB-ESKOPITIMUR-021', name:'Es Kopi Timur', category:'Coffee Shop', address:'Jl. Boulevard Timur, Kelapa Gading', promo:'Free topping min. transaksi Rp45.000', quota:25, qrScans:27, salesVolume30:6900000, freq30:143, lat:-6.1689, lng:106.9190 },
  { code:'KGB-MARTGADING-022', name:'Mart Gading Express', category:'Retail', address:'Jl. Kelapa Gading Permai, Kelapa Gading', promo:'Voucher Rp15.000 min. transaksi Rp100.000', quota:30, qrScans:43, salesVolume30:13700000, freq30:389, lat:-6.1716, lng:106.9029 },
  { code:'KGB-JUICESEGAR-023', name:'Juice Segar Boulevard', category:'F&B', address:'Jl. Boulevard Barat Raya, Kelapa Gading', promo:'Free topping buah min. Rp50.000', quota:20, qrScans:18, salesVolume30:4100000, freq30:93, lat:-6.1606, lng:106.9033 }
];

const CLAIM_COUNTS = [
  ['KGB-KOPINARA-001', 54, 47, 21, 18, 16],
  ['KGB-BAKMIJAYA-005', 48, 39, 16, 14, 12],
  ['KGB-LAUNDRYFRESH-002', 41, 34, 15, 13, 11],
  ['KGB-MIEPEDAS-016', 36, 28, 12, 11, 9],
  ['KGB-AYAMKREMES-010', 32, 24, 10, 9, 8],
  ['KGB-SALONMAYA-004', 29, 18, 8, 7, 6],
  ['KGB-APOTEKSEHAT-008', 26, 15, 7, 6, 5],
  ['KGB-KLINIKARUNA-012', 22, 12, 6, 5, 5],
  ['KGB-BENGKELSINAR-019', 18, 7, 4, 3, 3],
  ['KGB-ROTIHARMONI-020', 24, 9, 5, 4, 4],
  ['KGB-ESKOPITIMUR-021', 15, 4, 2, 2, 1],
  ['KGB-MARTGADING-022', 19, 3, 1, 1, 1],
  ['KGB-JUICESEGAR-023', 12, 1, 0, 0, 0]
];

function buildDummyClaims() {
  const firstNames = ['Andi','Budi','Citra','Dewi','Eka','Fajar','Gita','Hendra','Intan','Joko','Karin','Leo','Maya','Nadia','Oscar','Putri','Rafi','Sari','Tono','Vina','Wulan','Yoga','Zahra'];
  const claims = [];
  let no = 1;
  CLAIM_COUNTS.forEach(([code, lead, proof, cif, livin, redeem], idx) => {
    const m = DEFAULT_MERCHANTS.find(x => x.code === code);
    for (let i = 0; i < lead; i++) {
      const hasProof = i < proof;
      const isCif = i < cif;
      const isLivin = i < livin;
      const isRedeem = i < redeem;
      claims.push({
        id: `CLM-${String(no).padStart(4,'0')}`,
        date: `2026-07-${String((i % 14) + 1).padStart(2,'0')}`,
        customerName: `${firstNames[(i + idx) % firstNames.length]} ${String(1000 + no).slice(1)}`,
        phone: `08${String(1200000000 + no * 7193).slice(0,10)}`,
        merchantCode: code,
        merchantName: m?.name || code,
        promo: m?.promo || '-',
        openingProof: hasProof ? 'Ada' : '',
        livinProof: isLivin ? 'Ada' : '',
        cifStatus: isCif ? 'Valid' : (hasProof ? 'Proses Validasi' : 'Belum Lengkap'),
        livinStatus: isLivin ? 'Valid' : (isCif ? 'Belum Transaksi' : 'Belum Valid'),
        promoStatus: isRedeem ? 'Redeem' : (isLivin ? 'Siap Klaim' : 'Belum'),
        notes: isCif ? 'New CIF terkonfirmasi' : (hasProof ? 'Butuh cek CIF/Livin’' : 'Menunggu bukti lengkap')
      });
      no += 1;
    }
  });
  return claims;
}

const state = {
  tab: 'summary',
  merchants: [...DEFAULT_MERCHANTS],
  claims: buildDummyClaims(),
  uploadedMerchantName: 'Dummy merchant existing',
  uploadedClaimName: 'Dummy Google Form claims',
  search: '',
  merchantFilter: 'all',
  claimFilter: 'all',
  map: null,
  layers: [],
  uploadOpen: false
};

const app = document.getElementById('app');

function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return '-';
  return Number(n).toLocaleString('id-ID');
}
function pct(a,b) { return b ? Math.round((a / b) * 100) : 0; }
function money(n) { return `Rp${Number(n || 0).toLocaleString('id-ID')}`; }
function norm(s) { return String(s ?? '').toLowerCase().replace(/\s+/g,' ').trim(); }
function normKey(s) { return String(s ?? '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); }
function boolLike(v) { return ['ada','valid','ya','yes','true','1','berhasil','done','redeem','sudah'].includes(norm(v)); }
function safe(s) { return String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }

function pick(row, candidates) {
  const keys = Object.keys(row || {});
  const normalizedMap = new Map(keys.map(k => [normKey(k), k]));
  for (const c of candidates) {
    const nk = normKey(c);
    if (normalizedMap.has(nk)) return row[normalizedMap.get(nk)];
  }
  for (const k of keys) {
    const nk = normKey(k);
    if (candidates.some(c => nk.includes(normKey(c)))) return row[k];
  }
  return '';
}

function toNumber(v) {
  if (typeof v === 'number') return v;
  const s = String(v ?? '').replace(/[^0-9,.-]/g, '').replace(/\./g, '').replace(',', '.');
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

function parseLatLngFromUrl(url) {
  const s = String(url || '');
  const patterns = [
    /@(-?\d+\.\d+),\s*(-?\d+\.\d+)/,
    /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/,
    /[?&]q=(-?\d+\.\d+),\s*(-?\d+\.\d+)/,
    /ll=(-?\d+\.\d+),\s*(-?\d+\.\d+)/
  ];
  for (const p of patterns) {
    const m = s.match(p);
    if (m) return { lat: Number(m[1]), lng: Number(m[2]) };
  }
  return { lat: null, lng: null };
}

function normalizeMerchantRows(rows) {
  return rows.map((r, i) => {
    const mapsUrl = pick(r, ['google_maps_url','google maps url','maps_url','map_url','url','link','google url','place url']);
    const parsed = parseLatLngFromUrl(mapsUrl);
    const lat = toNumber(pick(r, ['latitude','lat','y','koord_y'])) || parsed.lat;
    const lng = toNumber(pick(r, ['longitude','lng','lon','long','x','koord_x'])) || parsed.lng;
    const name = pick(r, ['merchant','merchant name','nama merchant','store_name','store name','nama toko','title','name']) || `Merchant ${i+1}`;
    return {
      code: String(pick(r, ['code','kode','kode qr','campaign code','qr code','mid','id']) || `UPL-${String(i+1).padStart(3,'0')}`).trim(),
      name: String(name).trim(),
      category: String(pick(r, ['category','kategori','jenis usaha','lob_lm','lob','business category']) || 'Merchant').trim(),
      address: String(pick(r, ['address','alamat','alamat merchant','location']) || '').trim(),
      promo: String(pick(r, ['promo','campaign','reward','benefit','promosi']) || 'Promo merchant sesuai program').trim(),
      quota: toNumber(pick(r, ['quota','kuota','kuota promo'])) || 30,
      qrScans: toNumber(pick(r, ['qr scan','qr_scans','scan','jumlah scan'])) || 0,
      salesVolume30: toNumber(pick(r, ['sales volume','sales_volume','sv_30_days','volume transaksi','sales 30'])) || 0,
      freq30: toNumber(pick(r, ['frequency','freq_30_days','frekuensi','jumlah transaksi','trx 30'])) || 0,
      lat: Number.isFinite(lat) && lat !== 0 ? lat : null,
      lng: Number.isFinite(lng) && lng !== 0 ? lng : null
    };
  }).filter(m => m.name && m.name !== '-');
}

function normalizeClaimRows(rows) {
  return rows.map((r, i) => {
    const merchantCode = String(pick(r, ['merchant code','kode merchant','kode qr','campaign code','qr code','source code','merchant_id']) || '').trim();
    const merchantName = String(pick(r, ['merchant','merchant name','nama merchant','tempat klaim','outlet','source merchant']) || '').trim();
    const opening = pick(r, ['bukti buka rekening','bukti pembukaan rekening','opening proof','rekening proof','bukti rekening','screenshot rekening']);
    const livin = pick(r, ['bukti transaksi livin','bukti livin','livin proof','transaksi livin','screenshot livin']);
    const cifStatusRaw = pick(r, ['status cif','cif status','cif valid','new cif','rekening valid']);
    const livinStatusRaw = pick(r, ['status livin','livin status','transaksi livin valid','livin valid']);
    const promoStatusRaw = pick(r, ['status promo','promo status','promo redeem','redeem status','promo diberikan']);
    const hasOpening = boolLike(opening) || String(opening || '').length > 6;
    const hasLivin = boolLike(livin) || String(livin || '').length > 6 || boolLike(livinStatusRaw);
    const cifValid = boolLike(cifStatusRaw) || /valid|berhasil|sudah/i.test(String(cifStatusRaw || ''));
    const livinValid = boolLike(livinStatusRaw) || hasLivin;
    const redeemed = boolLike(promoStatusRaw) || /redeem|diberikan|sudah/i.test(String(promoStatusRaw || ''));
    return {
      id: String(pick(r, ['id','claim id','nomor','timestamp']) || `UPCLM-${String(i+1).padStart(4,'0')}`).trim(),
      date: String(pick(r, ['tanggal','date','timestamp','created at','waktu']) || '').trim(),
      customerName: String(pick(r, ['nama pelanggan','customer name','nama','name']) || `Pelanggan ${i+1}`).trim(),
      phone: String(pick(r, ['no hp','nomor hp','phone','whatsapp','wa','mobile']) || '').trim(),
      merchantCode,
      merchantName,
      promo: String(pick(r, ['promo','reward','benefit','promo dipilih']) || '').trim(),
      openingProof: hasOpening ? 'Ada' : '',
      livinProof: hasLivin ? 'Ada' : '',
      cifStatus: cifValid ? 'Valid' : (hasOpening ? 'Proses Validasi' : 'Belum Lengkap'),
      livinStatus: livinValid ? 'Valid' : 'Belum Valid',
      promoStatus: redeemed ? 'Redeem' : (livinValid ? 'Siap Klaim' : 'Belum'),
      notes: String(pick(r, ['catatan','notes','remark']) || '').trim()
    };
  });
}

function merchantMatch(claim) {
  const code = norm(claim.merchantCode);
  const mByCode = state.merchants.find(m => norm(m.code) === code || (code && norm(m.code).includes(code)));
  if (mByCode) return mByCode;
  const name = norm(claim.merchantName);
  return state.merchants.find(m => norm(m.name) === name || (name && norm(m.name).includes(name)) || (name && name.includes(norm(m.name)))) || null;
}

function getPerf() {
  const perf = new Map(state.merchants.map(m => [m.code, { ...m, leads:0, proof:0, cif:0, livin:0, redeem:0 }]));
  for (const c of state.claims) {
    const m = merchantMatch(c);
    const key = m?.code || c.merchantCode || c.merchantName || 'UNMATCHED';
    if (!perf.has(key)) perf.set(key, { code:key, name:c.merchantName || 'Unmatched', category:'-', promo:c.promo || '-', qrScans:0, leads:0, proof:0, cif:0, livin:0, redeem:0, lat:null, lng:null, address:'' });
    const p = perf.get(key);
    p.leads += 1;
    if (c.openingProof && c.livinProof) p.proof += 1;
    if (c.cifStatus === 'Valid') p.cif += 1;
    if (c.livinStatus === 'Valid') p.livin += 1;
    if (c.promoStatus === 'Redeem') p.redeem += 1;
  }
  return [...perf.values()].map(p => ({ ...p, status: merchantStatus(p) }));
}

function merchantScore(p) {
  const maxSales = Math.max(1, ...state.merchants.map(m => Number(m.salesVolume30 || 0)));
  const maxFreq = Math.max(1, ...state.merchants.map(m => Number(m.freq30 || 0)));
  const maxQr = Math.max(1, ...state.merchants.map(m => Number(m.qrScans || 0)));
  const maxQuota = Math.max(1, ...state.merchants.map(m => Number(m.quota || 0)));
  const sales = (Number(p.salesVolume30 || 0) / maxSales) * 40;
  const freq = (Number(p.freq30 || 0) / maxFreq) * 25;
  const scan = (Number(p.qrScans || 0) / maxQr) * 25;
  const quota = (Number(p.quota || 0) / maxQuota) * 10;
  return Math.round(sales + freq + scan + quota);
}

function merchantStatus(p) {
  // Merchant Partner scoring hanya memakai data kuantitatif dari file Merchant Existing:
  // SV 30D, Frequency 30D, QR Scan, dan Kuota. Data bukti/form tidak dipakai untuk klasifikasi ini.
  const score = merchantScore(p);
  if (score >= 70) return 'Winner';
  if (score >= 35) return 'Watch';
  return 'Drop';
}

function getKpi() {
  const perf = getPerf();
  const active = perf.filter(p => p.status !== 'Drop').length;
  const leads = state.claims.length;
  const proof = state.claims.filter(c => c.openingProof && c.livinProof).length;
  const cif = state.claims.filter(c => c.cifStatus === 'Valid').length;
  const livin = state.claims.filter(c => c.livinStatus === 'Valid').length;
  const redeem = state.claims.filter(c => c.promoStatus === 'Redeem').length;
  const qrScan = state.merchants.reduce((a,m)=>a + Number(m.qrScans || 0), 0);
  return { active, qrScan, leads, proof, cif, livin, redeem, conversion: pct(cif, leads) };
}

function icon(name) {
  const icons = {
    merchant:'◎', lead:'↗', cif:'✓', livin:'◈', conversion:'%', proof:'▣', scan:'⌁', redeem:'◆', map:'⌖'
  };
  return icons[name] || '•';
}
function badge(status) {
  const cls = status === 'Winner' ? 'green' : status === 'Watch' ? 'orange' : status === 'Drop' ? 'red' : status === 'Valid' ? 'green' : status === 'Redeem' ? 'blue' : status === 'Siap Klaim' ? 'gold' : status === 'Proses Validasi' ? 'orange' : 'gray';
  return `<span class="badge ${cls}">${safe(status)}</span>`;
}

function renderShell() {
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-section">
          <div class="brand-logo">
            <svg class="logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div class="radar-pulse"></div>
          </div>
          <div class="brand-info"><div class="brand-title">RADAR KGB</div><div class="brand-subtitle">Command Center</div></div>
        </div>
        <nav class="nav-menu">
          <button class="nav-item ${state.tab==='summary'?'active':''}" data-tab="summary">${icon('cif')} Executive Summary</button>
          <button class="nav-item ${state.tab==='merchants'?'active':''}" data-tab="merchants">${icon('merchant')} Merchant Partner</button>
          <button class="nav-item ${state.tab==='claims'?'active':''}" data-tab="claims">${icon('proof')} Validasi Bukti</button>
          <button class="nav-item ${state.tab==='mapping'?'active':''}" data-tab="mapping">${icon('map')} Merchant Mapping</button>
        </nav>
        <div class="sidebar-footer">
          <div class="user-profile">
            <div class="user-avatar">AD</div>
            <div class="user-info">
              <span class="user-name">Admin</span>
              <span class="user-role">RADAR KGB Operator</span>
            </div>
          </div>
        </div>
      </aside>
      <main class="workspace">
        <header class="topbar">
          <div>
            <h1>Treatrix</h1>
          </div>
          <div class="top-actions">
            ${state.tab === 'summary' ? `<button class="btn yellow" id="unifiedUploadBtn">Upload Data Program</button>` : ``}
            <button class="btn ghost" id="backToRadarBtn">Mercator</button>
          </div>
          <input id="merchantFile" class="hidden-input" type="file" accept=".csv,.xlsx,.xls,.json" />
          <input id="claimsFile" class="hidden-input" type="file" accept=".csv,.xlsx,.xls,.json" />
        </header>
        <div id="noticeMount"></div>
        <section id="viewMount"></section>
        <div id="modalMount"></div>
      </main>
    </div>
  `;
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => { state.tab = btn.dataset.tab; state.uploadOpen = false; render(); }));
  const unifiedBtn = document.getElementById('unifiedUploadBtn');
  if (unifiedBtn) unifiedBtn.addEventListener('click', () => { state.uploadOpen = true; render(); });
  const backBtn = document.getElementById('backToRadarBtn');
  if (backBtn) backBtn.addEventListener('click', () => { window.location.href = '/'; });
  document.getElementById('merchantFile').addEventListener('change', e => handleFile(e, 'merchant'));
  document.getElementById('claimsFile').addEventListener('change', e => handleFile(e, 'claims'));
}

function renderUploadModal() {
  return `
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-head">
          <div><h2>Upload Data Program</h2><p class="sub">Unggah dua file dalam satu alur: Merchant Existing dan Bukti / Google Form.</p></div>
          <button class="close" id="closeUploadModal">×</button>
        </div>
        <div class="modal-body">
          <div class="drop-grid">
            <label class="drop-zone">
              <h3>Slot File A — Merchant Existing</h3>
              <p>Data ini menjadi sumber utama scoring Merchant Partner: SV 30D, Frequency 30D, QR Scan, dan Kuota.</p>
              <input id="modalMerchantFile" type="file" accept=".csv,.xlsx,.xls,.json" />
              <small>${safe(state.uploadedMerchantName)}</small>
            </label>
            <label class="drop-zone">
              <h3>Slot File B — Bukti / Google Form</h3>
              <p>Data ini dipakai untuk validasi bukti, funnel program, klaim, CIF valid, transaksi Livin’, dan promo redeem.</p>
              <input id="modalClaimsFile" type="file" accept=".csv,.xlsx,.xls,.json" />
              <small>${safe(state.uploadedClaimName)}</small>
            </label>
          </div>
          <div class="modal-actions">
            <button class="btn ghost" id="cancelUploadModal">Tutup</button>
          </div>
        </div>
      </div>
    </div>`;
}

function render() {
  renderShell();
  const mount = document.getElementById('viewMount');
  if (state.tab === 'summary') mount.innerHTML = renderSummary();
  if (state.tab === 'merchants') mount.innerHTML = renderMerchants();
  if (state.tab === 'claims') mount.innerHTML = renderClaims();
  if (state.tab === 'mapping') mount.innerHTML = renderMapping();
  bindViewEvents();
  const modal = document.getElementById('modalMount');
  if (modal && state.uploadOpen) {
    modal.innerHTML = renderUploadModal();
    document.getElementById('closeUploadModal')?.addEventListener('click', () => { state.uploadOpen = false; render(); });
    document.getElementById('cancelUploadModal')?.addEventListener('click', () => { state.uploadOpen = false; render(); });
    document.getElementById('modalMerchantFile')?.addEventListener('change', e => handleFile(e, 'merchant'));
    document.getElementById('modalClaimsFile')?.addEventListener('change', e => handleFile(e, 'claims'));
  }
  if (state.tab === 'mapping') setTimeout(initMap, 60);
}

function renderKpis() {
  const k = getKpi();
  const cards = [
    ['merchant','Merchant Aktif', fmt(k.active), 'merchant non-drop yang siap menjalankan promo'],
    ['lead','Pengajuan Promo', fmt(k.leads), 'pelanggan yang masuk dari form merchant'],
    ['cif','CIF Valid', fmt(k.cif), 'new CIF terkonfirmasi'],
    ['livin','Transaksi Livin’ Valid', fmt(k.livin), 'aktivasi transaksi pertama via Livin’'],
    ['conversion','Conversion Lead → CIF', `${k.conversion}%`, 'efektivitas lead menjadi CIF valid']
  ];
  return `<div class="kpi-row">${cards.map(c => `<div class="kpi"><div class="icon">${icon(c[0])}</div><span>${c[1]}</span><strong>${c[2]}</strong><small>${c[3]}</small></div>`).join('')}</div>`;
}

function renderSummary() {
  const k = getKpi();
  const funnel = [
    ['QR Scan', k.qrScan, 100],
    ['Pengajuan Promo', k.leads, pct(k.leads, k.qrScan)],
    ['Bukti Lengkap', k.proof, pct(k.proof, k.leads)],
    ['CIF Valid', k.cif, pct(k.cif, k.leads)],
    ['Transaksi Livin’ Valid', k.livin, pct(k.livin, k.cif)],
    ['Promo Redeem', k.redeem, pct(k.redeem, k.livin)]
  ];
  const top = getPerf().sort((a,b) => b.cif - a.cif).slice(0,5);
  return `
    ${renderKpis()}
    <div class="card card-pad">
      <div class="section-head"><div><h2>Funnel Program</h2><p>Visualisasi alur program dari scan QR sampai promo diberikan. Drop-off dapat dibaca dari lebar bar setiap tahap.</p></div></div>
      <div class="funnel funnel-wide">
        ${funnel.map((f, idx) => `<div class="funnel-step"><b>${fmt(f[1])}</b><span>${f[0]}</span><div class="funnel-bar"><i style="--w:${Math.min(100, f[2])}%"></i></div><small>${idx === 0 ? 'baseline' : `${f[2]}% conversion`}</small></div>`).join('')}
      </div>
    </div>
    <div class="card card-pad" style="margin-top:18px">
      <div class="section-head"><div><h2>Top Merchant Contributor</h2><p>Merchant yang paling banyak menghasilkan CIF valid.</p></div></div>
      ${merchantTable(top)}
    </div>
  `;
}

function diagnosisHtml(k) {
  const rows = [];
  rows.push(k.qrScan > 0 && pct(k.leads,k.qrScan) < 25 ? ['orange','Scan tinggi, pengajuan rendah','Copy promo/form perlu dipermudah.'] : ['green','Pengajuan cukup sehat','Rasio lead terhadap scan masih layak.']);
  rows.push(k.leads > 0 && pct(k.cif,k.leads) < 25 ? ['orange','Lead belum optimal jadi CIF','Perlu follow-up H+0 dan cek proses pembukaan rekening.'] : ['green','Konversi lead ke CIF baik','Campaign menghasilkan CIF valid.']);
  rows.push(k.cif > 0 && pct(k.livin,k.cif) < 80 ? ['orange','Aktivasi Livin’ perlu dikejar','Kasir/PIC perlu mengarahkan transaksi pertama via Livin’.'] : ['green','Aktivasi Livin’ kuat','Mayoritas CIF valid sudah transaksi Livin’.']);
  return `<div style="display:grid;gap:10px">${rows.map(r => `<div class="merchant-mini"><span class="badge ${r[0]}">${r[1]}</span><small>${r[2]}</small></div>`).join('')}</div>`;
}

function merchantTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Merchant</th><th>Kategori</th><th>Promo</th><th>Lead</th><th>CIF</th><th>Livin’</th><th>Status</th></tr></thead><tbody>
    ${rows.map(r => `<tr><td><strong>${safe(r.name)}</strong><small>${safe(r.code)}</small></td><td>${safe(r.category)}</td><td>${safe(r.promo)}</td><td>${fmt(r.leads)}</td><td>${fmt(r.cif)}</td><td>${fmt(r.livin)}</td><td>${badge(r.status)}</td></tr>`).join('')}
  </tbody></table></div>`;
}

function renderMerchants() {
  const perf = getPerf();
  const q = norm(state.search);
  const rows = perf.filter(p => {
    const hit = !q || norm(p.name).includes(q) || norm(p.category).includes(q) || norm(p.code).includes(q);
    const stat = state.merchantFilter === 'all' || norm(p.status) === norm(state.merchantFilter);
    return hit && stat;
  }).sort((a,b) => merchantScore(b) - merchantScore(a));
  return `
    <div class="card card-pad">
      <div class="section-head"><div><h2>Merchant Partner</h2><p>Daftar merchant existing yang menjadi partner campaign dan performanya.</p></div></div>
      <div class="filter-row">
        <input class="searchbox" id="searchInput" placeholder="Cari merchant/kategori/kode..." value="${safe(state.search)}" />
        <select id="merchantFilter"><option value="all">Semua status</option><option value="Winner" ${state.merchantFilter==='Winner'?'selected':''}>Winner</option><option value="Watch" ${state.merchantFilter==='Watch'?'selected':''}>Watch</option><option value="Drop" ${state.merchantFilter==='Drop'?'selected':''}>Drop</option></select>
      </div>
      ${merchantDetailTable(rows)}
    </div>`;
}
function merchantDetailTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Merchant</th><th>Promo</th><th>SV 30D</th><th>Freq 30D</th><th>QR Scan</th><th>Kuota</th><th>Score</th><th>Klasifikasi</th></tr></thead><tbody>
  ${rows.map(r => `<tr><td><strong>${safe(r.name)}</strong><small>${safe(r.category)} · ${safe(r.code)}</small></td><td>${safe(r.promo)}</td><td>${money(r.salesVolume30)}</td><td>${fmt(r.freq30)}</td><td>${fmt(r.qrScans)}</td><td>${fmt(r.quota)}</td><td><strong>${merchantScore(r)}</strong><small>SV/Freq/QR/Kuota</small></td><td>${badge(r.status)}</td></tr>`).join('')}
  </tbody></table></div>`;
}

function renderClaims() {
  const rows = state.claims.filter(c => {
    if (state.claimFilter === 'valid') return c.cifStatus === 'Valid' && c.livinStatus === 'Valid';
    if (state.claimFilter === 'incomplete') return !(c.openingProof && c.livinProof);
    if (state.claimFilter === 'process') return c.openingProof && c.livinProof && c.cifStatus !== 'Valid';
    if (state.claimFilter === 'redeem') return c.promoStatus === 'Redeem';
    return true;
  }).slice(0, 300);
  return `
    <div class="card card-pad">
      <div class="section-head"><div><h2>Validasi Bukti dari Google Form</h2><p>Data ini berasal dari form yang diisi merchant: bukti buka rekening, bukti transaksi Livin’, dan status promo.</p></div></div>
      <div class="filter-row">
        <select id="claimFilter"><option value="all">Semua data</option><option value="valid" ${state.claimFilter==='valid'?'selected':''}>CIF + Livin’ Valid</option><option value="process" ${state.claimFilter==='process'?'selected':''}>Perlu Validasi</option><option value="incomplete" ${state.claimFilter==='incomplete'?'selected':''}>Bukti Belum Lengkap</option><option value="redeem" ${state.claimFilter==='redeem'?'selected':''}>Promo Redeem</option></select>
      </div>
      <div class="table-wrap"><table><thead><tr><th>Tanggal</th><th>Pelanggan</th><th>Merchant</th><th>Promo</th><th>Bukti</th><th>CIF</th><th>Livin’</th><th>Promo</th></tr></thead><tbody>
      ${rows.map(c => `<tr><td>${safe(c.date || '-')}</td><td><strong>${safe(c.customerName)}</strong><small>${safe(c.phone || '-')}</small></td><td>${safe(c.merchantName || c.merchantCode || '-')}</td><td>${safe(c.promo || '-')}</td><td>${badge(c.openingProof && c.livinProof ? 'Bukti lengkap' : 'Belum Lengkap')}</td><td>${badge(c.cifStatus)}</td><td>${badge(c.livinStatus)}</td><td>${badge(c.promoStatus)}</td></tr>`).join('')}
      </tbody></table></div>
    </div>`;
}

function renderMapping() {
  const perf = getPerf();
  const mapped = perf.filter(m => Number.isFinite(m.lat) && Number.isFinite(m.lng));
  const unmapped = perf.length - mapped.length;
  return `
    <div class="map-layout">
      <div class="card map-card">
        <div class="section-head"><div><h2>Merchant Mapping</h2><p>Gabungan data merchant existing dengan performa campaign. Merchant tanpa koordinat/Google Maps URL tidak ditampilkan di peta.</p></div>${unmapped ? `<span class="badge orange">${unmapped} belum punya koordinat</span>` : `<span class="badge green">Semua punya koordinat</span>`}</div>
        <div class="map-toolbar">
          <select id="mapFilter"><option value="all">Semua merchant</option><option value="Winner">Winner</option><option value="Watch">Watch</option><option value="Drop">Drop</option></select>
          <button class="btn ghost" id="fitMapBtn">Fit ke semua titik</button>
        </div>
        <div id="map"><div class="map-fallback"><div><strong>Map belum tersedia</strong><br/>Pastikan internet aktif agar Leaflet/OpenStreetMap bisa dimuat.</div></div></div>
      </div>
      <div class="card map-side">
        <h2>Ringkasan Titik</h2><p class="sub">Klik marker untuk melihat performa merchant.</p>
        ${mapped.sort((a,b)=>b.cif-a.cif).slice(0,20).map(m => `<div class="merchant-mini"><strong>${safe(m.name)}</strong><small>${safe(m.category)} · ${safe(m.address || '-')}</small><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">${badge(m.status)}<span class="badge blue">CIF ${fmt(m.cif)}</span><span class="badge gold">Lead ${fmt(m.leads)}</span></div><div class="progress"><i style="--w:${Math.min(100,pct(m.cif,m.leads))}%"></i></div></div>`).join('')}
      </div>
    </div>`;
}

function bindViewEvents() {
  const search = document.getElementById('searchInput');
  if (search) search.addEventListener('input', e => { state.search = e.target.value; render(); });
  const mf = document.getElementById('merchantFilter');
  if (mf) mf.addEventListener('change', e => { state.merchantFilter = e.target.value; render(); });
  const cf = document.getElementById('claimFilter');
  if (cf) cf.addEventListener('change', e => { state.claimFilter = e.target.value; render(); });
  const fit = document.getElementById('fitMapBtn');
  if (fit) fit.addEventListener('click', () => fitMap());
  const mapFilter = document.getElementById('mapFilter');
  if (mapFilter) mapFilter.addEventListener('change', () => initMap());
}

function initMap() {
  if (!window.L) return;
  const el = document.getElementById('map');
  if (!el) return;
  if (!state.map) {
    state.map = L.map('map', { zoomControl: true }).setView([-6.1645,106.9105], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution:'&copy; OpenStreetMap' }).addTo(state.map);
  } else {
    state.map.remove();
    state.map = L.map('map', { zoomControl: true }).setView([-6.1645,106.9105], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution:'&copy; OpenStreetMap' }).addTo(state.map);
  }
  const filter = document.getElementById('mapFilter')?.value || 'all';
  const rows = getPerf().filter(m => Number.isFinite(m.lat) && Number.isFinite(m.lng) && (filter === 'all' || m.status === filter));
  rows.forEach(m => {
    const cls = m.status === 'Winner' ? 'marker-winner' : m.status === 'Watch' ? 'marker-watch' : m.status === 'Drop' ? 'marker-drop' : 'marker-neutral';
    const marker = L.marker([m.lat,m.lng], { icon: L.divIcon({ className:`marker-pin ${cls}`, html:`<span>${m.cif || m.leads || 0}</span>`, iconSize:[34,34], iconAnchor:[17,17] })}).addTo(state.map);
    marker.bindPopup(`<div class="popup-title">${safe(m.name)}</div><div class="popup-meta">${safe(m.category)} · ${safe(m.status)}<br/>Lead ${fmt(m.leads)} · CIF ${fmt(m.cif)} · Livin’ ${fmt(m.livin)}<br/>${safe(m.promo)}</div>`);
  });
  if (rows.length) {
    const bounds = L.latLngBounds(rows.map(m => [m.lat,m.lng]));
    state.map.fitBounds(bounds.pad(.18));
  }
}
function fitMap() { if (state.map) initMap(); }

async function handleFile(e, type) {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const rows = await readRows(file);
    if (type === 'merchant') {
      const merchants = normalizeMerchantRows(rows);
      if (!merchants.length) throw new Error('Tidak ada baris merchant yang terbaca.');
      state.merchants = merchants;
      state.uploadedMerchantName = `${file.name} · ${fmt(merchants.length)} merchant`;
      pushNotice(`Data merchant existing berhasil dimuat: ${fmt(merchants.length)} merchant.`);
    } else {
      const claims = normalizeClaimRows(rows);
      if (!claims.length) throw new Error('Tidak ada baris bukti/form yang terbaca.');
      state.claims = claims;
      state.uploadedClaimName = `${file.name} · ${fmt(claims.length)} baris`;
      pushNotice(`Data bukti / Google Form berhasil dimuat: ${fmt(claims.length)} baris.`);
    }
    render();
  } catch (err) {
    pushNotice(`Gagal membaca file: ${err.message || err}`);
    render();
  } finally {
    e.target.value = '';
  }
}

function pushNotice(msg) {
  setTimeout(() => {
    const mount = document.getElementById('noticeMount');
    if (mount) mount.innerHTML = `<div class="notice"><span>${safe(msg)}</span><button onclick="this.closest('.notice').remove()">×</button></div>`;
  }, 0);
}

async function readRows(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'json') return JSON.parse(await file.text());
  if (ext === 'csv') return parseCsv(await file.text());
  if (['xlsx','xls'].includes(ext)) {
    if (!window.XLSX) throw new Error('Library XLSX belum termuat. Coba gunakan CSV atau pastikan internet aktif.');
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type:'array' });
    const sheetName = pickBestSheet(wb);
    return XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval:'' });
  }
  throw new Error('Format file belum didukung. Gunakan CSV, XLSX, XLS, atau JSON.');
}
function pickBestSheet(wb) {
  let best = wb.SheetNames[0];
  let bestCount = -1;
  wb.SheetNames.forEach(name => {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[name], { header:1, defval:'' });
    const count = rows.reduce((a,r)=>a + r.filter(Boolean).length, 0);
    if (count > bestCount) { best = name; bestCount = count; }
  });
  return best;
}
function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', q = false;
  for (let i=0;i<text.length;i++) {
    const c = text[i], n = text[i+1];
    if (c === '"' && q && n === '"') { cell += '"'; i++; continue; }
    if (c === '"') { q = !q; continue; }
    if (c === ',' && !q) { row.push(cell); cell=''; continue; }
    if ((c === '\n' || c === '\r') && !q) {
      if (c === '\r' && n === '\n') i++;
      row.push(cell); rows.push(row); row=[]; cell=''; continue;
    }
    cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const headers = rows.shift()?.map(h => h.trim()) || [];
  return rows.filter(r => r.some(x => String(x).trim())).map(r => Object.fromEntries(headers.map((h,i)=>[h, r[i] ?? ''])));
}

render();
