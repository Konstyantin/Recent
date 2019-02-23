<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**
 * Class UsersTableSeeder
 */
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        User::create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'phone' => '+380669936205',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin')
        ])->assignRole('admin');

        User::create([
            'first_name' => 'user',
            'last_name' => 'user',
            'phone' => '+380669936205',
            'email' => 'user@gmail.com',
            'password' => bcrypt('user')
        ])->assignRole('user');
    }
}
