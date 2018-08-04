<?php

use Illuminate\Database\Seeder;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1,10) as $index) {
            DB::table('vouchers')->insert([
                'name' => $faker->name,
                'images' => $faker->imageUrl($width = 640, $height = 480),
                'promo' => $faker->numberBetween(0, 100),
            ]);
        }
    }
}
