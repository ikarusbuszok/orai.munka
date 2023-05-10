class Termekek{
    #index;
    constructor(index, SzuloElem){
        this.#index = index;
        SzuloElem.append("<div class='elem'><p></p></div>");
        this.divElem = $("article div:last-child");
        
    }
}