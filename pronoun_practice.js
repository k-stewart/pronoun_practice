"use strict";

var base = {
  "subject": 'he',
  "object": 'him',
  "posessive": 'his',
  "reflexive": 'himself',
};

var target = {
  "subject": 'they',
  "object": 'them',
  "posessive": 'their',
  "reflexive": 'themself',
};

//function matchCase(text, pattern) {
    //var result = '';

    //for(var i = 0; i < text.length; i++) {
        //var c = text.charAt(i);
        //var p = pattern.charCodeAt(i);

        //if(p >= 65 && p < 65 + 26) {
            //result += c.toUpperCase();
        //} else {
            //result += c.toLowerCase();
        //}
    //}

    //return result;
//}
                                                            ////function(match) {
    ////return matchCase(newStr, match);
  ////})

// replace the pronoun
// match the case
// update the verb
// don't get confused by substrings, like "tHEmatic"

function replaceAllInstancesOf(type) {
  var oldStr = new RegExp(base[type], "gi");
  var newStr = target[type];

  document.body.innerHTML = document.body.innerHTML.replace(oldStr, newStr);
};

Object.keys(base).forEach(function(type) {
  replaceAllInstancesOf(type);
});

document.body.style.border = "5px solid red";
