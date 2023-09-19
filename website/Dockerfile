ARG IMAGE_NODE
ARG IMAGE_NGINX

FROM ${IMAGE_NODE:-node:18} AS build-env
ARG PUBLIC_PATH
WORKDIR ./app
ADD package.json package-lock.json ./
RUN npm ci
ADD . ./
ENV PUBLIC_PATH=${PUBLIC_PATH:-/}
RUN npm run build:prod

FROM ${IMAGE_NGINX:-nginx:1.25.2-alpine}
ARG NPM_WORKSPACE

WORKDIR /usr/share/nginx/html

ADD nginx /
COPY --from=build-env /app/dist/ /usr/share/nginx/html

# Only give read access to nginx user
RUN chown -R 1000:1000 /usr/share/nginx/html && \
    chmod -R 500 /usr/share/nginx/html && \
    chown -R 1000:1000 /var/cache/nginx && \
    chown -R 1000:1000 /var/log/nginx && \
    chown -R 1000:1000 /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
    chown -R 1000:1000 /var/run/nginx.pid
    
EXPOSE 8080

# use non root user
USER 1000

CMD /bin/sh -c "nginx -g 'daemon off;'"
