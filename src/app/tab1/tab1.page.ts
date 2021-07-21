import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController)
   {}
  items = [
    {
      name: "Milk",
      quantity: 2    
    },
    {
      name: "Bread",
      quantity: 1    
    },
    {
      name: "Banana",
      quantity: 3    
    },
    {
      name: "Sugar",
      quantity: 1    
    },
  ];
  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }
 async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }

 async removeItem(item) {
    console.log("Removing Item - ", item);
    
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    
    await toast.present();
    let afterfilter = [];
for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].name != item.name) {
        afterfilter.push(this.items[i]);
    }
}
this.items=afterfilter;
    //this.items = this.items.filter(item => item.name === item.name);
  }
}
