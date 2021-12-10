from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from oso_model import Base

engine = create_engine("postgresql://postgres:vda@localhost/Todo")
Base.metadata.create_all(bind=engine)
sess = sessionmaker(autocommit=False, autoflush=False, engine=engine)