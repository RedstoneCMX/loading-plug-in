//作者：陈明新
//学校：北京理工大学
//本插件用于页面加载loading等待效果

//参数设定
//background，显示loading时，背景颜色，默认#FFFFF3
//opacity，显示loading时，背景的透明程度，默认0.8
//showhide，show或者hide取其一，默认show

(function ($) {
	//这里放入插件代码
	$.fn.loading = function(setting){

		_self = this;

		//如果没有填写参数设置setting为""
		if(setting == null)
			setting = "";

		//判断为空函数
		_self.IsNull = function(value) {

		    if (value == undefined || value == null || value == "" || value.length == 0) {
		        return true;
		    }
		    return false;
		}
		//默认配置
		_self.DefaultSetting = {
		    background:"#FFFFF3",
		    opacity: "0.8",
		    showhide: "show"
		};
		//设置配置
		_self.Setting = {
		    background: (_self.IsNull(setting.background) ? _self.DefaultSetting.background : setting.background),
		    opacity: _self.IsNull(setting.opacity) ? _self.DefaultSetting.opacity : setting.opacity,
		    showhide: _self.IsNull(setting.showhide) ? _self.DefaultSetting.showhide : setting.showhide
		};

		
		//如果是显示loading
		if(_self.Setting.showhide == "show"){

			$(_self).show();

			$(_self).append("<div class='loading_in'><div class='left'></div><div class='center'></div><div class='right'></div></div>");
			//设置加载的父级div的样式
			$(_self).css({
				"position":"fixed",
				"z-index":"1000",
				"width":"100%",
				"height":"100%",
				"top":"0",
				"left":"0",
				"background":_self.Setting.background,
				"opacity":_self.Setting.opacity
			});

			//设置loading_in的样式
			$(".loading_in").css({
				"position":"absolute",
				"width":"105px",
				"height":"15px",
				"left":"50%",
				"top":"50%",
				"margin-left":"-52.5px",
				"margin-top":"-7.5px"
			});

			//变换颜色功能
			var arr_color = ["#FF0033","#0066CC","#FFCC00"];
			var arr_select_num = [2,2,1,1,0,0];
			var count = 0;
			var timer=setInterval(function(){  
				select_num = arr_select_num[count];
				$(".left").css({"background":arr_color[select_num]});
				$(".center").css({"background":arr_color[(select_num+1)%3]});
				$(".right").css({"background":arr_color[(select_num+2)%3]});
				count = (count + 1) % 6;
				//alert("aa");
				//清除定时器，不知道为什么放在内部来清除可以，放在外面清除不可以
				if(_self.Setting.showhide == "hide"){
					clearInterval(timer);
				}

			},500);
		}

		//如果是隐藏loading
		if(_self.Setting.showhide == "hide"){
			
			$(_self).empty();
			$(_self).removeAttr('style');
        	$(_self).hide();
        	//clearInterval(timer);
		}
	}

})(jQuery);



