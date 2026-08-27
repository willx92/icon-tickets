const files=['events-Bfm-DJpr.js','event-DtJmM8g2.js','status-BkQ4DIkm.js','admin-CQb2FHHA.js','scanner-BqyiTox4.js','legal-Bf1M1Gs5.js'];
for (const f of files) { try { await import('./assets/'+f); console.log(f,'OK'); } catch(e) { console.error(f,e.message); process.exitCode=1; } }
