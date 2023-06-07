let income = 0;
    let expenses = [];
    function openExpenseList() {
        const incomeInput = document.getElementById('income-input');
        income = parseFloat(incomeInput.value);
        if(isNaN(income)){
          alert("Please enter avalid income amount.");
          return;
        }
        const incomeDisplay = document.getElementById('income-display');
      incomeDisplay.textContent = `Income: $${income}`;
    
      document.getElementById('income').style.display = 'none';
      document.getElementById('expense-list').style.display = 'block';
    }
    
    function addExpense() {
      var expenseInput = document.getElementById('expense-amount');
      if(expenseInput != null && expenseInput.value != ''){

      
      const expense = expenseInput.value.trim();
      document.getElementById("myInput").value = expense;

      if (expense !== '') {
        expenses.push(expense);
    
        const expenseUl = document.getElementById('expense-ul');
        const expenseLi = document.createElement('li');
        expenseLi.textContent = expense;
        expenseUl.appendChild(expenseLi);
    
        expenseInput.value = '';
      }
    }
    }
    function showSummary() {
        
        let totalExpense = 0;

        for (let index = 0; index < expenses.length; index++) {
            totalExpense += parseInt(expenses[index]);         
        }
      
      const remainingAmount = income - totalExpense;
    
      const totalExpenseDisplay = document.getElementById('total-expense-display');
      totalExpenseDisplay.textContent = `Total Expenses: ${totalExpense}`;
    
      const remainingAmountDisplay = document.getElementById('remaining-amount-display');
      remainingAmountDisplay.textContent = `Remaining Amount: $${remainingAmount}`;
    
      document.getElementById('expense-list').style.display = 'none';
      document.getElementById('summary').style.display = 'block';
    }