var login=angular.module("login",[]);
login.factory("SecurityToken",["$log",function($log){
	$log.log("service is working ");
	var random=(Math.floor(Math.random()*33))*33;
	return "Security-tokenno-"+random;
}]);

login.filter("removeA",["$log",function($log){
	return function(value){
		$log.log("initiation of filter");
		return value.replace(/[a A]/g," ");
	}	
}]);

login.directive("shopName",["$log","babyService",function($log,babyService){
	return{
		restrict:"E",
		template:"hello this store name is "+babyService.sex
	}
}]);
function baby(){
	this.name="baby";
	this.age="21";
}
login.provider("babyService",function babyServiceProvider(){
var sex="female";
this.setSex=function(str){
	sex=str;
}
this.$get=["$log",function($log){
		$log.log("provide service initialting");
		var service=new baby();
		service.sex=sex;
		return service;
}];
});

login.config(["babyServiceProvider",function(babyServiceProvider){
	console.log("configuring providee service");
babyServiceProvider.setSex("FeMale");
}]);
login.controller("loginController",function loginController($scope,$location,SecurityToken){
	$scope.username="";
	$scope.rangeValue=0;
	$scope.password="";
	$scope.heading="store registration having security token"+SecurityToken;
	$scope.firstName="";
	$scope.states=["AP","KA","JK"];
	$scope.showStoreType=false;
	$scope.firstNumber=1;
	$scope.secondNumber=2;


	
	$scope.validate=function(){
		
		if($scope.username=="admin" && $scope.password=="admin"){
			$scope.status="Success&nbsp;&nbsp;<span class='glyphicon glyphicon-ok'></span>";
			$('.status').removeClass("alert alert-danger");
			$('.status').addClass("alert alert-success");
			$('.status').fadeIn(1000);
			setTimeout(function(){
				$('.status').fadeOut(1000);
			},100);
			$location.path('home');

		}else{
			$scope.status="Failure&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-remove'></span>";
			$('.status').removeClass("alert alert-success");
			$('.status').addClass("alert alert-danger");
			$('.status').fadeIn(1000);
			setTimeout(function(){
				$('.status').fadeOut(1000);
			},2000);
		}
	}
	$scope.submit=function(){
		var ch=document.forms[0].addEventListener("click",function(e){
			var target=e.target;
			if(target.className.indexOf("error")!=-1){
				target.className=target.className.replace("error","")
			}
		});

		if(!validate()){
			alert("please fix errors");
		}
		function validate(){
			var arr=document.forms[0].elements,
			firstname="",
			lastname="",
			gender="",
			storeType=[],
			dob="",
			email="",
			telephoneNo="",
			shopAdress="",
			state="",
			username="",
			password="",
			regName=/^[A-Z a-z]+$/;

			for(var i=0;i<arr.length;i++){
				var element=arr[i];
				if(element.name=="firstname" || element.name=="lastname"){
					if(regName.test(element.value)){
						if(element.name=="firstname"){
							firstname=element.value;
						}else{
							lastname=element.value;
						}				
					}else{
						element.className+=" error";
						return false;
					}

				}else if(element.name=="gender"){
					if(element.checked){
						gender=element.value;
					}
				}else if(element.name=="shopBig"){
					if(element.checked){
						storeType.push("Big");
					}
				}else if(element.name=="shopSmall"){
					if(element.checked){
						storeType.push("Small");
					}
				}else if(element.name=="dob"){
					if(!element.value){
						element.className+=" error";
						return false;
					}
					var date=new Date();
					var currentYear=date.getYear();
					var ownerDOB=element.value;
					var ownerDOBYear=parseInt(ownerDOB.split("-")[0],10);
					var diff=ownerDOBYear-1900;
					if(diff>currentYear){
						element.className+=" error";
						return false;
					}else if((currentYear-diff)<20){
						element.className+=" error";
						alert("owner age should be more than 20");
						return false;
					}else{
						dob=element.value;
					}
				}else if(element.name=="email"){
					var regExp=/^([A-z 0-9 _]+)\@[A-z]+\.[A-z]+$/,oldEmail="csredde@gmail.com";
					if(regExp.test(element.value)){
						if(element.value===oldEmail){
							alert("this email already exists");
							element.className+=" error";
							return false;
						}
						email=element.value;
						var array=regExp.exec(element.value);
						//document.querySelector("[name='username']").value=array[1];
					}else{
						element.className+=" error";
						return false;
					}
				}else if(element.name=="phoneno"){
					var regExp=/^[0-9]{10}$/;
					if(regExp.test(element.value)){
						telephoneNo=element.value;
					}else{
						element.className+=" error";
						return false;
					}
				}else if(element.name=="shopaddress"){	
					if(element.value){
						shopAdress=element.value;
					}else{
						element.className+=" error";
						return false;
					}
				}else if(element.name=="state"){	
					var options=element.options;
					state=options[options.selectedIndex].value;
				}else if(element.name=="username"){	
					var regExp=/^[A-z 0-9 _]+$/;			
					if(regExp.test(element.value)){
						username=element.value;
					}else{
						alert("username should only contain numbers,alphabets and underscore");
						element.className+=" error";
						return false;
					}
				}else if(element.name=="password"){	
					var passcode=element.value,
					    reEnterPasscodeElement=document.getElementsByName("reEnterPassword")[0],
					    atleastOneUppercase=/[A-Z]+/,
					    atleastOneNumber=/\d+/,
					    atleastOneSpecialSymbol=/[&$%#]+/,
					    atleastOneAlphaNumericChar=/\w+/;

					if(atleastOneNumber.test(passcode) && atleastOneUppercase.test(passcode) && atleastOneSpecialSymbol.test(passcode) && atleastOneAlphaNumericChar.test(passcode)){
						if(passcode===reEnterPasscodeElement.value){
							password=passcode;
						}else{
							alert("passwords doesnt match ,please enter password again");
							reEnterPasscodeElement.className+=" error";
							return false;
						}
					}else{
						alert("password should only contain atleast one number,one uppercase ,one special symbol in [$ % & @] and one alphanumeric character");
						element.className+=" error";
						return false;
					}
					
				}

			}
			return true;
		}
	}
});