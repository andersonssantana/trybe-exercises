#!/bin/bash
# ===== 06 ===== #
echo "Seu caminho é $*"
if [ -f $* ]
    then
    echo "É um arquivo comum"
elif [ -d $* ]
    then
    echo "É um diretório"
else 
    echo "É um arquivo incomum"
fi
ls -l $*