import React, { useEffect, useRef } from 'react';
import Figure from '../class/Figure';
import FlowChart from '../class/FlowChart';

import { ComponentFlow } from './ComponentFlow';

import './css/ComponentFlow.css';
import SVGElementHelper from './SVGElementHelper';
import RenderedElementManager from './RenderedElementManager';
import IElementSet from './IElementSet';

export interface IComponentFlowChartProps
{
    source : FlowChart;
}

export interface IRenderSize
{
    width : number,
    height: number,
}

/**
 * フローチャート全体を表示するコンポーネント
 * @param props 
 * @returns 
 */
export const ComponentFlowChart = ( props : IComponentFlowChartProps ) =>
{    
    const refs = useRef<HTMLDivElement>(null!);

    const [selectedFigure, setSelectedFigure] = React.useState<Figure>();

    const [isChange, setChangeState] = React.useState<Boolean>(false);
    const [renderSize, setRenderSize] = React.useState<IRenderSize>();
    const [renderElements] = React.useState<RenderedElementManager>(new RenderedElementManager);
    const [svg, setSVG] = React.useState(Array<any>);



    const resize_observer = new ResizeObserver((e) =>
    {
        if (e.length == 0) return ;
        const entry = e[0];
        setRenderSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });

    const rendered = (figure : Figure, renderedElement : IElementSet) =>
    {
        renderElements.set(figure, 
        {
            row : renderedElement.row,
            column : renderedElement.column,
            node : renderedElement.node,            
        });
    }

    useEffect(() =>
    {
        resize_observer.observe(refs.current, {});
    }, []);

    //レンダー後に矢印を描くための処理を実行する
    useEffect(() =>
    {
        const svg_node = [];
        
        for (const fg of props.source.chartMap)
        {
            const element = renderElements.get(fg);
            svg_node.push(SVGElementHelper.createConnectJSX(element.node, []));
        }
        
        setSVG(svg_node);

        setChangeState(false);

    }, [renderSize, isChange]);

    const click = (fg : Figure, methods : any) =>
    {
        fg.Text = "AAABB";
        console.log(fg.text);
        // console.log(methods);
        // methods.st("AAAA");

        setChangeState(true);
    }

    return (
        <div ref={refs}>
            <div className='chart_node_columns'>
                {props.source.chartMap.map((fg : Figure) => <ComponentFlow target={fg} key={fg.key} onClick={click} onRender={rendered}></ComponentFlow>)}
                {svg}
            </div>    
        </div>

    );
}
