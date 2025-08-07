function solution(spell, dic) {
    const sorted_spell = spell.sort().join("");
    
    for (const word of dic) {
        const sorted_word = [...word].sort().join("");
        if (sorted_spell === sorted_word) return 1;
    }
    
    return 2;
}