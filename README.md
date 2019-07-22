# Description

This is an online store for QMI products.

# Technology

Backend: node.js;
Frontend: react.js;
Database: MongoDB on Atlas;

Server runs on a vps machine on ubuntu 16.4 with nginx.

#Configure nginx server:

add in /etc/nginx/conf.d default.conf

```
server{
root /qmi_shop/qmi-products;
index index.html index.htm;
        location /api {
                proxy_pass http://localhost:8000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                }

        location /{
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrate $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}

```

Don't forget to reboot the server `server reboot nginx`

# configure and run the project

- create folder for the project;
- `git clone` the project;
- install yarn;
- `yarn` to install all the modules;
- `cd app/` and run `yarn build`
- create in both `api/` and `app/` `.env` files with configurations;
- install `pm2`;
- run `pm2 start server.js` in `app/` and `pm2 start app.js` in `api`;
