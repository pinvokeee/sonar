import { ReactNode, useEffect, useRef, useState } from "react";
import Figure from "../class/Figure";
import FlowChart from "../class/FlowChart";

export const ComponentInnerFlowChartCanvas = (props : any) =>
{
    const generateTextMap = (target : Figure) =>
    {    
        return (        
        <g key={target.key}>
            <text dx={10} dy={10} fill="black">{target.text}</text>
        </g>        
        );
    }

    const refSVG = useRef<SVGSVGElement>(null!);
    const flowChart : FlowChart = props.source;
    const renderNodes  = flowChart.chartMap.map(fg => 
    {
        return generateTextMap(fg);
    });

    const [f, setFlowChart] = useState<FlowChart>(flowChart);

    useEffect(() =>
    {
        console.log(refSVG.current.children);

        f.chartMap.push(new Figure({ text: "aaaa" }));

        // setFlowChart(f);

        // const renderedElement = renderNodes.map(e => 
        // {
        //     return {
        //         key : e.key,
        //         element : e.
        //     }
            
        // });

        // console.log(renderedElement);

    }, [])

    useEffect(() =>
    {
        console.log(f);

    }, [f]);

    return (
        <svg ref={refSVG}>
            {renderNodes}
        </svg>
    );

    // constructor(source : FlowChart)
    // {
    //     this.flowChart = source;
    //     this.renderedText = [];
    // }

    // generateSVG()
    // {
    //     return this.generateTextMap();
    // }

    // generateTextMap()
    // {
    //     const tree = (parent : Figure) =>
    //     {
    //         this.renderedText.push(
    //         {

    //         });
    //     }

    //     this.flowChart.chartMap.map(r =>
    //     {
    //         const text_svg = this.generateSVGText(r.text);

    //         // const bb = text_svg.

    //         // console.log(r.text);
    //     });

    // }

    // generateSVGText(text : string) : React.ReactNode
    // {
    //     return <rect stroke="black" fill="none" width="100" height="100"><text>{text}</text></rect>;
    // }

}