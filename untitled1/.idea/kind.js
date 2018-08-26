var tabs = document.querySelectorAll('#direction li a');
var panels = document.querySelectorAll('#categray .kinds');
var ppt = document.querySelectorAll('#content');

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
      ppt[num].setAttribute('class', 'location');
    }

    tab.setAttribute('class', 'itembeginning');
    panels[tabPos].setAttribute('class', 'kinds linestyle active1');
    switch (tabPos)
    {
      case 0:
        ppt[0].setAttribute('class', 'location active1');
        break;
      case 1:
        ppt[2].setAttribute('class', 'location active1');
        break;
      case 2:
        ppt[3].setAttribute('class', 'location active1');
        break;
      case 3:
        ppt[4].setAttribute('class', 'location active1');
        break;
      case 4:
        ppt[7].setAttribute('class', 'location active1');
        break;
      default:
        ppt[8].setAttribute('class', 'location active1');
        break;
    }
  }
}
