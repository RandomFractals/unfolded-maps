import pandas as pd
from unfolded.data_sdk import DataSDK

data_sdk = DataSDK()
datasets = data_sdk.list_datasets()
ids, names = [], []
for dataset in datasets:
  ids.append(dataset.id)
  names.append(dataset.name)

df = pd.DataFrame([names], columns=ids).T
print('Unfolded Datasets:', df)
