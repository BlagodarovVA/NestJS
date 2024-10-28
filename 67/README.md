# Авторизация

## Login

```bash
curl --request POST \
  --url http://localhost:3000/api/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
	"login": "as@a.ru",
	"password": "1"
}'
```

## Register

```bash
curl --request POST \
  --url 'https://localhost:3000/api/auth/register?%D0%B2%D1%88=' \
  --header 'Content-Type: application/json' \
  --data '{
	"login": "silf42@mail.ru",
	"password": "max789789"
}'
```
