BalanceItem = function(){
	this.label = "";
	this.input = 0;
}

Incomes = function(){}
Incomes.prototype = new BalanceItem();

Expenses = function(){}
Expenses.prototype = new BalanceItem();

app.factory ('BalanceItem',function(){
	return BalanceItem;
});

app.factory ('Incomes',function(){
	return Incomes;
});

app.factory ('Expenses',function(){
	return Expenses;
});

app.factory ('Calculator',function(){
	return{
		sum:function(balance_items){
				var total = 0;
				balance_items.forEach(function(item, index){
					total += Number(item.input);
				});
				return total;
		},
		balance:function(total_incomes,total_expences){
				return Number(total_incomes - total_expences);
		}
	}
});