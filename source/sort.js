const sort = (words) => {
            let wordArray = words.split(" ");

            for (let i = 0; i < wordArray.length; i++) {
                let str = wordArray[i].toLowerCase();
                let sortedWord = str.split("").sort(function (s1, s2) {
                    return s1.localeCompare(s2)

                }).join("");

                wordArray[i] = sortedWord[0].toUpperCase() + sortedWord.slice(1);
            }

            wordArray.sort(function (s1, s2) {
                return s1.localeCompare(s2)
            });

            wordArray.join(" ");
            return wordArray.join(" ");
        };
