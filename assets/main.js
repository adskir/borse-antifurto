(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded',false)})});
  }
  var st=document.getElementById('tintStage'),val=document.getElementById('vltVal'),txt=document.getElementById('vltTxt');
  document.querySelectorAll('.tint-ctrl button').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.tint-ctrl button').forEach(function(x){x.classList.remove('on')});
      btn.classList.add('on');
      st.style.setProperty('--vlt',btn.dataset.v);
      val.textContent=btn.textContent;txt.textContent=btn.dataset.t;
    });
  });
  var f=document.getElementById('quote');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f);
    var m='Ciao Antonio, sono '+d.get('nome')+'.\nVorrei un preventivo per: '+d.get('servizio')+'\nAuto: '+d.get('auto')+(d.get('note')?'\nNote: '+d.get('note'):'');
    window.open('https://wa.me/393334150804?text='+encodeURIComponent(m),'_blank','noopener');
  });}
})();
