export class Product {

  constructor(public id: number,
              public imageUrl: string,
              public name: string,
              public unitPrice: number,
              public sku: string,
              public description: string,
              public active: boolean,
              public unitInStock: number,
              public dateCreated: Date,
              public lastUpdated: Date) {
  }
}
