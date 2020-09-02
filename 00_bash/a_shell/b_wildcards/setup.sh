#!/bin/bash

mkdir -p files

for i in {1..20};
do 
    touch files/file$i.txt
done;

for i in {A..F};
do 
    touch files/file$i.txt
done;