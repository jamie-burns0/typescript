function stringIsNotAPalindromeCandidate( data: string | null ): boolean {
    if( !data || data.length === 0 ) {
        return true;
    }

    const invalidCharactersRegex = /[^a-zA-Z]/

    return data.search(invalidCharactersRegex) != -1;
}


function toCharacterFrequencyMap( data: string | null ): Map<string,number> {
    const map = new Map<string, number>();
    if( data === null ) {
        return map;
    }
    for( const character of data ) {
        map.set( character, (map.get(character) || 0) + 1 );
    }
    return map;
}

function mapIsNotAPalidromeCandidate( map: Map<string, number> | null ): boolean {
    if( map === null || map.size === 0 ) {
        return true;
    }
    let unpairedCharacters = 0;
    for (const frequency of map.values()) {
        if (frequency % 2 === 1) {
            unpairedCharacters++;
            if (unpairedCharacters > 1) {
                return true;
            }
        }
    }
    return false;
}

function characterFrequencyMapToPalindrome( map: Map<string,number> ): string {
    const palindromeLength: number = Array.from(map.values()).reduce( (s,v) => s + v, 0 );
    const palindrome: string[] = new Array<string>(palindromeLength).fill('');
    let position = 0;
    for( const [character, frequency] of map.entries()) {
        let f = frequency;
        if( f % 2 === 1 ) {
            palindrome[ Math.floor(palindromeLength / 2) ] = character;
            f--;
        }

        while ( f > 0 ) {
            palindrome[position] = character;
            palindrome[palindromeLength - position -1 ] = character;
            position++;
            f -= 2;
        }
    }
    return palindrome.join('');
}

function makePalindromeFrom( data: string | null ): string | undefined {

    if( stringIsNotAPalindromeCandidate(data) ) {
        return undefined;
    }

    const map: Map<string,number> = toCharacterFrequencyMap( data );

    if( mapIsNotAPalidromeCandidate(map)) {
        return undefined;
    }

    return characterFrequencyMapToPalindrome(map);
}

export {stringIsNotAPalindromeCandidate, mapIsNotAPalidromeCandidate, toCharacterFrequencyMap, characterFrequencyMapToPalindrome, makePalindromeFrom};