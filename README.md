
## Steps for setup

- clone the project
- cd to the root of the project, then in your terminal run the following
- composer install
- cp .env.example .env
- php artisan key:generate
- Make sure you populate the .env file with corresponding database credentials before proceeding
- Create a database named ibis_full_stack
- php artisan migrate:refresh --seed
- npm install
- npm run dev
- run php artisan serve
