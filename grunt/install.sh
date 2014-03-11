# Install Node.js
apt-get update
apt-get install g++ curl libssl-dev
wget http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
tar -xzvf node-latest.tar.gz
cd node-v0.10.26
./configure
make
make install
# Install Grunt
npm install -g grunt-cli
# Install Ruby
apt-get install ruby
# Install compass
gem install compass