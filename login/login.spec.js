
beforeEach(angular.mock.module("login"));
var token="",scope=null;

beforeEach(inject(function($controller,$rootScope,_$location_,_SecurityToken_){

    scope=$rootScope.$new(),token=_SecurityToken_;
    var controller=$controller("loginController",{
        $scope:scope,
        $location:_$location_,
        securityToken:token
    });

}));



describe("testing of adding two numbers",function(){
		it("adding numbers from scope",function(){
            console.log(token);
			expect(scope.firstNumber+scope.secondNumber).toEqual(3);

		});
	});
