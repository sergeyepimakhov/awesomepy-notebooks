#!/bin/bash

mkdir -p /tmp/wildcards

for i in {1..20};
do 
    touch /tmp/wildcards/file$i.txt
done;

for i in {A..F};
do 
    touch /tmp/wildcards/file$i.txt
done;