<?php

namespace src\Categories;

use src\ICategoryDiscount;

class CategoryOneDiscount implements ICategoryDiscount
{
    public function netPricePurchase($grossPricePurchase)
    {
        return $grossPricePurchase -= ($grossPricePurchase * 0.10);
    }
}
