<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GenerateUser;
use App\Http\Controllers\PlaylistController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/user/generate-password', [GenerateUser::class, 'generate'])->name('user.generate');

Route::get('logout', '\App\Http\Controllers\Auth\AuthenticatedSessionController@destroy')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/artist/{artist}', [ArtistController::class, 'show'])->name('artist.show');
    Route::get('/dashboard/mycontent', [DashboardController::class, 'create'])->name('mycontent.create');
    Route::post('/dashboard/mycontent', [DashboardController::class, 'store'])->name('mycontent.store');
    Route::get('/dashboard/playlist', [PlaylistController::class, 'create'])->name('playlist.create');
    Route::post('/dashboard/playlist', [PlaylistController::class, 'store'])->name('playlist.store');
    Route::post('/dashboard/playlist/{playlist}/add/{track}', [PlaylistController::class, 'addTrack'])->name('playlist.addTrack');
    Route::delete('/dashboard/playlist/{playlist}/add/{track}', [PlaylistController::class, 'removeTrack'])->name('playlist.removeTrack');
    Route::get('/dashboard/playlist/{playlist}', [PlaylistController::class, 'show'])->name('playlist.show');
    Route::post('/dashboard/playlist/{playlist}', [PlaylistController::class, 'update'])->name('playlist.update');
    Route::delete('/playlist/{playlist}', [PlaylistController::class, 'destroy'])->name('playlist.delete');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
