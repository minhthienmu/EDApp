import { Component, OnInit } from '@angular/core';
import { DecryptService } from 'src/app/services/decryptService';
import { EncryptService } from 'src/app/services/encryptService';
import * as fs from 'file-saver';
import { ToastrService } from 'src/app/services/toastService';

@Component({
  selector: 'app-ed-component',
  templateUrl: './ed-component.component.html',
  styleUrls: ['./ed-component.component.scss']
})
export class EdComponentComponent implements OnInit {
  dataInput: any;
  cipherText: string;

  constructor(private encryptService: EncryptService,
              private decryptService: DecryptService,
              private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    

  }

  handleFileInput(files: FileList) {
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      this.dataInput = fileReader.result;
    }
    fileReader.readAsText(file);
  }

  handleFileExport() {
    if (this.cipherText) {
      const data = this.cipherText;
      var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
      fs.saveAs(blob, "text.txt");
    } else {
      this.toastrService.showToast('warning','Warning!', 'Not output data');
    }
  }

  onConfirm() {
    if (this.dataInput) {
      this.cipherText = this.encryptService.encryptCeasar(2, this.dataInput);
      this.toastrService.showToast('success', 'Success!', '');
    } else {
      this.toastrService.showToast('warning','Warning!', 'Not input data');
    }
  }

  test () {
    let text = "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects. We recognize that you need stability from the Angular framework. Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Angular to thrive. We also share with you the desire for Angular to keep evolving. We strive to ensure that the foundation on top of which you are building is continuously improving and enabling you to stay up-to-date with the rest of the web ecosystem and your user needs. This document contains the practices that we follow to provide you with a leading-edge application development platform, balanced with stability. We strive to ensure that future changes are always introduced in a predictable way. We want everyone who depends on Angular to know when and how new features are added, and to be well-prepared when obsolete ones are removed.";
    let text1 = "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers. A dog saves the life of the master from danger. One can find dogs everywhere in the world. Dogs are a very faithful animal. It has a sharp mind and a strong sense of hearing smelling the things. It also has many qualities like swimming in the water, jumping from anywhere, good smelling sense.\nA dog has a strong power of smell. They are more liked by people because of their faithfulness. They are intelligent, they are watchfulness. The dogs have many colors such as grey, white, black, brown and red. They are of many kinds such as bloodhound, greyhound, german shepherd, Labrador, Rottweiler, bulldog poodle, etc."
   
    //Ceasar
    let cipherText1 = this.encryptService.encryptCeasar(7, text1);
    console.log(cipherText1);
    let t2 = performance.now();
    let result1 =  this.decryptService.decryptCeasarWithoutKey(cipherText1);
    let t3 = performance.now();
    console.log("Take " + (t3 - t2) + " milliseconds.")
    console.log(result1);
    console.log(result1.plainText);

    //RailFence
    let cipherText = this.encryptService.encryptRailFence(20, text1);
    console.log(cipherText);
    let t0 = performance.now();
    let result2 =  this.decryptService.decryptRailFenceWithoutKey(cipherText);
    let t1 = performance.now();
    console.log("Take " + (t1 - t0) + " milliseconds.")
    console.log(result2);
    console.log(result2.plainText);

    //Combine
    let cipherText2 = this.encryptService.encryptCombine(8, text1);
    console.log(cipherText);
    let t5 = performance.now();
    let result3 =  this.decryptService.decryptCombineWithoutKey(cipherText2);
    let t6 = performance.now();
    console.log("Take " + (t6 - t5) + " milliseconds.")
    console.log(result3);
    console.log(result3.plainText);
  }

}
