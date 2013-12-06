app.controller("balanceController", function($scope, BalanceItem, Incomes, Expenses, Calculator) {
	$scope.incomes = [];
	$scope.expences = [];


	$scope.addIncome = function(label, input) {
		var income = new Incomes();
		income.label = label;
		income.input = input;
		$scope.incomes.push(income);
		$scope.income.label = "";
		$scope.income.input = "";
		$scope.showAddIncome = false;
		
	}

	$scope.addExpense = function(label, input) {
		var expense = new Expenses();
		expense.label = label;
		expense.input = input;
		$scope.expences.push(expense);	
		$scope.expence.label = "";
		$scope.expence.input = "";
		$scope.showAddExpense = false;
			
	}

	$scope.totalIncomes = function(){
		return Calculator.sum($scope.incomes);
	}

	$scope.totalExpences = function(){
		return Calculator.sum($scope.expences);
	}

	$scope.totalBalance = function(){
		return Calculator.balance(Calculator.sum($scope.incomes),Calculator.sum($scope.expences));
	}

	$scope.resetForm = function(){
		$scope.income.label = "";
		$scope.income.input = "";
	}
				
	//$scope.addIncome("salaris",200);
	//$scope.addExpense("salaris",200);
	
});