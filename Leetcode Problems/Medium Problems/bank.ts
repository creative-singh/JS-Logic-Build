// Question Link: https://leetcode.com/problems/simple-bank-system
// 2043. Simple Bank System

var Bank = function(balance) {
    this.bank = balance;
    this.totalAccounts = balance.length;
};

Bank.prototype.transfer = function(account1, account2, money) {
    if(
        account1 > this.totalAccounts || 
        account2 > this.totalAccounts || 
        money > this.bank[account1 - 1]
    ) 
        return false
    
    account1--; account2--;
    this.bank[account1] -= money;
    this.bank[account2] += money;
    return true;
    
};

Bank.prototype.deposit = function(account, money) {
    if(account > this.totalAccounts)
        return false

    account--;
    this.bank[account] += money;
    return true;
};

Bank.prototype.withdraw = function(account, money) {
    if(account > this.totalAccounts || this.bank[account - 1] < money) 
        return false
    
    account--;
    this.bank[account] -= money;
    return true;
};

