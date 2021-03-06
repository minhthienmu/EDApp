import { Injectable } from '@angular/core';
import { AnalysisService } from './analysisService';
import { EncryptService } from './encryptService';

@Injectable({
    providedIn: 'root'
})

export class DecryptService {
    constructor(private analysisService: AnalysisService,
                private encryptService: EncryptService
        ) {}

    decryptCeasarWithoutKey(cipherText: string) {
        //Lấy list key có khả năng nhất dựa trên top10commonletter từ hàm analysisLetter
        let listKey = this.analysisService.analysisLetter(cipherText);

        let listPlainText: any[] = [];
        listKey.forEach(key => {
            listPlainText.push({key: key, plainText: this.decryptCeasar(key, cipherText)});
        })

        //Tìm plaintext và key tốt nhất dựa trên top10commonword
        let result = this.analysisService.findBestKeyandPlaintText(listPlainText);

        return result;
    }

    decryptCeasar(key: number, cipherText: string, ): string {
        let plainText = "";
        key = (26 - key) % 26;
        plainText = this.encryptService.encryptCeasar(key, cipherText);

        return plainText;
    }

    decryptRailFenceWithoutKey(cipherText: string) {
        //Ta dùng brute force attack, thử qua từng key cho tới khi tìm được bản rõ phù hợp
        //vì length của cipherText khoảng > 1000 từ => key có thể từ 2->length-1 (TH 1 và >=length cipherText == plaintText)
        //vì trong trường hợp mã hóa combine, với Ceasar, key có bằng bao nhiêu thì sẽ quy về giá trị từ 1->25.
        //do đó, để tránh TH lặp quá nhiều do key lớn, ta limit key từ 2->25
        let listPlainText: any[] = [];
        for (let i = 2; i <= 25; i++) {
            let plainText = this.decryptRailFence(i, cipherText);
            listPlainText.push({key: i, plainText: plainText});
        }

        //Tìm plaintext và key tốt nhất dựa trên top10commonword
        let result = this.analysisService.findBestKeyandPlaintText(listPlainText);

        return result;
    }

    decryptRailFence(key: number, cipherText: string): string {
        let rail: any = [];
        for (let i = 0; i < key; i++) {
            rail.push([]);
            for (let j = 0; j < cipherText.length; j++) {
                rail[i][j] = "";
            }
        }

        let flag = null;
        let row = 0, col = 0;
        for (let i = 0; i < cipherText.length; i++) {
            if (row === 0) {
                flag = true;
            }
            if (row === key - 1) {
                flag = false;
            }

            rail[row][col] = '*';
            col++;

            row = flag ? row+1 : row-1;
        }

        let index = 0;
        for(let i = 0; i < key; i++) {
            for (let j = 0; j < cipherText.length; j++) {
                if (rail[i][j] === '*' && index < cipherText.length) {
                    rail[i][j] = cipherText[index];
                    index++;
                }
            }
        }

        let plaintText = "";
        row = 0, col = 0;
        for (let i = 0; i < cipherText.length; i++) {
            if (row === 0) flag = true;
            if (row === key - 1) flag = false;

            if (rail[row][col] !== '*') {
                plaintText += rail[row][col];
                col++;
            }

            row = flag ? row+1 : row-1;
        }

        return plaintText;
    }

    decryptCombineWithoutKey(cipherText: string) { 
        //thử qua từng key từ 2->25, giải mã bằng decryptCombine
        //phân tích bằng hàm findBestKeyandPlainText để tìm bản rõ tốt nhất.
        let listPlainText: any[] = [];
        for (let i = 2; i <= 25; i++) {
            let plainTextRail = this.decryptRailFence(i, cipherText);
            let result_ceasar = this.decryptCeasarWithoutKey(plainTextRail);
            listPlainText.push({
                key_rail: i,
                key: result_ceasar.key,
                score: result_ceasar.score,
                plainText: result_ceasar.plainText
            });
        }
        
        let bestScore: number = 0;
        let bestPlainText: string = "";
        let bestKey: number = 0;
        let bestKeyRail: number = 0;

        listPlainText.forEach(element => {
            let score = element.score;
            if (score > bestScore) {
                bestScore = score;
                bestPlainText = element.plainText;
                bestKey = element.key;
                bestKeyRail = element.key_rail;
            }
        })

        let result = {
            key: bestKey,
            key_rail: bestKeyRail,
            plainText: bestPlainText 
        }

        return result;
    }

    decryptCombine(key: number, key_rail: number, cipherText: string): string { //Giải Rail Fence => Ceasar
        let plaintextRailFence = this.decryptRailFence(key_rail, cipherText);
        let plaintext = this.decryptCeasar(key, plaintextRailFence);

        return plaintext;
    }
}