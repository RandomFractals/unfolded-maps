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

for dataset in datasets:
  dataInfo = data_sdk.get_dataset_by_id(dataset.id)
  print('Dataset:')
  for attr in vars(dataInfo):
    print("%s = %r" % (attr, getattr(dataInfo, attr)))
