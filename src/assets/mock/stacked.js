const data = {
	"title": [{
		"show": false,
		"text": "用户量趋势分析",
		"padding": 5,
		"textStyle": {
			"fontSize": 12,
			"color": "#C5C8CF"
		},
		"left": "auto",
		"top": "auto",
		"right": "auto",
		"bottom": "auto",
		"x": "left"
	}],
	"legend": {
		"show": true,
		"textStyle": {
			"color": "#C5C8CF"
		},
		"left": "auto",
		"top": "center",
		"data": ["移动活跃在网用户（户）", "固话活跃在网用户（户）"],
		"right": 0,
		"orient": "vertical"
	},
	"grid": [{
    "show": false,
    "width": '70%',
		"left": 15,
		"top": 25,
		"right": '30%',
		"bottom": 10,
		"containLabel": true,
		"backgroundColor": "transparent"
	}],
	"radar": [],
	"tooltip": [{
		"show": true,
		"trigger": "axis",
		"axisPointer": {
			"type": "shadow"
		},
		"extraCssText": "z-index: 99999999;"
	}],
	"xAxis": [{
		"data": ["202007", "202008", "202009"],
		"gridIndex": 0,
		"type": "category",
		"axisTick": {
			"show": true,
			"alignWithLabel": true,
			"length": 7,
			"interval": 0
		},
		"axisLabel": {
			"textStyle": {
				"color": "#C5C8CF"
			},
			"show": true,
			"interval": 0,
			"rotate": 30
		},
		"axisLine": {
			"lineStyle": {
				"color": "#C5C8CF"
			},
			"show": true,
			"onZero": false
		},
		"splitLine": {
			"show": false
		},
		"realData": ["202007", "202008", "202009"]
	}],
	"yAxis": [{
		"data": [],
		"gridIndex": 0,
		"max": "dataMax",
		"type": "value",
		"axisLabel": {
			"textStyle": {
				"color": "#C5C8CF"
			},
			"show": true,
			"interval": 0
		},
		"axisLine": {
			"lineStyle": {
				"color": "#C5C8CF"
			},
			"show": true,
			"onZero": false
		},
		"splitLine": {
			"show": false
		}
	}],
	"series": [{
		"type": "bar",
		"name": "移动活跃在网用户（户）",
		"symbol": "emptyCircle",
		"smooth": false,
		"sampling": "average",
		"connectNulls": true,
		"lineStyle": {
			"normal": {
				"opacity": 1
			}
		},
		"itemStyle": {
			"emphasis": {
				"opacity": 1
			}
		},
		"data": [{
			"value": "364547891",
			"itemStyle": {}
		}, {
			"value": "331186311",
			"itemStyle": {}
		}, {
			"value": "320502991",
			"itemStyle": {}
		}],
		"xAxisIndex": 0,
		"yAxisIndex": 0,
		"z": 10,
		"meaId": "40289e327529ef8801752b696b7d0884__6b8e374d10627a382ac5",
		"colName": "",
		"meaName": "移动活跃在网用户（户）",
		"label": {
			"normal": {
				"show": true,
				"position": "inside",
				"textStyle": {
					"color": "#FFFFFF",
					"fontSize": "12"
				},
				"formatter": "{c}"
			}
		},
		"barMinHeight": 0,
		"barGap": "10%",
		"barCategoryGap": "50%",
		"stack": "总数"
	}, {
		"type": "bar",
		"name": "固话活跃在网用户（户）",
		"symbol": "emptyCircle",
		"smooth": false,
		"sampling": "average",
		"connectNulls": true,
		"lineStyle": {
			"normal": {
				"opacity": 1
			}
		},
		"itemStyle": {
			"emphasis": {
				"opacity": 1
			}
		},
		"data": [{
			"value": "82334344",
			"itemStyle": {}
		}, {
			"value": "72515336",
			"itemStyle": {}
		}, {
			"value": "83730307",
			"itemStyle": {}
		}],
		"xAxisIndex": 0,
		"yAxisIndex": 0,
		"z": 10,
		"meaId": "40289e327529ef8801752b696ba608cc__14252209860f773d1c33",
		"colName": "",
		"meaName": "固话活跃在网用户（户）",
		"label": {
			"normal": {
				"show": true,
				"position": "inside",
				"textStyle": {
					"color": "#FFFFFF",
					"fontSize": "12"
				},
				"formatter": "{c}"
			}
		},
		"barMinHeight": 0,
		"barGap": "10%",
		"barCategoryGap": "50%",
		"stack": "总数"
	}],
	"dataZoom": [{
		"show": false,
		"showDetail": false,
		"start": 0,
		"end": 100,
		"xAxisIndex": [0]
	}],
	"brush": {
		"toolbox": [""],
		"brushLink": "all",
		"seriesIndex": "all",
		"xAxisIndex": 0,
		"yAxisIndex": "all",
		"throttleType": "debounce",
		"throttleDelay": 500,
		"transformable": true,
		"inBrush": {
			"symbolSize": 8,
			"opacity": 1
		},
		"outOfBrush": {},
		"brushType": "polygon"
	},
	"color": ["#087BEA", "#03BCD5", "#24D68E", "#FFD544", "#FF7F7F", "#0061E5", "#0077DA", "#1192FD", "#43AAFF", "#548AFA", "#9683FF", "#00A479", "#09B98B", "#21ECC8", "#81FBE3", "#FF3471", "#FF547C", "#FF7373", "#FFAEAE", "#8144F1", "#826CFF", "#C077FF", "#FF6BF2", "#FF4AC2", "#FF7B44", "#FF8F60", "#FFAB88", "#FFEEB2", "#008C9E", "#23D2EA", "#71ECFC", "#00A9BF"],
	"backgroundColor": "#2B3651",
	"animationDuration": 2500
}

export default data