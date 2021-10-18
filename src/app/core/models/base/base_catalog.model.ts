
export class BaseCatalogModel {
    id?: string;

    constructor(data?: Partial<BaseCatalogModel>) {
        this.id = data?.id;
      }
}