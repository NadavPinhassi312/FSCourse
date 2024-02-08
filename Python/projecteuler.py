# # Problem 1
# i=0
# sum=0
# target=1000
# while i<target:
#     if i%3==0 or i%5==0:
#         sum=sum+i
#     i=i+1
# print(sum)

# #Problem 2
# fibo=[1,2]
# lastNum=4000000
# length=len(fibo)
# valid=True
# i=0
# while valid:
#     lastNumSum=fibo[length-2]+fibo[length-1]
#     if lastNumSum<=lastNum:
#         fibo.append(lastNumSum)
#         length=len(fibo)
#     else:
#         valid=False
# evenSum=0
# for num in fibo:
#     if num%2==0:
#         evenSum+=num
# print(evenSum)

# # Problem 3
# import math
# def isPrime(num):
#     i=2
#     while i<num/2:
#         if num%i==0:
#             return False
#         print(f"{num}%{i}={num%i}")
#         i+=1
#     return True

# def biggestPrime(num):
#     i=1
#     primeList=[]
#     while i<num:
#         if num%i==0 and isPrime(i) and i!=1:
#             primeList.append(i)
#         i+=1
#     return primeList

# print(biggestPrime(600851475143))

# #Problem 4
# def isPalindrome(num):
#     num=str(num)
#     revNum=num[::-1]
#     if num==revNum:
#         return True
#     else:
#         return False
    
# i=100
# palindromeList=[]
# while i<1000:
#     j=100
#     while j<1000:
#         mult=i*j
#         if isPalindrome(mult):
#             # print (f"{mult} is a palindrome!")
#             palindromeList.append(mult)
#         j+=1
#     i+=1
# palindromeList= sorted(list(set(palindromeList)))

# print(palindromeList[-1])

# #Problem 5
# def GenNumList(lstRange):
#     divRangeList=[]
#     for numAdded in range(lstRange):
#         divRangeList.append(numAdded+1)
#     return divRangeList

# def IsDivByList(num,list):
#     print(" ")
#     for i in list:
#         print(f'num:{num}, i:{i}')
#         if num%i!=0:
#             return False
#     return True

# def MinDiv(divRange):
#     divList=GenNumList(divRange)
#     print(divList)
    
#     checkNum=2520
#     numFound=False
#     while (numFound==False):
#         if IsDivByList(checkNum,divList):
#             numFound=True
#         else:
#             checkNum+=2520
#     return checkNum
        
# print(MinDiv(20))

# #Problem 6
# def CreateList(num):
#     list=[]
#     for i in range(num):
#         list.append(i+1)
#     return list  
    
# def SquareSum(num):
#     list=CreateList(num)
#     total=0
#     for i in list:
#         total+=i**2
#     return total
    
# def SumSquare(num):
#       list=CreateList(num)
#       total=0
#       for i in list:
#           total+=i
#       return total**2
        
# print(SumSquare(100)-SquareSum(100)) 

# Problem 7
import math
def isPrime(num):
    if num==1: return False
    squareNum=math.sqrt(num)
    for i in range(2,squareNum):
        if(num%i==0):
            return False
    return True
xx
def listOfPrimes(num):
    primeList=[]
    i=1
    while(len(primeList)<num):
        if isPrime(i):
            primeList.append(i)
            print(primeList)
        i=i+1
    return primeList

print(listOfPrimes(10001))


