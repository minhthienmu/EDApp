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
        let listKey = this.analysisService.analysisLetter(cipherText);

        //Lấy list key có khả năng nhất dựa trên top10commonletter
        let listPlainText: any[] = [];
        listKey.forEach(key => {
            listPlainText.push({key: key, plaintText: this.decryptCeasar(key, cipherText)});
        })

        //Tìm plaintext tốt nhất dựa trên top10commonword
        let bestScore: number = 0;
        let bestPlainText: string = "";
        let bestKey: number = 0;
        listPlainText.forEach(element => {
            let score = this.analysisService.analysisWord(element.plaintText);
            if (score > bestScore) {
                bestScore = score;
                bestPlainText = element.plaintText;
                bestKey = element.key;
            }
        })

        let result = {
            key: bestKey,
            plainText: bestPlainText
        }

        return result;
    }

    decryptCeasar(key: number, cipherText: string, ): string {
        let plainText = "";
        key = (26 - key) % 26;
        plainText = this.encryptService.encryptCeasar(key, cipherText);

        return plainText;
    }

    decryptRailFenceWithoutKey(cipherText: string): string {
       
        return "";
    }

    decryptRailFence(key: number, cipherText: string) {
        
    }

    decryptCombineWithoutKey(cipherText: string): string { 
       
        return "";
    }
}