const sort = (words) => {
            let wordArray = words.split(" ");
            let newWordArray = wordArray.map((elem) => {
                let str = elem.toLowerCase();
                let sortedWord = str.split("").sort((s1, s2) => {
                    return s1.localeCompare(s2)
                }).join("");
                elem = [sortedWord[0].toUpperCase(), ...sortedWord.slice(1)].join("");
                return elem
            });
            newWordArray.sort((s1, s2) => {
                return s1.localeCompare(s2)
            });
            return newWordArray.join(" ");
        };
