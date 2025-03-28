"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// サンプルデータ
const sampleAffiliates = [
    { id: 1, name: 'Example Affiliate 1', url: 'https://example.com' },
    { id: 2, name: 'Example Affiliate 2', url: 'https://example2.com' },
];
// コントローラーのインスタンスを作成
const affiliateController = new controllers_1.AffiliateController(sampleAffiliates);
// ルートの定義
router.get('/affiliates', (req, res) => {
    res.json(affiliateController.getAffiliates());
});
router.post('/affiliates', (req, res) => {
    const newAffiliate = req.body;
    affiliateController.addAffiliate(newAffiliate);
    res.status(201).json({ message: 'Affiliate added successfully' });
});
exports.default = router;
