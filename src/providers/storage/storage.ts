import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(
    private storage: Storage,
  ) {
  }

  async getNumOfPeople() {
    const res = await this.storage.get("NUM_OF_PEOPLE")
    return (res == null ? 4 : res)
  }

  async setNumOfPeople(num_of_people: number) {
    await this.storage.set("NUM_OF_PEOPLE", num_of_people)
  }

}
