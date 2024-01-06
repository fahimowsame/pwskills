const sentence = "Please please submit your assignment on time, your assignment are important"


function wordCounter (sentence){
    const wordMap = new Map();
    const word = sentence.split(/\s+/);

    for (let i = 0; i < word.length; i++){
        const clean = word[i].toLowerCase().replace(',', '');
        if(clean.length > 0){
            const WordReturn = wordMap.get(clean) || 0;
            wordMap.set(clean, WordReturn + 1);
            
        }
    }

    return wordMap;
}

const result = wordCounter(sentence);
console.log(result)