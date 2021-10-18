import { BaseCatalogModel } from "./base/base_catalog.model";

export class EmployeesModel extends BaseCatalogModel{
    id_employees: number | null;
    names: string;
    first_surname: string;
    last_surname: string;
    dni: string;
    status_id: number;
    constructor(data?: Partial<EmployeesModel>){
        super(data);
        this.id_employees = data?.id_employees || null;
        this.names = data?.names || '';
        this.first_surname = data?.first_surname || '';
        this.last_surname = data?.last_surname || '';
        this.status_id = data?.status_id || 0;
        this.dni = data?.dni || '';
    }

}