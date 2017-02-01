#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive

# Turn on command tracing
set -x

# Run as vagrant user (who already has passwordless sudo)
ssh-keygen -f /home/vagrant/.ssh/id_rsa -N '' -t rsa
cat /home/vagrant/.ssh/id_rsa.pub >> /home/vagrant/.ssh/authorized_keys
chmod og-wx /home/vagrant/.ssh/authorized_keys
echo "NoHostAuthenticationForLocalhost yes" | tee -a /home/vagrant/.ssh/config
chmod 600 ~/.ssh/config

# Set up the benchmark.cfg for vagrant user
sed -i s/techempower/vagrant/g ./benchmark.cfg

echo "vagrant ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers

echo 127.0.0.1 TFB-database | sudo tee --append /etc/hosts
echo 127.0.0.1 TFB-client   | sudo tee --append /etc/hosts
echo 127.0.0.1 TFB-server   | sudo tee --append /etc/hosts

source ./toolset/setup/linux/prerequisites.sh
