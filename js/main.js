// FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.parentElement;
      var isOpen=item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});
      // toggle clicked
      if(!isOpen)item.classList.add('open');
    });
  });
  // nav mobile toggle
  document.querySelector('.hamburger').addEventListener('click',function(){
    var l=document.querySelector('.nav-links');
    l.style.display = l.style.display==='flex' ? 'none' : 'flex';
    l.style.flexDirection='column'; l.style.alignItems='flex-start'; l.style.padding='16px 0';
  });