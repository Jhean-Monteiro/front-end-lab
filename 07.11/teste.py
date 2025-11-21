import random

lista = []
for i in range(1,100):
    aleatorio = random.randint(1,100)
    lista.append(aleatorio)

print(lista)

def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[-1]
    smaller, equal, larger = [], [], []

    for num in arr:
        if num < pivot:
            smaller.append(num)
        elif num == pivot:
            equal.append(num)
        else:
            larger.append(num)

    return quick_sort(smaller) + equal + quick_sort(larger)


print(f"\n\n\n\nlista ordenada: {quick_sort(lista)}")