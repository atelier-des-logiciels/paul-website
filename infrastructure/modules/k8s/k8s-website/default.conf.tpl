server {
	server_name ${hostname};

	listen 8443 ssl;
	ssl_certificate /etc/nginx/tls/tls.crt;
	ssl_certificate_key /etc/nginx/tls/tls.key;

	gzip on;
	gzip_proxied any;
	gzip_types text/plain text/xml text/css application/javascript;
	gzip_vary on;

	location / {
		proxy_pass http://website.paul.svc.cluster.local:8080;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}