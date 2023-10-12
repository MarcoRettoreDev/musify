<?php

use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GenerateUser;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// * PORTFOLIO * //

Route::get('/', function () {
    return Inertia::render('Portfolio/WelcomePage');
});

// * MUSIFY * //
Route::get('/musify', function () {
    return to_route('musify.login');
});

Route::get('/musify/login', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('musify.login');

Route::get('/user/generate-password', [GenerateUser::class, 'generate'])->name('user.generate');

Route::get('logout', '\App\Http\Controllers\Auth\AuthenticatedSessionController@destroy')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/musify/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/musify/dashboard/artist/{artist}', [ArtistController::class, 'show'])->name('artist.show');
    Route::get('/musify/mycontent', [DashboardController::class, 'create'])->name('mycontent.create');
    Route::post('/musify/mycontent', [DashboardController::class, 'store'])->name('mycontent.store');
    Route::get('/musify/dashboard/playlist', [PlaylistController::class, 'create'])->name('playlist.create');
    Route::post('/musify/dashboard/playlist', [PlaylistController::class, 'store'])->name('playlist.store');
    Route::post('/musify/dashboard/playlist/{playlist}/add/{track}', [PlaylistController::class, 'addTrack'])->name('playlist.addTrack');
    Route::delete('/musify/dashboard/playlist/{playlist}/add/{track}', [PlaylistController::class, 'removeTrack'])->name('playlist.removeTrack');
    Route::get('/musify/dashboard/playlist/{playlist}', [PlaylistController::class, 'show'])->name('playlist.show');
    Route::post('/musify/dashboard/playlist/{playlist}', [PlaylistController::class, 'update'])->name('playlist.update');
    Route::delete('/musify/playlist/{playlist}', [PlaylistController::class, 'destroy'])->name('playlist.delete');
    Route::get('/musify/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/musify/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/musify/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/musify/about', [AboutMeController::class, 'index'])->name('aboutme.index');

    Route::get('/musify/dashboard/search', [SearchController::class, 'store'])->name('search.store');
});

require __DIR__ . '/auth.php';
