import psycopg2
from Product import Product

# creating a connection with db 



class ProductGateway:

    def __init__(self) -> None:
        self.conn = psycopg2.connect(
            host="localhost",
            user="postgres",
            password="thorabh",
            database="pms_django"
            )
       


    def createProduct(self,product:Product) -> bool:
        cursor=self.conn.cursor()
        query = "insert into products(name,price,imageurl,category) values(%s,%s,%s,%s)"
        cursor.execute(query,(product.name,product.price,product.imageurl,product.category))
        count = cursor.rowcount
        cursor.close()
        self.conn.commit() 
        if(count==1):
            return True
        else :
            return False
        
    def getAllProducts(self):
        cursor=self.conn.cursor()
        query = "select * from products"
        cursor.execute(query)
        products =  cursor.fetchall()
        cursor.close()

        
        return products

        
      

        
