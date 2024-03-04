import { h } from './util.js';

// 注意：内容包含type=password的input，且聚焦时多次调用会重复造成游离节点，但好像和dom tree中的input总数量有关，不会一直增加。
// 是否填写内容、多个input切换可能减少游离节点。text、url、tel、search多次调用只会出现一次游离节点。
class _MyMessage{
	// 消息组件类
	constructor(){
		this.duration = 3500; // 默认显示持续时长
		this.timer = null; //定时器
		this.cssUrl = 'https://dev.jrcaifang.com/css/message.css'; // 样式路径
		this.fontUrl = 'https://dev.jrcaifang.com/css/iconfont.css'; // 图标字体文件路径
		this._init(); // 执行创建
	};

	h = h; // 类vue h函数

	_init(){
		// 创建显示组建件
		h('link', {rel: 'stylesheet', href: this.cssUrl}, null, document.head);
		h('link', {rel: 'stylesheet', href: this.fontUrl}, null, document.head);
		// 引入样式、字体图标 
		this._messageBox = h('dialog', {class: 'my-message-modal-dialog'});
		this._messageInner = h('div', {class: 'inner'}, null, this._messageBox); // 文字图标容器
		this._messageIcon = h('i', {class: 'icon'}, null, this._messageInner); // 图标
		this._messageContent = h('div', {class: 'content', tabIndex: '1'}, null, this._messageInner); //文字内容 // 获取键盘事件焦点
		this._controlCenter = h('div', {class: 'control-center'}, null, this._messageBox); // button容器
		this._cancelButton = h('button', {class: 'cancel'}, null, this._controlCenter); // 取消
		this._confirmButton = h('button', {class: 'confirm'}, null ,this._controlCenter); // 确认
		document.body.appendChild(this._messageBox);
	};

	_show(type, content, color) {
		// 公共显示
		this._closeMessage(); // 关闭之前的消息，有可能有没关的消息
		switch (type) {
			case 'success':
				this._messageIcon.className = 'icon iconfont icon-success';
				break;
			case 'error':
				this._messageIcon.className = 'icon iconfont icon-error';
				break;
			case 'confirm':
				this._messageIcon.className = 'icon iconfont icon-help';
				this._controlCenter.style.display = 'flex'; // 显示确认消息控制中心
				break;
			default:
				// 如果不靠左不用加icon。直接：iconfont icon-warn
				this._messageIcon.className = 'icon iconfont icon-warn';
		};
		this._messageIcon.style.color = color; //图标颜色
		if(typeof content === 'object'){
			this._messageContent.appendChild(content); // dom消息内容挂载
		}else this._messageContent.innerText = content; // 文本消息内容挂载
		this._messageBox.showModal();
	}

	_showMessage(type, content, duration, color) {
		// 显示普通消息。消息类型, msg:消息内容, color:显示颜色, duration:持续显示时长
		this._messageBox.onkeydown = null; // 去除键盘事件
		this._show(type, content, color); // 设置图标、颜色、消息内容、
		this.timer = setTimeout(() => {
			this._closeMessage(); // 关闭消息
		}, duration || this.duration);
	};

	_showConfirmMessage(content){
		// 显示确认消息
		this._show('confirm', content, 'rgb(249, 176, 25)');
	}

	_removeChildNodes(parentNodes){
		// 移除元素子所有节点  innerHTML = ''; 可能造成游离节点
		const inputs = parentNodes.querySelectorAll('input, textarea');
		inputs.forEach(input=>{
			input.blur();
			input.parentNode.removeChild(input);
			input = null;
		}) // 聚焦过的最后一个input不能被回收，所以先移除所有input、textarta
		for(let i = parentNodes.childNodes.length - 1; i >= 0; i--){
			parentNodes.childNodes[i].remove(); // 删除旧的子节点
		}
	}

	_closeMessage(){ 
		// 关闭消息
		this._removeChildNodes(this._messageContent); // 移除内容
		this._controlCenter.style.display = 'none'; // 关闭控制按钮
		this._messageBox.close(); // close为dialog的方法
		clearTimeout(this.timer); // 取消自动关闭
		this.timer = null;
	}

	success(content, duration) {
		this._showMessage('success', content || '完成', duration, 'rgb(97, 196, 121)');
	};

	warning(content, duration) {
		this._showMessage('warning', content || '未知警告', duration, 'rgb(249, 176, 25)'); // 原颜色 rgb(248, 206, 74);
	};

	error(content, duration) {
		this._showMessage('error', content || '未知错误', duration, 'rgb(225, 80, 66)');
	}

	/**
	 * @Author: sonion
	 * @msg: 需确认的消息
	 * @param {Object} options - 对象式参数
	 * @param {String|Element} options.content - 消息内容字符串或Dom对象，可用h函数创建元素（居名导入）。
	 * @param {String} [options.confirmText='确定'] - 确认文字
	 * @param {String} [options.cancelText='取消'] - 取消文字
	 * @param {Function} [options.confirmCallback] - 确认事件函数
	 * @param {Function} [options.cancelCallback] - 取消事件函数
	 */
	confirm({ content, confirmText = '确定', cancelText = '取消', confirmCallback, cancelCallback }){
		this._cancelButton.textContent = cancelText;
		this._confirmButton.textContent = confirmText;
		this._confirmButton.onclick = ()=>{
			// 不用addEventListener因为下次可以直接覆盖，而不用取消之前的事件
			this._closeMessage(); // 先执行关闭，避免回掉有bug导致不能关闭弹窗
			confirmCallback && confirmCallback.call(this); // 确认事件
		};
		this._cancelButton.onclick = ()=>{
			this._closeMessage();
			cancelCallback && cancelCallback.call(this); // 取消事件
		};
		this._messageBox.onkeydown = (e)=>{
			if(e.key === 'Enter'){
				this._messageBox.open && this._confirmButton.click(); // 键盘确认
				e.preventDefault(); // 因为点击触发位置，按回车会再次触发
			}else if (e.key === 'Escape'){
				this._messageBox.open && this._cancelButton.click(); // 键盘取消
			}
		};
		this._showConfirmMessage(content); // 显示确认消息
		//this._messageContent.focus(); // 获取焦点
	}
}


const singleton = (className)=>{
	// 单例模式，生成函数
	let ins;
	const proxy = new Proxy(className, {
		construct(target, args){
			if (!ins) ins = new target(...args);
			else console.warn(`${ className.name }为单例构造函数，只能有一个实例`);
			return ins;
		}
	});
    className.prototype.constructor = proxy;
    return proxy;
}


const MyMessage = singleton(_MyMessage); // 单例生成


export {
	MyMessage,
	h
};
