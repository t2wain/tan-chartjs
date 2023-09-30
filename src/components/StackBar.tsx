import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";
import { gettimeIntervalLabel } from "../api/data_utils";

export interface StackBarProps { 
    labels: string[], 
    datasets: ChartData 
};

export type ChartData = {label: string, data: number[]}[];

const StackBar: React.FC<StackBarProps> = ({labels, datasets}): JSX.Element => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart>();

    useEffect(() => {
        if (canvasRef.current) {
            // setup chart object
            const chart = initBarChart(canvasRef.current, labels, datasets);
            chartRef.current = chart; // save the chart object
            return () => chart.destroy(); // clean up when component unmounted
        }
    }, []);


    useEffect(() => {
        if (chartRef.current) {
            // update chart with new data
            setData(chartRef.current, labels, datasets);
        }
    }, [labels, datasets]);


    return (
        <div>
            <canvas ref={canvasRef} width="500" height="125"></canvas>
        </div>
    );

}

export default StackBar;


function initBarChart(dom: HTMLCanvasElement, labels: string[], datasets: ChartData): Chart {

    const chart = new Chart(dom, {
        type: "bar",
        data: {
            labels,
            datasets
        },
        options: {
            scales: {
                x: { 
                    stacked: true,
                    title: { display: true, text: getXTitle(labels) },
                },
                y: {
                    title: { display: true, text: "License Count" },
                    stacked: true,
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                title: {
                  display: true,
                  text: "Software License Usages",
                }
              }
        }
    });

    return chart;

}


function setData(chart: Chart, labels: string[], datasets: ChartData) {

    chart.data.labels = labels;
    chart.data.datasets = datasets;
    const xTitle = getXTitle(labels);
    // @ts-ignore
    const title = chart.options.scales.x.title;
    title.text = xTitle;
    title.display = xTitle;
    chart.update();

}

const getXTitle = (labels: string[]) => {
    if (labels.length > 1) {
        const d1 = new Date(labels[0]);
        const d2 = new Date(labels[1]);
        return `${gettimeIntervalLabel(d1, d2)} Usage : ${labels[0]} - ${labels[labels.length - 1]}` ;
    }
    else return "";
}