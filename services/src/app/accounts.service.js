"use strict";
exports.__esModule = true;
var AccountsService = /** @class */ (function () {
    function AccountsService() {
        this.accounts = [
            {
                name: 'Master Account',
                status: 'active'
            },
            {
                name: 'Testaccount',
                status: 'inactive'
            },
            {
                name: 'Hidden Account',
                status: 'unknown'
            }
        ];
    }
    AccountsService.prototype.addAccount = function (name, status) {
        this.accounts.push({ name: name, status: status });
    };
    AccountsService.prototype.updateStatus = function (id, status) {
        this.accounts[id].status = status;
    };
    return AccountsService;
}());
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map