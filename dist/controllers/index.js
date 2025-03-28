"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateController = void 0;
class AffiliateController {
    constructor(affiliates) {
        this.affiliates = affiliates;
    }
    addAffiliate(affiliate) {
        this.affiliates.push(affiliate);
    }
    getAffiliates() {
        return this.affiliates;
    }
    getAffiliateById(id) {
        return this.affiliates.find(affiliate => affiliate.id === id);
    }
}
exports.AffiliateController = AffiliateController;
