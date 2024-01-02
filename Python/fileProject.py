person={
    "name":"Nadav"
}

try:
    print(person["fav_food"])
except KeyError as e:
    print(f'The key {e} doesnt exist.')
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(type(e))
    print(e)











