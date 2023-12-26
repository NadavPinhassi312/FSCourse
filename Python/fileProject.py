class person:
    def __init__(self, name, city):
        self.name=name
        self.city=city
    
    def getAttributes(self):
        print(f"Hello! My name is {self.name} and I live in {self.city}.")

nadav=person("Nadav","Netanya")
nadav.getAttributes()