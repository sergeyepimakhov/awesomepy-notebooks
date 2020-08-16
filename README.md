# Awesome Notebooks

> An example is better than thousands words

All you need to know to become full-stack python developer.

The road map:

- Shells
   - [ ] Bash 
   - [ ] Power Shell
- Source Control
   - [ ] Git
- Markdown    
- Jupyter
- Virtual Environments
    - [ ] Virtualenv
    - [ ] Conda
- Web Development
   - [ ] Flask
   - [ ] Django
- [ ] IDEs
   - [ ] IntelIJ
- Big Data
  - [ ] Hadoop
  - [ ] PySpark
- [ ] Containers
  - Docker
  - Kub
- [ ] Misc


# Price Elasticity Frontend

## Create Virtual Environments
Use ```make env``` in order to create a new virtual environments.

## Activate Virtual Environments
```
source venv/bin/activate
```

## Deactivate Virtual Environments
```
source venv/bin/deactivate
```

## GCP Auth
```
gcloud auth login
gcloud auth application-default login
```

## Local Development

### Clear Cache
```
rm -rf .cache
```

### Run the App with Development Server
```
export FLASK_ENV=development && \
export FLASK_APP=main.py && \
export PROJECT_ID=brain-elasticities-(dev|tst) && \
python -m flask run 

```
Running on http://127.0.0.1:5000/

### Run the App with Production Server
```
export PORT=8080 && \
export PROJECT_ID=brain-elasticities-(dev|tst) && \
gunicorn -c gunicorn.conf.py -b :$PORT main:server
```
Running on http://127.0.0.1:8080/

## GCP

### Deploy to GCP
```
gcloud app deploy --project awesomepy
```

### Stream Logs
```
gcloud app logs tail -s default --project=awesomepy
```

### Browse the App
```
gcloud app browse --project=awesomepy
```




 
