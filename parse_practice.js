function tokenize (jsonString){
    const tokens = [];
    let i = 0;

    while( i < jsonString.length){
        const char = jsonString[i];

        if( /\s/.test(char)){
            i++;
            continue;
        }

        if (['{', '}', '[', ']' , ':' , ','].includes(char)){
        tokens.push({ type: 'symbol', value : char});
        i++;
        continue;
        }

        if (char === '"'){
            let start = i + 1;
            let end = jsonString.indexOf('"' , start);
            if( end === -1) throw new SyntaxError("Unterminated string");
            tokens.push({type : 'string', value : jsonString.slice(start, end)})
            i = end + 1;
            continue; 
        }

        if (/\d/.test(char) || char === '-'){
            let start = i;
            while (/\d/.test(jsonString[i]) || jsonString[i] === '.') i++;
            tokens.push({type : 'number', value: parseFloat(jsonString.slice(start, i))});
            continue;          
        }

        if (jsonString.startsWith('true', i)){
            tokens.push({type: 'literal', value: true});
            i += 4;
            continue;
        }

        if (jsonString.startsWith('false', i)){
            tokens.push({type: 'literal', value: false});
            i += 5;
            continue;
        }

        if (jsonString.startsWith('null', i)){
            tokens.push({type: 'literal', value: null});
            i += 4;
            continue;
        }

        throw new SyntaxError(`Invalid String ${char}`);
    }
    return tokens;
}

const jsonString = '{"name": "John", "age": 30, "isStudent": true, "grades": [85, 90, 78]}';
console.log(tokenize(jsonString));

let tokens = tokenize(jsonString);
function validation(tokens){
    const arr = [];
    let assume = "value";
    
  console.log(arr);
  

    tokens.forEach((token, index) => {
        
        if (assume === 'value') {
            if (token.type === 'symbol' && token.value === '{') {
                arr.push('{');
                assume = 'key';
            } else if (token.type === 'symbol' && token.value === '[') {
                arr.push('[');
                assume = 'value';
            } else if (['string', 'number', 'literal'].includes(token.type)) {
                assume = 'comma';
            } else {
                throw new SyntaxError(`unexpected token at index ${index}: ${JSON.stringify(token)}`);
            }
        }
    })
}

validation(tokens);


