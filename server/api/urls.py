from django.urls import path
from tables.online_table_chn import get_online_table_chn
from tables.model_portfolio_usa import get_model_portfolio_usa

app_name = 'api'

urlpatterns = [
    path('tables/online-table-chn/', get_online_table_chn),
    path('tables/model-portfolio-usa/', get_model_portfolio_usa),
]
