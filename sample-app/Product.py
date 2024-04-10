import json

class Product:
    

    def __init__(self,name,price,imageurl,category,id=None,createdat=None) -> None:
       
        self.name=name 
        self.price=price 
        self.imageurl=imageurl
        self.category=category
        self.id=id 
        self.createdat=createdat

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)