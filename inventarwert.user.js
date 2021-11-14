// ==UserScript==
// @name        Inventarwert
// @namespace   https://github.com/TFA-N/arthoria-gm
// @downloadURL https://github.com/TFA-N/arthoria-gm/raw/main/inventarwert.user.js
// @updateURL   https://github.com/TFA-N/arthoria-gm/raw/main/inventarwert.user.js
// @include     /^https?://arthoria\.de/\?p=inventory*/
// @include     /^https?://arthoria\.de/index\.php\?p=inventory*/
// @grant       none
// @version     1.0
// @author      Clum aka TFA-N
// @description 11/13/2021, 9:19:12 AM
// ==/UserScript==

var golditems = 
      {
        "alte Silbermünze": 40,
        "Wüstenkristall": 68,
        "Hufeisen": 38,
        "heilendes Wasser": 28,
        "Goldnugget": 102,
        "Silbernugget": 48
      }

//-------------------------------------------------------------
// do not change code after this line
//-------------------------------------------------------------


function findItemsInTable(text)
{
  var res = document.getElementsByTagName("td");
  var ret = [];
    for (var i = 0; i < res.length; i++)
    {
      if (res[i].childNodes.length == 2)
      {
        if (res[i].firstChild.firstChild)
        {
          if (res[i].firstChild.firstChild.data == text) ret.push(res[i]);
        }
      }
    }
    return ret;
}

function calculateInventoryValue()
{
  var value = 0;
  var elements;
  for (var key in golditems)
  {
      elements = findItemsInTable(key);
      if(elements.length > 0)
      {
        value += parseInt(elements[0].childNodes[1].data.replace(/\D/g,''))*golditems[key];
      }
      
  }
  return value;
}

function displayInventoryValue(value)
{
  if(value > 0)
  {
    var text = document.getElementsByTagName("h1")[0].textContent + " " + value + " Gold in Golditems!";
    document.getElementsByTagName("h1")[0].textContent = text;
  }
}

displayInventoryValue(calculateInventoryValue())
