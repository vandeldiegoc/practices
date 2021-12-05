from sqlalchemy.sql.sqltypes import Integer, String
from base_class import Base
from sqlalchemy import Column, Integer, String

class Student(Base):
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True, nullable=False)
    name = Column(String, nullable=True)
    lastname = Column(String, nullable=True)