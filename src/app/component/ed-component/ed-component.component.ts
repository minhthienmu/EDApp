import { Component, OnInit } from '@angular/core';
import { DecryptService } from 'src/app/services/decryptService';
import { EncryptService } from 'src/app/services/encryptService';

@Component({
  selector: 'app-ed-component',
  templateUrl: './ed-component.component.html',
  styleUrls: ['./ed-component.component.scss']
})
export class EdComponentComponent implements OnInit {
  constructor(private encryptService: EncryptService,
              private decryptService: DecryptService
    ) { }

  ngOnInit(): void {
    // let text = "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects. We recognize that you need stability from the Angular framework. Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Angular to thrive. We also share with you the desire for Angular to keep evolving. We strive to ensure that the foundation on top of which you are building is continuously improving and enabling you to stay up-to-date with the rest of the web ecosystem and your user needs. This document contains the practices that we follow to provide you with a leading-edge application development platform, balanced with stability. We strive to ensure that future changes are always introduced in a predictable way. We want everyone who depends on Angular to know when and how new features are added, and to be well-prepared when obsolete ones are removed.";
    // let cipherText = this.encryptService.encryptCeasar(5, text);
    // let cipher = this.encryptService.encryptRailFence(4, text);
    //console.log(cipher);
    
    let t0 = performance.now();
    for (let i = 0; i < 10000; i++) {
      let a = 1;
    }
    let t1 = performance.now();
    console.log("Take " + (t1 - t0) + " milliseconds.")
  }

}
