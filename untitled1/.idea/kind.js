var tabs = document.querySelectorAll('.linestyle li a');
var panels = document.querySelectorAll('#categray .kinds');

var i;
for(i = 0; i < tabs.length; i++) 
{
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) 
{
  tab.onclick = function() 
  {
    for(i = 0; i < tabs.length; i++) 
    {
      if(tabs[i].getAttribute('class')) 
      {
        tabs[i].removeAttribute('class');
      }
    }

    tab.setAttribute('class', 'itembeginning');

    for(i = 0; i < panels.length; i++) 
    {
      if(panels[i].getAttribute("active1")) 
      {
        panels[i].removeAttributeNode('active1');
      }
    }

    panels[tabPos].setAttribute('class', 'kinds');
    panels[tabPos].setAttribute('class', 'active1');
  }
}
