var tecs=document.querySelectorAll('#banner li');
var neir=document.querySelectorAll('#content article');

for(var i=0;i<tecs.length;i++)
{
    var tec=tecs[i];
    setTechandler(tec,i);
}

function setTechandler(tec,j)
{
    tec.onclick=function()
    {
        for(var n=0;n<tecs.length;n++)
        {
            tecs[n].removeAttribute('class');
            tecs[n].setAttribute('class','nav_item');
        }
        tec.setAttribute('class','itembeginning');
        for(i=0;i<neir.length;i++)
        {
            if(neir[i].getAttribute('class'))
            {
                neir[i].removeAttribute('class');
            }
        }
        neir[j].setAttribute('class','showing');
    }
}