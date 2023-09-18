sentence = input("Enter a sentence: ")
sentenceLength=len(sentence)

fileName=input("Enter the file's name: ")
fileName=f"{fileName}.txt"

with open(fileName,"w") as f:
    f.write(sentence)
    f.close()

print(f"You've written {sentenceLength} characters to {fileName}")