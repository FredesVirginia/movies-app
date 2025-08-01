export class Formatter {
    public static currency(value : number) : string{
        return new Intl.NumberFormat("en-US" , {
            style : "currency" , 
        }).format(value)
    }
}