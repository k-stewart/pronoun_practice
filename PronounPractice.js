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

function matchCase(text, pattern) {
    var result = '';

    for(var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }

    return result;
}

function replaceAllInstancesOf(oldStr, newStr, targetText) {
  return targetText.replace(RegExp("\\b" + oldStr + "\\b", "gi"), function(match) {
    return matchCase(newStr, match);
  });
};

Object.keys(base).forEach(function(type) {
  document.body.innerHTML = replaceAllInstancesOf(base[type], target[type], document.body.innerHTML);
});

document.body.style.border = "5px solid red";
