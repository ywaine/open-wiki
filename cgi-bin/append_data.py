import csv
import cgi
import cgitb

# Enable error reporting
cgitb.enable()

# Get form data
form = cgi.FieldStorage()
title = form.getvalue("title")
url = form.getvalue("url")
description = form.getvalue("description")

# Define CSV file path
csv_path = "../open_data.csv"

# Append data to CSV file
with open(csv_path, "a", newline="") as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow([title, url, description])

# Send success response to client
print("Content-Type: text/plain")
print("Status: 200 OK")
print()
print("Row added to CSV file!")