<?php

namespace src\Categories;

use src\ICategoryDiscount;

class CategoryTwoDiscount implements ICategoryDiscount
{
    public function netPricePurchase($grossPricePurchase)
    {
        return $grossPricePurchase -= ($grossPricePurchase * 0.20);
    }
}
