import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Series } from '../../model/app-models';

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

  async getNumOfPeople(): Promise<number> {
    const res = await this.storage.get("NUM_OF_PEOPLE")
    return (res == null ? 4 : res)
  }

  async setNumOfPeople(num_of_people: number): Promise<void> {
    await this.storage.set("NUM_OF_PEOPLE", num_of_people)
  }

  async getSeries(): Promise<Series[]> {
    const res = await this.storage.get("SERIES")
    return (res == null ? [] : res)
  }

  async setSeries(series: Series[]): Promise<void> {
    await this.storage.set("SERIES", series)
  }

}
