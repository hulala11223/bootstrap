$(document).ready(function(){
	var formInputs = $('input[type="tel"],input[type="email"],input[type="text"],input[type="password"]');
	formInputs.focus(function() {
		$(this).parent().children('p.formLabel').addClass('formTop');
		$('div#formWrapper').addClass('darken-bg');
		$('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
			$(this).parent().children('p.formLabel').removeClass('formTop');
			$(this).attr('placeholder','');
			$(this).attr('style','border-color: #ccc;');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		$(this).parent().children('.form-style').focus();
	});
});

function login() {
	var email = document.getElementById('loginEmail');
	var password = document.getElementById('loginPassword');
	if (validateLogin()) {
		alert('登录成功');
	}else{
		alert('登录失败');
	}

}

function register(){
	var email = document.getElementById('registerEmail');
	var username = document.getElementById('username');
	var password = document.getElementById('registerPassword');
	var confirmPassword = document.getElementById('confirmPassword');
	if (validateRegister()) {
		alert('注册成功');
	}else{
		alert('注册失败');
	}
}

function validateLogin() {
	var email = document.getElementById('loginEmail');
	var password = document.getElementById('loginPassword');
	var result = true;
	email.style.borderColor = '#ccc';
	password.style.borderColor = '#ccc';
	if (email.value == '') {
		$(email).parent().children('p.formLabel').addClass('formTop');
		email.placeholder = '请输入邮箱';
		email.style.borderColor = 'red';
		result = false;
	}else{
		var reg = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$';
		var flag = email.value.trim().match(reg);
		if (!flag) {
			$(email).parent().children('p.formLabel').addClass('formTop');
			email.value = '';
			email.placeholder = '请输入正确的邮箱';
			email.style.borderColor = 'red';
			result = false;
		}
	}
	if (password.value == '') {
		$(password).parent().children('p.formLabel').addClass('formTop');
		password.placeholder = '请输入密码';
		password.style.borderColor = 'red';
		result = false;
	}
	return result;
}

function validateRegister() {
	var email = document.getElementById('registerEmail');
	var username = document.getElementById('username');
	var password = document.getElementById('registerPassword');
	var confirmPassword = document.getElementById('confirmPassword');
	var result = true;
	email.style.borderColor = '#ccc';
	username.style.borderColor = '#ccc';
	password.style.borderColor = '#ccc';
	confirmPassword.style.borderColor = '#ccc';
	if (email.value == '') {
		$(email).parent().children('p.formLabel').addClass('formTop');
		email.placeholder = '请输入邮箱';
		email.style.borderColor = 'red';
		result = false;
	}else{
		var reg = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$';
		var flag = email.value.trim().match(reg);
		if (!flag) {
			$(email).parent().children('p.formLabel').addClass('formTop');
			email.value = '';
			email.placeholder = '请输入正确的邮箱';
			email.style.borderColor = 'red';
			result = false;
		}
	}
	if (username.value == '') {
		$(username).parent().children('p.formLabel').addClass('formTop');
		username.placeholder = '请输入用户名';
		username.style.borderColor = 'red';
		result = false;
	}
	var reg = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$';
	if (!password.value.trim().match(reg)) {
		$(password).parent().children('p.formLabel').addClass('formTop');
		password.value = '';
		password.placeholder = '密码格式由6-21位字母和数字组成';
		password.style.borderColor = 'red';
		result = false;
	}
	if (confirmPassword.value == '') {
		$(confirmPassword).parent().children('p.formLabel').addClass('formTop');
		confirmPassword.placeholder = '请输入确认密码';
		confirmPassword.style.borderColor = 'red';
		result = false;
	}
	if (confirmPassword.value.trim() != password.value.trim()) {
		$(confirmPassword).parent().children('p.formLabel').addClass('formTop');
		confirmPassword.value = '';
		confirmPassword.placeholder = '两次密码输入不一致';
		confirmPassword.style.borderColor = 'red';
		result = false;
	}
	return result;
}