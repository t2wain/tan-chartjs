import React, { useEffect, useState } from "react";
import StackBar, { StackBarProps, ChartData } from './StackBar';
import { getLicDataRand } from '../api/data_utils';
import { useAsyncStatus } from '../utils/react_util'

const getData = () : Promise<StackBarProps> => 
    getLicDataRand(30, 8, 3).then(res => {
        const { dates, data } = res;
        const datasets: ChartData = [
            { label: "In Use", data: data[0]}, 
            { label: "Expired", data: data[1]}, 
            { label: "Available", data: data[2]}
        ];
        const labels = dates.map(d => d.toLocaleDateString());
        return { labels , datasets };
    });


const LicUsage: React.FC = (): JSX.Element => {

    const [loading, callFuncAsync ] = useAsyncStatus<boolean>(getData);
    const [message, setMessage ] = useState("");
    const [chartData, setChartData] = useState<StackBarProps>(() => ({labels: [], datasets: []}));

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        setMessage("loading...");
        callFuncAsync()
            .then(res => {
                setChartData(res.success ? res.data : {labels: [], datasets: []});
                setMessage(res.success ? "" : "Loading error: Please try again");
                if (!res.success)
                    console.log(res.data);
            });
    };

    return (
        <>
            <h1 className="h2 text-center">Chart.js with React Typescript</h1>
            <div className="mt-5 mb-3">
                <button className="btn btn-primary" disabled={loading} onClick={loadData}>Refresh</button>
                {message ? <span className=" mx-3 py-1 px-2 text-bg-success bg-opacity-50">{message}</span> : null}
            </div>
            <span></span>
            { chartData.labels.length == 0 ? null : <StackBar {...chartData} />}
        </>
    )

}

export default LicUsage;