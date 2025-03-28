import { Affiliate } from '../models'; // Affiliate型をインポート

export class AffiliateController {
    private affiliates: Affiliate[];

    constructor(affiliates: Affiliate[]) {
        this.affiliates = affiliates;
    }

    addAffiliate(affiliate: Affiliate): void {
        this.affiliates.push(affiliate);
    }

    getAffiliates(): Affiliate[] {
        return this.affiliates;
    }

    getAffiliateById(id: number): Affiliate | undefined {
        return this.affiliates.find(affiliate => affiliate.id === id);
    }
}