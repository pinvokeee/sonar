interface IPosition
{
    x1 : number,
    y1 : number,
    x2: number,
    y2: number,
}

interface IBoxLocation
{
    x: number,
    y: number,
    width: number,
    height: number,
}

export default class SVGElementHelper
{
    static createLineElement(position : IPosition, boxLocation : IBoxLocation, strokeWidth : number)
    {
        const to_x = position.x2 - position.x1;
        const to_y = position.y2 - position.y1;

        const width = strokeWidth;
        const height = position.y2 - position.y1;
        
        const to_down_path = [
            `M ${ boxLocation.width / 2 } 0`,
            `L ${ boxLocation.width / 2 } ${to_y}`
        ];

        const path = 
        [
            to_down_path.join(" "),

        ].join("");
        
        return (
        <svg     
         className="arrow"
        // width={ `${boxLocation.width}px` } height={ `${boxLocation.height}px` }
        //  viewBox={`${0},${0},${ boxLocation.width }, ${ boxLocation.height }`}
         style={ 
            {
                top: boxLocation.y,
                left: boxLocation.x,
                width: boxLocation.width,
                height: boxLocation.height,
                transform: "translate(0,0)" } }>

            <path d={path} stroke="red" style={ { strokeWidth: `${strokeWidth}`, fill: "red" } } ></path>
            
        </svg>);
    }

    static createConnectJSX(nodeElementFrom : HTMLElement, nodeElementsTo : Array<HTMLElement>)
    {
        if (nodeElementFrom.parentElement == null) return <div></div>

        const brow = nodeElementFrom.parentElement.getBoundingClientRect();
        const bb = nodeElementFrom.getBoundingClientRect();

        return this.createLineElement(
            { x1: bb.left, y1: bb.bottom, x2: bb.left, y2:  bb.bottom + 30}, 
            { x: brow.x, y: bb.bottom, width: brow.width, height: brow?.height },
            2); 

        // return this.createLineElement({ x1: bb.left + bb.width / 2, y1: bb.bottom, x2: bb.left + bb.width / 2, y2:  bb.bottom + 30 }, 2);
    }

}