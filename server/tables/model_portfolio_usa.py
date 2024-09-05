import pandas as pd
from django.http import HttpResponse
import json

url = 'https://docs.google.com/spreadsheets/d/1RKSOBQ6RdVSOuz6pRau1jyiUoecwBJRsqrbMFnXWpbA/export?format=csv&gid=0'
df = pd.read_csv(url)

df = df.iloc[:, 1:]

list_of_dicts = df.to_dict('records')

keys_dict = list_of_dicts[2]

list_of_dicts = df.to_dict('records')

for i, d in enumerate(list_of_dicts):
    list_of_dicts[i] = {keys_dict[key]: value for key, value in d.items()}

list_of_dicts = [d for i, d in enumerate(list_of_dicts) if i != 0 and i != 2]

for i, d in enumerate(list_of_dicts):
    list_of_dicts[i] = {key.replace('\n', ''): value for key, value in d.items()}

for i, d in enumerate(list_of_dicts):
    list_of_dicts[i] = {key: value for key, value in d.items() if key != "Earnings"}

list_of_dicts = [{key: value for key, value in d.items() if pd.notnull(value)} for d in list_of_dicts]


def get_model_portfolio_usa(request):
    response_data = json.dumps(list_of_dicts, ensure_ascii=False)
    return HttpResponse(response_data, content_type="application/json")
