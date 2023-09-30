import Chart from "chart.js/auto";

/**
 * The purpose of this module is to list all the Chart.js API properties with the help of typescript.
 * 
 * Option resolution. Options are resolved from top to bottom, using a context dependent route.
 *  
 * Chart level options
 * Dataset level options
 * Dataset animation options
 * Dataset element level options
 * Scale options
 * Plugin options
 * Scriptable Options
 * 
 */


function ChartProps(c: Chart<"bar">) {

    c.aspectRatio;
    c.attached;
    c.bindEvents;
    c.boxes;
    c.buildOrUpdateControllers;
    c.buildOrUpdateScales;
    c.canvas;
    c.chartArea;
    c.clear;
    c.config; // ****************
    c.ctx;
    c.currentDevicePixelRatio;
    c.data; // ****************
    c.destroy; // ****************
    c.draw; // ****************
    c.ensureScalesHaveIDs;
    c.getActiveElements;
    c.getContext;
    c.getDataVisibility;
    c.getDatasetMeta;
    c.getElementsAtEventForMode;
    c.getSortedVisibleDatasetMetas;
    c.getVisibleDatasetCount;
    c.height;
    c.hide;
    c.id;
    c.isDatasetVisible;
    c.isPluginEnabled;
    c.isPointInArea;
    c.legend;
    c.notifyPlugins;
    c.options; // ****************
    c.platform;
    c.render;
    c.reset;
    c.resize;
    c.scales;
    c.setActiveElements;
    c.setDatasetVisibility;
    c.show;
    c.stop;
    c.toBase64Image;
    c.toggleDataVisibility;
    c.tooltip;
    c.unbindEvents;
    c.update; // ****************
    c.updateHoverStyle;
    c.width;

}


function ChartDefault() {

    Chart.defaults.animation;
    Chart.defaults.animations;

}


function ChartOpt(chart: Chart<"bar">) {

    // options for the whole chart
    const o = chart.options;

    o.animation;
    o.animations;
    o.aspectRatio;
    o.backgroundColor;
    o.bar;
    o.borderColor;
    o.clip;
    o.color;
    o.datasets; // ****************
    o.devicePixelRatio;
    o.elements; // ****************
    o.events;
    o.font;
    o.hover;
    o.indexAxis;
    o.interaction;
    o.layout;
    o.locale;
    o.maintainAspectRatio;
    o.normalized;
    o.onClick;
    o.onHover;
    o.onResize;
    o.parsing; // How to parse the dataset
    o.plugins; // ****************
    o.resizeDelay;
    o.responsive;
    o.scales; // ****************
    o.skipNull;
    o.transitions;


    o.elements;
    o.elements?.bar;
    o.elements?.arc;
    o.elements?.line;
    o.elements?.point;

}


function ChartOptAxes(chart: Chart<"bar">) {

    const o = chart.options;

    // axes
    // for 2-D, allow 1 or more x-axis, 1 or more y-axis, cartesian axes
    // for radial chart, polar chart, radial axes
    // Multiple X & Y axes are supported.
    // A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displayed normally.
    // Scale titles are supported
    // The default scaleId's for cartesian charts are 'x' and 'y'. For radial charts: 'r'.

    // Each dataset is mapped to a scale for each axis (x, y or r) it requires. 
    // The scaleId's that a dataset is mapped to is determined by the xAxisID, yAxisID or rAxisID. 
    // If the ID for an axis is not specified, the first scale for that axis is used. 
    // If no scale for an axis is found, a new scale is created.

    const sc = o.scales;
    sc?.y; // scale ID y
    sc?.r;
    sc?.xAxisID;
    sc?.yAxisID;

    const x = sc?.x; // scale ID x
    x?.afterBuildTicks;
    x?.afterCalculateLabelRotation;
    x?.afterDataLimits;
    x?.afterFit;
    x?.afterSetDimensions;
    x?.afterTickToLabelConversion;
    x?.afterTickToLabelConversion;
    x?.afterUpdate;
    x?.alignToPixels; // ****************

    // Which type of axis this is. Possible values are: 'x', 'y'. 
    // If not set, this is inferred from the first character of the ID which should be 'x' or 'y'.
    x?.axis;

    x?.backgroundColor; // ****************
    x?.beforeBuildTicks;
    x?.beforeCalculateLabelRotation;
    x?.beforeDataLimits;
    x?.beforeFit;
    x?.beforeSetDimensions;
    x?.beforeTickToLabelConversion;
    x?.beforeUpdate;
    x?.border; // ****************
    x?.bounds;
    x?.clip;
    x?.display; // Controls the axis global visibility
    x?.grid; // ****************
    x?.max; // User defined maximum number for the scale
    x?.min; // User defined minimum number for the scale
    x?.offset;
    x?.position;
    x?.reverse; // ****************

    // Stack group. Axes at the same position with same stack are stacked.
    x?.stack;

    x?.stackWeight;
    x?.stacked; // Should the data be stacked
    x?.suggestedMax; // ****************
    x?.suggestedMin; // ****************
    x?.ticks; // ****************
    x?.title; // axis title

    // Type of scale being employed. Custom scales can be created and registered with a string key. 
    // This allows changing the type of an axis for a chart.
    x?.type;

    x?.weight; // ****************
}


function ChartOptData(chart: Chart<"bar">) {

    const o = chart.options;

    const ds = o.datasets;
    ds?.bubble;
    ds?.doughnut;
    ds?.line;
    ds?.pie;
    ds?.pie;
    ds?.polarArea;
    ds?.radar;
    ds?.scatter;

    const b = ds?.bar;
    b?.animation;
    b?.animations;
    b?.label

}


function ChartOptPlugins(chart: Chart<"bar">) {

    const o = chart.options;
    const pl = o.plugins;
    pl?.colors;
    pl?.decimation;
    pl?.filler;
    pl?.legend;
    pl?.subtitle;
    pl?.tooltip;

    const t = pl?.title; // chart tile
    t?.text;

}


function ChartData(chart: Chart<"bar">) {

    const dt = chart.data;

    // When the data is an array of numbers, values from labels array at 
    // the same index are used for the index axis (x for vertical, y for horizontal charts)
    dt.labels;

    dt.xLabels;
    dt.yLabels;

    const ds = dt.datasets;
    // options for this dataset only
    const d1 = ds[0];
    d1.animation;
    d1.animations;
    d1.backgroundColor;
    d1.barPercentage;
    d1.barThickness;
    d1.base;
    d1.borderColor;
    d1.borderRadius;
    d1.borderSkipped;
    d1.borderWidth;
    d1.categoryPercentage;
    d1.clip;
    d1.data; // ****************
    d1.grouped;
    d1.hidden; // Configure the visibility of the dataset
    d1.hoverBackgroundColor;
    d1.hoverBorderColor;
    d1.hoverBorderWidth;
    d1.indexAxis;
    d1.inflateAmount;
    d1.label;
    d1.maxBarThickness;
    d1.minBarLength;
    d1.normalized;
    d1.order; // The drawing order of dataset.
    d1.parsing; // How to parse the dataset
    d1.pointStyle;
    
    // The ID of the group to which this dataset belongs to 
    // (when stacked, each group will be a separate stack)
    d1.stack; 

    d1.transitions;
    d1.type;  // depend on chart type
    d1.xAxisID; // refer to chart option scales
    d1.yAxisID; // refer to chart option scales


    dt.labels;
    dt.xLabels;
    dt.yLabels;
}


function ChartCfg(chart: Chart<"bar">) {

    const c = chart.config;

}