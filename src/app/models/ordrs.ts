export class ordrs 
{
    private id:Number;
    private ref_client:String;
    private code_commande:String;
    private description:String;
    private price_total:String;
    private affectation:String;
    private adress_client:String;

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }
    public getref_client(): String {
        return this.ref_client;
    }

    public setName(ref_client: String): void {
        this.ref_client = ref_client;
    }
    public getcode_commande(): String {
        return this.code_commande;
    }

    public setcode_commande(code_comande: String): void {
        this.code_commande = code_comande;
    }
    
    public getdesciption(): String {
        return this.description;
    }

    public setdescription(description: String): void {
        this.description = description;
    }
    
    
    public getprice_total(): String {
        return this.price_total;
    }

    public setphone(price_total: string): void {
        this.price_total = price_total;
    }
    public getwebsite(): String{
        return this.affectation;
    }

    public setwebsite(website: string): void {
        this.affectation = website;
    }
    public getadress_client(): String{
        return this.adress_client;
    }

    public setadress(adress_client: string): void {
        this.adress_client = adress_client;
    }
}