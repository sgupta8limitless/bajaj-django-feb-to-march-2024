class ProductGateway:
    conn=None

    def __init__(self,conn) :
            self.conn = conn
          
    
    def create(self,product):
        cursor = self.conn.cursor()
        query = "insert into products(name,price,imageurl,category) values(%s,%s,%s,%s)"
        cursor.execute(query,(product._name,product._price,product._imageurl,product._category))
        cursor.close()
        self.conn.commit()

        return True
    