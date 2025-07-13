document.addEventListener("DOMContentLoaded",function(){
  const Btn=document.querySelector('.toggle-btn');
  const header=document.getElementById('header');
  const mask=document.getElementById('mask');
  const Navilink=document.querySelectorAll('#navi');

  Btn.addEventListener('click',function(){
    header.classList.toggle('open');
    

  });

  mask.addEventListener('click',function(){
    header.classList.remove('open');
    
  });
  
  Navilink.forEach(function(link){
    link.addEventListener('click',function(){
    header.classList.remove('open');

    });


  /*ハンバーガーメニューのバッテン設定*/

  Btn.addEventListener('clicl',function(){


  })


















  });
























});