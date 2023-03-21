import calendar

# Get the number of days in January 2022
jan_days = calendar.monthrange(2022, 1)[1]

# Get the number of days in February 2022
feb_days = calendar.monthrange(2022, 2)[1]
calendar.monthrange(2022, 2) # (1, 28)

# Print the results
print("January 2022 has", jan_days, "days.")  # January 2022 has 31 days.
print("February 2022 has", feb_days, "days.") # February 2022 has 28 days.


# 2022를 입력 