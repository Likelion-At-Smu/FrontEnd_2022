#-*- coding: euc-kr -*-
import sys
import io
from typing import Text
import requests
import json
import smtplib
from email.message import EmailMessage
import re
from bs4 import BeautifulSoup
import requests
from datetime import datetime
from selenium import webdriver

city = "Seoul"
apikey = "246cd9fc7ce04d457364184f763e7e92"
lang = "kr"
api = f"""http://api.openweathermap.org/data/2.5/\
weather?q={city}&appid={apikey}&lang={lang}&units=metric"""

result = requests.get(api)
data = json.loads(result.text)

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
message = EmailMessage()
location = data["name"]
weather_description = data["weather"][0]["description"]
temp = data["main"]["temp"]
feels_like = data["main"]["feels_like"]

content = f"{location}�� �����Դϴ�.\n" \
          f"������ {weather_description}�Դϴ�.\n" \
          f"���� �µ��� {temp}�Դϴ�.\n" \
          f"������ ü�� �µ��� {feels_like}�Դϴ�."

message.set_content(content)
message["Subject"] = "������ ����ó�� 3���� ���� ���ν�"
message["From"] = "chooinsik@gmail.com"

url = "http://www.daum.net"
driver = webdriver.Chrome(executable_path="chromedriver.exe")
driver.get(url)
response = driver.page_source.encode('utf-8', errors='replace')
soup = BeautifulSoup(response, 'html.parser')
results = soup.findAll("a", "link_favorsch")
rank = 1

search_rank_file = open("rankresult.txt","a")
search_rank_file.write(datetime.today().strftime("%Y�� %m�� %d���� �ǽð� �˻��� �����Դϴ�.\n"))

for result in results:
    search_rank_file.write(str(rank)+"��:"+result.get_text()+"\n")
    rank += 1
driver.close()

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')


book={}
while True :
    print("-"*21+" ������ ����ó�� "+"-"*21)
    print("-"*10+"1) �߰� 2) ��ȸ 3) ���� 4) ���� 5)���� ���� q) ����"+"-"*10)
    print("-"*59+"\n")
    menu=input("���Ͻô� �޴��� �Է����ּ��� : ")
    if menu=="1" :
        name=input("�̸��� �Է����ּ��� : ")
        book['�̸�']=name
        num=input(name+"���� ��ȣ�� �Է����ּ��� : ")
        book["��ȭ��ȣ"]=num
        mail=input(name+"���� ������ �Է����ּ��� : ")
        book["����"]=mail
        print("������ �Ϸ�Ǿ����ϴ�.")

    elif menu=="2" :
        name=input("��ȸ�� ���Ͻô� �̸��� �Է����ּ��� : ")
        if name in book.values() :
            print(book)
        else :
            print("��ȭ��ȣ�ο� ���� �̸��Դϴ�.")
    
    elif menu=="3" :
        name=input("������ ���ϴ� �̸��� �Է����ּ��� : ")
        new_key,new_value=input("������ ���ϴ� �׸�� �̸��� �Է����ּ��� : ").split()
        if new_key=="�̸�":
            book["�̸�"]=new_value
        elif new_key=="��ȭ��ȣ":
            book["��ȭ��ȣ"]=new_value
        elif new_key=="����":
            book["����"]=new_value

    elif menu=="4" :
        name=input("������ ���ϴ� �̸��� �Է����ּ��� : ")
        del book['�̸�']
        del book['����']
        del book['��ȭ��ȣ']
    
    elif menu=="5" :
        name=input("���� ������ ���ϴ� ����� �̸��� �Է����ּ��� : ")
        for i in book:
            if book["�̸�"]== name:
                mail=book["����"]


        message["To"] = mail

        with open("rankresult.txt","rb") as text:
            text_file = text.read()
            print("���� ������ �Ϸ�Ǿ����ϴ�.")

        message.add_attachment(text_file,maintype='text',subtype='txt',filename=text.name)

        smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
        smtp.login("ID","Password")
        smtp.send_message(message)
        smtp.quit()
        print("���������� ������ �߼۵Ǿ����ϴ�.")
    elif menu=="q" :
        break


