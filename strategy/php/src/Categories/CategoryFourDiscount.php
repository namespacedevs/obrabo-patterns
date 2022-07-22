<?php

namespace src\Categories;

use src\ICategoryDiscount;

class CategoryFourDiscount implements ICategoryDiscount
{
    public function netPricePurchase($grossPricePurchase)
    {
        return $grossPricePurchase -= ($grossPricePurchase * 0.40);
    }
}
