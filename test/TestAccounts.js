const Accounts = artifacts.require("Accounts");
const assert = require("assert");

contract("Accounts", (accounts) => {
    const OWNER = accounts[1];

    it("should create an account", async () => {
        const instance = await Accounts.deployed();
        instance.addAccount("Test Account");
        
        assert.equal("1", instance.no_of_accounts, "The account number should be increased");
    })
    // it("Should deposit money", async () => {
    //     const instance = await Accounts.deployed();
    //     instance.deposit(1000);
    //     assert.equal(1000, instance.Accounts[0].balance);
    // });
});