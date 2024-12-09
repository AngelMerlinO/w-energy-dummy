import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';


function Areachart() {
    const data=[
                    {
                        "x": "10/15/23",
                        "y": 31
                    },
                    {
                        "x": "Feb",
                        "y": 40
                    },
                    {
                        "x": "Mar",
                        "y": 28
                    },
                    {
                        "x": "Apr",
                        "y": 51
                    },
                    {
                        "x": "May",
                        "y": 42
                    },
                    {
                        "x": "Jun",
                        "y": 56
                    },
                    {
                        "x": "Jul",
                        "y": 33
                    }
                ]

    useEffect(() => {
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("area-chart"), options);
            chart.render();
        }


    }, []);
    let options = {
        "annotations": {},
        "chart": {
            "animations": {
                "enabled": false
            },
            "dropShadow": {
                "left": 26,
                "blur": 15,
                "color": "#F9F8F8"
            },
            "foreColor": "#373D3F",
            "fontFamily": "Roboto",
            "height": 250,
            "id": "KJVbT",
            "toolbar": {
                "show": false,
                "tools": {
                    "selection": true,
                    "zoom": true,
                    "zoomin": true,
                    "zoomout": true,
                    "pan": true,
                    "reset": true
                }
            },
            "type": "area",
            "width": 480
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 10,
                "borderRadiusApplication": "end",
                "borderRadiusWhenStacked": "last",
                "hideZeroBarsWhenGrouped": false,
                "isDumbbell": false,
                "isFunnel": false,
                "isFunnel3d": true,
                "dataLabels": {
                    "total": {
                        "enabled": false,
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "color": "#373d3f",
                            "fontSize": "12px",
                            "fontWeight": 600
                        }
                    }
                }
            },
            "bubble": {
                "zScaling": true
            },
            "treemap": {
                "dataLabels": {
                    "format": "scale"
                }
            },
            "radialBar": {
                "hollow": {
                    "background": "#fff"
                },
                "dataLabels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            },
            "pie": {
                "donut": {
                    "labels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    }
                }
            }
        },
        "colors": [
            "#02F9E9"
        ],
        "dataLabels": {
            "enabled": false,
            "offsetX": -8,
            "style": {
                "fontWeight": 700
            }
        },
        "fill": {},
        "grid": {
            "strokeDashArray": 10,
            "row": {
                "opacity": 1
            },
            "padding": {
                "top": -10,
                "right": 20,
                "bottom": -5,
                "left": 11
            }
        },
        "legend": {
            "showForSingleSeries": true,
            "position": "top",
            "fontSize": 14,
            "offsetX": -22,
            "offsetY": 0,
            "markers": {
                "strokeWidth": 13
            },
            "itemMargin": {
                "vertical": 0
            }
        },
        "markers": {
            "size": 4,
            "hover": {
                "size": 0,
                "sizeOffset": 6
            }
        },
        "series": [
            {
                "name": "Gastos mensuales",
                "data": data,
            }
        ],
        "stroke": {
            "fill": {
                "type": "solid",
                "opacity": 0.85,
                "gradient": {
                    "shade": "light",
                    "type": "vertical",
                    "shadeIntensity": 0.5,
                    "inverseColors": false,
                    "opacityFrom": 0.65,
                    "opacityTo": 0.5,
                    "stops": [
                        0,
                        100,
                        100
                    ],
                    "colorStops": []
                }
            }
        },
        "xaxis": {
            "labels": {
                "trim": true,
                "style": {
                    "colors": "#FFFFFF"
                }
            },
            "group": {
                "groups": [],
                "style": {
                    "colors": [],
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": ""
                }
            },
            "tickAmount": "dataPoints",
            "title": {
                "text": "",
                "style": {
                    "fontSize": 32,
                    "fontWeight": 700
                }
            }
        },
        "yaxis": {
            "tickAmount": 8,
            "labels": {
                "style": {
                    "colors": "#FFFFFF"
                }
            },
            "title": {
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "theme": {
            "palette": "palette4"
        },
        "_chartInstances": [
            {
                "id": "xBFDu",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Area",
                                "data": [
                                    {
                                        "x": "Jan",
                                        "y": 31
                                    },
                                    {
                                        "x": "Feb",
                                        "y": 40
                                    },
                                    {
                                        "x": "Mar",
                                        "y": 28
                                    },
                                    {
                                        "x": "Apr",
                                        "y": 51
                                    },
                                    {
                                        "x": "May",
                                        "y": 42
                                    },
                                    {
                                        "x": "Jun",
                                        "y": 56
                                    },
                                    {
                                        "x": "Jul",
                                        "y": 33
                                    }
                                ]
                            }
                        ],
                        "annotations": {
                            "position": "front",
                            "yaxis": [],
                            "xaxis": [],
                            "points": []
                        },
                        "chart": {
                            "type": "area",
                            "background": "",
                            "foreColor": "#333",
                            "offsetX": 0,
                            "offsetY": 0,
                            "toolbar": {
                                "show": false
                            },
                            "animations": {
                                "enabled": false
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "fontFamily": "Roboto",
                            "height": 250,
                            "width": 480,
                            "id": "xBFDu"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
                                "colors": {
                                    "ranges": [],
                                    "backgroundBarColors": [],
                                    "backgroundBarOpacity": 1
                                },
                                "dataLabels": {
                                    "position": "top"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5
                            },
                            "radialBar": {
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            },
                            "pie": {
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "dataLabels": {
                                    "offset": 0
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16
                                        }
                                    }
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4"
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff"
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "markers": {
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hover": {}
                        },
                        "xaxis": {
                            "type": "category",
                            "offsetX": 0,
                            "offsetY": 0,
                            "position": "bottom",
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "trim": true,
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0"
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0"
                            },
                            "title": {
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "convertedCatToNumeric": true
                        },
                        "yaxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "straight",
                            "lineCap": "butt",
                            "width": 4,
                            "dashArray": 0
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.3,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1,
                                "stops": [
                                    0,
                                    50,
                                    100
                                ],
                                "colorStops": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        }
                    },
                    "w": {
                        "config": {
                            "annotations": {
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
                            },
                            "chart": {
                                "animations": {
                                    "enabled": false,
                                    "easing": "easeinout",
                                    "speed": 800,
                                    "animateGradually": {
                                        "delay": 150,
                                        "enabled": true
                                    },
                                    "dynamicAnimation": {
                                        "enabled": true,
                                        "speed": 350
                                    }
                                },
                                "background": "",
                                "locales": [
                                    {
                                        "name": "en",
                                        "options": {
                                            "months": [
                                                "January",
                                                "February",
                                                "March",
                                                "April",
                                                "May",
                                                "June",
                                                "July",
                                                "August",
                                                "September",
                                                "October",
                                                "November",
                                                "December"
                                            ],
                                            "shortMonths": [
                                                "Jan",
                                                "Feb",
                                                "Mar",
                                                "Apr",
                                                "May",
                                                "Jun",
                                                "Jul",
                                                "Aug",
                                                "Sep",
                                                "Oct",
                                                "Nov",
                                                "Dec"
                                            ],
                                            "days": [
                                                "Sunday",
                                                "Monday",
                                                "Tuesday",
                                                "Wednesday",
                                                "Thursday",
                                                "Friday",
                                                "Saturday"
                                            ],
                                            "shortDays": [
                                                "Sun",
                                                "Mon",
                                                "Tue",
                                                "Wed",
                                                "Thu",
                                                "Fri",
                                                "Sat"
                                            ],
                                            "toolbar": {
                                                "exportToSVG": "Download SVG",
                                                "exportToPNG": "Download PNG",
                                                "exportToCSV": "Download CSV",
                                                "menu": "Menu",
                                                "selection": "Selection",
                                                "selectionZoom": "Selection Zoom",
                                                "zoomIn": "Zoom In",
                                                "zoomOut": "Zoom Out",
                                                "pan": "Panning",
                                                "reset": "Reset Zoom"
                                            }
                                        }
                                    }
                                ],
                                "defaultLocale": "en",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 2,
                                    "left": 2,
                                    "blur": 4,
                                    "color": "#000",
                                    "opacity": 0.35
                                },
                                "events": {},
                                "foreColor": "#333",
                                "fontFamily": "Roboto",
                                "height": 250,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "xBFDu",
                                "offsetX": 0,
                                "offsetY": 0,
                                "selection": {
                                    "enabled": false,
                                    "type": "x",
                                    "fill": {
                                        "color": "#24292e",
                                        "opacity": 0.1
                                    },
                                    "stroke": {
                                        "width": 1,
                                        "color": "#24292e",
                                        "opacity": 0.4,
                                        "dashArray": 3
                                    },
                                    "xaxis": {},
                                    "yaxis": {}
                                },
                                "sparkline": {
                                    "enabled": false
                                },
                                "brush": {
                                    "enabled": false,
                                    "autoScaleYaxis": true
                                },
                                "stacked": false,
                                "stackType": "normal",
                                "toolbar": {
                                    "show": false,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "tools": {
                                        "download": true,
                                        "selection": true,
                                        "zoom": true,
                                        "zoomin": true,
                                        "zoomout": true,
                                        "pan": true,
                                        "reset": true,
                                        "customIcons": []
                                    },
                                    "export": {
                                        "csv": {
                                            "columnDelimiter": ",",
                                            "headerCategory": "category",
                                            "headerValue": "value"
                                        },
                                        "png": {},
                                        "svg": {}
                                    },
                                    "autoSelected": "zoom"
                                },
                                "type": "area",
                                "width": 480,
                                "zoom": {
                                    "enabled": true,
                                    "type": "x",
                                    "autoScaleYaxis": false,
                                    "zoomedArea": {
                                        "fill": {
                                            "color": "#90CAF9",
                                            "opacity": 0.4
                                        },
                                        "stroke": {
                                            "color": "#0D47A1",
                                            "opacity": 0.4,
                                            "width": 1
                                        }
                                    }
                                }
                            },
                            "plotOptions": {
                                "area": {
                                    "fillTo": "origin"
                                },
                                "bar": {
                                    "horizontal": false,
                                    "columnWidth": "70%",
                                    "barHeight": "70%",
                                    "distributed": false,
                                    "borderRadius": 10,
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
                                "candlestick": {
                                    "colors": {
                                        "upward": "#00B746",
                                        "downward": "#EF403C"
                                    },
                                    "wick": {
                                        "useFillColor": true
                                    }
                                },
                                "boxPlot": {
                                    "colors": {
                                        "upper": "#00E396",
                                        "lower": "#008FFB"
                                    }
                                },
                                "heatmap": {
                                    "radius": 2,
                                    "enableShades": true,
                                    "shadeIntensity": 0.5,
                                    "reverseNegativeShade": false,
                                    "distributed": false,
                                    "useFillColorAsStroke": false,
                                    "colorScale": {
                                        "inverse": false,
                                        "ranges": []
                                    }
                                },
                                "treemap": {
                                    "enableShades": true,
                                    "shadeIntensity": 0.5,
                                    "distributed": false,
                                    "reverseNegativeShade": false,
                                    "useFillColorAsStroke": false,
                                    "dataLabels": {
                                        "format": "scale"
                                    },
                                    "colorScale": {
                                        "inverse": false,
                                        "ranges": []
                                    }
                                },
                                "radialBar": {
                                    "inverseOrder": false,
                                    "startAngle": 0,
                                    "endAngle": 360,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "hollow": {
                                        "margin": 5,
                                        "size": "50%",
                                        "background": "#fff",
                                        "imageWidth": 150,
                                        "imageHeight": 150,
                                        "imageOffsetX": 0,
                                        "imageOffsetY": 0,
                                        "imageClipped": true,
                                        "position": "front",
                                        "dropShadow": {
                                            "enabled": false,
                                            "top": 0,
                                            "left": 0,
                                            "blur": 3,
                                            "color": "#000",
                                            "opacity": 0.5
                                        }
                                    },
                                    "track": {
                                        "show": true,
                                        "background": "#f2f2f2",
                                        "strokeWidth": "97%",
                                        "opacity": 1,
                                        "margin": 5,
                                        "dropShadow": {
                                            "enabled": false,
                                            "top": 0,
                                            "left": 0,
                                            "blur": 3,
                                            "color": "#000",
                                            "opacity": 0.5
                                        }
                                    },
                                    "dataLabels": {
                                        "show": true,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": 0
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 14,
                                            "fontWeight": 400,
                                            "offsetY": 16
                                        },
                                        "total": {
                                            "show": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 600
                                        }
                                    }
                                },
                                "pie": {
                                    "customScale": 1,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "startAngle": 0,
                                    "endAngle": 360,
                                    "expandOnClick": true,
                                    "dataLabels": {
                                        "offset": 0,
                                        "minAngleToShowLabel": 10
                                    },
                                    "donut": {
                                        "size": "65%",
                                        "labels": {
                                            "show": false,
                                            "name": {
                                                "show": true,
                                                "fontSize": 16,
                                                "fontWeight": 600,
                                                "offsetY": -10
                                            },
                                            "value": {
                                                "show": true,
                                                "fontSize": 20,
                                                "fontWeight": 400,
                                                "offsetY": 10
                                            },
                                            "total": {
                                                "show": false,
                                                "showAlways": false,
                                                "label": "Total",
                                                "fontSize": 16,
                                                "fontWeight": 400
                                            }
                                        }
                                    }
                                },
                                "polarArea": {
                                    "rings": {
                                        "strokeWidth": 1,
                                        "strokeColor": "#e8e8e8"
                                    },
                                    "spokes": {
                                        "strokeWidth": 1,
                                        "connectorColors": "#e8e8e8"
                                    }
                                },
                                "radar": {
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "polygons": {
                                        "strokeWidth": 1,
                                        "strokeColors": "#e8e8e8",
                                        "connectorColors": "#e8e8e8",
                                        "fill": {}
                                    }
                                }
                            },
                            "dataLabels": {
                                "enabled": false,
                                "textAnchor": "middle",
                                "distributed": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700
                                },
                                "background": {
                                    "enabled": true,
                                    "foreColor": "#fff",
                                    "borderRadius": 2,
                                    "padding": 4,
                                    "opacity": 0.9,
                                    "borderWidth": 1,
                                    "borderColor": "#fff",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 1,
                                        "left": 1,
                                        "blur": 1,
                                        "color": "#000",
                                        "opacity": 0.45
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "fill": {
                                "type": "solid",
                                "opacity": 0.3,
                                "gradient": {
                                    "shade": "dark",
                                    "type": "horizontal",
                                    "shadeIntensity": 0.5,
                                    "inverseColors": true,
                                    "opacityFrom": 1,
                                    "opacityTo": 1
                                },
                                "image": {
                                    "src": []
                                },
                                "pattern": {
                                    "style": "squares",
                                    "width": 6,
                                    "height": 6,
                                    "strokeWidth": 2
                                }
                            },
                            "forecastDataPoints": {
                                "count": 0,
                                "fillOpacity": 0.5,
                                "dashArray": 4
                            },
                            "grid": {
                                "show": true,
                                "borderColor": "#e0e0e0",
                                "strokeDashArray": 0,
                                "position": "back",
                                "xaxis": {
                                    "lines": {
                                        "show": false
                                    }
                                },
                                "yaxis": {
                                    "lines": {
                                        "show": true
                                    }
                                },
                                "row": {
                                    "opacity": 0.5
                                },
                                "column": {
                                    "opacity": 0.5
                                },
                                "padding": {
                                    "top": 0,
                                    "right": 25,
                                    "bottom": 0,
                                    "left": 15
                                }
                            },
                            "labels": [],
                            "legend": {
                                "show": true,
                                "showForSingleSeries": false,
                                "showForNullSeries": true,
                                "showForZeroSeries": true,
                                "floating": false,
                                "position": "bottom",
                                "horizontalAlign": "center",
                                "inverseOrder": false,
                                "fontSize": 14,
                                "fontWeight": 400,
                                "offsetX": -20,
                                "offsetY": 0,
                                "customLegendItems": [],
                                "labels": {
                                    "useSeriesColors": false
                                },
                                "markers": {
                                    "width": 12,
                                    "height": 12,
                                    "strokeWidth": 0,
                                    "strokeColor": "#fff",
                                    "radius": 12,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "itemMargin": {
                                    "horizontal": 5,
                                    "vertical": 0
                                },
                                "onItemClick": {
                                    "toggleDataSeries": true
                                },
                                "onItemHover": {
                                    "highlightDataSeries": true
                                }
                            },
                            "markers": {
                                "discrete": [],
                                "size": 0,
                                "strokeColors": "#fff",
                                "strokeWidth": 2,
                                "strokeOpacity": 0.9,
                                "strokeDashArray": 0,
                                "fillOpacity": 1,
                                "shape": "circle",
                                "width": 8,
                                "height": 8,
                                "radius": 2,
                                "offsetX": 0,
                                "offsetY": 0,
                                "showNullDataPoints": true,
                                "hover": {
                                    "sizeOffset": 6
                                }
                            },
                            "noData": {
                                "align": "center",
                                "verticalAlign": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "14px"
                                }
                            },
                            "responsive": [],
                            "states": {
                                "normal": {
                                    "filter": {
                                        "type": "none",
                                        "value": 0
                                    }
                                },
                                "hover": {
                                    "filter": {
                                        "type": "lighten",
                                        "value": 0.1
                                    }
                                },
                                "active": {
                                    "allowMultipleDataPointsSelection": false,
                                    "filter": {
                                        "type": "darken",
                                        "value": 0.5
                                    }
                                }
                            },
                            "title": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "floating": false,
                                "style": {
                                    "fontSize": "14px",
                                    "fontWeight": 900
                                }
                            },
                            "subtitle": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 30,
                                "floating": false,
                                "style": {
                                    "fontSize": "12px",
                                    "fontWeight": 400
                                }
                            },
                            "stroke": {
                                "show": true,
                                "curve": "straight",
                                "lineCap": "butt",
                                "width": 4,
                                "dashArray": 0,
                                "fill": {
                                    "type": "solid",
                                    "opacity": 0.85,
                                    "gradient": {
                                        "shade": "light",
                                        "type": "vertical",
                                        "shadeIntensity": 0.5,
                                        "inverseColors": false,
                                        "opacityFrom": 0.65,
                                        "opacityTo": 0.5,
                                        "stops": [
                                            0,
                                            100,
                                            100
                                        ],
                                        "colorStops": []
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
                                "style": {
                                    "fontSize": "12px"
                                },
                                "onDatasetHover": {
                                    "highlightDataSeries": false
                                },
                                "x": {
                                    "show": true,
                                    "format": "dd MMM"
                                },
                                "y": {
                                    "title": {}
                                },
                                "z": {
                                    "title": "Size: "
                                },
                                "marker": {
                                    "show": true
                                },
                                "items": {
                                    "display": "flex"
                                },
                                "fixed": {
                                    "enabled": false,
                                    "position": "topRight",
                                    "offsetX": 0,
                                    "offsetY": 0
                                }
                            },
                            "xaxis": {
                                "type": "numeric",
                                "categories": [],
                                "convertedCatToNumeric": true,
                                "offsetX": 0,
                                "offsetY": 0,
                                "labels": {
                                    "show": true,
                                    "rotate": -45,
                                    "rotateAlways": false,
                                    "hideOverlappingLabels": true,
                                    "trim": true,
                                    "maxHeight": 120,
                                    "showDuplicates": true,
                                    "style": {
                                        "fontSize": 12,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    },
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "datetimeUTC": true,
                                    "datetimeFormatter": {
                                        "year": "yyyy",
                                        "month": "MMM 'yy",
                                        "day": "dd MMM",
                                        "hour": "HH:mm",
                                        "minute": "HH:mm:ss",
                                        "second": "HH:mm:ss"
                                    }
                                },
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": true,
                                    "color": "#e0e0e0",
                                    "width": "100%",
                                    "height": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": true,
                                    "color": "#e0e0e0",
                                    "height": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "tickAmount": "dataPoints",
                                "tickPlacement": "on",
                                "floating": false,
                                "position": "bottom",
                                "title": {
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": 12,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "crosshairs": {
                                    "show": true,
                                    "width": 1,
                                    "position": "back",
                                    "opacity": 0.9,
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 3
                                    },
                                    "fill": {
                                        "type": "solid",
                                        "color": "#B1B9C4",
                                        "gradient": {
                                            "colorFrom": "#D8E3F0",
                                            "colorTo": "#BED1E6",
                                            "stops": [
                                                0,
                                                100
                                            ],
                                            "opacityFrom": 0.4,
                                            "opacityTo": 0.5
                                        }
                                    },
                                    "dropShadow": {
                                        "enabled": false,
                                        "left": 0,
                                        "top": 0,
                                        "blur": 1,
                                        "opacity": 0.4
                                    }
                                },
                                "tooltip": {
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
                            "theme": {
                                "mode": "light",
                                "palette": "palette4",
                                "monochrome": {
                                    "enabled": false,
                                    "color": "#008FFB",
                                    "shadeTo": "light",
                                    "shadeIntensity": 0.65
                                }
                            }
                        },
                        "globals": {
                            "chartID": "xBFDu",
                            "cuid": "1txyg8a8",
                            "events": {
                                "beforeMount": [],
                                "mounted": [],
                                "updated": [],
                                "clicked": [],
                                "selection": [],
                                "dataPointSelection": [],
                                "zoomed": [],
                                "scrolled": []
                            },
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ],
                            "clientX": 833,
                            "clientY": 399,
                            "fill": {
                                "colors": [
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A"
                                ]
                            },
                            "stroke": {},
                            "dataLabels": {
                                "style": {}
                            },
                            "radarPolygons": {
                                "fill": {
                                    "colors": [
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none"
                                    ]
                                }
                            },
                            "markers": {
                                "size": [
                                    0,
                                    0
                                ],
                                "largestSize": 0
                            },
                            "animationEnded": true,
                            "isDirty": true,
                            "isExecCalled": false,
                            "initialConfig": {
                                "labels": []
                            },
                            "initialSeries": [
                                {
                                    "name": "Area",
                                    "data": [
                                        {
                                            "x": "Jan",
                                            "y": 31
                                        },
                                        {
                                            "x": "Feb",
                                            "y": 40
                                        },
                                        {
                                            "x": "Mar",
                                            "y": 28
                                        },
                                        {
                                            "x": "Apr",
                                            "y": 51
                                        },
                                        {
                                            "x": "May",
                                            "y": 42
                                        },
                                        {
                                            "x": "Jun",
                                            "y": 56
                                        },
                                        {
                                            "x": "Jul",
                                            "y": 33
                                        },
                                        
                                        
                                    ]
                                }
                            ],
                            "lastXAxis": {
                                "type": "category",
                                "categories": [],
                                "convertedCatToNumeric": true,
                                "offsetX": 0,
                                "offsetY": 0,
                                "labels": {
                                    "show": true,
                                    "rotate": -45,
                                    "rotateAlways": false,
                                    "hideOverlappingLabels": true,
                                    "trim": true,
                                    "maxHeight": 120,
                                    "showDuplicates": true,
                                    "style": {
                                        "fontSize": 12,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    },
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "datetimeUTC": true,
                                    "datetimeFormatter": {
                                        "year": "yyyy",
                                        "month": "MMM 'yy",
                                        "day": "dd MMM",
                                        "hour": "HH:mm",
                                        "minute": "HH:mm:ss",
                                        "second": "HH:mm:ss"
                                    }
                                },
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": true,
                                    "color": "#e0e0e0",
                                    "width": "100%",
                                    "height": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": true,
                                    "color": "#e0e0e0",
                                    "height": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "tickPlacement": "on",
                                "floating": false,
                                "position": "bottom",
                                "title": {
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": 12,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "crosshairs": {
                                    "show": true,
                                    "width": 1,
                                    "position": "back",
                                    "opacity": 0.9,
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 3
                                    },
                                    "fill": {
                                        "type": "solid",
                                        "color": "#B1B9C4",
                                        "gradient": {
                                            "colorFrom": "#D8E3F0",
                                            "colorTo": "#BED1E6",
                                            "stops": [
                                                0,
                                                100
                                            ],
                                            "opacityFrom": 0.4,
                                            "opacityTo": 0.5
                                        }
                                    },
                                    "dropShadow": {
                                        "enabled": false,
                                        "left": 0,
                                        "top": 0,
                                        "blur": 1,
                                        "opacity": 0.4
                                    }
                                },
                                "tooltip": {
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
                            "lastYAxis": [
                                {
                                    "show": true,
                                    "showAlways": false,
                                    "showForNullSeries": true,
                                    "opposite": false,
                                    "reversed": false,
                                    "logarithmic": false,
                                    "logBase": 10,
                                    "forceNiceScale": false,
                                    "floating": false,
                                    "labels": {
                                        "show": true,
                                        "minWidth": 0,
                                        "maxWidth": 160,
                                        "offsetX": 0,
                                        "offsetY": 0,
                                        "rotate": 0,
                                        "padding": 20,
                                        "style": {
                                            "fontSize": 11,
                                            "fontWeight": 400,
                                            "cssClass": ""
                                        }
                                    },
                                    "axisBorder": {
                                        "show": false,
                                        "color": "#e0e0e0",
                                        "width": 1,
                                        "offsetX": 0,
                                        "offsetY": 0
                                    },
                                    "axisTicks": {
                                        "show": false,
                                        "color": "#e0e0e0",
                                        "width": 6,
                                        "offsetX": 0,
                                        "offsetY": 0
                                    },
                                    "title": {
                                        "rotate": -90,
                                        "offsetY": 0,
                                        "offsetX": 0,
                                        "style": {
                                            "fontSize": 11,
                                            "fontWeight": 700,
                                            "cssClass": ""
                                        }
                                    },
                                    "tooltip": {
                                        "enabled": false,
                                        "offsetX": 0
                                    },
                                    "crosshairs": {
                                        "show": true,
                                        "position": "front",
                                        "stroke": {
                                            "color": "#b6b6b6",
                                            "width": 1,
                                            "dashArray": 0
                                        }
                                    }
                                }
                            ],
                            "columnSeries": null,
                            "labels": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7
                            ],
                            "timescaleLabels": [],
                            "noLabelsProvided": true,
                            "allSeriesCollapsed": false,
                            "collapsedSeries": [],
                            "collapsedSeriesIndices": [],
                            "ancillaryCollapsedSeries": [],
                            "ancillaryCollapsedSeriesIndices": [],
                            "risingSeries": [],
                            "dataFormatXNumeric": false,
                            "capturedSeriesIndex": -1,
                            "capturedDataPointIndex": -1,
                            "selectedDataPoints": [],
                            "goldenPadding": 35,
                            "invalidLogScale": false,
                            "ignoreYAxisIndexes": [],
                            "yAxisSameScaleIndices": [],
                            "maxValsInArrayIndex": 0,
                            "radialSize": 92.00000000000001,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 480,
                            "svgHeight": 250,
                            "noData": false,
                            "locale": {
                                "toolbar": {
                                    "exportToSVG": "Download SVG",
                                    "exportToPNG": "Download PNG",
                                    "exportToCSV": "Download CSV",
                                    "menu": "Menu",
                                    "selection": "Selection",
                                    "selectionZoom": "Selection Zoom",
                                    "zoomIn": "Zoom In",
                                    "zoomOut": "Zoom Out",
                                    "pan": "Panning",
                                    "reset": "Reset Zoom"
                                }
                            },
                            "dom": {
                                "baseEl": {
                                    "_prevClass": "xBFDu"
                                },
                                "elWrap": {},
                                "Paper": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "svg",
                                    "_defs": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "node": {},
                                        "type": "defs"
                                    }
                                },
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
                                "elGridRectMask": {},
                                "elGridRectMarkerMask": {},
                                "elForecastMask": {},
                                "elNonForecastMask": {},
                                "elGridRect": {
                                    "_stroke": "none",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "rect"
                                },
                                "elGridRectMarker": {
                                    "_stroke": "none",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "rect"
                                }
                            },
                            "memory": {
                                "methodsToExec": []
                            },
                            "shouldAnimate": true,
                            "skipLastTimelinelabel": false,
                            "skipFirstTimelinelabel": false,
                            "delayedElements": [
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                }
                            ],
                            "axisCharts": true,
                            "isDataXYZ": false,
                            "resized": true,
                            "resizeTimer": null,
                            "comboCharts": false,
                            "dataChanged": false,
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        169.125
                                    ],
                                    [
                                        70.83333333333333,
                                        123
                                    ],
                                    [
                                        141.66666666666666,
                                        184.5
                                    ],
                                    [
                                        212.5,
                                        66.625
                                    ],
                                    [
                                        283.3333333333333,
                                        112.75
                                    ],
                                    [
                                        354.16666666666663,
                                        41
                                    ],
                                    [
                                        425,
                                        158.875
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "easing": "<>",
                            "zoomed": false,
                            "gridWidth": 425,
                            "gridHeight": 205,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
                            "xAxisLabelsWidth": 0,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 30,
                            "translateY": 30,
                            "translateYAxisX": [
                                -3
                            ],
                            "yAxisWidths": [],
                            "translateXAxisY": -4,
                            "translateXAxisX": 0,
                            "tooltip": {
                                "tooltipUtil": {},
                                "tooltipLabels": {
                                    "tooltipUtil": {}
                                },
                                "tooltipPosition": {},
                                "marker": {
                                    "tooltipPosition": {}
                                },
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1698082572554,
                                "xyRatios": {
                                    "yRatio": [
                                        0.1951219512195122
                                    ],
                                    "invertedYRatio": 0.09411764705882353,
                                    "zRatio": null,
                                    "xRatio": 0.01411764705882353,
                                    "initialXRatio": 0.01411764705882353,
                                    "invertedXRatio": 0.02926829268292683,
                                    "baseLineInvertedY": -255,
                                    "baseLineY": [
                                        -123
                                    ],
                                    "baseLineX": 70.83333333333333
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 206,
                                "xaxisTooltipText": {},
                                "yaxisOffX": 1,
                                "yaxisTooltip": {},
                                "yaxisTooltipText": [
                                    {}
                                ],
                                "xcrosshairsWidth": 1,
                                "ycrosshairs": {
                                    "instance": {
                                        "_stroke": "#b6b6b6",
                                        "_event": null,
                                        "dom": {},
                                        "type": "line"
                                    }
                                },
                                "ycrosshairsHidden": {
                                    "instance": {
                                        "_stroke": "#b6b6b6",
                                        "_event": null,
                                        "dom": {},
                                        "type": "line"
                                    }
                                },
                                "xAxisTicksPositions": [
                                    70.83333333333333,
                                    141.66666666666666,
                                    212.5,
                                    283.3333333333333,
                                    354.16666666666663,
                                    424.99999999999994,
                                    495.83333333333326
                                ],
                                "dataPointsDividedHeight": 29.285714285714285,
                                "dataPointsDividedWidth": 60.714285714285715,
                                "tooltipTitle": {},
                                "legendLabels": {},
                                "ttItems": [
                                    {}
                                ],
                                "seriesBound": {
                                    "x": 0,
                                    "y": 0,
                                    "width": 0,
                                    "height": 0,
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0,
                                    "left": 0
                                }
                            },
                            "series": [
                                [
                                    31,
                                    40,
                                    28,
                                    51,
                                    42,
                                    56,
                                    33
                                ]
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
                                    100,
                                    100,
                                    100,
                                    100,
                                    100,
                                    100,
                                    100
                                ]
                            ],
                            "seriesGoals": [
                                [
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null
                                ]
                            ],
                            "seriesX": [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Area"
                            ],
                            "seriesTotals": [
                                281
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                31,
                                40,
                                28,
                                51,
                                42,
                                56,
                                33
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    70.83333333333333,
                                    141.66666666666666,
                                    212.5,
                                    283.3333333333333,
                                    354.16666666666663,
                                    425
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    169.125,
                                    123,
                                    184.5,
                                    66.625,
                                    112.75,
                                    41,
                                    158.875
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 64,
                            "minY": 24,
                            "minYArr": [
                                24
                            ],
                            "maxYArr": [
                                64
                            ],
                            "maxX": 7,
                            "minX": 1,
                            "initialMaxX": 7,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1,
                            "yAxisScale": [
                                {
                                    "result": [
                                        24,
                                        32,
                                        40,
                                        48,
                                        56,
                                        64
                                    ],
                                    "niceMin": 24,
                                    "niceMax": 64
                                }
                            ],
                            "xAxisScale": {
                                "result": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ],
                                "niceMin": 1,
                                "niceMax": 7
                            },
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [
                                {
                                    "width": 10,
                                    "index": 0
                                }
                            ],
                            "yTitleCoords": [
                                {
                                    "width": 0,
                                    "index": 0
                                }
                            ],
                            "barPadForNumericAxis": 0,
                            "padHorizontal": 0,
                            "xRange": 6,
                            "yRange": [
                                40
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 5,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsxBFDu",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.1951219512195122
                            ],
                            "logYRange": [
                                null
                            ]
                        }
                    },
                    "publicMethods": [
                        "updateOptions",
                        "updateSeries",
                        "appendData",
                        "appendSeries",
                        "isSeriesHidden",
                        "toggleSeries",
                        "showSeries",
                        "hideSeries",
                        "setLocale",
                        "resetSeries",
                        "zoomX",
                        "toggleDataPointSelection",
                        "dataURI",
                        "exportToCSV",
                        "addXaxisAnnotation",
                        "addYaxisAnnotation",
                        "addPointAnnotation",
                        "clearAnnotations",
                        "removeAnnotation",
                        "paper",
                        "destroy"
                    ],
                    "eventList": [
                        "click",
                        "mousedown",
                        "mousemove",
                        "mouseleave",
                        "touchstart",
                        "touchmove",
                        "touchleave",
                        "mouseup",
                        "touchend"
                    ],
                    "animations": {},
                    "axes": {},
                    "core": {},
                    "config": {
                        "opts": {}
                    },
                    "data": {
                        "twoDSeriesX": [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul"
                        ],
                        "coreUtils": {},
                        "fallbackToCategory": true,
                        "activeSeriesIndex": 0
                    },
                    "grid": {
                        "xaxisLabels": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7
                        ],
                        "axesUtils": {},
                        "isRangeBar": 0,
                        "elg": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elgridLinesH": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elgridLinesV": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elGridBorders": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        }
                    },
                    "graphics": {},
                    "coreUtils": {},
                    "crosshairs": {},
                    "events": {},
                    "exports": {},
                    "localization": {},
                    "options": {
                        "yAxis": {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "colors": [],
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": "11px",
                                    "fontWeight": 900,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        },
                        "pointAnnotation": {
                            "x": 0,
                            "y": null,
                            "yAxisIndex": 0,
                            "seriesIndex": 0,
                            "marker": {
                                "size": 4,
                                "fillColor": "#fff",
                                "strokeWidth": 2,
                                "strokeColor": "#333",
                                "shape": "circle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "radius": 2,
                                "cssClass": ""
                            },
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            },
                            "customSVG": {
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "image": {
                                "width": 20,
                                "height": 20,
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "yAxisAnnotation": {
                            "y": 0,
                            "y2": null,
                            "strokeDashArray": 1,
                            "fillColor": "#c2c2c2",
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "opacity": 0.3,
                            "offsetX": 0,
                            "offsetY": 0,
                            "width": "100%",
                            "yAxisIndex": 0,
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "end",
                                "position": "right",
                                "offsetX": 0,
                                "offsetY": -3,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            }
                        },
                        "xAxisAnnotation": {
                            "x": 0,
                            "x2": null,
                            "strokeDashArray": 1,
                            "fillColor": "#c2c2c2",
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "opacity": 0.3,
                            "offsetX": 0,
                            "offsetY": 0,
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "middle",
                                "orientation": "vertical",
                                "position": "top",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            }
                        },
                        "text": {
                            "x": 0,
                            "y": 0,
                            "text": "",
                            "textAnchor": "start",
                            "fontSize": "13px",
                            "fontWeight": 400,
                            "appendTo": ".apexcharts-annotations",
                            "backgroundColor": "transparent",
                            "borderColor": "#c2c2c2",
                            "borderRadius": 0,
                            "borderWidth": 0,
                            "paddingLeft": 4,
                            "paddingRight": 4,
                            "paddingTop": 2,
                            "paddingBottom": 2
                        }
                    },
                    "responsive": {},
                    "series": {
                        "legendInactiveClass": "legend-mouseover-inactive"
                    },
                    "theme": {
                        "isColorFn": false,
                        "isHeatmapDistributed": false,
                        "isBarDistributed": false
                    },
                    "formatters": {
                        "tooltipKeyFormat": "dd MMM"
                    },
                    "titleSubtitle": {},
                    "legend": {
                        "isBarsDistributed": false,
                        "legendHelpers": {}
                    },
                    "toolbar": {
                        "selectedClass": "apexcharts-selected",
                        "minX": 1,
                        "maxX": 7
                    },
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": false,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": true,
                        "lastHoverTime": 1698082572553
                    },
                    "dimensions": {
                        "lgRect": {
                            "x": 0,
                            "y": 0,
                            "height": 0,
                            "width": 0
                        },
                        "yAxisWidth": 15,
                        "yAxisWidthLeft": 15,
                        "yAxisWidthRight": 0,
                        "xAxisHeight": 10,
                        "isSparkline": false,
                        "dimHelpers": {},
                        "dimYAxis": {},
                        "dimXAxis": {},
                        "dimGrid": {},
                        "lgWidthForSideLegends": 0,
                        "xPadRight": 0,
                        "xPadLeft": 0,
                        "xAxisWidth": 0
                    },
                    "updateHelpers": {},
                    "zoomPanSelection": {
                        "selectedClass": "apexcharts-selected",
                        "minX": 1,
                        "maxX": 7,
                        "dragged": false,
                        "graphics": {},
                        "eventList": [
                            "mousedown",
                            "mouseleave",
                            "mousemove",
                            "touchstart",
                            "touchmove",
                            "mouseup",
                            "touchend"
                        ],
                        "clientX": 0,
                        "clientY": 0,
                        "startX": 0,
                        "endX": 0,
                        "dragX": 0,
                        "startY": 0,
                        "endY": 0,
                        "dragY": 0,
                        "moveDirection": "none",
                        "zoomRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect"
                        },
                        "selectionRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect",
                            "_memory": {
                                "_draggable": {
                                    "constraint": {
                                        "minX": 0,
                                        "minY": 0,
                                        "maxX": 425,
                                        "maxY": 205
                                    },
                                    "value": true
                                }
                            }
                        }
                    },
                    "pie": {
                        "chartType": "area",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 205,
                        "centerY": 102.5,
                        "centerX": 212.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 59.80000000000001,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 4,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": 0.01411764705882353,
                        "initialXRatio": 0.01411764705882353,
                        "invertedXRatio": 0.02926829268292683,
                        "invertedYRatio": 0.09411764705882353,
                        "baseLineInvertedY": -255,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            31,
                            40,
                            28,
                            51,
                            42,
                            56,
                            33
                        ],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 60.714285714285715
                    }
                }
            },
            {
                "id": "KJVbT",
                "chart": {
                    "opts": {
                        "annotations": {
                            "position": "front",
                            "yaxis": [],
                            "xaxis": [],
                            "points": []
                        },
                        "chart": {
                            "type": "area",
                            "background": "",
                            "foreColor": "#333",
                            "offsetX": 0,
                            "offsetY": 0,
                            "toolbar": {
                                "show": false
                            },
                            "animations": {
                                "enabled": false
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "fontFamily": "Roboto",
                            "height": 250,
                            "width": 480,
                            "id": "KJVbT"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
                                "colors": {
                                    "ranges": [],
                                    "backgroundBarColors": [],
                                    "backgroundBarOpacity": 1
                                },
                                "dataLabels": {
                                    "position": "top"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5
                            },
                            "radialBar": {
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            },
                            "pie": {
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "dataLabels": {
                                    "offset": 0
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16
                                        }
                                    }
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4"
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff"
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "markers": {
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hover": {}
                        },
                        "yaxis": [
                            {
                                "show": false,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "stroke": {
                            "show": true,
                            "curve": "straight",
                            "lineCap": "butt",
                            "width": 4,
                            "dashArray": 0
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.3,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1,
                                "stops": [
                                    0,
                                    50,
                                    100
                                ],
                                "colorStops": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        }
                    },
                    "w": {
                        "globals": {
                            "chartID": "KJVbT",
                            "cuid": "kd7uuqhi",
                            "events": {
                                "beforeMount": [],
                                "mounted": [],
                                "updated": [],
                                "clicked": [],
                                "selection": [],
                                "dataPointSelection": [],
                                "zoomed": [],
                                "scrolled": []
                            },
                            "clientX": 881,
                            "clientY": 403,
                            "fill": {
                                "colors": [
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9",
                                    "#02F9E9"
                                ]
                            },
                            "stroke": {},
                            "dataLabels": {
                                "style": {}
                            },
                            "radarPolygons": {
                                "fill": {
                                    "colors": [
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none",
                                        "none"
                                    ]
                                }
                            },
                            "markers": {
                                "size": [
                                    4,
                                    4
                                ],
                                "largestSize": 11
                            },
                            "animationEnded": true,
                            "isDirty": true,
                            "isExecCalled": false,
                            "initialConfig": {
                                "forecastDataPoints": {
                                    "count": 0,
                                    "fillOpacity": 0.5,
                                    "dashArray": 4
                                },
                                "labels": [],
                                "noData": {
                                    "align": "center",
                                    "verticalAlign": "middle",
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "14px"
                                    }
                                },
                                "responsive": [],
                                "states": {
                                    "normal": {
                                        "filter": {
                                            "type": "none",
                                            "value": 0
                                        }
                                    },
                                    "hover": {
                                        "filter": {
                                            "type": "lighten",
                                            "value": 0.1
                                        }
                                    },
                                    "active": {
                                        "allowMultipleDataPointsSelection": false,
                                        "filter": {
                                            "type": "darken",
                                            "value": 0.5
                                        }
                                    }
                                },
                                "title": {
                                    "align": "left",
                                    "margin": 5,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "floating": false,
                                    "style": {
                                        "fontSize": "14px",
                                        "fontWeight": 900
                                    }
                                },
                                "subtitle": {
                                    "align": "left",
                                    "margin": 5,
                                    "offsetX": 0,
                                    "offsetY": 30,
                                    "floating": false,
                                    "style": {
                                        "fontSize": "12px",
                                        "fontWeight": 400
                                    }
                                },
                                "tooltip": {
                                    "enabled": true,
                                    "shared": true,
                                    "followCursor": false,
                                    "intersect": false,
                                    "inverseOrder": false,
                                    "fillSeriesColor": false,
                                    "theme": "light",
                                    "cssClass": "",
                                    "style": {
                                        "fontSize": "12px"
                                    },
                                    "onDatasetHover": {
                                        "highlightDataSeries": false
                                    },
                                    "x": {
                                        "show": true,
                                        "format": "dd MMM"
                                    },
                                    "y": {
                                        "title": {}
                                    },
                                    "z": {
                                        "title": "Size: "
                                    },
                                    "marker": {
                                        "show": true
                                    },
                                    "items": {
                                        "display": "flex"
                                    },
                                    "fixed": {
                                        "enabled": false,
                                        "position": "topRight",
                                        "offsetX": 0,
                                        "offsetY": 0
                                    }
                                },
                                "yaxis": [
                                    null
                                ]
                            },
                            "initialSeries": [
                                {
                                    "name": "Area",
                                    "data": [
                                        {
                                            "x": "Jan",
                                            "y": 31
                                        },
                                        {
                                            "x": "Feb",
                                            "y": 40
                                        },
                                        {
                                            "x": "Mar",
                                            "y": 28
                                        },
                                        {
                                            "x": "Apr",
                                            "y": 51
                                        },
                                        {
                                            "x": "May",
                                            "y": 42
                                        },
                                        {
                                            "x": "Jun",
                                            "y": 56
                                        },
                                        {
                                            "x": "Jul",
                                            "y": 33
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": [],
                            "lastYAxis": [],
                            "columnSeries": null,
                            "labels": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7
                            ],
                            "timescaleLabels": [],
                            "noLabelsProvided": true,
                            "allSeriesCollapsed": false,
                            "collapsedSeries": [],
                            "collapsedSeriesIndices": [],
                            "ancillaryCollapsedSeries": [],
                            "ancillaryCollapsedSeriesIndices": [],
                            "risingSeries": [],
                            "dataFormatXNumeric": false,
                            "capturedSeriesIndex": -1,
                            "capturedDataPointIndex": -1,
                            "selectedDataPoints": [],
                            "goldenPadding": 35,
                            "invalidLogScale": false,
                            "ignoreYAxisIndexes": [],
                            "yAxisSameScaleIndices": [],
                            "maxValsInArrayIndex": 0,
                            "radialSize": 71.46243902439026,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 480,
                            "svgHeight": 250,
                            "noData": false,
                            "locale": {
                                "toolbar": {
                                    "exportToSVG": "Download SVG",
                                    "exportToPNG": "Download PNG",
                                    "exportToCSV": "Download CSV",
                                    "menu": "Menu",
                                    "selection": "Selection",
                                    "selectionZoom": "Selection Zoom",
                                    "zoomIn": "Zoom In",
                                    "zoomOut": "Zoom Out",
                                    "pan": "Panning",
                                    "reset": "Reset Zoom"
                                }
                            },
                            "dom": {
                                "baseEl": {
                                    "_prevClass": "KJVbT"
                                },
                                "elWrap": {},
                                "Paper": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "svg",
                                    "_defs": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "node": {},
                                        "type": "defs"
                                    }
                                },
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
                                "elGridRectMask": {},
                                "elGridRectMarkerMask": {},
                                "elForecastMask": {},
                                "elNonForecastMask": {},
                                "elGridRect": {
                                    "_stroke": "none",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "rect"
                                },
                                "elGridRectMarker": {
                                    "_stroke": "none",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "rect"
                                }
                            },
                            "memory": {
                                "methodsToExec": []
                            },
                            "shouldAnimate": true,
                            "skipLastTimelinelabel": false,
                            "skipFirstTimelinelabel": false,
                            "delayedElements": [
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    },
                                    "index": 0
                                }
                            ],
                            "axisCharts": true,
                            "isDataXYZ": false,
                            "resized": true,
                            "resizeTimer": null,
                            "comboCharts": false,
                            "dataChanged": true,
                            "previousPaths": [
                                {
                                    "type": "area",
                                    "paths": [
                                        {
                                            "d": "M 0 181.348 L 0 146.0858888888889C8.281261834395709, 140.74777181136284, 47.1563968349965, 98.25890602153082, 70.33333333333334, 100.74888888888887S120.37153245680122, 169.19295010247447, 140.66666666666669, 161.1982222222222S192.26481141618876, 54.73001850516548, 211, 45.33699999999999S258.6171928972932, 94.74146310801244, 281.33333333333337, 90.67399999999998S330.42840795772094, 13.3046668648336, 351.6666666666667, 20.14977777777773S418.8434767223449, 130.81120883997139, 422, 136.011 L 422 181.348 L 0 181.348M 0 146.0858888888889z"
                                        },
                                        {
                                            "d": "M 0 146.0858888888889C8.281261834395709, 140.74777181136284, 47.1563968349965, 98.25890602153082, 70.33333333333334, 100.74888888888887S120.37153245680122, 169.19295010247447, 140.66666666666669, 161.1982222222222S192.26481141618876, 54.73001850516548, 211, 45.33699999999999S258.6171928972932, 94.74146310801244, 281.33333333333337, 90.67399999999998S330.42840795772094, 13.3046668648336, 351.6666666666667, 20.14977777777773S418.8434767223449, 130.81120883997139, 422, 136.011"
                                        }
                                    ],
                                    "realIndex": "0"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "easing": "<>",
                            "zoomed": false,
                            "gridWidth": 422,
                            "gridHeight": 181.348,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 32.652,
                            "xAxisGroupLabelsHeight": 18.652,
                            "xAxisLabelsWidth": 17,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 38,
                            "translateY": 36,
                            "translateYAxisX": [
                                9
                            ],
                            "yAxisWidths": [],
                            "translateXAxisY": -4,
                            "translateXAxisX": 0,
                            "tooltip": {
                                "tooltipUtil": {},
                                "tooltipLabels": {
                                    "tooltipUtil": {}
                                },
                                "tooltipPosition": {},
                                "marker": {
                                    "tooltipPosition": {}
                                },
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1698083354146,
                                "xyRatios": {
                                    "yRatio": [
                                        0.19851335553741975
                                    ],
                                    "invertedYRatio": 0.08530805687203792,
                                    "zRatio": null,
                                    "xRatio": 0.014218009478672985,
                                    "initialXRatio": 0.014218009478672985,
                                    "invertedXRatio": 0.03308555925623662,
                                    "baseLineInvertedY": -281.3333333333333,
                                    "baseLineY": [
                                        -120.89866666666667
                                    ],
                                    "baseLineX": 70.33333333333334
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 182.348,
                                "xaxisTooltipText": {},
                                "yaxisOffX": 1,
                                "yaxisTooltip": {},
                                "yaxisTooltipText": [
                                    {}
                                ],
                                "xcrosshairsWidth": 1,
                                "ycrosshairs": {
                                    "instance": {
                                        "_stroke": "#b6b6b6",
                                        "_event": null,
                                        "dom": {},
                                        "type": "line"
                                    }
                                },
                                "ycrosshairsHidden": {
                                    "instance": {
                                        "_stroke": "#b6b6b6",
                                        "_event": null,
                                        "dom": {},
                                        "type": "line"
                                    }
                                },
                                "xAxisTicksPositions": [
                                    70.33333333333333,
                                    140.66666666666666,
                                    211,
                                    281.3333333333333,
                                    351.66666666666663,
                                    421.99999999999994,
                                    492.33333333333326
                                ],
                                "dataPointsDividedHeight": 25.906857142857145,
                                "dataPointsDividedWidth": 60.285714285714285,
                                "tooltipTitle": {},
                                "legendLabels": {
                                    "0": {}
                                },
                                "ttItems": [
                                    {}
                                ],
                                "seriesBound": {
                                    "x": 706,
                                    "y": 289,
                                    "width": 422,
                                    "height": 180.3480224609375,
                                    "top": 289,
                                    "right": 1128,
                                    "bottom": 469.3480224609375,
                                    "left": 706
                                }
                            },
                            "series": [
                                [
                                    31,
                                    40,
                                    28,
                                    51,
                                    42,
                                    56,
                                    33
                                ]
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
                                    100,
                                    100,
                                    100,
                                    100,
                                    100,
                                    100,
                                    100
                                ]
                            ],
                            "seriesGoals": [
                                [
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null
                                ]
                            ],
                            "seriesX": [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Area"
                            ],
                            "seriesTotals": [
                                281
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                31,
                                40,
                                28,
                                51,
                                42,
                                56,
                                33
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    70.33333333333334,
                                    140.66666666666669,
                                    211,
                                    281.33333333333337,
                                    351.6666666666667,
                                    422
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    146.0858888888889,
                                    100.74888888888887,
                                    161.1982222222222,
                                    45.33699999999999,
                                    90.67399999999998,
                                    20.14977777777773,
                                    136.011
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 60,
                            "minY": 24,
                            "minYArr": [
                                24
                            ],
                            "maxYArr": [
                                60
                            ],
                            "maxX": 7,
                            "minX": 1,
                            "initialMaxX": 7,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1,
                            "yAxisScale": [
                                {
                                    "result": [
                                        24,
                                        28,
                                        32,
                                        36,
                                        40,
                                        44,
                                        48,
                                        52,
                                        56,
                                        60
                                    ],
                                    "niceMin": 24,
                                    "niceMax": 60
                                }
                            ],
                            "xAxisScale": {
                                "result": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ],
                                "niceMin": 1,
                                "niceMax": 7
                            },
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [
                                {
                                    "width": 22,
                                    "index": 0
                                }
                            ],
                            "yTitleCoords": [
                                {
                                    "width": 0,
                                    "index": 0
                                }
                            ],
                            "barPadForNumericAxis": 0,
                            "padHorizontal": 0,
                            "xRange": 6,
                            "yRange": [
                                36
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 5,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsKJVbT",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 32.652,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.19851335553741975
                            ],
                            "logYRange": [
                                null
                            ]
                        }
                    },
                    "publicMethods": [
                        "updateOptions",
                        "updateSeries",
                        "appendData",
                        "appendSeries",
                        "isSeriesHidden",
                        "toggleSeries",
                        "showSeries",
                        "hideSeries",
                        "setLocale",
                        "resetSeries",
                        "zoomX",
                        "toggleDataPointSelection",
                        "dataURI",
                        "exportToCSV",
                        "addXaxisAnnotation",
                        "addYaxisAnnotation",
                        "addPointAnnotation",
                        "clearAnnotations",
                        "removeAnnotation",
                        "paper",
                        "destroy"
                    ],
                    "eventList": [
                        "click",
                        "mousedown",
                        "mousemove",
                        "mouseleave",
                        "touchstart",
                        "touchmove",
                        "touchleave",
                        "mouseup",
                        "touchend"
                    ],
                    "animations": {},
                    "axes": {},
                    "core": {},
                    "config": {
                        "opts": {}
                    },
                    "data": {
                        "twoDSeriesX": [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul"
                        ],
                        "coreUtils": {},
                        "fallbackToCategory": true,
                        "activeSeriesIndex": 0
                    },
                    "grid": {
                        "xaxisLabels": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7
                        ],
                        "axesUtils": {},
                        "isRangeBar": 0,
                        "elg": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elgridLinesH": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elgridLinesV": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "elGridBorders": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        }
                    },
                    "graphics": {},
                    "coreUtils": {},
                    "crosshairs": {},
                    "events": {},
                    "exports": {},
                    "localization": {},
                    "options": {
                        "yAxis": {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "colors": [],
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": "11px",
                                    "fontWeight": 900,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        },
                        "pointAnnotation": {
                            "x": 0,
                            "y": null,
                            "yAxisIndex": 0,
                            "seriesIndex": 0,
                            "marker": {
                                "size": 4,
                                "fillColor": "#fff",
                                "strokeWidth": 2,
                                "strokeColor": "#333",
                                "shape": "circle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "radius": 2,
                                "cssClass": ""
                            },
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            },
                            "customSVG": {
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "image": {
                                "width": 20,
                                "height": 20,
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "yAxisAnnotation": {
                            "y": 0,
                            "y2": null,
                            "strokeDashArray": 1,
                            "fillColor": "#c2c2c2",
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "opacity": 0.3,
                            "offsetX": 0,
                            "offsetY": 0,
                            "width": "100%",
                            "yAxisIndex": 0,
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "end",
                                "position": "right",
                                "offsetX": 0,
                                "offsetY": -3,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            }
                        },
                        "xAxisAnnotation": {
                            "x": 0,
                            "x2": null,
                            "strokeDashArray": 1,
                            "fillColor": "#c2c2c2",
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "opacity": 0.3,
                            "offsetX": 0,
                            "offsetY": 0,
                            "label": {
                                "borderColor": "#c2c2c2",
                                "borderWidth": 1,
                                "borderRadius": 2,
                                "textAnchor": "middle",
                                "orientation": "vertical",
                                "position": "top",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "background": "#fff",
                                    "fontSize": "11px",
                                    "fontWeight": 400,
                                    "cssClass": "",
                                    "padding": {
                                        "left": 5,
                                        "right": 5,
                                        "top": 2,
                                        "bottom": 2
                                    }
                                }
                            }
                        },
                        "text": {
                            "x": 0,
                            "y": 0,
                            "text": "",
                            "textAnchor": "start",
                            "fontSize": "13px",
                            "fontWeight": 400,
                            "appendTo": ".apexcharts-annotations",
                            "backgroundColor": "transparent",
                            "borderColor": "#c2c2c2",
                            "borderRadius": 0,
                            "borderWidth": 0,
                            "paddingLeft": 4,
                            "paddingRight": 4,
                            "paddingTop": 2,
                            "paddingBottom": 2
                        }
                    },
                    "responsive": {},
                    "series": {
                        "legendInactiveClass": "legend-mouseover-inactive"
                    },
                    "theme": {
                        "colors": [],
                        "isColorFn": false,
                        "isHeatmapDistributed": false,
                        "isBarDistributed": false
                    },
                    "formatters": {
                        "tooltipKeyFormat": "dd MMM"
                    },
                    "titleSubtitle": {},
                    "legend": {
                        "isBarsDistributed": false,
                        "legendHelpers": {}
                    },
                    "toolbar": {
                        "ev": {},
                        "selectedClass": "apexcharts-selected",
                        "minX": 1,
                        "maxX": 7
                    },
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": false,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": true,
                        "lastHoverTime": 1698083354146
                    },
                    "dimensions": {
                        "lgRect": {
                            "x": 666,
                            "y": 252,
                            "height": 16,
                            "width": 482
                        },
                        "yAxisWidth": 27,
                        "yAxisWidthLeft": 27,
                        "yAxisWidthRight": 0,
                        "xAxisHeight": 32.652,
                        "isSparkline": false,
                        "dimHelpers": {},
                        "dimYAxis": {},
                        "dimXAxis": {},
                        "dimGrid": {},
                        "lgWidthForSideLegends": 0,
                        "xPadRight": 0,
                        "xPadLeft": 0,
                        "xAxisWidth": 17
                    },
                    "updateHelpers": {},
                    "zoomPanSelection": {
                        "selectedClass": "apexcharts-selected",
                        "minX": 1,
                        "maxX": 7,
                        "dragged": false,
                        "graphics": {},
                        "eventList": [
                            "mousedown",
                            "mouseleave",
                            "mousemove",
                            "touchstart",
                            "touchmove",
                            "mouseup",
                            "touchend"
                        ],
                        "clientX": 0,
                        "clientY": 0,
                        "startX": 0,
                        "endX": 0,
                        "dragX": 0,
                        "startY": 0,
                        "endY": 0,
                        "dragY": 0,
                        "moveDirection": "none",
                        "zoomRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect"
                        },
                        "selectionRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect",
                            "_memory": {
                                "_draggable": {
                                    "constraint": {
                                        "minX": 0,
                                        "minY": 0,
                                        "maxX": 422,
                                        "maxY": 181.348
                                    },
                                    "value": true
                                }
                            }
                        }
                    },
                    "pie": {
                        "chartType": "area",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 181.348,
                        "centerY": 90.674,
                        "centerX": 211,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 46.45058536585367,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 2,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": 0.014218009478672985,
                        "initialXRatio": 0.014218009478672985,
                        "invertedXRatio": 0.03308555925623662,
                        "invertedYRatio": 0.08530805687203792,
                        "baseLineInvertedY": -281.3333333333333,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            31,
                            40,
                            28,
                            51,
                            42,
                            56,
                            33
                        ],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 60.285714285714285
                    }
                }
            }
        ]
    }


    return (
        <>
            <ApexCharts options={options} series={options.series} type="area" />

        </>
    );
}

export default Areachart;
