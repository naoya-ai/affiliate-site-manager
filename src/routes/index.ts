import { AffiliateController } from '../controllers';
import { Affiliate } from '../models'; // Affiliate型をインポート
import express from 'express';

const router = express.Router();

// サンプルデータ
const sampleAffiliates: Affiliate[] = [
    { id: 1, name: 'Example Affiliate 1', url: 'https://example.com' },
    { id: 2, name: 'Example Affiliate 2', url: 'https://example2.com' },
];

// コントローラーのインスタンスを作成
const affiliateController = new AffiliateController(sampleAffiliates);

// ルートの定義
router.get('/affiliates', (req, res) => {
    res.json(affiliateController.getAffiliates());
});

router.post('/affiliates', (req, res) => {
    const newAffiliate: Affiliate = req.body;
    affiliateController.addAffiliate(newAffiliate);
    res.status(201).json({ message: 'Affiliate added successfully' });
});

export default router;