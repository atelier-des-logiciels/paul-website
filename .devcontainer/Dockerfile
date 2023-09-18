FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

RUN sudo apt-get update && \
  apt-get install -y sudo \
  zsh \
  fonts-powerline

ENV SHELL /bin/zsh

ADD ./.devcontainer/install.sh /opt/devcontainer/install.sh