const App = getApp()

Page({
	data: {},
	onLoad() {
		this.$wuxDialog = App.Wux().$wuxDialog
	},
	open() {
		if (this.timeout) clearTimeout(this.timeout)

		const hideDialog = this.$wuxDialog.open({
			title: '三秒后自动关闭',
			content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内', 
			buttons: [
				{ 
					text: '取消', 
				},
				{
					text: '确定', 
					type: 'weui-dialog__btn_primary', 
					onTap(e) {
						console.log(e)
					},
				},
			],
		})

		this.timeout = setTimeout(hideDialog, 3000)
	},
	confirm() {
		this.$wuxDialog.confirm({
			title: '定制冰激凌', 
			content: '你确定要吃我的冰淇淋吗？', 
			onConfirm(e) {
				console.log('凭什么吃我的冰淇淋！')
			},
			onCancel(e) {
				console.log('谢谢你不吃之恩！')
			},
		})
	},
	alert() {
		this.$wuxDialog.alert({
			title: '不要吃果冻', 
			content: '它们可能是用旧的皮鞋帮做的！', 
			onConfirm(e) {
				console.log('感谢上帝，你没吃鞋帮！')
			},
		})
	},
	prompt() {
		const that = this
		const alert = (content) => {
			this.$wuxDialog.alert({
				title: '提示', 
				content: content, 
			})
		}

		that.$wuxDialog.prompt({
			title: '提示', 
			content: '密码为8位数字', 
			fieldtype: 'number', 
			password: !0, 
			defaultText: '', 
			placeholder: '请输入Wi-Fi密码', 
			maxlength: 8, 
			onConfirm(e) {
				const value = that.data.$wux.dialog.prompt.response
				const content = value.length === 8 ? `Wi-Fi密码到手了: ${value}` : `请输入正确的Wi-Fi密码`
				alert(content)
			},
		})
	},
	custom() {
		const alert = (content) => {
			this.$wuxDialog.alert({
				title: '提示', 
				content: content, 
			})
		}

		this.$wuxDialog.open({
			title: '我是标题',
			content: '我是自定义的对话框！',
			buttons: [
				{ 
					text: '现金支付', 
					type: 'weui-dialog__btn_primary', 
					onTap(e) {
						alert('你选择了现金支付！')
					},
				},
				{ 
					text: '微信支付', 
					type: 'weui-dialog__btn_primary', 
					onTap(e) {
						alert('你选择了微信支付！')
					},
				},
				{ 
					text: '取消', 
				},
			],
		})
	},
})