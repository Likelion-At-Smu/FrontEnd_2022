#-*- coding: euc-kr -*-
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')


book={}
while True :
    print("-"*21+" ������ ����ó�� "+"-"*21)
    print("-"*10+"1) �߰� 2) ��ȸ 3) ���� 4) ���� q) ����"+"-"*10)
    print("-"*59+"\n")
    menu=input("���Ͻô� �޴��� �Է����ּ��� : ")
    if menu=="1" :
        name=input("�̸��� �Է����ּ��� : ")
        book['�̸�']=name
        num=input(name+"���� ��ȣ�� �Է����ּ��� : ")
        book["��ȭ��ȣ"]=num
        mail=input(name+"���� ������ �Է����ּ��� : ")
        book["����"]=mail

    elif menu=="2" :
        name_2=input("��ȸ�� ���Ͻô� �̸��� �Է����ּ��� : ")
        if name_2 in book.values() :
            print(book)
        else :
            print("��ȭ��ȣ�ο� ���� �̸��Դϴ�.")
    
    elif menu=="3" :
        name_3=input("������ ���ϴ� �̸��� �Է����ּ��� : ")
        new_key,new_value=input("������ ���ϴ� �׸�� �̸��� �Է����ּ��� : ").split()
        if new_key=="�̸�":
            book["�̸�"]=new_value
        elif new_key=="��ȭ��ȣ":
            book["��ȭ��ȣ"]=new_value
        elif new_key=="����":
            book["����"]=new_value

    elif menu=="4" :
        name_4=input("������ ���ϴ� �̸��� �Է����ּ��� : ")
        del book['�̸�']
        del book['����']
        del book['��ȭ��ȣ']
        
    elif menu=="q" :
        break


