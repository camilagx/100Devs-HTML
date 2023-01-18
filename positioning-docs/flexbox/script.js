const displayFlexBtn = document.querySelector('#displayFlexBtn');

displayFlexBtn.addEventListener('click', function(){
  const container1 = document.querySelector('.container1');

  /*
  if(displayFlexBtn.value === 'Undo'){
    wrapperOne.classList.toggle('flex-style');
   
  }else{
    //Make wrapper display flex
    wrapperOne.classList.add('flex-style');
    displayFlexBtn.value = 'Undo';
  } 
  */
 let contDisplay = container1.style.display;

 if(contDisplay === 'flex'){
  container1.style.display = 'unset';
  displayFlexBtn.value = 'Display flex';
 }else{
  container1.style.display = 'flex';
  displayFlexBtn.value = 'Undo';
 }
})

