function $(sel,ctx=document){return ctx.querySelector(sel)}
function $$(sel,ctx=document){return [...ctx.querySelectorAll(sel)]}
function toast(msg){let el=$('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}el.textContent=msg;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),1800)}
function copyText(text){navigator.clipboard.writeText(text).then(()=>toast('Copied to clipboard')).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast('Copied to clipboard')})}
function clamp(n,min,max){return Math.min(max,Math.max(min,n))}
function round(n,d=2){const p=10**d;return Math.round(n*p)/p}
function formatNum(n,d=2){if(!isFinite(n))return '—';return Number(n).toLocaleString(undefined,{maximumFractionDigits:d})}
function parseDate(str){if(!str)return null;const d=new Date(str);return isNaN(d)?null:d}
function daysBetween(a,b){const ms=86400000;const utc1=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());const utc2=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate());return Math.round((utc2-utc1)/ms)}
(function(){document.getElementById('theme-toggle')?.addEventListener('click',()=>{const isDark=document.documentElement.classList.toggle('dark');localStorage.setItem('theme',isDark?'dark':'light')})})();
