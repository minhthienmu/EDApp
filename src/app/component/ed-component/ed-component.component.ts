import { Component, OnInit } from '@angular/core';
import { DecryptService } from 'src/app/services/decryptService';
import { EncryptService } from 'src/app/services/encryptService';
import * as fs from 'file-saver';
import { ToastrService } from 'src/app/services/toastService';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-ed-component',
  templateUrl: './ed-component.component.html',
  styleUrls: ['./ed-component.component.scss']
})
export class EdComponentComponent implements OnInit {
  //data
  dataInput: any;
  dataOutput: string;
  type: string; //Encryption Type
  inputType: number = 1; //Input Type
  
  encryptionType: number = 1;

  //Reactive Form
  form: FormGroup

  //Encryption List
  encryptionList = [
    {value: 1, name: 'Ceasar cipher'},
    {value: 2, name: 'Rail fence cipher'},
    {value: 3, name: 'Combine cipher'}
  ]

  //Input Type
  inputTypeList = [
    {value: 1, name: 'Text'},
    {value: 2, name: 'File'},
  ]

  constructor(private encryptService: EncryptService,
              private decryptService: DecryptService,
              private toastrService: ToastrService,
              private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      form1: this.fb.group({
        inputType: '',
        name: '',
        file: '',
        text: '',
        numberLetter: 0 
      }),
      form2: this.fb.group({
        encryptionType: ['', Validators.required],
        has_key: '',
        key: '',
        key_rail: '',
      }),
      form3: this.fb.group({
        name: '',
        show_text: '',
        text: '',
        key: '',
        key_rail: '',
      })
    });

    this.form.get('form1').get('text').valueChanges.subscribe(value => {
      this.dataInput = value;
      this.form.get('form1').get('numberLetter').setValue(value.length);
    })

    this.form.get('form1').get('inputType').valueChanges.subscribe(value => {
      if (value === 1) { //text
        this.form.get('form1').get('file').setValue('');
      } else {
        this.form.get('form1').get('text').setValue('');
        this.form.get('form3').get('show_text').setValue(false);
      }
      this.inputType = value;
    })
  }

  

  onChangeTab(event) {
    this.type = event.tabTitle;
    if (event.tabTitle === "Encrypt") {
      this.form.setValue({
        form1: {
          name: 'PLAIN TEXT',
          inputType: this.inputType,
          file: '',
          text: '',
          numberLetter: 0 
        },
        form2: {
          encryptionType: this.encryptionType,
          has_key: true,
          key: '',
          key_rail: '',
        },
        form3: {
          name: 'CIPHER TEXT',
          show_text: true,
          text: '',
          key: '',
          key_rail: '',
        }
      });
    } else {
      this.form.setValue({
        form1: {
          name: 'CIPHER TEXT',
          inputType: this.inputType,
          file: '',
          text: '',
          numberLetter: 0 
        },
        form2: {
          encryptionType: this.encryptionType,
          has_key: true,
          key: '',
          key_rail: '',
        },
        form3: {
          name: 'PLAIN TEXT',
          show_text: true,
          text: '',
          key: '',
          key_rail: '',
        }
      });
      this.form.get('form2').get('has_key').setValue(false);
    }
  }

  onChangeEncryptionType(event) {
    this.encryptionType = event;
    this.form.get('form3').get('text').setValue('');
  }

  handleFileInput(files: FileList) {
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      this.dataInput = fileReader.result;
      this.form.get('form1').get('numberLetter').setValue(this.dataInput.length);
    }
    fileReader.readAsText(file);
  }

  handleFileExport() {
    if (this.dataOutput) {
      const data = this.dataOutput;
      var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
      fs.saveAs(blob, "text.txt");
    } else {
      this.toastrService.showToast('warning','Warning!', 'Not output data');
    }
  }

  onConfirm() {
    if (this.type === "Encrypt") {
      this.onEncrypt();
      this.toastrService.showToast('success', 'Success', '')
    } else {
      this.onDecrypt();
      this.toastrService.showToast('success', 'Success', '')
    }
  }

  onEncrypt() {
    const key = this.form.get('form2').get('key').value;
    switch(this.encryptionType) {
      case 1: //Ceasar
        this.dataOutput = this.encryptService.encryptCeasar(key, this.dataInput);
        break;
      case 2: //Rail fence
        this.dataOutput = this.encryptService.encryptRailFence(key, this.dataInput);
        break;
      case 3: //Combine
        const key_rail = this.form.get('form2').get('key_rail').value;
        this.dataOutput = this.encryptService.encryptCombine(key, key_rail, this.dataInput);
    }
    this.form.get('form3').get('text').setValue(this.dataOutput);
    this.form.get('form3').get('key').setValue(this.form.get('form2').get('key').value);
  }

  onDecrypt() {
    const has_key = this.form.get('form2').get('has_key').value;
    if (has_key) {
      const key = this.form.get('form2').get('key').value;
      switch(this.encryptionType) {
        case 1: //Ceasar
          this.dataOutput = this.decryptService.decryptCeasar(key, this.dataInput);
          break;
        case 2: //Rail fence
          this.dataOutput = this.decryptService.decryptRailFence(key, this.dataInput);
          break;
        case 3: //Combine
          const key_rail = this.form.get('form2').get('key_rail').value;
          this.dataOutput = this.decryptService.decryptCombine(key, key_rail, this.dataInput);
      }
      this.form.get('form3').get('key').setValue(this.form.get('form2').get('key').value);
      this.form.get('form3').get('text').setValue(this.dataOutput);
    } else {
      let result;
      switch(this.encryptionType) {
        case 1: //Ceasar
          result = this.decryptService.decryptCeasarWithoutKey(this.dataInput);
          break;
        case 2: //Rail fence
          result = this.decryptService.decryptRailFenceWithoutKey(this.dataInput);
          break;
        case 3: //Combine
          result = this.decryptService.decryptCombineWithoutKey(this.dataInput);
      }
      this.dataOutput = result.plainText;
      this.form.get('form3').get('text').setValue(result.plainText);
      this.form.get('form3').get('key').setValue(result.key);
      this.form.get('form3').get('key_rail').setValue(result.key_rail);
    }
  }

}
