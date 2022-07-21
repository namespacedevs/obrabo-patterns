<?php

namespace src\Categories;

use src\ICategoryDiscount;

class CategoryThreeDiscount implements ICategoryDiscount
{
    public function netPricePurchase($grossPricePurchase)
    {
        return $grossPricePurchase -= ($grossPricePurchase * 0.30);
    }
}
