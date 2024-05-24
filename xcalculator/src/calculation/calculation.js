function tokenization(expression){
    let tokens = []
    let number = ''

    for(let char of expression){
        if(!isNaN(char) || char === '.'){
            number += char
        }else{
            if(number){
                tokens.push(parseFloat(number))
                number =''
            }
            if(char.trim()){
                tokens.push(char)
            }
        }
    }

    if(number){
        tokens.push(parseFloat(number))
    }

    return tokens
}

function evaluateTokens(tokens){
    for(let i=0;i<tokens.length;i++){
        if(tokens[i] === '*' || tokens[i] === '/'){
            let left = tokens[i-1]
            let right = tokens[i+1]
            if(isNaN(left) || isNaN(right)){
                return "Error"
            }
            if(right === 0 && tokens[i] === '/'){
                if(left === 0){
                    return "NaN"
                }
                if(left > 0){
                    return "Infinity"
                }
            }

            let result = tokens[i] === '*' ? left * right : left / right
            tokens.splice(i-1, 3 , result)
            i--

        }
    }

    for(let i=0;i<tokens.length;i++){
        if(tokens[i] === '+' || tokens[i] === '-'){
            let left = tokens[i-1]
            let right = tokens[i+1]
            if(isNaN(left) || isNaN(right)){
                return Error
            }
            let result = tokens[i] === '+' ? left + right : left - right
            tokens.splice(i-1, 3 , result)
            i--
        }
    }

    return tokens[0]
}

export default function calculation(expression){
    let tokens = tokenization(expression)
    let result = evaluateTokens(tokens)
    return result
}
