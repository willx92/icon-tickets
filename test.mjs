import('./assets/index-VXVlpNRX.js').then(()=>console.log('index ok')).catch(e=>console.error(e));
Promise.all(['events-Bfm-DJpr.js','event-DtJmM8g2.js','status-BkQ4DIkm.js','admin-CQb2FHHA.js','scanner-BqyiTox4.js','legal-Bf1M1Gs5.js'].map(x=>import('./assets/'+x).then(()=>console.log(x,'ok')).catch(e=>console.error(x,e.message))))
