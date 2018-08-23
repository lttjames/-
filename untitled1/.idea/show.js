var tabs1 = document.querySelectorAll('.kinds li a');
var panels1 = document.querySelectorAll('#content');

for(var i = 0; i < tabs1.length; i++) 
{
  var tab = tabs1[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) 
{
  tab.onclick = function() 
  {
    for(var num = 0; num < tabs1.length; num++) 
    {
      tabs1[num].removeAttribute('class');
      panels1[tabPos].setAttribute('class', 'location')
    }

    tab.setAttribute('class', 'itembeginning');
    panels1[tabPos].setAttribute('class', 'location active1');
  }
}