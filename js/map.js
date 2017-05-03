var map;
// 所有标记
var markers = [];
// 全局的地点标记数组
var placeMarkers = [];
/*  ======= 地图模型（放置数据） ======= */
var mapModel = {
	center: {lat:36.6612471,lng:117.0209026},
	zoom : 14,
	locations : [
	// 公园 7
	    {title: '泉城广场', location: {lat: 36.661495, lng: 117.021238},uid:'5c2dc21dd0fad3056ec02c81',type:'park',placeId:'ChIJAaJ6dMgFwjURa72hRpWBTFk'},
		{title: '大明湖', location: {lat: 36.6722813, lng: 117.0169624},uid:'b29fcdd58b1a7f11871541fb',type:'park',placeId:'ChIJf9Svv9YFwjUREG3peTSYpuk'},
		{title: '趵突泉', location: {lat: 36.6646522802915, lng: 117.0169416802915},uid:'25ae8e7957ad41001029358b',type:'park',placeId:'ChIJdcCv2cYFwjURsUQ4azTC6zc'},
		{title: '千佛山', location: {lat: 36.636653, lng:  117.036044},uid:'b0d056f26489f07fcbc3db81',type:'park',placeId:'ChIJHx1lj1UEwjUR2k06Y0w9oRU'},
		{title: '五龙潭', location: {lat: 36.665764, lng: 117.0155928},uid:'72cc8f1cfff8a73914c8f676',type:'park',placeId:'ChIJoUtc5MUFwjURB1XU7H7EjxY'},
		{title: '泉城公园', location: {lat: 36.64962698029149, lng: 117.0213059802915},uid:'3822912b43fe1ea3e31103be',type:'park',placeId:'ChIJaerq6K4FwjURwktafgptbPg'},
		{title: '黑虎泉', location: {lat: 36.6637959802915, lng: 117.0346389802915},uid:'7d96559870f8c81b2ce67b65',type:'park',placeId:'ChIJD6zgqMwFwjURKJzm-uHA3Lw'},
		
//	 酒店5 
		{title: '索菲特银座大酒店', location: {lat: 36.6615694802915, lng: 117.0304270802915},uid:'6835e3a7fd4c9e57e3110359',type:'hotel',placeId:'ChIJu1Ji3skFwjUR3gxBdAg4Lw4'},
		{title: '良友富临大酒店', location: {lat: 36.6596110197085, lng:  117.0347080197085},uid:'96b672aa4960496cce04ef45',type:'hotel',placeId:'ChIJoeRNdzQEwjUReHWJRllFbw4'},
		{title: '济南玉泉森信大酒店', location: {lat: 36.6614119802915, lng: 117.0293519802915},uid:'747890d95d3c69005a3ac892',type:'hotel',placeId:'ChIJYW0uN8oFwjURy1PiyFndKVU'},
		{title: '山东明珠怡和国际酒店', location: {lat: 36.6687859802915, lng: 116.9942679802915},uid:'a12baa40690a214fe856fa7b',type:'hotel',placeId:'ChIJA3M6OvMFwjURrX8qsT_m3wc'},
		{title: '济南万达凯悦酒店', location: {lat: 36.66338998029149, lng: 117.0021269802915},uid:'f3765f70a687d980d0ff23a2',type:'hotel',placeId:'ChIJwyhUpJMFwjUR65mcYyldQU4'},
	//医院 1
		{title: '山东大学齐鲁医院', location: {lat: 36.65409001970851, lng: 117.0166850197085},uid:'e3e2cd9d098d42fac6f50da8',type:'hospital',placeId:'ChIJz46tKboFwjUR7_9sdVmS8jo'},
    // 购物广场 5
    	{title: '济南恒隆广场', location: {lat: 36.664537, lng: 117.023878},uid:'a00212d0e28c837cabf0cd46',type:'shopping',placeId:'ChIJiXta0c4FwjURj7fEs92EzBM'},
    	{title: '济南世贸国际广场', location: {lat: 36.6663422802915, lng: 117.0310730802915},uid:'79775de5b303451b0ab93add',type:'shopping',placeId:'ChIJ_82s_swFwjURFB73RRV1OIA'},
    	{title: '济南万达广场', location: {lat: 36.6632140197085, lng: 117.0045610197085},uid:'ea25e6450d1e057edbecedce',type:'shopping',placeId:'ChIJg2NM3-oFwjURqs3pYIi_vWg'},
    	{title: '大观园', location: {lat: 36.661441, lng: 116.99123},uid:'6805cd7c5424d12a3717dc67',type:'shopping',placeId:'ChIJ07Dnso4FwjURyJTnVu7wFU0'},
    	{title: '贵和购物中心', location: {lat: 36.6659399802915, lng:  117.0272437802915},uid:'',type:'shopping',placeId:'ChIJ9YVfpM4FwjURQenyeK24bto'},
    // 少年宫 1
    	{title: '济南市少年宫', location: {lat: 36.6722806197085, lng: 117.0127782197085},uid:'cac5fc765d0ac8f22db96db6',type:'pain',placeId:'ChIJ_wsNhdwFwjURtwIgZyDWWqA'},
	],
	mapTypeControlOptions :[
		{style:[{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"saturation":"-21"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#00b5ff"},{"lightness":"24"},{"gamma":".9"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"hue":"#00b8ff"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"hue":"#00b3ff"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#a7ff00"},{"lightness":"0"},{"gamma":"1.35"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"hue":"#0084ff"},{"saturation":"-87"},{"lightness":"6"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"hue":"#0053ff"},{"lightness":"16"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"hue":"#0033ff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"saturation":"-33"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"off"}]}],name:"ordinary"},
		{style:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],name:"fresh"},
		{style:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":"36"},{"color":"#58595c"},{"lightness":"0"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#212429"},{"lightness":"0"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#212429"},{"lightness":"0"},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#29303a"},{"lightness":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#212429"},{"lightness":"0"},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#212429"},{"lightness":"0"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2e3d51"},{"lightness":"0"},{"gamma":"1"}]}],name:"night"}
	
	],
	icons : {
		hotel : {
			icon : "img/hotel_32px_515352_easyicon.net.png",
			bigIcon : "img/hotel_48px_515352_easyicon.net.png"
		},
		park : {
			icon : "img/Park_32px_1183962_easyicon.net.png",
			bigIcon : "img/Park_48px_1183962_easyicon.net.png"
		},
		shopping : {
			icon : "img/shopping_bag_27.136237256719px_1207300_easyicon.net.png",
			bigIcon : "img/shopping_bag_40.704355885079px_1207300_easyicon.net.png"
		},
		hospital : {
			icon : "img/hospital_32px_1081691_easyicon.net.png",
			bigIcon : "img/hospital_48px_1081691_easyicon.net.png"
		},
		pain : {
			icon : "img/Painting_32px_1188488_easyicon.net.png",
			bigIcon : "img/Painting_48px_1188488_easyicon.net.png"
		}
	}

};

/*  ======= 视图模型 章鱼  （连接视图和模型） ======= */
var viewModel = {
	// 初始化
	initMap : function() {
		mapView.init();
	},
	// 获得center 中心
	getCenter : function() {
		return mapModel.center;
	},
	// 获得zoom 缩放比例
	getZoom : function() {
		return mapModel.zoom;
	},
	// 获取 地点集合
	getLocations : function(){
		return mapModel.locations;
	},
	// 获取 样式数组
	getMapTypeControlOptions : function() {
		return mapModel.mapTypeControlOptions;
	},
	// 获取标记icon数组
	getIcons : function() {
		return mapModel.icons;
	}
};
/*  ======= 视图  ======= */
var mapView = {
	self : this,
	init : function() {
		// 中心
		var center = viewModel.getCenter();
		// 缩放
		var zoom = viewModel.getZoom();
		// 样式数组
		var styles = viewModel.getMapTypeControlOptions();
		// 初始化样式
		var styledMapType = new google.maps.StyledMapType(styles[1].style);
		map = new google.maps.Map(document.getElementById('map'),{
			center:center,
			zoom:zoom,
			mapTypeControl:false,
			mapTypeControlOptions: {
            	mapTypeIds: ['']
          }
		});
        // 添加样式
		map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
		// 获得地点集合
		var locations = viewModel.getLocations();
		// 信息窗口
		var infoWindow = new google.maps.InfoWindow();
		
		// 遍历地点集合
		for(var i = 0; i < locations.length; i++){
			// 名称
			var title = locations[i].title;
			// 位置
			var position = locations[i].location;
			// 类型
			var type = locations[i].type;
			// uid 第三方查询用
			var uid = locations[i].uid;
			// 所有标记
			var icons = viewModel.getIcons();
			// 标记对象
			var marker = new google.maps.Marker({
		        position: position,
		        icon: icons[type].icon,
		        title: title,
		        type: type,
		        map:map,
		        uid:uid,
		        draggable:true,
		        animation: google.maps.Animation.DROP,
	            id: i
	        });
	        // 动态的给location添加marker属性 ，以便之后点击地点，对应标记动画
	        locations[i]['marker'] = marker;
	        // 添加进数组中
	        markers.push(marker);
	        // 给标记添加打开信息的框的事件
	        marker.addListener('click',function() {
	        	// 先给信息框填充内容 是被点击的这个标记  this
	        	populateInfoWindow(this, infoWindow);
	        });
	        // 添加动态效果
	        marker.addListener('click',function() {
	        	// 先让其他标记停止动画
		        for (var i = 0; i < markers.length; i++) {
		        	// 其他消除动画
			     markers[i].setAnimation(null);
			   }
	        	// 先给信息框填充内容 是被点击的这个标记  this
	        	toggleBounce(this);
	        });
	        // 鼠标移动上去标记动画
	        var bigIcon = icons[type].bigIcon;
	        var icon = icons[type].icon;
	        // 鼠标悬停图标变大
	        marker.addListener('mouseover',(function(bigOne) {
	        	return function(){
	        		this.setIcon(bigOne);
	        	}
	        })(bigIcon));
	         // 鼠标移开恢复默认
	        marker.addListener('mouseout',(function(defOne) {
	        	return function(){
	        		this.setIcon(defOne);
	        	}
	        })(icon));
	    }    
	    // 其他点击事件
	     // 2、两个显示隐藏按钮的监听事件
        document.getElementById('show-markers').addEventListener('click', showListings);
        document.getElementById('hide-markers').addEventListener('click', function() {
          hideMarkers(markers)});
	}

};

viewModel.initMap();


// 给信息框填充内容
function populateInfoWindow(marker,infoWindow) {
	$(".searchDetail").html('');
	// 首先判断信息窗是否已经在该标记打开
	// 因为如果已经打开，传入的信息窗的marker就已经被赋了和它一同传人的marker值，就应该是传入的marker
	if(infoWindow.marker != marker){
		
		infoWindow.setContent('');
		// 传入的参数赋值给infoWindow
		infoWindow.marker = marker;
		// 获取信息窗中的内容
		// 先判断是否有uid 不然没有内容
	
		if(marker.uid != ''){
			var returnValue = '';
			var returnResult = '';
			var uid = marker.uid;
			var url = "http://api.map.baidu.com/place/v2/detail?uid="+uid+"&output=json&scope=2&ak=S6AVfsi6GB1F4zWMFtA2G83xFekSEX4V"
		   // 本来ajax是写在model 里面的 但是总是不能把得到的值return出来 用同步也不行 ，就只能先写在这里了
		   $.ajax({
				url:url,
				dataType:"jsonp",
				success:function(data){
					// 请求获取成功
					if(data.status == 0){
						// 详情
						returnValue = data.result.detail_info;
						returnResult = data.result;
						// 类型
						var type = returnValue.tag;
						if(type == '' || type == undefined){
							type = "暂不清楚";
						}
						// 描述
						var description = returnValue.description;
						if(description == '' || description == undefined){
							description = "暂不清楚";
						}else{
							description = description.substring(0,100)+"...";
						}
						// 时间
						var time = returnValue.shop_hours;
						if(time == '' || time == undefined){
							time = "暂不清楚";
						}
						// 地点
						var address = returnResult.address;
						if(address == '' || address == undefined){
							address = "暂不清楚";
						}
						
						var telephone =  returnResult.telephone;
						if(telephone == '' || telephone == undefined){
							telephone = "暂不清楚";
						}
						
						// 没有返回值
						if(returnValue == ''){
							infoWindow.setContent('<div>我们没有找到它的简介...</div>');
						}else{
							var content = "<div class='marker-details'>"+
									            
												"<h2>"+marker.title+"</h2>"+
												"<p><span>类型：</span><span>"+type+"</span></p>"+
												"<p><span>描述：</span><span>"+description+"</span></p>"+
												"<p><span>开放时间：</span><span>"+time+"</span></p>"+
												"<p><span>地址：</span><span>"+address+"</span></p>"+
												"<p><span>电话：</span><span>"+telephone+"</span></p>"+
												"<div id='pano'></div>"+
										   "</div>";
							infoWindow.setContent(content);
							// 左侧内容填充
							var detail =
										'<div class="searchDetail" id="searchDetail">'+
					                		'<h2>'+marker.title+'</h2>'+
					                		'<p>'+time+'</p>'+
					                		'<p>'+address+'</p>'+
					                		'<p>'+telephone+'</p>'+
					                	'</div>';
							
							$("#searchLike").append(detail);
						}
					}else{
						infoWindow.setContent('<div>我们没有找到它的简介...</div>');
					}
				
				},
				error:function() {
					infoWindow.setContent('<div>我们没有找到它的简介...</div>');
				}
			});
			
		}else{
			infoWindow.setContent('<div>我们没有找到它的简介...</div>');
		}
			function getStreetView(data, status) {
			// 成功返回 有视图
		    if (status == google.maps.StreetViewStatus.OK) {
		      var nearStreetViewLocation = data.location.latLng;
		      var heading = google.maps.geometry.spherical.computeHeading(
		        nearStreetViewLocation, marker.position);
		        var panoramaOptions = {
		          position: nearStreetViewLocation,
		          pov: {
		            heading: heading,
		            pitch: 30
		          }
		        };
		      var panorama = new google.maps.StreetViewPanorama(
		      document.getElementById('pano'), panoramaOptions);
		    } else {
		    	// 没有全景视图
		    	$("#pano").append("<div>我们没有找到它的街景图!</div>");
		    }
		}
		
	    // 此服务需要根据离标记   最近的位置获取 获取全景图像 找出相机 朝向  角度
		var streetViewService = new google.maps.StreetViewService();
		// 如果这个角度中没有图像 我们就设置了一个
		var radius = 50;
		// 关闭信息窗按钮
		infoWindow.addListener('closeclick',function(){
			//信息窗关闭
        	infoWindow.setMarker = null;
        	// 对应marker停止动画
        	marker.setAnimation(null);
      	});
      // 调用街景服务
      streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
      // 打开信息窗
      infoWindow.open(map,marker);
	}
	
}

/* 点击标记动态效果 */
function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

/* 显示所有标记 循环遍历标记数组 */
function showListings() {
    var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++) {
	// 将每个标记的地图，设为map
  	markers[i].setMap(map);
    //扩展地图的界限 来容纳每一个标记
    bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

/* 隐藏所有标记 再次循环遍历标记数组  将每个标记的地铁设为null */ 
function hideMarkers(markers) {
   for (var i = 0; i < markers.length; i++) {
     // 这并不会删除标记  只是隐藏它们
     markers[i].setMap(null);
   }
}

/*  改变地图样式   */
function changeStyle(param) {
	// 获取所有样式
	var styles = viewModel.getMapTypeControlOptions();
	var style = [];
	styles.forEach(function(styleItem){
		// 确定样式
		if(styleItem.name == param){
			style = styleItem.style;
		}
	});
	var styledMapType = new google.maps.StyledMapType(style);
	map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}


/* 搜索框 执行的函数 */
function textSearchPlaces() {
	// 捕捉地图的界限
    var bounds = map.getBounds();
    // 隐藏所有上次的的标记
    hideMarkers(placeMarkers);
    // 创建一个新的地点服务实例
    var placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch({
    	// 传人查询词条 及界限 
      query: document.getElementById('places-search').value,
      bounds: bounds
    }, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        createMarkersForPlaces(results);
      }
    });
}

/* 标记样式模型 */
var locatOne = function(data) {
	this.title = ko.observable(data.title);
	this.marker = data.marker;
	this.type = data.type;
	this.shouldShow = ko.observable(true);
	this.name = data.title;
	this.location = data.location;
	this.placeId = data.placeId;
}
/* 标记样式视图模型*/
var locationViewModel = function() {
	var self = this;
	this.entryContent = ko.observable('');
	this.locationList = ko.observableArray([]);
	var locations = viewModel.getLocations();
	locations.forEach(function(locItem){
		self.locationList.push(new locatOne(locItem));
	});
	this.currentLoc = ko.observable( this.locationList()[0]);
	// 把信息窗提出来，作为一个全局变量解决点击切换地点时，上一个信息窗没有关闭的问题
	var infoWindow = new google.maps.InfoWindow();
	// 点击列表名称 对应标记动画
	this.showMarker = function(newLocation) { 
//		var placeId = newLocation.placeId;
//		var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeId+"&key=AIzaSyDoRVxrdbj_XoLSVLKubwBxENPq26RhGZs";
//		$.ajax({
//			url:url,
//			dataType:'json',
//			type:'post',
//			success:function(data){
//				console.log(data);
//				var name  = data.result.name;
//				var src = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CoQBdwAAAEV5JVeoNCTsE0vrYcpLbolmjLCxqplN0UzX0VPo-d5POYlO6dQI1DoOSo4UcZT2cnMY_ivKmAwfxHC7VBDd0l5Vxr1-ezoah9PXbAG425KapbKTtmIl0ziyUcC29cZh0Mry-9leWWhVCwXsL754YJ-6hl1rdrVGMKY4jUSeOeJtEhD32gQ53fqiu57stimmmPoSGhR0gYsYsZU7pPvvcTzaADYNN2BoKw&key=AIzaSyDoRVxrdbj_XoLSVLKubwBxENPq26RhGZs";
//				var review = data.review[0].text;
//				var detail =
//							'<div class="searchDetail">'+
//		                		'<h2>'+泉城广场+'</h2>'+
//		                		'<p>'+评论+'</p>'+
//		                		'<img src="'+src+'" />'+
//		                	'</div>';
//		        $("#searchLike").append(detail);
//			},
//			error:function(){
//				alert("请求失败!");
//			}
//		});
		for (var i = 0; i < markers.length; i++) {
	     markers[i].setAnimation(null);
	     
	    }
		toggleBounce(newLocation.marker);
		// 标记动画
	    populateInfoWindow(newLocation.marker, infoWindow);
		// 先让之前的标记停止动画
	};
	
	// 搜索框及时搜索显示
	this.searchPosition = ko.computed(function(){
		
		var LocationS = self.locationList();
		var content = self.entryContent();
		// 搜索内容为无
		if(!content || content == '全部' || content == '全'){
			return ko.utils.arrayFilter(LocationS,  function(position, index) {
				position.marker.setMap(map);
				return LocationS;
			});
			
		}else{
			// 有特定搜索内容，返回符合的地点数组
			return ko.utils.arrayFilter(LocationS,  function(position, index) {
			// 标记先都隐藏
			position.marker.setMap(null);
            var nameStr = position.name.indexOf(self.entryContent()) !== -1;
            // 类型英文都转换成小写
            var typeStr = position.type.toLowerCase().indexOf(self.entryContent().toLowerCase()) !== -1;
            // 符合条件的标记显示
            if(nameStr || typeStr){
            	position.marker.setMap(map);
            }
            // 返回符合条件的地点标记
            return nameStr || typeStr;
          });
		}
	});
	// 按类型查找
	this.sortSearch = function(sortType) {
		var LocationS = this.locationList();
		
		// 循环列表项
		for(var i = 0; i < LocationS.length; i++){
			// 先判断是否是all  all就恢复成初始状态
			// 先让每个列表都显示
			 LocationS[i].shouldShow(true) ;
			 LocationS[i].marker.setMap(map);
			// 再判断是否应该显示 不是自己的类型并且不是all 就不显示
			if(sortType != LocationS[i].type && sortType != "all"){
				 LocationS[i].shouldShow(false) ;
				 LocationS[i].marker.setMap(null);
			}
		}

	};
	
    // 按名称查找还是保留
	this.titleSearch = function() {
		var title = this.entryContent().replace(/(^\s*)|(\s*$)/g, "");
		var LocationS = this.locationList();
		// 循环列表项
		for(var i = 0; i < LocationS.length; i++){
			// 先判断是否是all  all就恢复成初始状态
			// 先让每个列表都显示
			 LocationS[i].shouldShow(false) ;
			 LocationS[i].marker.setMap(null);
			 var locTitle = LocationS[i].name;
			// 再判断是否应该显示 不是自己的类型并且不是all 就不显示
			// 修改判断不严谨    当用户输入空字符串或所输入的内容为地点第一个字打头儿的时候，indexOf返回的并不是大于0，而是等于0：
			if(locTitle.indexOf(title) >= 0){
				 LocationS[i].shouldShow(true) ;
				 LocationS[i].marker.setMap(map);
			}
		}
		// 为了避免ko阻止默认事件
		return true;
	};
}
// 启动绑定
ko.applyBindings(new locationViewModel());


