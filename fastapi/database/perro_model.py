from base_class import Base
from sqlalchemy import Column, Integer, String

class Perro(Base):
    id = Column(Integer, unique=True, primary_key=True, autoincrement=True)
    name = Column(String, nullable=True)
    LastName = Column(String, nullable=True)