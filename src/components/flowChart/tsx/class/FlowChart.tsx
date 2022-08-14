import Figure from "./Figure";

/**
 * フロー全体を管理するクラス
 */
export default class FlowChart
{
    chartMap : Array<Figure>;

    constructor()
    {
        this.chartMap = [];
    }
    
    /**
     * JSONからFigureインスタンスで構成された配列を生成するクラス
     * @param {source} source 元になるJSONデータ
     */
    loadMap(source : object)
    {
        this.createFigureTree(this, source, 0);
    }

    /**
     * JSONデータからFigureインスタンスとその入れ子を生成するクラス
     * @param {*} parentFigure 親となるFigureインスタンス
     * @param {*} tree_source 元になるJSONデータ
     */
    createFigureTree(parentFigure : any, tree_source : any, count : number)
    {
        for (const f of tree_source)
        {
            const new_figure = new Figure({ text: f.text, key: count++ });

            if (f.children != null)
            {                
                count = this.createFigureTree(new_figure, f.children, count);
            }

            parentFigure.addFigure(new_figure);
        }

        return count;
    }

    addFigure(child : Figure)
    {
        this.chartMap.push(child);
    }
}
