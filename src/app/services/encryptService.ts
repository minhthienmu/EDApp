import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EncryptService {
    encryptCeasar(key: number, plaintext: string): string {
        if (key < 0) {
            return this.encryptCeasar(key + 26, plaintext);
        }

        let cipherText = "";

        for (let i = 0; i < plaintext.length; i++) {
            let c = plaintext[i];

            if (c.match(/[a-z]/i)) { //bỏ qua khác biệt a-z A-z
                const code = plaintext.charCodeAt(i);

                if (code >= 65 && code <= 90) { // Uppercase letters
                    c = String.fromCharCode(((code - 65 + key) % 26) + 65);
                } else if (code >= 97 && code <= 122) {  // Lowercase letters
                    c = String.fromCharCode(((code - 97 + key) % 26) + 97);
                }
            }

            cipherText += c;
        }

        return cipherText;
    }

    encryptRailFence(key: number, plaintext: string): string {
        let cipherText = "";

        let rail: any = [];
        for (let i = 0; i < key; i++) {
            rail.push([]);
            for (let j = 0; j < plaintext.length; j++) {
                rail[i][j] = "";
            }
        }

        let row = 0, col = 0;
        let flag = false; //chuyen huong khi dung top hoac bottom
        for (let i = 0; i < plaintext.length; i++) {
            if (row === 0 || row === key - 1) {
                flag = !flag;
            }
            rail[row][col] = plaintext[i];
            col++;
            row = flag ? row + 1 : row - 1;
        }

        for (let i = 0; i < key; i++) {
            for (let j = 0; j < plaintext.length; j++) {
                cipherText += rail[i][j];
            }
        }
        
        return cipherText;
    }

    encryptCombine(key: number, plaintext: string): string { //encryptCeasar => encryptRailFence
        let cipherText = "";

        cipherText = this.encryptRailFence(key, this.encryptCeasar(key, plaintext));

        return cipherText;
    }
}