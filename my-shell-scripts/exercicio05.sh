#!/bin/bash
# ===== 05 ===== #
read -p "Escreva seu caminho: " CAMINHO 
echo "Seu caminho é $CAMINHO"
if [ -f $CAMINHO ]
    then
    echo "É um arquivo comum"
elif [ -d $CAMINHO ]
    then
    echo "É um diretório"
else 
    echo "É um arquivo incomum"
fi 
ls -l $CAMINHO