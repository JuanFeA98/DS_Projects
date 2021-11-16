import React, { useEffect, useRef, useState } from 'react'
// import rd3 from 'react-d3-library'
import * as d3 from 'd3' 

export default function Chart1() {
    
    const [data] = useState([25, 50, 35, 15, 94, 10]);
    const svgRef = useRef();

    useEffect(()=>{
        // Setting up svg
        const w = 400;
        const h = 100;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', 'white')
            .style('margin', '30px')
            .style('border', '0px')
            // .style('border-radius', '10px')
            .style('box-shadow', '0px 0px 5px black')
            .style('overflow', 'visible');
        
        // Setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w]);
        
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);

        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal);

        // Setting the axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => i + 1);	
        
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
        
        svg.append('g')
            .call(yAxis)

        // Setting up the data
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'black')
    }, [data])

    return (
        <div>
            <h3>Chart1</h3>
            <svg ref={svgRef}></svg>
        </div>
    )
}
