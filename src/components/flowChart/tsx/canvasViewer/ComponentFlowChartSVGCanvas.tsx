import { useEffect, useRef, useState } from "react";
import FlowChart from "../class/FlowChart";
import { ComponentInnerFlowChartCanvas } from "./ComponentInnerFlowChartCanvas";


// export interface 

export const ComponentFlowChartCanvas = ( props : any ) =>
{
    const source = props.source;

    const flowChart = new FlowChart();
    flowChart.loadMap(source);

    // const rederer = new RenderTextBlock(flowChart);

    // const canvas = useRef<HTMLCanvasElement>(null!);
    // const [context, setContext] = useState<CanvasRenderingContext2D | null>();

    // useEffect(() =>
    // {
    //     setContext(canvas.current.getContext("2d"));

    // }, []);

    // useEffect(() =>
    // {
    //     if (context == null) return;

    //     context.fillStyle = 'green';
    //     context.fillRect(10, 10, 150, 100);

    // }, [context]);

    // rederer.generateSVG();
    
    return (

        <ComponentInnerFlowChartCanvas source={flowChart}></ComponentInnerFlowChartCanvas>

        // <svg>
        //      <g >
        //     <rect stroke="black" fill="none" width="100" height="100"></rect>
        //     <text stroke="black" dx="10" dy="10">{"adawdadwada"}</text>
        //     </g>
        // </svg>
        // <div style={{width: 200}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

        // <svg>
        //     <path stroke="red" d="M 1 1 L 10 10"></path>

        //     <foreignObject x="10" y="10" width="180" height="180">
        //         <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: "16px", color:"#0abde3"}}>
        //         テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        //         </div>
        //     </foreignObject>


        //     <rect stroke="black" fill="none" width={200} height={300}></rect>
        //     <text stroke="none" fill="red" dx={10} dy={20} width={10} style={{ overflowWrap: "break-word"  }}>adawda</text>
        // </svg>
    );
}