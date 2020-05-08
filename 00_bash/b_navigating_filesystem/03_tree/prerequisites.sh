if [[ "$OSTYPE" == "linux-gnu" ]]; then
    echo 'Linux'
    sudo apt-get install tree
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo 'Mac OS'
    brew install tree
fi
