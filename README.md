# Example how to use Express and TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. open `http://localhost:3000/posts` and you'll empty array
6. use curl, postman or other tools to send http requests to test your typeorm-based API

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands

## How to prepare environment on server?

apt-get update && apt-get install -y git

clone this repo in the root of your user profile
cd ~/
git clone https://github.com/creationix/nvm.git .nvm
cd ~/.nvm
git checkout v0.33.11
. nvm.sh



Now add these lines to your ~/.bashrc, ~/.profile, or ~/.zshrc file to have it automatically sourced upon login: (you may have to add to more than one of the above files)

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion



sudo apt-get update
sudo apt-get install mysql-server
mysql_secure_installation


// =>>>> logging into mysql shell: (might be other then "root")

mysql -u root -p

// =>>>>>>creating database: 


CREATE DATABASE dAtAbAsE-*_*-nAmE
