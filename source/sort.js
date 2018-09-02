const sort = (words) => {
    return words.split(" ").map((elem) => {
        const sortedWord = elem.toLowerCase().split("").sort((s1, s2) => s1.localeCompare(s2)
        ).join("");
        return [sortedWord[0].toUpperCase(), ...sortedWord.slice(1)].join("");

    }).sort((s1, s2) => s1.localeCompare(s2)).join(" ");
};
