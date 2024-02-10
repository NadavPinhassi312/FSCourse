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

# # Problem 7
# import math
# def isPrime(num):
#     if num<=1: 
#         return False
#     elif num==2: 
#         return True
#     elif num%2==0:
#         return False
#     else:
#         # squareNum=math.sqrt(num)
#         squareNum=int(num**0.5)
#         for i in range(3,squareNum+1,2):
#             if(num%i==0):
#                 return False
#         return True

# def listOfPrimes(num):
#     primeList=[]
#     i=1
#     while(len(primeList)<num):
#         if isPrime(i):
#             primeList.append(i)
#             print(primeList)
#         i=i+1
#     return primeList

# print(listOfPrimes(100))

# #Problem 8
# def listProduct(lst):
#     sum=lst[0]
#     print("before: ", lst)
#     lst.pop(0)
#     print("after: ", lst)
#     print("sum: ", sum)
#     if lst!=[]:
#         for i in range(0,len(lst)):
#             sum=sum*lst[i]
#             print("sum: ", sum)
#     return sum

# def problemEight(num,numOfAdjacent):
#     multList=[]
#     numList= [int(x) for x in str(num)]
#     for i in range (0, len(numList)-numOfAdjacent+1):
#         localMult=numList[i]
#         if numOfAdjacent>2:
#             for j in range(i+1,i+numOfAdjacent):
#                 localMult=localMult*numList[j]
#         elif numOfAdjacent==2:
#             localMult=localMult*numList[i+1]
#         elif numOfAdjacent<=1:
#             print("numOfAdjacent must be 1 or more")
#             return None
#         multList.append(localMult)
#         print("multList: ", multList)
#     return max(multList)

# print(problemEight(7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450,13))





