<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    private $data = [
        "اداری و مدیریت",
        "سرایداری و نظافت",
        "معماری ،عمران و ساختمانی",
        "خدمات فروشگاه و رستوران",
        "رایانه و فناوری اطلاعات",
        "مالی و حسابداری و حقوقی",
        "بازاریابی و فروش",
        "صنعتی و فنی و مهندسی",
        "آموزشی",
        "حمل و نقل",
        "درمانی و زیبایی و بهداشتی",
        "هنری و رسانه"
    ];

    public function run()
    {
        if (Category::query()->count() === 0) {
            for ($i = 0; $i < count($this->data); $i++)
                Category::query()->create([
                    "title" => $this->data[$i]
                ]);
        }
    }
}
