
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;


const randomDate = (start: Date, end: Date) : Date =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));


const randomDateRange = (start: Date, end: Date) : [Date, Date] => {
    const fd = randomDate(start, end);
    const td = randomDate(fd, end);
    return [fd, td];
}

const randomDateAfterDate = (start: Date, days: number): Date =>
    new Date(start.getTime() + (Math.random() * days * DAY)); 

export const gettimeIntervalLabel = (d1: Date, d2: Date) : string => {
    const intv = d2.getTime() - d1.getTime();
    return intv >= MONTH ? "Monthly" :
        intv >= DAY ? "Daily" :
        intv >= HOUR ? "Hourly" :
        "By Minutes";
}


export const getLicDataRand = (maxPt: number, maxVal: number, splitNum: number) : 
    Promise<{dates: Date[], labels: string[], data: number[][]}> => {
    return new Promise(function(resolve) {
        const start = randomDate(new Date(2020,1,1), new Date(Date.now()));
        let end = randomDateAfterDate(start, 365);
        end = end.getTime() > Date.now() ? new Date() : end;
            setTimeout(() => {
            resolve(getLicData(start, end, maxPt, maxVal, splitNum))
        }, 1000);
    })
}
    

export const getLicData = (start: Date, end: Date, maxPt: number, maxVal: number, splitNum: number) => {
    
    const [intv, dates] = getDates(start, end, maxPt);

    const dataPt = dates.map(d => getDataPoints(maxVal, splitNum));
    const data: number[][] = [];
    for (let g = 0; g < splitNum; g++) {
        data.push(dataPt.map(p => p[g]));
    }

    const size = dates.length;
    const labels = dates.map((d, i) => {
        switch (intv) {
            case "mi":
                return i == 0 ? "" :
                    i == size ? "" :
                    d.getMinutes().toString();
            case "h":
                let h = d.getHours();
                return h == 0 ? "" : d.getHours().toString();
            case "d":
                return d.getDate().toString();
            default:
                return d.getMonth().toString();
        }
    });
    return {dates, labels, data};
}

export const truncDate = (dt: Date, part: string): Date => {
    let ndt = new Date(dt);
    switch (part) {
        case "mi":
            ndt.setSeconds(0,0);
            break;
        case "h" :
            ndt.setMinutes(0,0,0);
            break;
        case "d" :
            ndt.setHours(0,0,0,0);
            break;
        default:
            ndt = new Date(dt.getFullYear(), dt.getMonth(), 1);
            break;
    }
    return ndt;
}

const r = (maxNum: number) => Math.floor(Math.random() * maxNum);

export const getDataPoints = (maxVal: number, splitNum: number) : number[] => {
    const d: number[] = [];
    let tv = 0;
    for ( let p = 0; p < splitNum - 1; p++) {
        if (tv < maxVal) {
            let v = r(maxVal - tv);
            d.push(v);
            tv += v;
        }
        else d.push(0);
    }
    d.push(tv < maxVal ? maxVal - tv : 0);
    return d;
}

export const getDates = (start: Date, end: Date, maxPt: number): [string, Date[]] => {
    const msStart = start.getTime();
    const msEnd = end.getTime();
    const tdiff = msEnd - msStart;
    const msIntv = tdiff / maxPt;
    const msPt: [string, number, Date] = 
        msIntv < MINUTE ? ["mi", MINUTE, truncDate(start, "mi")] :
        msIntv < HOUR  ? ["h", HOUR, truncDate(start, "h")] :
        msIntv < WEEK  ? ["d", DAY, truncDate(start, "d")] :
        ["mo", MONTH, truncDate(start, "mo")];
        
    const dates : Date[] = [];
    const interval = msPt[1];
    const cdt = msPt[2].getTime();
    for (let t = 0; t <= tdiff + interval; t += interval) {
        dates.push(new Date(cdt + t));
    }
    return [msPt[0], dates];
}