function translatePigLatin(str) {
  let regex = /a|e|i|o|u/g;
  if (str[0].match(regex)) {
    return str + "way";
  } else {
    let vowelIndex = str.indexOf(str.match(regex)[0]);
    let wordStart = str(0, vowelIndex);
    return str.substring(vowelIndex) + wordStart + "ay";
  }
}

translatePigLatin("excel");
