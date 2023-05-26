<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Wazoo',
            'birthDay' => '2002-08-08',
            'password' => Hash::make('Wazoo@wazoo.com'),
            'pseudo'=>'@Wazoo',
            'email' => 'Wazoo@wazoo.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Elon Musk',
            'birthDay' => '2001-11-23',
            'password' => Hash::make('12345678'),
            'pseudo'=>'@ElonMusk',
            'email' => 'elon@example.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Andrew Tate',
            'birthDay' => '2002-08-08',
            'password' => Hash::make('12345678'),
            'pseudo'=>'@yassine',
            'email' => 'yassine@example.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'ahmed souinga',
            'birthDay' => '2007-08-08',
            'password' => Hash::make('12345678'),
            'pseudo'=>'@ahmed',
            'email' => 'ahmed@example.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Youssef Shoroqat',
            'birthDay' => '2006-08-08',
            'password' => Hash::make('12345678'),
            'pseudo'=>'@Youssef',
            'email' => 'Youssef@example.com',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 1,
            'description' => '#welcome_to_Wazoo project pfe 😊',
            'created_at'=>'2023-05-21 11:45:11',
            'updated_at'=>'2023-05-21 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 1,
            'description' => '#Better-Call-Saul 👌',
            'image' => 'https://pbs.twimg.com/media/FwmjTlZXsAAVamD?format=jpg&name=medium',
            'created_at'=>'2023-05-21 11:45:11',
            'updated_at'=>'2023-05-21 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 1,
            'description' => 'Elon Musk is the #topG .',
            'created_at'=>'2023-05-11 11:45:11',
            'updated_at'=>'2023-05-21 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 1,
            'description' => 'this project made be students of #OFPPT ✨✨✨',
            'created_at'=>'2023-05-11 11:45:11',
            'updated_at'=>'2023-05-11 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 3,
            'description' => 'GM',
            'image' => 'https://pbs.twimg.com/media/FwkcULoWIAM9dZB?format=jpg&name=small',
            'created_at'=>'2023-05-20 11:45:11',
            'updated_at'=>'2023-05-20 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 2,
            'description' => 'ahmad srghini the #topG',
            'created_at'=>'2023-05-18 11:45:11',
            'updated_at'=>'2023-05-18 11:45:11',
        ]);
        \App\Models\Tweet::create([
            'idUser' => 3,
            'description' => '#topG fake it until you make it.',
            'created_at'=>'2023-05-20 11:45:11',
            'updated_at'=>'2023-05-20 11:45:11',
        ]);
    }
}
