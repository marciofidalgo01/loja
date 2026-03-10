import requests

urls = [
"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800&auto=format&fit=crop",

]

for i, url in enumerate(urls, start=1):

    endpoint = f"http://127.0.0.1:8000/api/produtosimg/{i}/"

    data = {
        "produto": i,
        "imagem": url
    }

    r = requests.patch(endpoint, json=data)

    if r.status_code == 404:
        requests.post(
            "http://127.0.0.1:8000/api/produtosimg/",
            json=data
        )
