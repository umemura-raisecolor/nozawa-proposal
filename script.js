if('scrollRestoration' in history)history.scrollRestoration='manual';
(function(){const t=()=>{if(!location.hash){window.scrollTo(0,0);}};t();window.addEventListener('load',t);window.addEventListener('pageshow',t);})();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.toggle('active', item === button));
    const category = button.dataset.filter;
    cards.forEach(card => {
      const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
const cform=document.getElementById('cform');
if(cform){cform.addEventListener('submit',e=>{e.preventDefault();const st=document.getElementById('form-status');
 if(!cform.checkValidity()){st.style.color='#c0392b';st.textContent='必須項目のご記入と、プライバシーポリシーへの同意をお願いします。';return;}
 st.style.color='';st.textContent='送信ありがとうございました。内容を確認して、折り返しご連絡します。(※これはデモです。実際には送信されません)';cform.reset();});}

// 施工事例カルーセル
document.querySelectorAll('[data-cs]').forEach(function(cs){
  var tr=cs.querySelector('.cs-track'),n=tr.children.length,dots=cs.parentNode.querySelectorAll('.cs-dot'),
      pv=cs.querySelector('.prev'),nx=cs.querySelector('.next');
  function idx(){return Math.round(tr.scrollLeft/tr.clientWidth)}
  function go(i){i=Math.max(0,Math.min(n-1,i));tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'})}
  function upd(){var i=idx();dots.forEach(function(d,k){d.classList.toggle('on',k===i)});pv.disabled=i===0;nx.disabled=i===n-1}
  pv.addEventListener('click',function(){go(idx()-1)});nx.addEventListener('click',function(){go(idx()+1)});
  dots.forEach(function(d,k){d.addEventListener('click',function(){go(k)})});
  tr.addEventListener('scroll',function(){clearTimeout(tr._t);tr._t=setTimeout(upd,60)});upd();
});

// 現場日記の年しぼりこみ
document.querySelectorAll('.dy-btn').forEach(function(b){
  b.addEventListener('click',function(){
    var y=b.dataset.y;
    document.querySelectorAll('.dy-btn').forEach(function(x){x.classList.toggle('on',x===b)});
    document.querySelectorAll('.dy-item').forEach(function(it){it.classList.toggle('hide',y!=='all'&&it.dataset.y!==y)});
    var l=document.querySelector('.dy-years');window.scrollTo({top:l.getBoundingClientRect().top+window.scrollY-100,behavior:'smooth'});
  });
});
