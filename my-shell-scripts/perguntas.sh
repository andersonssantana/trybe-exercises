#!/bin/bash
USUARIO=`whoami`
read -p "Qual o seu nome? " NOME
read -p "Quantos anos você tem? " IDADE
echo "Olá" $NOME", parabéns pelos seus" $IDADE "anos de idade. Você está logado como" $USUARIO