<?php

namespace src;

class Purchase
{
    private $products = [
        ['name' => 'Milk', 'price' => '7.99'],
        ['name' => 'Bean', 'price' => '10.00'],
        ['name' => 'Rice', 'price' => '6.00'],
        ['name' => 'Noodle', 'price' => '6.90'],
        ['name' => 'Flour', 'price' => '3.99'],
    ];

    public function totalPurchase()
    {
        $totalPurchase = 0;
        foreach ($this->products as $purchaseItem) {
            $totalPurchase += $purchaseItem['price'];
        }
        return $totalPurchase;
    }

    public function totalPurchaseWithDiscount(ICategoryDiscount $category)
    {
        $grossPricePurchase = $this->totalPurchase();
        return $category->netPricePurchase($grossPricePurchase);
    }
}
