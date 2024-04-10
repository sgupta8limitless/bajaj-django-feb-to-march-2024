
def log_function(func):
    def wrapper():
        print("some logging")
        func()
    return wrapper


@log_function
def say_hello():
    print("i am say hello function")


print(say_hello())

