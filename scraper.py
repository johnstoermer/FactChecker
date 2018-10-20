import requests
from lxml import html

pageNum = 1

outList = []

while True:
    try:
        print(pageNum)
        if pageNum == 5:
            break
        page = requests.get('https://www.politifact.com/truth-o-meter/statements/?page=' + str(pageNum))
        tree = html.fromstring(page.content)
        divNum = 1
        while True:
            try:
                print(divNum)
                headline = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[2]/p[1]/a/text()'.format(divNum))[0].replace('\r\n\r\n\xa0\r\n', '').replace('\r\n', '')
                print(headline)
                meter = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/a/img'.format(divNum))[0].attrib['alt']
                print(meter)
                explanation = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/p/text()'.format(divNum))[0]
                print(explanation)
                outList.append((headline, meter, explanation))
                divNum += 1
            except:
                break
        pageNum += 1
    except:
        break

print(outList)
