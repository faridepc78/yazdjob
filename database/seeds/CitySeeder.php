<?php

use App\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    private $data = [
        "یزد",
        "ابركوه",
        "احمدآباد",
        "اردکان",
        "اشکذر",
        "بافق",
        "بفروئیه",
        "بهاباد",
        "تفت",
        "حمیدیا",
        "خضرآباد",
        "دیهوک",
        "رضوانشهر",
        "زارچ",
        "شاهدیه",
        "طبس",
        "عقدا",
        "مروست",
        "مهردشت",
        "مهریز",
        "میبد",
        "ندوشن",
        "نیر",
        "هرات"
    ];

    public function run()
    {
        if (City::query()->count() === 0) {
            for ($i = 0; $i < count($this->data); $i++)
                City::query()->create([
                    "title" => $this->data[$i]
                ]);
        }
    }
}
