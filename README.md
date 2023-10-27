# mini-django

#### Require
- Python 3.9
- Nodejs v18

#### Setup project

```bash
$ cd  user-service
$ nvm install 18.17.1
$ nvm use

$ cd ..
$ source venv/bin/activate
$ pip install -r requirements.txt
```
#### Run project

```bash
# start express server
$ yarn dev
```
Open browser go to http://localhost:3000/api/users

```bash
# start proxy server
$ python3 proxy.py
```
Proxy server available on http://localhost:8001/proxy

```bash
# start django application
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py runserver
```
Open browser go to http://localhost:8000/express-proxy/users

### Account Django Admin
Go to the admin dashboard http://localhost:8000/admin/login/?next=/admin/ login with the account admin
```
Username: admin
Email: admin@gmail.com
Password: admin123
```