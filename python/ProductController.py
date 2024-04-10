import psycopg2
from Product import Product
from ProductGateway import ProductGateway

class ProductController:
   

    def __init__(self,productGateway) -> None:
        self.productGateway=productGateway
                 
        
    
    def add(self):
            name = input("Enter Name")
            price = int(input("Enter Price"))
            imageurl=input("Enter Image Url")
            category = input("Enter Category")

            product = Product(name,price,imageurl,category)
            if(self.productGateway.create(product)):
                 print("Product Created")


            

    def viewAll(self):
         cursor=self.conn.cursor()
         query="select * from products"
         cursor.execute(query)
         products = cursor.fetchall()
         print(products)
         cursor.close()
         
            


      
            


    