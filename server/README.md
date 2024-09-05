# Как запустить проект локально

## Cоздать виртуальное окружение в корневой директории:
Windows:
py -m venv venv / python3 -m venv venv

Mac:
python3 -m venv venv

## Aктивировать виртуальное окружение:
Windows:
source venv/Scripts/activate

Mac:
source venv/bin/activate

## Установить зависимости из файла requirements.txt:

python -m pip install --upgrade pip / py -m pip install --upgrade pip
pip install -r requirements.txt

## Запустить проект:

python manage.py runserver / py manage.py runserver

## Эндпоинты

api/tables/online-table-chn/
api/tables/model-portfolio-usa/

## CORS

Доступный адрес 'http://localhost:3000'
Если используется другой порт, то изменить в test_assignment/settings.py 
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]
