const SEMANA_DATA={"version":"1.1","date":"2026-10-29","ingredients":{"pollo":{"name":"Pollo deshuesado crudo","unit":"g","category":"Proteínas","allergens":""},"garbanzo":{"name":"Garbanzos cocidos, escurridos","unit":"g","category":"Proteínas","allergens":""},"arroz":{"name":"Arroz blanco seco","unit":"g","category":"Cereales","allergens":""},"papa":{"name":"Papa cruda limpia","unit":"g","category":"Verduras","allergens":""},"zanahoria":{"name":"Zanahoria cruda limpia","unit":"g","category":"Verduras","allergens":""},"calabacin":{"name":"Calabacín crudo limpio","unit":"g","category":"Verduras","allergens":""},"cebolla":{"name":"Cebolla cruda limpia","unit":"g","category":"Verduras","allergens":""},"ajo":{"name":"Ajo pelado","unit":"g","category":"Verduras","allergens":""},"aceite":{"name":"Aceite de oliva o vegetal","unit":"ml","category":"Despensa","allergens":""},"limon":{"name":"Jugo de limón","unit":"ml","category":"Despensa","allergens":""},"tomatep":{"name":"Tomate triturado en conserva","unit":"g","category":"Despensa","allergens":""},"sal":{"name":"Sal","unit":"g","category":"Despensa","allergens":""},"comino":{"name":"Comino molido","unit":"g","category":"Condimentos","allergens":""},"oregano":{"name":"Orégano seco","unit":"g","category":"Condimentos","allergens":""}},"weeks":[{"id":1,"name":"Limón y pimentón","legume":"garbanzo","vegetables":["zanahoria","calabacin","cebolla"],"carbs":["arroz","papa"],"meals":[{"id":"S1-01","title":"Pollo con papa, limón y orégano","protein":"pollo","carb":"papa","day":"Lunes","slot":"Almuerzo","dayIndex":0,"ingredients":{"pollo":120,"papa":200,"zanahoria":50,"calabacin":50,"cebolla":50,"aceite":5,"sal":0.4,"limon":10,"oregano":0.5},"storage":"Refrigerador","steps":["Prepara en lote la proteína, el papa y las verduras según la guía de bases. Las cantidades de esta ficha están en crudo/seco o cocido escurrido como indica cada ingrediente.","Divide las bases cocidas según las asignaciones de tu selección. Para este plato usa la parte correspondiente a 120 g de pollo deshuesado crudo y 200 g de papa cruda limpia.","Mezcla el aceite de la ficha con los condimentos. Incorpora jugo de limón, orégano seco al mezclar las bases ya cocinadas.","Añade el resto del condimento de esta ficha y mezcla. Reparte en recipiente poco profundo. Destino del menú: refrigerador. Enfría y almacena sin esperar a terminar toda la sesión.","Para comer: descongela en refrigeración si corresponde; recalienta una sola porción hasta 74 °C en el centro, remueve y comprueba. El tiempo depende del equipo."],"texture":"La papa descongelada puede quedar más blanda. Trocea y mezcla con el condimento; prueba la textura antes de producir un lote grande."},{"id":"S1-02","title":"Garbanzos con arroz, tomate y comino","protein":"garbanzo","carb":"arroz","day":"Lunes","slot":"Cena","dayIndex":0,"ingredients":{"garbanzo":150,"arroz":60,"zanahoria":50,"calabacin":50,"cebolla":50,"aceite":5,"sal":0.4,"tomatep":50,"comino":0.5},"storage":"Congelador","steps":["Prepara en lote la proteína, el arroz y las verduras según la guía de bases. Las cantidades de esta ficha están en crudo/seco o cocido escurrido como indica cada ingrediente.","Divide las bases cocidas según las asignaciones de tu selección. Para este plato usa la parte correspondiente a 150 g de garbanzos cocidos, escurridos y 60 g de arroz blanco seco.","Calienta tomate triturado en conserva en sartén con parte del aceite de la ficha. Si se pega, añade una cucharada de agua. Incorpora comino molido al mezclar las bases ya cocinadas.","Añade el resto del condimento de esta ficha y mezcla. Reparte en recipiente poco profundo. Destino del menú: congelador. Enfría y almacena sin esperar a terminar toda la sesión.","Para comer: descongela en refrigeración si corresponde; recalienta una sola porción hasta 74 °C en el centro, remueve y comprueba. El tiempo depende del equipo."],"texture":"Añade 10-20 ml de agua al recalentar para recuperar humedad; ajusta sin volver acuoso el plato."},{"id":"S1-03","title":"Pollo con arroz, ajo y limón","protein":"pollo","carb":"arroz","day":"Martes","slot":"Almuerzo","dayIndex":1,"ingredients":{"pollo":120,"arroz":60,"zanahoria":50,"calabacin":50,"cebolla":50,"aceite":5,"sal":0.4,"ajo":2,"limon":10},"storage":"Congelador","steps":["Prepara en lote la proteína, el arroz y las verduras según la guía de bases. Las cantidades de esta ficha están en crudo/seco o cocido escurrido como indica cada ingrediente.","Divide las bases cocidas según las asignaciones de tu selección. Para este plato usa la parte correspondiente a 120 g de pollo deshuesado crudo y 60 g de arroz blanco seco.","Calienta ajo pelado en sartén con parte del aceite de la ficha. Si se pega, añade una cucharada de agua. Incorpora jugo de limón al mezclar las bases ya cocinadas.","Añade el resto del condimento de esta ficha y mezcla. Reparte en recipiente poco profundo. Destino del menú: congelador. Enfría y almacena sin esperar a terminar toda la sesión.","Para comer: descongela en refrigeración si corresponde; recalienta una sola porción hasta 74 °C en el centro, remueve y comprueba. El tiempo depende del equipo."],"texture":"Añade 10-20 ml de agua al recalentar para recuperar humedad; ajusta sin volver acuoso el plato."}]}],"sources":[["Limpieza y frío","https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety"],["Sobras refrigeradas","https://ask.fsis.usda.gov/article/How-do-I-handle-leftovers-safely"],["Arroz: enfriado y recalentado","https://www.gov.uk/government/publications/home-food-fact-checker/home-food-fact-checker"],["Temperaturas internas","https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"]]};
'use strict';
function createSemanaCore(data){
 const round=n=>Math.round((n+Number.EPSILON)*1000)/1000;
 const numeric=(v,max=1000000)=>typeof v==='number'&&Number.isFinite(v)?Math.min(max,Math.max(0,v)):0;
 const record=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
 const wk=id=>data.weeks.find(w=>w.id===id)||data.weeks[0];
 const fresh=()=>({version:'1.1',week:1,people:1,vegetal:false,selected:{},pantry:{},prices:{},bought:{},done:{},eaten:{},date:'',currency:'USD',timers:['Arroz/cereal','Pollo','Verduras','Papa/segunda base'].map((name,i)=>({name,seconds:[900,1500,1500,1200][i],remaining:[900,1500,1500,1200][i],deadline:0}))});
 function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00Z');return !Number.isNaN(d.getTime())&&d.toISOString().slice(0,10)===s;}
 function sanitize(x,now=Date.now()){
  if(!record(x)||!['1.0','1.1'].includes(x.version))throw Error('El archivo no es un respaldo compatible de Semana Lista.');
  const s=fresh();s.week=[1,2,3,4].includes(x.week)?x.week:1;s.people=[1,2,4].includes(x.people)?x.people:1;s.vegetal=x.vegetal===true;
  s.currency=typeof x.currency==='string'?x.currency.replace(/[^\p{L}\p{N} $€£.-]/gu,'').slice(0,12)||'USD':'USD';s.date=validDate(x.date)?x.date:'';
  const ingredients=Object.keys(data.ingredients);const tasks=['Preparación','Cereales','Papa','Verduras','Pollo','Legumbres','Arroz: frío prioritario','Montaje','Etiquetas y frío','Cierre'];
  for(const w of data.weeks){const key=w.id,ids=w.meals.map(r=>r.id);
   if(record(x.selected)&&Array.isArray(x.selected[key]))s.selected[key]=[...new Set(x.selected[key].filter(id=>ids.includes(id)))];
   for(const field of ['pantry','bought','done'])if(record(x[field])&&record(x[field][key])){
    s[field][key]={};for(const k of field==='done'?tasks:ingredients){const v=x[field][key][k];if(field==='pantry'){if(typeof v==='number'&&Number.isFinite(v))s[field][key][k]=numeric(v);}else if(typeof v==='boolean')s[field][key][k]=v;}
   }
   if(record(x.eaten))for(const id of ids)if(typeof x.eaten[id]==='boolean')s.eaten[id]=x.eaten[id];
  }
  if(record(x.prices))for(const k of ingredients){const v=x.prices[k];if(typeof v==='number'&&Number.isFinite(v)&&v>=0)s.prices[k]=numeric(v);}
  if(Array.isArray(x.timers)&&x.timers.length===4)s.timers=x.timers.map((t,i)=>{
   if(!record(t))return s.timers[i];const sec=typeof t.seconds==='number'&&Number.isFinite(t.seconds)?Math.max(60,numeric(t.seconds,86400)):s.timers[i].seconds;
   return{name:s.timers[i].name,seconds:sec,remaining:typeof t.remaining==='number'&&Number.isFinite(t.remaining)?numeric(t.remaining,sec):sec,deadline:typeof t.deadline==='number'&&Number.isFinite(t.deadline)&&t.deadline>0&&t.deadline<=now+86400000?t.deadline:0};
  });return s;
 }
 function selected(s){const a=s.selected[s.week];return wk(s.week).meals.filter(r=>!Array.isArray(a)||a.includes(r.id));}
 function quantities(s,r){const q={};for(const[k,v]of Object.entries(r.ingredients)){const key=s.vegetal&&k==='pollo'?wk(s.week).legume:k;const n=s.vegetal&&k==='pollo'?150:v;q[key]=round((q[key]||0)+n*s.people);}return q;}
 function totals(s){const q={};for(const r of selected(s))for(const[k,v]of Object.entries(quantities(s,r)))q[k]=round((q[k]||0)+v);return q;}
 function shopping(s){let cost=0,missing=0;const q=totals(s),pantry=s.pantry[s.week]||{};const items=Object.entries(q).map(([k,v])=>{
  const have=numeric(pantry[k]),buy=round(Math.max(0,v-have));const hasPrice=Object.hasOwn(s.prices,k)&&typeof s.prices[k]==='number'&&Number.isFinite(s.prices[k])&&s.prices[k]>=0;
  const price=hasPrice?numeric(s.prices[k]):null;if(buy>0&&!hasPrice)missing++;const subtotal=hasPrice?buy/1000*price:0;cost+=subtotal;return{key:k,total:v,have,buy,price,subtotal};});return{items,cost:Math.round((cost+Number.EPSILON)*100)/100,missing};}
 function steps(s,r){const a=[...r.steps],q=quantities(s,r),p=s.vegetal&&r.protein==='pollo'?wk(s.week).legume:r.protein;
  a[1]=`Divide las bases cocidas según las asignaciones de tu selección. Para ${s.people} persona(s), este plato representa ${q[p]} g de ${data.ingredients[p].name.toLowerCase()} y ${q[r.carb]} g de ${data.ingredients[r.carb].name.toLowerCase()}. Pesa en el estado indicado; reparte el lote cocido de forma proporcional.`;
  return a;
 }
 function reset(s){const w=s.week;delete s.selected[w];delete s.pantry[w];delete s.bought[w];delete s.done[w];for(const r of wk(w).meals)delete s.eaten[r.id];s.date='';s.timers=fresh().timers;return s;}
 function mealDate(s,r){if(!validDate(s.date))return null;const d=new Date(s.date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+r.dayIndex+1);return d;}
 function expire(s,now=Date.now()){const done=[];for(const t of s.timers)if(t.deadline&&t.deadline<=now){t.deadline=0;t.remaining=0;done.push(t.name);}return done;}
 return{fresh,sanitize,selected,quantities,totals,shopping,steps,reset,mealDate,expire,validDate};
}
if(typeof module!=='undefined')module.exports={createSemanaCore};

'use strict';
const core=createSemanaCore(SEMANA_DATA), demo=core.fresh();
const previewMeals=SEMANA_DATA.weeks[0].meals.slice(0,3);
demo.selected[1]=previewMeals.map(r=>r.id);
const fmt=n=>new Intl.NumberFormat('es',{maximumFractionDigits:1}).format(n);
function drawTotals(){
 const totals=core.totals(demo);
 const keys=['pollo','garbanzo','arroz','papa','zanahoria','calabacin','cebolla'].filter(k=>totals[k]);
 document.querySelector('#demoTotals').replaceChildren(...keys.map(k=>{
  const row=document.createElement('div');row.className='demo-total';
  const name=document.createElement('span');name.textContent=SEMANA_DATA.ingredients[k].name;
  const amount=document.createElement('strong');amount.textContent=fmt(totals[k])+' '+SEMANA_DATA.ingredients[k].unit;
  row.append(name,amount);return row;
 }));
 document.querySelector('#demoCount').textContent=demo.selected[1].length*demo.people+' comidas';
 if(!keys.length)document.querySelector('#demoTotals').textContent='Elige al menos un plato para ver sus cantidades.';
}
for(const meal of previewMeals){
 const label=document.createElement('label');label.className='demo-meal';
 const input=document.createElement('input');input.type='checkbox';input.checked=true;input.value=meal.id;
 const name=document.createElement('span');name.textContent=meal.title;
 input.addEventListener('change',()=>{demo.selected[1]=[...document.querySelectorAll('#demoMeals input:checked')].map(x=>x.value);drawTotals();});
 label.append(input,name);document.querySelector('#demoMeals').append(label);
}
document.querySelectorAll('[data-people]').forEach(button=>button.addEventListener('click',()=>{
 demo.people=Number(button.dataset.people);
 document.querySelectorAll('[data-people]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));drawTotals();
}));drawTotals();
const sample=document.querySelector('#sampleDialog');
document.querySelector('#openSample').addEventListener('click',()=>sample.showModal());

document.querySelectorAll('.close-dialog').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
for(const dialog of [sample])dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
const sticky=document.querySelector('#stickyBuy');
function updateBottomOffer(){
 const heroBottom=document.querySelector('#inicio').getBoundingClientRect().bottom;
 const offerBottom=document.querySelector('#planes').getBoundingClientRect().bottom;
 sticky.classList.toggle('visible',heroBottom<=0&&offerBottom>0);
}
let bottomOfferFramePending=false;
function scheduleBottomOffer(){
 if(bottomOfferFramePending)return;
 bottomOfferFramePending=true;
 requestAnimationFrame(()=>{updateBottomOffer();bottomOfferFramePending=false;});
}
window.addEventListener('scroll',scheduleBottomOffer,{passive:true});
window.addEventListener('resize',scheduleBottomOffer);
window.addEventListener('pageshow',scheduleBottomOffer);
updateBottomOffer();
const recipeGallery=document.querySelector('.food-grid');
const galleryToggle=document.querySelector('#toggleGallery');
const reducedGalleryMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let galleryPaused=reducedGalleryMotion.matches,galleryOnScreen=false,galleryHoldUntil=0;
function updateGalleryControl(){
 galleryToggle.textContent=galleryPaused?'Reanudar':'Pausar';
 galleryToggle.setAttribute('aria-pressed',String(galleryPaused));
 galleryToggle.setAttribute('aria-label',galleryPaused?'Reanudar movimiento de las imágenes':'Pausar movimiento de las imágenes');
}
galleryToggle.addEventListener('click',()=>{galleryPaused=!galleryPaused;updateGalleryControl();});
recipeGallery.addEventListener('pointerdown',()=>{galleryHoldUntil=Date.now()+10000;},{passive:true});
recipeGallery.addEventListener('mouseenter',()=>{galleryHoldUntil=Infinity;});
recipeGallery.addEventListener('mouseleave',()=>{galleryHoldUntil=Date.now()+3000;});
const galleryWatch=new IntersectionObserver(entries=>{galleryOnScreen=entries[0].isIntersecting;},{threshold:.2});
galleryWatch.observe(recipeGallery);
setInterval(()=>{
 if(galleryPaused||!galleryOnScreen||document.hidden||Date.now()<galleryHoldUntil||recipeGallery.contains(document.activeElement))return;
 const cards=[...recipeGallery.children];if(cards.length<2)return;
 const base=cards[0].getBoundingClientRect().left;
 const width=cards[1].getBoundingClientRect().left-base;
 const max=recipeGallery.scrollWidth-recipeGallery.clientWidth;
 if(max<2)return;
 const next=recipeGallery.scrollLeft>=max-5?0:Math.min(max,recipeGallery.scrollLeft+width);
 recipeGallery.scrollTo({left:next,behavior:reducedGalleryMotion.matches?'auto':'smooth'});
},3600);
updateGalleryControl();

// Carry campaign attribution to the selected Hotmart offer.
(function(){
 const allowed=/^(utm_[a-z0-9_]+|src|sck|fbclid|gclid|ttclid|msclkid|xcod|sid|subid|sub_id)$/i;
 function campaignLink(link){
  const url=new URL(link.href);
  for(const [key,value] of new URLSearchParams(location.search)){
   if(allowed.test(key)&&value.length<=2048&&!url.searchParams.has(key))url.searchParams.set(key,value);
  }
  link.href=url.toString();
 }
 document.querySelectorAll('a[data-plan]').forEach(link=>{
  campaignLink(link);
  link.addEventListener('click',()=>campaignLink(link));
 });
})();
