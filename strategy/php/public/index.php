<?php

use src\Purchase;
use src\Categories\CategoryOneDiscount;
use src\Categories\CategoryTwoDiscount;
use src\Categories\CategoryFiveDiscount;
use src\Categories\CategoryFourDiscount;
use src\Categories\CategoryThreeDiscount;

require_once __DIR__ . '/../vendor/autoload.php';

$purchase = new Purchase;
$categoryOneDisconut = new CategoryOneDiscount;
$categoryTwoDisconut = new CategoryTwoDiscount;
$categoryThreeDisconut = new CategoryThreeDiscount;
$categoryFourDisconut = new CategoryFourDiscount;
$categoryFiveDiscount = new CategoryFiveDiscount;

echo $purchase->totalPurchaseWithDiscount($categoryOneDisconut);