import requests
from lxml import html

pageNum = 1

#headline
#/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[2]/p[1]/a

#meter
#/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/a/img

#explanation
#/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/p

while True:
    page = requests.get('https://www.politifact.com/truth-o-meter/statements/?page=' + str(pageNum))
    tree = html.fromstring(page.content)
    divNum = 1
    outList = []
    while True:
        try:
            href = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[2]/p[1]/a'.format(divNum))
