var tabs1 = document.querySelectorAll('.kinds li a');
var panels1 = document.querySelectorAll('#content');

for(var i = 0; i < 2; i++) 
{
  var tab = tabs1[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPo) 
{
  tab.onclick = function() 
  {
    for(var num = 0; num < 2; num++) 
    {
      tabs1[num].removeAttribute('class');
      panels1[num].setAttribute('class', 'location');
    }

    tab.setAttribute('class', 'itembeginning');
    panels1[tabPo].setAttribute('class', 'location active1');
  }
}
for(var j = 4; j < 7; j++)
{
  var tab1=tabs1[j];
  links(tab1, j);
}

function links(tab1,tabPos1)
{
  tab1.onclick = function() 
  {
    for(var num = 4; num < 7; num++) 
    {
      tabs1[num].removeAttribute('class');
      panels1[num].setAttribute('class', 'location');
    }

    tab1.setAttribute('class', 'itembeginning');
    panels1[tabPos1].setAttribute('class', 'location active1');
  }
}