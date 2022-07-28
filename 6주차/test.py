import requests
r = requests.get("https://jsonplaceholder.typicode.com/post/1")
print(r.json())