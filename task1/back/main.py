import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def get_data() -> list:
    with open("users.json", 'r') as f:
        return json.load(f)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root(term: str | None = None):
    data = get_data()
    if term:
        return ([v for v in data if term.lower() in v['name'].lower()])
    return data
