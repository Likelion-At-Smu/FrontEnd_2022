# -*- coding: euc-kr -*-
import sys
import io
import json
import smtplib
from email.message import EmailMessage
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from selenium import webdriver

city = "Seoul"
apikey = "c95ee96228cac19bdac02620f00af210"
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
message["Subject"] = "�̰��� �����Դϴ�."
message["From"] = "bjb6478@gmail.com"

url = "http://www.daum.net"
driver = webdriver.Chrome(executable_path="chromedriver.exe")
driver.get(url)
response = driver.page_source.encode('utf-8', errors='replace')
soup = BeautifulSoup(response, 'html.parser')

results = soup.findAll("a", "link_favorsch")
rank = 1

search_rank_file = open("rankresult.txt", "a")
search_rank_file.write(datetime.today().strftime("%Y�� %m�� %d���� �ǽð� �˻��� �����Դϴ�.\n"))

for result in results:
    search_rank_file.write(str(rank) + "��:" + result.get_text() + "\n")
    rank += 1
driver.close()

#sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
#sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

total_list = {}
while True:
    print("-----------------������ ����ó�� ��ȭ��ȣ�� -----------------")
    print("-----------1) �߰� 2) ��ȸ 3) ���� 4) ���� 5)���� ���� q) ����---------- ")
    print("--------------------------------------------------------")

    choice_menu = input("���Ͻô� �޴��� �Է����ּ���: ")
    if choice_menu == '1':
        name = input("�̸��� �Է����ּ��� : ")
        total_list['�̸�'] = name
        num = input(name + "���� ��ȣ�� �Է����ּ��� : ")
        total_list["��ȭ��ȣ"] = num
        mail = input(name + "���� ������ �Է����ּ��� : ")
        total_list["����"] = mail
    elif choice_menu == '2':
        name = input("��ȸ�� ���ϴ� �̸��� �Է����ּ��� :")
        for i in total_list:
            if name == i['�̸�']:
                print(i)
            else:
                print("��ϵ��� ���� �����Դϴ�.")
    elif choice_menu == '3':
        name = input("������ ���ϴ� �̸��� �Է����ּ��� : ")
        for i in total_list:
            if name == i['�̸�']:
                key,value = ("������ ���ϴ� �׸�� ������ �Է����ּ��� :").split()

                if(key == "��ȭ��ȣ"):
                    i['��ȭ��ȣ']=value
                elif(key == "����"):
                    i['����']=value
            else:
                print("��ϵ��� ���� �����Դϴ�.")

    elif choice_menu =='4':
        name = input("������ ���ϴ� �̸��� �Է����ּ��� :")
        for i in total_list:
           if name == i['�̸�']:
            del i['�̸�']
            del i['��ȭ��ȣ']
            del i['����']

    elif choice_menu == "5":
        name = input("���� ������ ���ϴ� ����� �̸��� �Է����ּ��� : ")
        for i in total_list:
            if total_list["�̸�"] == name:
                mail = total_list["����"]

        message["To"] = mail

        with open("rankresult.txt", "rb") as text:
            text_file = text.read()
            print("���� ������ �Ϸ�Ǿ����ϴ�.")
        message.add_attachment(text_file, maintype='text', subtype='txt', filename=text.name)

        smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        smtp.login("id", "pw")
        smtp.send_message(message)
        print("���� ������ �Ϸ�Ǿ����ϴ�.")
        smtp.quit()
    elif choice_menu == "q":
        break

