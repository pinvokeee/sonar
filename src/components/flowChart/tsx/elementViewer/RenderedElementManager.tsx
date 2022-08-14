import Figure from "../class/Figure";
import IElementSet from "./IElementSet";
  
export default class RenderedElementManager
{
    elements : Array<IElementSet>;

    constructor()
    {
        this.elements = [];
    }

    get(f : Figure) : IElementSet
    {
        return this.elements[f.key];
    }

    set(f : Figure, value : IElementSet)
    {
        this.elements[f.key] = value;
    }
}