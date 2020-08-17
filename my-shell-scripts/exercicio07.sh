#!/bin/bash
# ===== 07 ===== #
DIRETORIO=$*
if [ -d $DIRETORIO ]
then 
    NUMERO=`ls -l $DIRETORIO | wc -l `
    echo "O $DIRETORIO tem $NUMERO arquivos"
else
    echo "O argumento $DIRETORIO não é um diretório"
fi 