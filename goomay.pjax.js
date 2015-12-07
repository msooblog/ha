/*
*	<a href="" data-handle='name'></a>
*	为了兼容ie9，所以dataset[name]=>attr('data-name')
 */
(function($){
	$(window).on('popstate',function(e){
		e.preventDefault()

		var state=history.state

		route(state.handle)(state)
	})
	pjax={}

	pjax.history=Object.create([])
	pjax.history.__proto__.push=function(state){
		if(this.length>50)this.splice(0,1);
		if(history.pushState)history.pushState(state,'',state.url);
		pjax.url=state.url
		return [].push.apply(this,[state])
	}
	//pjax.url=location.origin

	var handle={
		'default':function(){
			console.error(this)
		}
	}
	,	route=function(name){
		if(!name)return	console.error('No handle func for '+name);
		if(typeof handle[name]==='function'){
				return	handle[name]
		}else{
			return	console.error('No handle func whose name is '+name)
		}
	}

	$.fn.pjax=function(event,obj,callback,blue){
		function pjax(e){
			e.preventDefault()

			var	handle=$(this).attr('data-handle')
			,	href=this.href
			,	self=this
			,	ajax={
				ajax:true
			}


			if(!handle)handle='default';
			//if(href.indexOf('http','0')===(-1))href+=window.pjax.url;
			for(var i in obj){
				ajax[i]=obj[i]
			}

			$.post(href,ajax,function(res,xhr,status){
				var res=$.parseHTML(res).filter(function(e,i,self){
					if(e.nodeName!="#text")return	true;
				})
				var title=res.splice(0,1)[0]
				,	content=res[0]
				console.log(title.text,title)
				var state={
					href:this.url
					,handle:handle
					,title:title.textContent
					,url:this.url
				}
				if(typeof callback==='function')callback.apply(self,[res]);
				window.pjax.history.push(state)
				if(blue===false)return;
				route(handle).apply(self,[res])
			}).error(function(){
				alert(this.url+' request fail !')
			})
		}
		this.on(event,pjax)
		return this
	}
	console.log('pjax loaded')
})(jQuery)