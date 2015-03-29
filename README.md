# Usage:

1. `$ boot2docker up`
2. `$ docker-compose build`
3. `$ docker-compose up`

# Test that it's working:
1. Navigate to http://{BOOT2DOCKER IP}/testdb/items/
2. `$ curl -d '{ "A1" : 2165, "tags": ["test", "test2"] }' -H "Content-Type: application/json" http://{BOOT2DOCKER IP}/testdb/items`
3. Navigate to to http://{BOOT2DOCKER IP}/testdb/items/, posted items should be there