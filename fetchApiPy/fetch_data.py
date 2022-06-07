import requests

url = "https://gorest.co.in/public/v1/users"

def fetch_data(url):
    response = requests.get(url)
    data = response.json()
    return data

print(fetch_data(url))