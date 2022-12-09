// click service1
document.querySelector('#service1').addEventListener('click',displayCloud);


function displayCloud(){
  const cloud1 = document.querySelector('#cloud');
  //class List allows you to access the classes of an element. Thus toggle will work on CLASSES. not ID.
  cloud1.classList.toggle('hidden');
}
