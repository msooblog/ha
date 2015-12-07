# ha handle + data

我们操作界面是想获得信息，从最开始的进入到后续的动作
从进入那一刻开始我们就在输送信息给浏览者，而浏览者需要与这些信息进行互动，以直接的或者间接的
比如向下滑动，这就说明了你给出的信息不是最有效的，最好的体验就是一眼就能获得最重要的信息。
当用户没有得到所需要的信息时，他们就会开始行动以获取更多的信息，这时我打算用data来进行数据的获取并通过handle来展示这些信息。
#data:数据区域：一块提供更新方法的区域
var data=function(){
	return new function(){
	this.x=555
}
}




#handle:元素事件绑定
DOM元素的事件包装
var handle=handle(DOM)//selector or DOM
.on事件监听
.addClass .hasClass  .removeClass
更多

#data：元素内容更新
没想怎么实现

#文档没有写完，待续...
