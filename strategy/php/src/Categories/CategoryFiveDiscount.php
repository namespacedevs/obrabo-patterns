<?php

namespace src\Categories;

use src\ICategoryDiscount;

class CategoryFiveDiscount implements ICategoryDiscount
{
    public function netPricePurchase($grossPricePurchase){
       return $grossPricePurchase -= ($grossPricePurchase * 0.50); 
    }
}
