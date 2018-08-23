var tabs = document.querySelectorAll('.linestyle li a');
var panels = document.querySelectorAll('#categray .kinds');

for(var i = 0; i < tabs.length; i++) 
{
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) 
{
  tab.onclick = function() 
  {
    for(var num = 0; num < tabs.length; num++) 
    {
      tabs[num].removeAttribute('class');
      panels[num].setAttribute('class', 'linestyle kinds');
    }

    tab.setAttribute('class', 'itembeginning');
    panels[tabPos].setAttribute('class', 'kinds linestyle active1');
  }
}
