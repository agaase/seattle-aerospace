var Viz = (function(){
	var data, objArr, actArray, svgContainer;
	var width = 1000, height=550, axisWidth=100;
	var pointWidth=50,pointMargin=1;

	var rulerColor = "#ddd";
	var defaultColor = "#37474F";

	var drawObjects = function(){
		var x=axisWidth,y=0;
		var objectGroup = svgContainer.append("g");
		
		var scale = d3.scaleLinear()
					  .domain([0,d3.max(objArr,function(da){return da.val})])
					  .range([0, axisWidth]);
		objectGroup.selectAll(".object")
					.data(objArr)
					.enter()
					.append("rect")
					.attr("class","object")
					.attr("x",function(d,i){
						return i*pointWidth + x;
					})
					.attr("y",function(d,i){
						return axisWidth-scale(d.val);
					})
					.attr("width",pointWidth-pointMargin)
					.attr("height",function(d,i){
						return scale(d.val);
					})
					.style("fill",defaultColor);
		objectGroup.selectAll(".objectRuler")
					.data(objArr)
					.enter()
					.append("line")
					.attr("class","objectRuler")
					.attr("x1",function(d,i){
						return i*pointWidth + x;
					})
					.attr("x2",function(d,i){
						return i*pointWidth + x;
					})
					.attr("y1",function(d,i){
						return axisWidth-scale(d.val);
					})
					.attr("y2",axisWidth + pointWidth*actArray.length)
					.style("stroke-width",pointMargin	)
					.style("stroke",rulerColor)
		objectGroup.append("text")
					 .attr("x",axisWidth-5)
					 .attr("y",20)
					 .attr("text-anchor","end")
					 .text("Object");
	}
	var drawActivities = function(){
		var x=0,y=axisWidth;
		
		var activityGroup = svgContainer.append("g");
		
		var scale = d3.scaleLinear()
					  .domain([0,d3.max(actArray,function(da){return da.val})])
					  .range([0, axisWidth]);
		activityGroup.selectAll(".activity")
					.data(actArray)
					.enter()
					.append("rect")
					.attr("class","activity")
					.attr("y",function(d,i){
						return i*pointWidth+y;
					})
					.attr("x",function(d){
						return axisWidth-scale(d.val);
					})
					.attr("height",pointWidth-pointMargin)
					.attr("width",function(d){
						return scale(d.val);
					})
					.style("fill",defaultColor);
		activityGroup.selectAll(".actRuler")
					.data(actArray)
					.enter()
					.append("line")
					.attr("class","actRuler")
					.attr("y1",function(d,i){
						return i*pointWidth + y;
					})
					.attr("y2",function(d,i){
						return i*pointWidth + y;
					})
					.attr("x1",function(d,i){
						return axisWidth-scale(d.val);
					})
					.attr("x2", axisWidth + pointWidth*objArr.length)
					.style("stroke-width",pointMargin)
					.style("stroke",rulerColor);
		activityGroup.append("text")
					 .attr("x",axisWidth-5)
					 .attr("y",axisWidth-5)
					 .attr("text-anchor","end")
					 .text("Activity");
	}

	var drawBusiness = function(){
		var dataArr = arrObj(data);
		var scale = d3.scaleLinear()
					  .domain([0,d3.max(dataArr,function(da){return da.val})])
					  .range([0, pointWidth/2]);
		for(var i=0;i<actArray.length;i++){
			for(var j=0;j<objArr.length;j++){
				svgContainer.append("circle")
				   .attr("cx",axisWidth+j*pointWidth+pointWidth/2)
				   .attr("cy",axisWidth+i*pointWidth+pointWidth/2)
				   .attr("r",scale(data[actArray[i].label+"-"+objArr[j].label]))
				   .style("fill",defaultColor)
			}
		}
	}

	var draw = function(){
		drawObjects();	
		drawActivities();	
		drawBusiness();	
	}

	var arrObj = function(objs){
		var arr = [];
		for(var key in objs){
				arr.push({
					"label" : key,
					"val" : objs[key]
				})
			}
		arr.sort(function(a,b){
			return b.val-a.val;
		});
		return arr;
	}

	var setup = function(callback){
		svgContainer = d3.select("#viz").append("svg")
							 .attr("height","100%")
							 .attr("width","100%")

		d3.csv("Locus_seattle_aerospace.csv",function(resp){
			data = {};
			var objects = {};
			var activities = {};
			resp.forEach(function(v){
				if(activities[v.Activity]){
					activities[v.Activity] += 1;
				}else{
					activities[v.Activity] = 1;
				}
				if(objects[v.Object]){
					objects[v.Object] += 1;
				}else{
					objects[v.Object] = 1;
				}
				if(data[v.Activity+"-"+v.Object]){
					data[v.Activity+"-"+v.Object] += 1
				}else{
					data[v.Activity+"-"+v.Object] = 1;
				}
				
			});
			objArr = arrObj(objects);
			actArray = arrObj(activities);
			callback();
		})
	}

	return {
		setup : setup,
		draw : draw
	}

})()

Viz.setup(function(){
	Viz.draw();
});