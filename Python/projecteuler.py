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



