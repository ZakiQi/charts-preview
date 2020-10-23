const data = {
	"title": [{
		"show": false,
		"text": "细分市场分布",
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
		"right": "10",
		"top": "center",
		"data": ["农村市场", "流动市场", "商业客户", "城市家庭", "校园市场", "行业客户", "其他"],
		"right": 0,
		"orient": "vertical"
	},
	"grid": [],
	"radar": [],
	"tooltip": [{
		"show": true,
		"trigger": "item",
		"formatter": "MARKET ： {b}<br/>客户数 :  {c} <br/>占比 ： {d}%",
		"extraCssText": "z-index: 99999999;"
	}],
	"series": [{
		"type": "pie",
		"name": "客户数",
		"meaId": "93fa208a426aab21f2214bfadcc64cd4",
		"colName": "",
		"selectedMode": "multiple",
		"radius": "50%",
		"center": ["30%", "50%"],
		"cycleRadius": "45%",
		"itemStyle": {
			"emphasis": {
				"opacity": 1
			}
		},
		"data": [{
			"name": "农村市场",
			"value": 123292,
			"itemStyle": {}
		}, {
			"name": "流动市场",
			"value": 4846333,
			"itemStyle": {}
		}, {
			"name": "商业客户",
			"value": 3532726,
			"itemStyle": {}
		}, {
			"name": "城市家庭",
			"value": 7744811,
			"itemStyle": {}
		}, {
			"name": "校园市场",
			"value": 55433,
			"itemStyle": {}
		}, {
			"name": "行业客户",
			"value": 1419797,
			"itemStyle": {}
		}, {
			"name": "其他",
			"value": 657,
			"itemStyle": {}
		}],
		"label": {
			"normal": {
				"show": true,
				"textStyle": {
					"color": "#C5C8CF"
				},
				"formatter": "{b} {d}%"
			},
			"emphasis": {
				"show": false
			}
		},
		"lableLine": {
			"normal": {
				"show": true
			},
			"emphasis": {
				"show": false
			}
		}
	}],
	"dataZoom": [],
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