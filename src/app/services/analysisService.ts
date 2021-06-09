import { Injectable } from '@angular/core';

export const top10CommonLetter: string[] = ['e','a','r','i','o','t','n','s','l', 'c'];
export const top10CommonWord: string[] = ['the','of','and','a','to','in','is','you','that','it'];

@Injectable({
    providedIn: 'root'
})

export class AnalysisService {
    [key: string]: any;
    charAnalysic: any = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, 
        n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };

    analysisLetter(cipherText: string): number[] {
        let str = cipherText.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let c = str[i];
            if (c.match(/[a-z]/i)) {
                this.charAnalysic[str[i]]++;
            }
        }
        
        //Sort tìm letter xuất hiện nhiều nhất
        let sortable = [];
        for (let letter in this.charAnalysic) {
            sortable.push({letter: letter, value: this.charAnalysic[letter]});
        }
        sortable.sort((a, b) => b.value - a.value);

        //ta tính list key từ top10CommonLetter.
        //return top 10 list key có thể đúng
        let listKey: number[] = [];
        let most_letter = sortable[0].letter;
        top10CommonLetter.forEach(letter => {
            let key = most_letter.charCodeAt(0) - letter.charCodeAt(0);
            key = key > 0 ? key : key + 26;
            listKey.push(key);
        })
        return listKey;
    }

    analysisWord(plainText: string) {
        let score = 0;
        let str = plainText.toLowerCase();
        
        top10CommonWord.forEach(word => {
            let regex = new RegExp("\\b"+word+"\\b", 'g');
            let word_count = str.match(regex);
            let count = word_count ? word_count.length : 0;
            score += count;
        });

        //return tổng số điểm của plaintext
        //với top10commonword, mỗi lần xuất hiện của từng từ thì được + 1 điểm.
        return score;
    }

    findBestKeyandPlaintText(listPlainText: any[]) {  //Tìm plaintext tốt nhất dựa trên top10commonword
        let bestScore: number = 0;
        let bestPlainText: string = "";
        let bestKey: number = 0;

        listPlainText.forEach(element => {
            let score = this.analysisWord(element.plainText);
            if (score > bestScore) {
                bestScore = score;
                bestPlainText = element.plainText;
                bestKey = element.key;
            }
        })

        let result = {
            score: bestScore,
            key: bestKey,
            plainText: bestPlainText
        }

        return result;
    }

    
}