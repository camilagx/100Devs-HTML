const displayFlexBtn = document.querySelector('#displayFlexBtn');

displayFlexBtn.addEventListener('click', function(){
  let wrapperOne = document.querySelector('.wrapper1');

  if(displayFlexBtn.value === 'Undo'){
    wrapperOne.classList.toggle('flex');
    displayFlexBtn.value = 'Display flex';
  }else{
    //Make wrapper display flex
    wrapperOne.classList.add('flex');
    displayFlexBtn.value = 'Undo';
  } 
})

