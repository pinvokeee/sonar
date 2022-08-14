import Figure from "../class/Figure";
import './css/ComponentFlow.css';
import { useEffect, useRef } from "react";
import IElementSet from "./IElementSet";
import React from "react";

export interface ComponentFlowProps 
{
    target : Figure,
    onRender: (arg1 : Figure, arg2 : IElementSet) => void,
    onClick : (figure : Figure, methods : any) => void,
}

export interface ComponentFlowDisplayState 
{
    key : number,
    text : string,
    child : Array<Figure>
}

/**
 * ComponentFlowChartのフロー単体（部品）のコンポーネント
 * @param props 
 * @returns 
 */
export const ComponentFlow = ( props : ComponentFlowProps ) =>
{   
    const [target, setFigure] = React.useState(props.target); 

    const [data, setData] = React.useState<ComponentFlowDisplayState>(
    {
        key : props.target.key,
        text : props.target.text,
        child: props.target.children,
    });

    const [key, setKey] = React.useState(props.target.key);
    const [text, setText] = React.useState(props.target.text);
    const [children, setChildren] = React.useState(props.target.children);
    
    const methods = { sk : setKey, st : setText, sc : setChildren } ;

    const rowElement = useRef<HTMLDivElement>(null!);
    const columnElement = useRef<HTMLDivElement>(null!);
    const nodeElement = useRef<HTMLDivElement>(null!);

    //レンダー後に描画した対象のFigureとHTML要素を渡してコールバック
    useEffect(() =>
    {
        props.onRender(target, 
        {
            row : (rowElement?.current),
            column : columnElement.current,
            node: nodeElement.current,
        });
    });

    const handleClick = () =>
    {
        // props.onClick(target, methods);

        setText("テスト");
        // appendNewFigure();
    }

    const appendNewFigure = () =>
    {
        setChildren([...target.children, new Figure({ text: "テスト" })]);
    }

    useEffect(() => 
    {
        target.text = text;

    }, [text]);

    useEffect(() =>
    {
        target.children = children;

    }, [children]);

    return (

        <div>
        
            <div className="chart_node_row" ref={rowElement}>
                <div className='chart_node' onClick={handleClick} ref={nodeElement}>{text}</div>
                <div style={ {backgroundColor: "red"} }></div>
            </div>
            
            <div className="chart_node_columns" ref={columnElement}>
            {
                children.map((e : Figure) => 
                {
                    return <ComponentFlow target={e} key={e.key} onRender={props.onRender} onClick={props.onClick}></ComponentFlow>;
                })
            }
            </div>

        </div>
    );

}