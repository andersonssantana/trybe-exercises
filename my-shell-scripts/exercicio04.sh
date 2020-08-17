#!/bin/bash
# ===== 04 ===== #
FILE="/home/ander/existe.sh"
if [ -e $FILE ]
then
    echo "O caminho $FILE está habilitado!"
    if [ -w $FILE ]
    then 
        echo "Você tem permissão para editar o arquivo $FILE"
    else
        echo "Você não foi autorizado a editar $FILE"
    fi
else
    echo "O caminho não existe!"
fi