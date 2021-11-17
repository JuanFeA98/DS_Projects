import React, { useEffect, useState, useRef } from 'react'
import * as d3 from 'd3' 

export default function BarChart() {
    const [data] = useState([200, 250, 60, 150, 100, 175]) 
    
    const svgRef = useRef();
    
    useEffect(()=>{
    // Container
        const w = 400;
        const h = 100;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', 'white')
            .style('margin', '30px')
            .style('border', '0px')
            .style('overflow', 'visible');

    // Scale
        // const xScale = d3.scaleLinear()


    }, [data])

    return (
        <div className='BarChart'>
            <h3>Chart 2</h3>
            <svg ref={svgRef}></svg>
        </div>
    )
}
