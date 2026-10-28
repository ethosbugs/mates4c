const R=(a,b)=>Math.floor(Math.random()*(b-a+1))+a,P=a=>a[R(0,a.length-1)];
const SU='⁰¹²³⁴⁵⁶⁷⁸⁹',sup=n=>String(n).split('').map(c=>SU[c]).join('');
const rt=(n,x)=>(n==2?'':sup(n))+'√'+(/^\d+$/.test(x)?x:'('+x+')');
const rd=(a,m)=>m>1?a+sup(m):''+a;
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const lcm=(a,b)=>a*b/gcd(a,b);
const neg=s=>String(s).replace(/-/g,'−');
const dc=x=>x.toFixed(2).replace('.',',');
const fac=N=>{const f={};for(let p=2;p*p<=N;p++)while(N%p==0){f[p]=(f[p]||0)+1;N/=p}if(N>1)f[N]=(f[N]||0)+1;return f};
const fs=f=>Object.keys(f).map(p=>f[p]>1?p+sup(f[p]):p).join(' · ');
const simp=(n,N)=>{const f=fac(N);let k=1,m=1;for(const p in f){k*=Math.pow(p,Math.floor(f[p]/n));m*=Math.pow(p,f[p]%n)}return[k,m]};
const T=(k,n,m)=>neg(m==1?''+k:(k==1?'':k==-1?'-':k)+rt(n,''+m));
const res=(a,b,m)=>{let s=a?neg(a):'';if(b){const c=Math.abs(b);s+=(s?(b<0?' − ':' + '):(b<0?'−':''))+(c==1?'':c)+'√'+m}return s||'0'};
const w=s=>/ [+−] /.test(s)?'('+s+')':s;
const fr=(n,d)=>d==1?n:w(''+n)+' / '+w(''+d);

/* ---------- generadors ---------- */
const CL=[['12',0,'Nombre natural.'],['0',1,'El zero no és natural en aquest esquema: és un enter.'],['−4',1,'Enter negatiu.'],['3/5',2,'Fracció de dos enters.'],['0,25',2,'Decimal exacte: 0,25 = 1/4.'],['0,333…',2,'Decimal periòdic pur: 0,333… = 1/3.'],['0,1666…',2,'Decimal periòdic mixt: 0,1666… = 1/6.'],['√49',0,'√49 = 7, que és natural.'],['√2',3,'Arrel no exacta: infinits decimals sense període.'],['π',3,'Infinits decimals no periòdics.'],['−√9',1,'−√9 = −3, enter negatiu.'],['√(25/4)',2,'√(25/4) = 5/2, una fracció.'],['2,71828… (e)',3,'Infinits decimals no periòdics.']];
const SETS=[['N','Z','Q','R'],['Z','Q','R'],['Q','R'],['I (irracional)','R']];
const cls=()=>{const[x,l,r]=P(CL);return{q:'A quins conjunts pertany <b>'+x+'</b>? (N, Z, Q, I, R)',st:['Mira si és natural, enter, fracció o decimal, i si l\'arrel és exacta.',r],a:SETS[l].join(', ')}};

const sq=s=>{const[k,m]=simp(2,s);return m==1?''+k:T(k,2,m)+' ≈ '+dc(Math.sqrt(s))};
const pit=()=>{const t=R(0,2);
if(t==0){const a=R(2,12),b=R(2,12),s=a*a+b*b;return{q:`Un triangle rectangle té catets a = ${a} i b = ${b}. Calcula la hipotenusa.`,st:['Teorema de Pitàgores: h² = a² + b²',`h² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${s}`,`h = √${s}`],a:'h = '+sq(s)}}
if(t==1){const h=R(6,15),a=R(2,h-1),s=h*h-a*a;return{q:`Un triangle rectangle té hipotenusa h = ${h} i un catet a = ${a}. Calcula l'altre catet.`,st:['Aïllem el catet: b² = h² − a²',`b² = ${h}² − ${a}² = ${h*h} − ${a*a} = ${s}`,`b = √${s}`],a:'b = '+sq(s)}}
const D=2*R(3,9),d=2*R(3,9),s=(D/2)**2+(d/2)**2,x=Math.sqrt(s);const[k,m]=simp(2,s);
return{q:`Un rombe té diagonals de ${D} i ${d}. Calcula el seu perímetre.`,st:['Les diagonals es tallen en angle recte i es divideixen per la meitat: formen 4 triangles rectangles.',`Catets: ${D}/2 = ${D/2} i ${d}/2 = ${d/2}`,`Costat: x² = ${D/2}² + ${d/2}² = ${s}, x = √${s} ≈ ${dc(x)}`,'Perímetre = 4 · x'],a:'P = 4 · '+sq(s)+' ≈ '+dc(4*x)}};

const pot=()=>{const t=R(0,3);
if(t==0){const b=R(2,5),e=R(2,5),n=Math.random()<.6,B=n?`(−${b})`:''+b,v=Math.pow(n?-b:b,e);return{q:`Calcula ${B}${sup(e)}`,st:[`${B}${sup(e)} = ${Array(e).fill(B).join(' · ')}`,n?`Base negativa: exponent ${e%2?'senar, el resultat és negatiu':'parell, el resultat és positiu'}.`:'Base positiva: el resultat és positiu.'],a:neg(v)}}
if(t==1){let p,q;do{p=R(1,4);q=R(2,5)}while(gcd(p,q)>1);const e=R(2,4),n=Math.random()<.5,B=`${n?'−':''}${p}/${q}`;return{q:`Calcula (${B})${sup(e)}`,st:['Elevem numerador i denominador: (a/b)ⁿ = aⁿ/bⁿ',`Signe: ${n&&e%2?'negatiu (base negativa, exponent senar)':'positiu'}`,`${p}${sup(e)} = ${p**e} i ${q}${sup(e)} = ${q**e}`],a:`${n&&e%2?'−':''}${p**e}/${q**e}`}}
if(t==2){const a=P([2,3,5]),n=R(2,5),m=n+R(1,4),pr=Math.random()<.5;return pr?{q:`Simplifica: ${a}${sup(m)} · ${a}${sup(n)}`,st:['Mateixa base: es sumen els exponents.',`${m} + ${n} = ${m+n}`],a:`${a}${sup(m+n)} = ${a**(m+n)}`}:{q:`Simplifica: ${a}${sup(m)} : ${a}${sup(n)}`,st:['Mateixa base: es resten els exponents.',`${m} − ${n} = ${m-n}`],a:`${a}${sup(m-n)} = ${a**(m-n)}`}}
const a=P([2,3,5]),m=R(2,4),n=R(2,3);return{q:`Simplifica: (${a}${sup(m)})${sup(n)}`,st:['Potència d\'una potència: es multipliquen els exponents.',`${m} · ${n} = ${m*n}`],a:`${a}${sup(m*n)}`}};

const exf=()=>{const a=P([2,3,5,7]),n=R(2,5),m=R(1,4),g=gcd(m,n);
if(Math.random()<.5)return{q:`Expressa amb exponent fraccionari: ${rt(n,rd(a,m))}`,st:['ⁿ√(aᵐ) = a^(m/n): l\'exponent del radicand va al numerador i l\'índex al denominador.',`m = ${m}, n = ${n}`,g>1?`Simplifiquem la fracció ${m}/${n} = ${m/g}/${n/g}`:'La fracció ja és irreductible.'],a:`${a}^(${m/g}/${n/g})`};
return{q:`Expressa com a radical: ${a}^(${m}/${n})`,st:['a^(m/n) = ⁿ√(aᵐ)','El denominador és l\'índex i el numerador l\'exponent del radicand.'],a:rt(n,rd(a,m))}};

const eqv=()=>{if(Math.random()<.5){const a=P([2,3,5,7]),g=R(2,3),n1=P([2,3]),m1=R(1,3),n=g*n1,m=g*m1,k=gcd(n,m);return{q:`Simplifica el radical: ${rt(n,rd(a,m))}`,st:[`Calculem mcd(${n}, ${m}) = ${k}`,`Dividim l'índex i l'exponent entre ${k}: ${n}/${k} = ${n/k} i ${m}/${k} = ${m/k}`],a:rt(n/k,rd(a,m/k))}}
const i=P([2,3,4]),j=P([3,4,6].filter(v=>v!=i)),x=P([2,3,5]),y=P([2,3,5,7]),L=lcm(i,j);
return{q:`Redueix a índex comú: ${rt(i,''+x)} i ${rt(j,''+y)}`,st:[`mcm(${i}, ${j}) = ${L}`,`Primer radical: multipliquem índex i exponent per ${L/i}`,`Segon radical: multipliquem índex i exponent per ${L/j}`],a:`${rt(L,rd(x,L/i))} i ${rt(L,rd(y,L/j))}`}};

const ext=()=>{const t=R(0,2);
if(t<2){const n=t?3:2,k=R(2,7),m=P([2,3,5,6,7]),N=Math.pow(k,n)*m,[kk,mm]=simp(n,N);return{q:`Extreu factors de l'arrel: ${rt(n,''+N)}`,st:[`Descomposem ${N} en factors primers: ${N} = ${fs(fac(N))}`,`Cada factor surt de l'arrel tantes vegades com cap l'índex (${n}) en el seu exponent.`,`Els factors que no arriben a l'índex es queden dins.`],a:T(kk,n,mm)}}
const n=P([2,3]),k=R(2,6),m=P([2,3,5,6,7]);return{q:`Introdueix dins de l'arrel: ${k}${rt(n,''+m)}`,st:[`El factor ${k} entra elevat a l'índex: ${k}${sup(n)} = ${Math.pow(k,n)}`,`Multipliquem pel radicand: ${Math.pow(k,n)} · ${m} = ${Math.pow(k,n)*m}`],a:rt(n,''+Math.pow(k,n)*m)}};

const ops=()=>{if(Math.random()<.65){const m=P([2,3,5,7]),c=R(2,3),ts=[];let tot=0,st=[];for(let i=0;i<c;i++)ts.push({p:R(1,4),k:R(1,6),s:i?P([1,-1]):1});
const q=ts.map((t,i)=>(i?(t.s>0?' + ':' − '):'')+(t.p>1?t.p:'')+rt(2,''+t.k*t.k*m)).join('');
ts.forEach(t=>{const N=t.k*t.k*m;tot+=t.s*t.p*t.k;st.push(`√${N} = ${fs(fac(N))} = ${t.k==1?'':t.k}√${m}, i el coeficient queda ${t.p} · ${t.k} = ${t.p*t.k}`)});
st.push('Ara tots els radicals són semblants (mateix radicand): sumem els coeficients.','Coeficients: '+ts.map((t,i)=>(i?(t.s>0?' + ':' − '):'')+t.p*t.k).join('')+' = '+tot);
return{q:'Calcula extraient factors: '+q,st,a:tot==0?'0':T(tot,2,m)}}
const x=R(2,12),y=R(2,12),[k,m]=simp(2,x*y);return{q:`Calcula: √${x} · √${y}`,st:['Mateix índex: √a · √b = √(a·b)',`√${x} · √${y} = √${x*y}`,'Extraiem factors si és possible.'],a:T(k,2,m)}};

const rac=()=>{const t=R(0,2);
if(t==0){const a=R(1,9),b=P([2,3,5,6,7,10]),g=gcd(a,b),A=a/g,B=b/g;return{q:`Racionalitza: ${a} / √${b}`,st:[`Multipliquem numerador i denominador per √${b}`,`${a}·√${b} / (√${b}·√${b}) = ${a}√${b} / ${b}`,g>1?`Simplifiquem la fracció dividint entre ${g}`:'No es pot simplificar més.'],a:fr((A==1?'':A)+'√'+b,B)}}
if(t==1){const a=R(1,9),c=R(2,6),d=P([2,3,5,7]),s=P([1,-1]);let A=a*c,B=-a*s,D=c*c-d;if(D<0){A=-A;B=-B;D=-D}const g=gcd(gcd(A,B),D);
return{q:`Racionalitza: ${a} / (${c} ${s>0?'+':'−'} √${d})`,st:[`Multipliquem numerador i denominador pel conjugat: ${c} ${s>0?'−':'+'} √${d}`,`Denominador: (a + b)(a − b) = a² − b² → ${c}² − ${d} = ${c*c-d}`,`Numerador: ${a}·(${c} ${s>0?'−':'+'} √${d}) = ${res(a*c,-a*s,d)}`,g>1?`Simplifiquem dividint entre ${g}`:'Revisa si es pot simplificar.'],a:fr(res(A/g,B/g,d),D/g)}}
const n=P([3,4,5]),m=R(1,n-1),x=P([2,3,5]),a=R(1,9),c=a%x==0?a/x:a,den=a%x==0?1:x;
return{q:`Racionalitza: ${a} / ${rt(n,rd(x,m))}`,st:[`Multipliquem pel radical que completa l'exponent fins a ${n}: ${rt(n,rd(x,n-m))}`,`Denominador: ${rt(n,rd(x,m))} · ${rt(n,rd(x,n-m))} = ${rt(n,rd(x,n))} = ${x}`,`Numerador: ${a} · ${rt(n,rd(x,n-m))}`],a:fr((c==1?'':c)+rt(n,rd(x,n-m)),den)}};

const idn=()=>{const t=R(0,2);
if(t==0){const m=P([2,3,5,7]),x=R(1,3),y=R(1,6),s=P([1,-1]);return{q:`(${x>1?x:''}√${m} ${s>0?'+':'−'} ${y})²`,st:[`(a ${s>0?'+':'−'} b)² = a² ${s>0?'+':'−'} 2ab + b²`,`a² = (${x>1?x:''}√${m})² = ${x*x*m}`,`2ab = 2 · ${x>1?x+'√'+m:'√'+m} · ${y} = ${2*x*y}√${m}`,`b² = ${y*y}`],a:res(x*x*m+y*y,s*2*x*y,m)}}
if(t==1){let m,n;do{m=P([2,3,5,6,7,10]);n=P([2,3,5,6,7,10])}while(m==n);const s=P([1,-1]),[k,mm]=simp(2,m*n),c=m+n;
return{q:`(√${m} ${s>0?'+':'−'} √${n})²`,st:[`(a ${s>0?'+':'−'} b)² = a² ${s>0?'+':'−'} 2ab + b²`,`a² = ${m}, b² = ${n}`,`2ab = 2·√${m}·√${n} = 2√${m*n}${k>1?' = '+2*k+(mm>1?'√'+mm:''):''}`],a:mm==1?neg(c+s*2*k):res(c,s*2*k,mm)}}
const m=P([2,3,5,7]),y=R(2,6),n=P([3,5,6,10,11].filter(v=>v!=m)),u=R(0,2);
if(u==0)return{q:`(√${m} + ${y})(√${m} − ${y})`,st:['Suma per diferència: (a + b)(a − b) = a² − b²',`(√${m})² − ${y}² = ${m} − ${y*y}`],a:neg(m-y*y)};
if(u==1)return{q:`(${y} + √${m})(${y} − √${m})`,st:['Suma per diferència: (a + b)(a − b) = a² − b²',`${y}² − (√${m})² = ${y*y} − ${m}`],a:neg(y*y-m)};
return{q:`(√${m} + √${n})(√${m} − √${n})`,st:['Suma per diferència: (a + b)(a − b) = a² − b²',`(√${m})² − (√${n})² = ${m} − ${n}`],a:neg(m-n)}};

/* ---------- calcul mental ---------- */
const MQ=[()=>{const a=R(6,19),b=R(3,12);return[a+' × '+b,a*b]},()=>{const a=R(11,25);return[a+'²',a*a]},()=>{const a=R(2,20);return['√'+a*a,a]},()=>{const a=R(2,5),b=R(2,5);return[a+sup(b),Math.pow(a,b)]},()=>{const p=P([10,20,25,50]),n=20*R(1,10);return[p+'% de '+n,n*p/100]},()=>{const a=P([2,3,4,5,10]);return['∛'+a**3,a]},()=>{const a=R(12,60),b=R(12,60);return[a+' + '+b,a+b]},()=>{const a=R(2,9),b=R(2,9),c=R(2,9);return[a+' × '+b+' + '+c,a*b+c]}];
function mental(){const d=document.createElement('div');d.className='card';
d.innerHTML='<h4>Pràctica de càlcul mental (sense calculadora)</h4><div class="q"></div><input type="number" step="any" aria-label="Resposta"><div class="bt"><button class="b1">Comprova</button><button class="b2">Inicia la prova de 15 minuts</button></div><div class="fin"></div>';
const $=s=>d.querySelector(s);let a,ok=0,n=0,tm=null,end=0;
const nq=()=>{const x=P(MQ)();a=x[1];$('.q').textContent=x[0]+' = ?';$('input').value='';$('input').focus()};
const sc=m=>$('.fin').textContent=m+' Encerts: '+ok+' de '+n;
const chk=()=>{if($('input').value==='')return;n++;const g=+$('input').value==a;if(g)ok++;const m=g?'Correcte.':'Incorrecte, la resposta era '+a+'.';nq();sc(m)};
$('.b1').onclick=chk;$('input').onkeydown=e=>{if(e.key=='Enter')chk()};
$('.b2').onclick=()=>{ok=n=0;clearInterval(tm);end=Date.now()+9e5;nq();tm=setInterval(()=>{const l=Math.max(0,end-Date.now()),s=Math.ceil(l/1000);$('.b2').textContent='Temps: '+Math.floor(s/60)+':'+String(s%60).padStart(2,'0');if(!l){clearInterval(tm);$('.b2').textContent='Inicia la prova de 15 minuts';$('.q').textContent='Temps esgotat.';sc('Final de la prova.')}},500)};
nq();return d}

/* ---------- teoria i seccions ---------- */
const SEC=[
{t:'Esquema dels nombres reals',th:`<p>Els <b>nombres reals (R)</b> inclouen tots els nombres que es poden situar a la recta numèrica. Es divideixen en racionals i irracionals.</p>
<div class="box"><b>R</b> (reals)<ul><li><b>Q</b> racionals: es poden escriure com a fracció
<ul><li><b>Z</b> enters: <b>N</b> naturals (1, 2, 3...), el zero i els enters negatius (−1, −2...)</li>
<li>Decimals: exactes (0,25), periòdics purs (0,333...) i periòdics mixtos (0,1666...)</li></ul></li>
<li><b>I</b> irracionals: infinits decimals sense període (√2, π, e)</li></ul></div>
<h4>Com classificar un nombre</h4><ol><li>Simplifica'l si és una arrel exacta (√49 = 7).</li><li>Si és un decimal, mira si acaba (exacte) o si té període (és una fracció). Tots dos són racionals.</li><li>Si els decimals no acaben ni es repeteixen, és irracional.</li></ol>
<p>Un nombre natural també és enter, racional i real. Cap irracional és racional.</p>`,g:[{n:'Classifica el nombre',f:cls}]},
{t:'Teorema de Pitàgores',th:`<p>En un triangle <b>rectangle</b>, el quadrat de la hipotenusa (costat oposat a l'angle recte) és igual a la suma dels quadrats dels catets.</p>
<div class="box">h² = a² + b² &nbsp;&nbsp; h = √(a² + b²) &nbsp;&nbsp; a = √(h² − b²)</div>
<h4>On apareix en els problemes</h4><ul><li><b>Diagonal d'un rectangle</b> de costats l i a: d = √(l² + a²).</li><li><b>Rombe</b>: les diagonals es tallen en angle recte i es divideixen per la meitat. El costat és x = √((D/2)² + (d/2)²) i el perímetre és 4x.</li><li><b>Circumferència</b>: longitud = 2πr = πd.</li></ul>
<h4>Com resoldre un problema</h4><ol><li>Fes un dibuix i marca el triangle rectangle.</li><li>Identifica la hipotenusa (el costat més llarg, oposat a l'angle recte).</li><li>Aplica la fórmula i extreu l'arrel.</li><li>Respon amb una frase i amb les unitats (arrodoneix si t'ho demanen).</li></ol>
<div class="ex"><b>Problema tipus (el Camp Nou, 105 m × 68 m):</b> la diagonal és √(105² + 68²) = √15649 ≈ 125,10 m. Una volta dels defenses es calcula sumant els trajectes del circuit i multiplicant pel nombre de voltes. El porter fa una circumferència de diàmetre 68 m: L = π · 68 ≈ 213,63 m, que es multiplica per les voltes. Per passar a km, divideix entre 1000. Comprova en l'enunciat què inclou el circuit dels defenses.</div>`,g:[{n:'Problemes de Pitàgores',f:pit}]},
{t:'Potències i propietats',th:`<p>aⁿ = a · a · ... · a (n factors). La <b>base</b> és a i l'<b>exponent</b> és n.</p>
<table><tr><th>Propietat</th><th>Fórmula</th></tr><tr><td>Producte, mateixa base</td><td>aᵐ · aⁿ = aᵐ⁺ⁿ</td></tr><tr><td>Quocient, mateixa base</td><td>aᵐ : aⁿ = aᵐ⁻ⁿ</td></tr><tr><td>Potència d'una potència</td><td>(aᵐ)ⁿ = aᵐ·ⁿ</td></tr><tr><td>Producte, mateix exponent</td><td>aⁿ · bⁿ = (a·b)ⁿ</td></tr><tr><td>Quocient, mateix exponent</td><td>aⁿ : bⁿ = (a:b)ⁿ</td></tr><tr><td>Exponent zero i negatiu</td><td>a⁰ = 1, a⁻ⁿ = 1/aⁿ</td></tr></table>
<div class="box"><b>Signes:</b> base negativa amb exponent parell dóna resultat positiu, i amb exponent senar dóna resultat negatiu. Compte: (−2)⁴ = 16, però −2⁴ = −16.<br>La suma i la resta de potències <b>no</b> tenen propietat: es calcula cada potència i després es suma o es resta (2³ + 2² = 8 + 4 = 12).</div>
<p>Potència d'una fracció: (a/b)ⁿ = aⁿ/bⁿ.</p>`,g:[{n:'Calcula i simplifica potències',f:pot}]},
{t:'Radicals i exponent fraccionari',th:`<p>Una arrel és una potència d'exponent fraccionari.</p><div class="box">ⁿ√(aᵐ) = a^(m/n) &nbsp;&nbsp; (n és l'índex, a el radicand)</div>
<h4>Resoldre una arrel</h4><p>Descompon el radicand en factors primers i agrupa'ls de n en n. Exemple: √144 = √(2⁴ · 3²) = 2² · 3 = 12.</p>
<ul><li>Arrel d'índex parell d'un nombre negatiu: no és un nombre real.</li><li>Arrel d'índex senar d'un negatiu: sí que existeix (∛(−8) = −2).</li><li>√a · √a = a, i (√a)² = a.</li></ul>`,g:[{n:'Radical i exponent fraccionari',f:exf}]},
{t:'Radicals equivalents',th:`<p>Dos radicals són <b>equivalents</b> si representen el mateix nombre. Es mantenen equivalents si es multiplica (o es divideix) l'índex i l'exponent del radicand pel mateix nombre.</p>
<div class="box">ⁿ√(aᵐ) = ⁿ·ᵖ√(aᵐ·ᵖ)</div>
<ul><li><b>Simplificar:</b> divideix índex i exponent pel seu mcd.</li><li><b>Reduir a índex comú:</b> calcula el mcm dels índexs i amplifica cada radical. Serveix per multiplicar, dividir o comparar radicals d'índex diferent.</li></ul>`,g:[{n:'Simplifica i redueix a índex comú',f:eqv}]},
{t:'Extreure i introduir factors',th:`<p><b>Extreure:</b> descompon el radicand en factors primers. Cada factor amb exponent igual o més gran que l'índex surt de l'arrel (es divideix l'exponent entre l'índex; el residu es queda dins).</p>
<div class="ex">√72 = √(2³ · 3²) = 2 · 3 · √2 = 6√2</div>
<p><b>Introduir:</b> el factor de fora entra elevat a l'índex.</p><div class="ex">3√2 = √(3² · 2) = √18</div>`,g:[{n:'Extreu o introdueix factors',f:ext}]},
{t:'Operacions amb radicals',th:`<ul><li><b>Suma i resta:</b> només amb radicals semblants (mateix índex i radicand). Primer extreu factors per fer-los semblants, després suma els coeficients: 3√2 + 5√2 = 8√2.</li><li><b>Producte i quocient:</b> amb el mateix índex, √a · √b = √(ab) i √a : √b = √(a/b). Amb índex diferent, redueix a índex comú.</li><li><b>Arrel d'una arrel:</b> es multipliquen els índexs: ᵐ√(ⁿ√a) = ᵐ·ⁿ√a.</li><li><b>Potència d'un radical:</b> (ⁿ√a)ᵐ = ⁿ√(aᵐ).</li></ul>
<div class="box">Atenció: √a + √b no és √(a+b).</div>`,g:[{n:'Operacions amb radicals',f:ops}]},
{t:'Racionalització',th:`<p>Racionalitzar és eliminar els radicals del denominador sense canviar el valor de la fracció (multipliquem dalt i baix pel mateix).</p>
<h4>Cas 1: arrel quadrada</h4><div class="ex">a/√b = a√b / (√b · √b) = a√b / b</div>
<h4>Cas 2: arrel d'índex n</h4><p>Multiplica pel radical que fa que l'exponent del radicand arribi a n.</p><div class="ex">a / ⁿ√(xᵐ) = a · ⁿ√(xⁿ⁻ᵐ) / x</div>
<h4>Cas 3: binomi amb arrel</h4><p>Multiplica pel <b>conjugat</b> (el mateix binomi amb el signe canviat) i aplica suma per diferència.</p><div class="ex">a/(c + √d) = a(c − √d) / (c² − d)</div>
<p>Al final, simplifica la fracció si tots els termes tenen un divisor comú.</p>`,g:[{n:'Racionalitza',f:rac}]},
{t:'Identitats notables',th:`<table><tr><th>Identitat</th><th>Desenvolupament</th></tr><tr><td>Quadrat d'una suma</td><td>(a + b)² = a² + 2ab + b²</td></tr><tr><td>Quadrat d'una diferència</td><td>(a − b)² = a² − 2ab + b²</td></tr><tr><td>Suma per diferència</td><td>(a + b)(a − b) = a² − b²</td></tr></table>
<p>Amb radicals recorda que (√m)² = m i √m · √n = √(mn). Finalment, simplifica el resultat.</p><div class="ex">(√7 + √2)² = 7 + 2√14 + 2 = 9 + 2√14</div>`,g:[{n:'Desenvolupa la identitat notable',f:idn}]},
{t:'Càlcul mental',th:`<p>Miniprova de 15 minuts sense calculadora. Domina aquests recursos:</p><ul><li>Taules de multiplicar i quadrats fins a 25.</li><li>Arrels exactes: √1 fins a √400, i cubs fins a 10³.</li><li>Percentatges: 10% és dividir entre 10, 50% entre 2, 25% entre 4, 20% és el doble del 10%.</li><li>Multiplicar per 5: multiplica per 10 i divideix entre 2.</li><li>Sumes: separa desenes i unitats (37 + 48 = 30 + 40 + 7 + 8).</li></ul>`,g:[{n:'mental'}]}];

function card(g){const d=document.createElement('div');d.className='card';d.innerHTML=`<h4>${g.n}</h4><div class="q"></div><div class="ans"></div><div class="bt"><button class="b1">Nou exercici</button><button class="b2">Mostra el procediment</button></div>`;
let cur;const nw=()=>{cur=g.f();d.querySelector('.q').innerHTML=cur.q;d.querySelector('.ans').innerHTML=''};
d.querySelector('.b1').onclick=nw;d.querySelector('.b2').onclick=()=>{d.querySelector('.ans').innerHTML='<ol>'+cur.st.map(s=>'<li>'+s+'</li>').join('')+'</ol><div class="fin">Resposta: '+cur.a+'</div>'};nw();return d}
const nav=document.getElementById('nav'),main=document.getElementById('main');
function show(i){const s=SEC[i];main.innerHTML='<h2>'+s.t+'</h2><section class="th">'+s.th+'</section><h3>Practica</h3>';s.g.forEach(g=>main.append(g.n=='mental'?mental():card(g)));[...nav.children].forEach((b,j)=>b.classList.toggle('on',j==i));scrollTo(0,0)}
SEC.forEach((s,i)=>{const b=document.createElement('button');b.textContent=(i+1)+'. '+s.t;b.onclick=()=>show(i);nav.append(b)});
show(0);
