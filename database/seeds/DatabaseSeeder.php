<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            ReportTitleSeeder::class,
            CitySeeder::class,
            CategorySeeder::class,
            PriceSeeder::class
        ]);
    }
}
