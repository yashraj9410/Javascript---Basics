// accesss modifiers 

class BankAccount {
    constructor(accountNumber, initialBalance) {
      let balance = initialBalance; // Private variable  encapsulated
  
      this.getAccountNumber = function() {
        return accountNumber;
      };
  
      // go through the below functions and working 
      this.deposit = function(amount) {
        if (amount > 0) {
          balance += amount;
          console.log(`Successfully deposited $${amount}. New balance: $${balance}`);
        } else {
          console.log('Invalid amount for deposit.');
        }
      };
  
      this.withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          console.log(`Successfully withdrawn $${amount}. New balance: $${balance}`);
        } else {
          console.log('Invalid amount for withdrawal or insufficient funds.');
        }
      };
  
      this.checkBalance = function() {
        console.log(`Account balance: $${balance}`);
      };
    }
  }
  
  // Create an instance of the BankAccount class
  const myAccount = new BankAccount('123456', 1000);
  console.log(myAccount)
  
  console.log(myAccount.balance); // Output: undefined (balance is not accessible directly)
  myAccount.deposit(500); // Output: Successfully deposited $500. New balance: $1500
  myAccount.withdraw(200); // Output: Successfully withdrawn $200. New balance: $1300
  console.log(myAccount.getAccountNumber()); // Output: 123456
  