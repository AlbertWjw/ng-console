FROM nginx

RUN rm -rf /usr/share/nginx/html
# RUN mkdir /etc/nginx/ssl
# COPY ./ssl /etc/nginx/ssl
COPY ./dist/ng-console /usr/share/nginx/html/
COPY ./simple.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]