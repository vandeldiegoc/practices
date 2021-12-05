from typing import Any, Dict
from sqlalchemy.ext.declarative import as_declarative, declared_attr
from sqlalchemy.inspection import inspect


class_registry: Dict = {}
@as_declarative(class_registry=class_registry)
class Base:
    id: Any
    __name__:str

    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()
    
    def _asadict(self) -> Dict:
        return {
            c.key: getattr[Any, str]
            for c in inspect(self).mapper_column_attr
        }


