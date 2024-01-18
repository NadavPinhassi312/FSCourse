import unittest
from pyfolder import MakeUpper

class TestMyProgram(unittest.TestCase):
    def test_function(self):
        result=MakeUpper("Hello World")
        self.assertEqual(result,'HELLO WORLD')

if __name__=="__main__":
    unittest.main()