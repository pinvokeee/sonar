/**
 * フローの一部とその子を管理するクラス
 */

export default class Figure
{
    key : number;
    text : string;
    children: Array<Figure>;

    constructor(obj : any)
    {
        this.key = 0;
        this.text = "";
        this.children = [];

        if (obj == null) return;

        this.text = obj?.text;
        this.key = obj?.key;
    }

    addFigure(child : Figure)
    {
        this.children.push(child);
    }

    get Text()
    {
        return this.text;
    }

    set Text(value : string)
    {
        this.text = value;
    }
}
