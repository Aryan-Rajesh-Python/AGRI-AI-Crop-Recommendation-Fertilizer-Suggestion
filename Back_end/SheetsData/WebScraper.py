import requests
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime

url = "https://vegetablemarketprice.com/market/hyderabad/today"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    name_list = []
    wholesale_list = []

    for row in soup.find_all('tr', class_='todayVegetableTableRows'):
        name = row.find_all('td')[1].get_text(strip=True)
        wholesale = row.find_all('td')[2].get_text(strip=True).replace('₹', '') 
        name_list.append(name)
        wholesale_list.append(wholesale)

    today_date = datetime.now().strftime('%d-%m-%Y')
    
    data = {
        'Vegetable Name': name_list,
        today_date: wholesale_list,
    }

    existing_df = pd.read_csv('VegetablePrices.csv', encoding='utf-8')

    # Check if the date column already exists in the DataFrame
    if today_date not in existing_df.columns:
        updated_df = pd.merge(existing_df, pd.DataFrame(data), on='Vegetable Name', how='left')
        updated_df.to_csv('VegetablePrices.csv', index=False, encoding='utf-8')
        print("Data appended to the existing CSV file.")
    else:
        print(f"Data for {today_date} already exists in the CSV file. No update performed.")
