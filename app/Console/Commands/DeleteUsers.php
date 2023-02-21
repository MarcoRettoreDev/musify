<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DeleteUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete-users';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all users that have been created 1 day ago';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        DB::table('users')->where('expires_at', '<=', Carbon::now())->delete();

        return Command::SUCCESS;
    }
}
