_Pig Latin Rules:_
1) For words beginning with "y", treat "y" as a consonant.
2) For words beginning with a vowel, add "ay" to the end.
3) For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
4) If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

_Specs:_
* 1) The program will do nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  **Example Input: 3**
  **Example Output: 3**
* 2) The program adds "ay" to single-letter words beginning with a vowel.
**Example Input: i*
  **Example Output: iay**
* 3) The program adds "ay" to words beginning with a vowel.
  **Example Input: ice*
  **Example Output: iceay**  
* 4) The program will move first consonant to the end of the word.
  **Example Input: tee**
  **Example Output: eet**
* 5) The program add "ay" to words beginning with single consonant and move consonant to the end.
  **Example Input: tailor*
  **Example Output: ailortay**
* 6) The program treats y as a consonant if it is the first letter of the word.
  **Example input: yes**
  **Example output: esyay**
* 7) The program adds all consecutive consonants and adds ay to the end of a word beginning with a consonant
  **Example input: that**
  **Example output: atthay**
* 8) The program will move the u along with the q for words beginning with qu.
  **Example input: quail**
  **Example output: ailquay**
* 9) The program will move the qu along with the first consonant if qu directly follows the consonant.
  **Example input: squeal**
  **Example output: ealsquay**
* 10) The program will be able to deal with multiple words.
  **Example input: the dog walked to the store**
  **Example output: ethay ogday alkedway otay ethay orestay**
* 11) The program will remove capitalization from all words.
  **Example input: The dog walked to the store**
  **Example output: ethay ogday alkedway otay ethay orestay**
* 12) The program will capitalize the first letter of a sentence.
  **Example input: The dog walked to the store**
  **Example output: Ethay ogday alkedway otay ethay orestay**
* 13) The program will add a period to the end of a sentence.
  **Example input: The dog walked to the store.**
  **Example output: Ethay ogday alkedway otay ethay orestay.**
