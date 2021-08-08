import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,public socialSharing: SocialSharing)
   {}
  items = [
 
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

 async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
   await toast.present();
   this.showEditItemPrompt(item, index);
  }  

  async shareItem(item, index) {
    console.log("Sharing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Sharing Item - ' + index + " ...",
      duration: 3000
    });

   await toast.present();

    let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      console.error("Error while sharing ", error);
    });    

  }
 async showEditItemPrompt(item, index) {
    const prompt = await this.alertCtrl.create({
      
      message: "Please edit item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
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
            this.items[index] = item;
          }
        }
      ]
    });
   await prompt.present();
  }  

 async removeItem(item,index) {
    console.log("Removing Item - ", item);
    
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    
    await toast.present();
    this.items.splice(index, 1);
        
  }
}
