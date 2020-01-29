const truths = require('./lib/truths.json');
const wyrResponse = require('./lib/wyrResponse.json');
const blacklist = require('./lib/blacklist.json');
const natural = require('natural');


function toFirstPerson(sent) {
  sent = sent.replace("your", "my");
  sent = sent.replace("you", "I");
  sent = sent.replace("yourself", "myself");

  return sent;
}

async function replacementGrammar(options, sentences){
  let sentence = sentences[Math.floor(Math.random()*sentences.length)];
  let matches = (sentence.match(/\$/g) || []).length;
  for(var i=0; i<matches; i++) {
    const optIndex = Math.floor(Math.random()*options.length);
    sentence = sentence.replace(/\$/, options[optIndex]);
    options.splice(optIndex, 1);
  }
  console.log(sentence)
  return sentence;
}


export const preProcessor = async (sent) => {
  console.log("preprocessor called", sent);
  let sendToDF = true;
  let sentArr = sent.split(" ");

  //check against words blacklist
  let matched = sentArr.filter(word => blacklist.includes(word))
  if(matched.length !== 0){
    return "hey, cut that out!"
    //await createContext('blacklist');
  }

  //parse out obvious would you rathers
  var subSent;
  
  if(natural.LevenshteinDistance("Would you rather", sent, {search: true}).distance < 3){
    //remove substring
    var subSent = sent.replace(natural.LevenshteinDistance("Would you rather", sent, {search: true}).substring, '').trim();
  }

  else if(natural.LevenshteinDistance("would u rather", sent, {search: true}).distance < 3){
    var subSent = sent.replace(natural.LevenshteinDistance("would u rather", sent, {search: true}).substring, '').trim();
  }

  else if(natural.LevenshteinDistance("wd u rather", sent, {search: true}).distance < 3){
    var subSent = sent.replace(natural.LevenshteinDistance("wd u rather", sent, {search: true}).substring, '').trim();
  }

  if(subSent) {
    var options = subSent.split(' or ');
    options = options.map(function(str) {return str = toFirstPerson(str.replace(/\?+/g, ""));});

    if(options.length > 1){
      sendToDF = false;
      const output = replacementGrammar(options, wyrResponse);
      return output;
    }
  }
}
