# TRADE-APP

![image](https://github.com/joao-dev7/trade-app/assets/117098725/dd1f3ec0-8c90-4afd-bf1b-40f915b91060)

O **trade-app** é um projeto que tem a ideia de simplificar o controle de finanças (ganhos e gastos). O projeto utiliza **JS**, juntamente com o **json-server**, que simula um banco de dados, e com isso ao adicionar as informações o sistema consome as informações do arquivo json. _Em baixo irei deixar o tutorial de como instalar os pacotes do projeto:_

## JSON-SERVER:

### Install

```shell
npm install json-server
```

### Usage

Crie um arquivo `db.json` ou `db.json5`

```json
{
  "trades": [{
      "name": "Salário",
      "value": 8000,
      "id": "2aa8"
    }] 
}
```

## Routes

Com o arquivo `db.json` como base, você pode seguir estas rotas:

```
GET    /posts
PUT    /posts/:id
DELETE /posts/:id
```

```
GET   /profile
PUT   /profile
```
