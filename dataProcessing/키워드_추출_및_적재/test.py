import pandas as pd

# Specify the CSV file name
file_path = "./inputs/real종목산업v3.csv"

# Specify the column names you want to extract
# column_names = ['검색어']  # Replace with your desired column names
column_names = ['종목명']

# Read the CSV file
df = pd.read_csv(file_path, encoding='cp949')

# Extract specific columns and concatenate them into a single Series
extracted_values = pd.concat([df[col] for col in column_names])

# Convert the Series to a list
extracted_values_list = extracted_values.tolist()

# Separate elements containing a ',' to make a new list
final_values = []
for value in extracted_values_list:
    if ',' in value:
        split_values = value.split(',')
        final_values.extend(split_values)
    else:
        final_values.append(value)

# Print the final list
final_values = list(set(final_values))
print(final_values)
print(len(final_values))