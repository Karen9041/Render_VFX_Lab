const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
let state = {};
try {
    state = JSON.parse(localStorage.getItem('renderlab-v1') || '{}') || {};
} catch {}

let storageOK = true;

function save() {
    try {
        localStorage.setItem('renderlab-v1', JSON.stringify(state));
    } catch {
        storageOK = false;
    }
}

function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
}
const pad = n => String(n).padStart(2, '0');
const key = (w, c) => `${w}-${c}`;
const route = (w, c) => `#/week/${w}${c ? '/topic/' + c : ''}`;
const phase = w => phases.find(p => w >= p[0] && w <= p[1]);
const done = (w, c) => !!state[key(w, c)]?.done;
const count = w => weeks[w - 1].cards.filter((_, i) => done(w, i + 1)).length;

function progress() {
    return weeks.reduce((a, _, i) => a + count(i + 1), 0);
}

function nav(w) {
    sidebar.innerHTML = `<a class="nav ${!w ? 'active' : ''}" href="#/">◈ Roadmap overview</a>` + phases.map(p => `<div class="phase">${p[2]} / ${p[3]}</div>` + weeks.slice(p[0] - 1, p[1]).map((v, i) => {
        let n = p[0] + i;
        return `<a class="nav ${n === w ? 'active' : ''}" href="${route(n)}" ${n === w ? 'aria-current="page"' : ''}>W${pad(n)} · ${v.title} <span class="nav-count">${count(n)}/2</span>
        </a>`;
    }).join('')).join('');
    document.getElementById('counter').textContent = `${progress()} / 48 自評完成`;
}

function overview() {
    return `<div class="eyebrow">SECONDARY SPECIALIZATION / 24 WEEKS</div>
        <h1>Rendering &amp; VFX Lab</h1>
        <p class="muted">從 Gameplay 延伸到特效製作、技術美術與圖形程式。以終末地的畫面表現作為長期研究靈感，而非假定其專有實作。</p>
        <section>
            <div class="topline">
                <h3>探索進度</h3>
                <span>${progress()} / 48</span>
            </div>
            <div class="bar">
                <span style="--progress:${progress() / 48 * 100}%"></span>
            </div>
            <p class="muted">每週建議 2–4 小時，可依個人進度彈性安排；無固定日期。完成標記是自評，不等同 Mentor 驗收。共用 Learning Hub 知識可直接遷移，不必重學。</p>
            <a class="btn primary" href="${route(1)}">開始 Week 01 →</a>
        </section>
        <div class="cards">${phases.map(p => `<a class="card" href="${route(p[0])}">
                <div class="eyebrow">PHASE ${p[2]} · W${pad(p[0])}–${pad(p[1])}</div>
                <h2>${p[3]}</h2>
                <p class="muted">${weeks.slice(p[0] - 1, p[1]).map(x => x.title).join(' / ')}</p>
                <small>進入階段 →</small>
            </a>`).join('')}</div>
        <section>
            <h3>使用方式與證據規則</h3>
            <p>先閱讀教材，再做最小實驗，最後回答驗收題。記錄版本、操作步驟、截圖或 Capture、觀察及未知項目。公司素材須經許可才可保存或公開。Phase 02、04、06 結束時回顧偏好方向。教材以外部連結提供，需網路；本頁與導航不需網路。</p>
            <button class="btn" id="export">匯出學習紀錄 JSON</button> <label class="btn import-label">匯入紀錄<input id="import" type="file" accept="application/json" hidden></label>
        </section>`;
}

function weekPage(w) {
    let x = weeks[w - 1];
    let p = phase(w);
    return `<div class="crumb">
            <a href="#/">Roadmap</a> / Week ${pad(w)}</div>
        <div class="eyebrow">PHASE ${p[2]} / ${p[3]}</div>
        <h1>W${pad(w)} · ${x.title}</h1>
        <p class="muted">兩個主題 · 建議共 2–4 小時 · 依實際進度彈性延長</p>
        <div class="cards">${x.cards.map((c, i) => `<a class="card" href="${route(w, i + 1)}">
                <div class="topline">
                    <span class="eyebrow">LAB ${pad(i + 1)}</span>
                    <span class="${done(w, i + 1) ? 'done' : 'muted'}">${done(w, i + 1) ? '自評完成' : '未完成'}</span>
                </div>
                <h2>${c.title}</h2>
                <p class="muted">${c.outline.join(' · ')}</p>
                <small>教材、實作與驗收 →</small>
            </a>`).join('')}</div>
        <section>
            <h3>本週產出</h3>
            <p>${x.cards.map(c => c.lab).join('；')}</p>
        </section>
        <div class="topline">${w > 1 ? `<a class="btn" href="${route(w - 1)}">← 上一週</a>` : '<a class="btn" href="#/">← 總覽</a>'}${w < 24 ? `<a class="btn" href="${route(w + 1)}">下一週 →</a>` : ''}</div>`;
}

function topicPage(w, c) {
    let x = weeks[w - 1].cards[c - 1];
    let s = state[key(w, c)] || {};
    return `<div class="crumb">
            <a href="#/">Roadmap</a> / <a href="${route(w)}">W${pad(w)} ${weeks[w - 1].title}</a> / Lab ${pad(c)}</div>
        <div class="eyebrow">W${pad(w)} / LAB ${pad(c)}</div>
        <h1>${x.title}</h1>
        <p class="muted">建議 60–120 分鐘 · 先理解，再操作，最後驗收</p>
        <section>
            <h2>01 / 學習大綱</h2>
            <ul>${x.outline.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
        </section>
        <section>
            <h2>02 / 建議教材</h2>${x.refs.map((r, i) => {
                let a = sources[r];
                return `<div class="source">
                    <div class="eyebrow">${i === 0 ? '優先教材' : '延伸參考'}</div>
                    <a href="${a[1]}">${a[0]} ↗</a>
                    <div class="muted">${a[2]}</div>
                </div>`;
            }).join('')}
            <p class="muted source-note">依本頁大綱搜尋相關章節。部分為教材索引，非逐課精準連結；外部網站在同一分頁開啟，可用瀏覽器上一頁返回。</p>
        </section>
        <section>
            <h2>03 / 最小實作</h2>
            <p>${x.lab}</p>
            <p class="muted">先寫預測，再改一個變因；保存操作前後畫面、版本與實際觀察。</p>
        </section>
        <section>
            <h2>04 / 驗收題（不附答案）</h2>
            <p>${x.question}</p>
            <p>實作驗收：能重現上述 Lab，並用至少一份實際證據說明觀察結果；指出一個限制或失敗情境。</p>
            <label for="answer">我的推理與答案</label>
            <textarea id="answer" placeholder="先獨立作答，再請 Mentor 審核">${esc(s.answer)}</textarea>
            <label for="evidence">Evidence / Observation / Unknowns</label>
            <textarea id="evidence" placeholder="Capture 路徑、版本、結果、未驗證項目">${esc(s.evidence)}</textarea>
            <div class="topline">
                <button class="btn primary" id="save">儲存紀錄</button>
                <label><input type="checkbox" id="done" ${s.done ? 'checked' : ''}> 自評已完成（不代表正式通過）</label>
            </div>
            <p id="notice" role="status" class="muted"></p>
        </section>
        <div class="topline">
            <a class="btn" href="${route(w)}">← 返回本週</a>${c === 1 ? `<a class="btn" href="${route(w, 2)}">下一主題 →</a>` : w < 24 ? `<a class="btn" href="${route(w + 1)}">下一週 →</a>` : '<a class="btn" href="#/">回總覽 →</a>'}
        </div>`;
}

function render() {
    let m = location.hash.match(/^#\/week\/(\d+)(?:\/topic\/(\d+))?$/);
    let w = m ? Number(m[1]) : 0;
    let c = m && m[2] ? Number(m[2]) : 0;
    if (w < 1 || w > 24 || c < 0 || c > 2) {
        w = 0;
        c = 0;
    }
    nav(w);
    app.innerHTML = (w ? (c ? topicPage(w, c) : weekPage(w)) : overview()) + '<div class="foot">Rendering &amp; VFX Lab · Unity 6 / URP · Offline roadmap · 2026-11-25</div>';
    document.title = w ? `W${pad(w)} ${c ? weeks[w - 1].cards[c - 1].title : weeks[w - 1].title} | Render Lab` : 'Rendering & VFX Lab';
    sidebar.classList.remove('open');
    window.scrollTo(0, 0);
    if (w && c) {
        const persist = () => {
            state[key(w, c)] = {
                answer: document.getElementById('answer').value,
                evidence: document.getElementById('evidence').value,
                done: document.getElementById('done').checked
            };
            save();
            nav(w);
            document.getElementById('notice').textContent = storageOK ? '已儲存在此瀏覽器。' : '瀏覽器不允許本機儲存；請返回總覽匯出紀錄。';
        };
        document.getElementById('save').onclick = persist;
        document.getElementById('done').onchange = persist;
        document.getElementById('answer').oninput = persist;
        document.getElementById('evidence').oninput = persist;
    }
    if (!w) {
        document.getElementById('export').onclick = () => {
            let a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([JSON.stringify({
                schema: 1,
                records: state
            }, null, 2)], {
                type: 'application/json'
            }));
            a.download = 'render-lab-progress.json';
            a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        };
        document.getElementById('import').onchange = async e => {
            try {
                let data = JSON.parse(await e.target.files[0].text());
                if (data.schema !== 1 || !data.records || typeof data.records !== 'object')
                    throw Error();
                let next = {};
                for (let [k, v] of Object.entries(data.records)) {
                    if (!/^(?:[1-9]|1[0-9]|2[0-4])-[12]$/.test(k) || !v || typeof v !== 'object')
                        continue;
                    next[k] = {
                        answer: String(v.answer ?? ''),
                        evidence: String(v.evidence ?? ''),
                        done: v.done === true
                    };
                }
                if (confirm('匯入會覆蓋本機紀錄，確定？')) {
                    state = next;
                    save();
                    render();
                }
            } catch {
                alert('無法讀取此紀錄檔。');
            }
        };
    }
}
window.addEventListener('hashchange', render);
document.getElementById('menu').onclick = () => sidebar.classList.toggle('open');
render();
