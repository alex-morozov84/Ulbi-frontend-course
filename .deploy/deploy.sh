cd ~/Ulbi-frontend-course
npm run build:prod

rm -rf ~/../var/www/Ulbi-frontend-course/html
mv ~/Ulbi-frontend-course/build/ ~/../var/www/Ulbi-frontend-course/html