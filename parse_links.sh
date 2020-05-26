#!/usr/bin/env bash
for i in $(find . -name 'notebook.ipynb' -type f | cat | sort);
do
    echo $i;
    # echo $i | sed -e 's/\.\//\//g' -e 's/\/[0-9][0-9]_/\//g' -e 's/\/[a-z]_/\//g'; #| tr "\/" "\t\n";
done