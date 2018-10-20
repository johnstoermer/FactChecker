import requests
from lxml import html

pageNum = 1

outList = []

while True:
    try:
        print(pageNum)
        if pageNum == 100:
            break
        page = requests.get('https://www.politifact.com/truth-o-meter/statements/?page=' + str(pageNum))
        tree = html.fromstring(page.content)
        divNum = 1
        while True:
            try:
                headline = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[2]/p[1]/a/text()'.format(divNum))[0].strip()
                url = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[2]/p[1]/a'.format(divNum))[0].attrib['href']
                meter = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/a/img'.format(divNum))[0].attrib['alt']
                explanation = tree.xpath('/html/body/div[2]/div/div[2]/div[2]/div/main/section/div[{}]/div/div[1]/p/text()'.format(divNum))[0]
                outList.append({'headline': headline, 'meter': meter, 'url': url, 'explanation': explanation})
                divNum += 1
            except:
                break
        pageNum += 1
    except:
        break

import json
with open('data.json', 'w') as outfile:
    json.dump(outList, outfile)
