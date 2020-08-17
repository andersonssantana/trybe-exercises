#!/bin/bash
read -p "Qual é a sua idade? " IDADE
if [ $IDADE -lt 18 ]
then
    echo "Você é menor de idade"
else 
    echo "Você pode beber!"
fi