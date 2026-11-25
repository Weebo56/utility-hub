(function(){
  const grid=document.getElementById('tools-grid');
  const search=document.getElementById('tool-search');
  const empty=document.getElementById('empty-state');
  const pills=document.querySelectorAll('.pill');
  let currentCat='all';
  function render(tools){
    grid.innerHTML='';
    if(!tools.length){empty.hidden=false;return;}
    empty.hidden=true;
    const frag=document.createDocumentFragment();
    tools.forEach(t=>{
      const a=document.createElement('a');
      a.href=`tools/${t.id}.html`;
      a.className='tool-card';
      a.innerHTML=`<div class="tool-icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p><div class="tool-tags">${t.tags.slice(0,3).map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>`;
      frag.appendChild(a);
    });
    grid.appendChild(frag);
  }
  function filter(){
    const q=(search.value||'').trim().toLowerCase();
    let list=TOOLS;
    if(currentCat!=='all')list=list.filter(t=>t.cat===currentCat);
    if(q)list=list.filter(t=>t.name.toLowerCase().includes(q)||t.desc.toLowerCase().includes(q)||t.tags.some(tag=>tag.includes(q))||t.id.includes(q));
    render(list);
  }
  search.addEventListener('input',filter);
  document.getElementById('clear-search')?.addEventListener('click',()=>{search.value='';filter();search.focus();});
  pills.forEach(p=>p.addEventListener('click',()=>{pills.forEach(x=>x.classList.remove('active'));p.classList.add('active');currentCat=p.dataset.cat;filter();}));
  document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==search&&!e.metaKey&&!e.ctrlKey){e.preventDefault();search.focus();}});
  document.getElementById('theme-toggle')?.addEventListener('click',()=>{const isDark=document.documentElement.classList.toggle('dark');localStorage.setItem('theme',isDark?'dark':'light');});
  render(TOOLS);
})();
