import { BaseCatalogModel } from "./base/base_catalog.model";

export class OtherModel extends BaseCatalogModel {
    id_employees: number | null; 
    temperature?: string;
    mask: boolean | null;
    day: string;
    constructor(data: Partial<OtherModel>) {
        super();
        this.id_employees = data?.id_employees || null;
        this.temperature = data?.temperature;
        this.mask = data?.mask || null;
        this.day = data?.day || '';


    }



}