module.exports = function check(str, bracketsConfig) {
//   your solution
    let brackets = str.split('');
	newBrackets = [];
    holder = [];
	
	for(let i = 0; i < bracketsConfig.length; i++) {
		newBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}

    for(let i = 0; i < brackets.length; i++) {
		if(brackets[i] === holder[holder.length - 1]) {
			holder.pop();
		} else {
            if (newBrackets[brackets[i]] !== undefined) { 
                holder.push(newBrackets[brackets[i]]); 
            } else {
                return false;
		    }
        }
    }
    return holder.length == 0;
}
