from fastapi import FastAPI, Form, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.param_functions import Body
from pydantic import BaseModel
from starlette.requests import Request

class Form_data(BaseModel):
    name: str
    lastname: str
    eded: int


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def ff():
    return {"gelll"}

@app.post('/new')
def jj(data: Form_data):
    print(data)
    print("hello")

if __name__=='__main__':
    import uvicorn

    uvicorn.run("app:app", host="0.0.0.0",
                port=8001, reload=True,
                log_level="debug")