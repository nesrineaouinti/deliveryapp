export class deliverycompany
{
    private id:Number;
    private name:String;
    private description:String;
    private phone:String;
    private fax:String;
    private website:String;
    private adress:String;

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }
    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }
    
    public getdesciption(): String {
        return this.description;
    }

    public setdescription(description: String): void {
        this.description = description;
    }
    
    
    public getphone(): String {
        return this.phone;
    }

    public setphone(phone: string): void {
        this.phone = phone;
    }
    public getwebsite(): String{
        return this.website;
    }
    public setwebsite(website: string): void {
        this.website = website;
    }
    public getfax(): String {
        return this.fax;
    }

    public setfax(fax: String): void {
        this.fax = fax;
    }
   
    public getadress(): String{
        return this.adress;
    }

    public setadress(adress: string): void {
        this.adress = adress;
    }
}