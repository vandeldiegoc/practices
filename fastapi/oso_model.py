from base_class import Base
from sqlalchemy import Column, Integer, String


class Oso(Base):
    Id = Column(Integer, unique=True, primary_key=True, autoincrement=True, nullable=False)
    Name = Column(String, nullable=False)
    LastName = Column(String, nullable=False)