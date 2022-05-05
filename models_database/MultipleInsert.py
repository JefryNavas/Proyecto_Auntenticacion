# -*- coding: utf-8 -*-
"""
Created on Mon Apr 25 13:46:07 2022

@author: fonsi
"""

import psycopg2
import numpy as np
import psycopg2.extras as extras
import pandas as pd


def execute_values(conn, df, table):

	tuples = [tuple(x) for x in df.to_numpy()]

	cols = ','.join(map(str,list(df.columns)))
	# SQL query to execute
	query = "INSERT INTO %s(auntenticar,id_tipo,letra,nombre,codigo) VALUES %%s" % (table)
	cursor = conn.cursor()
	try:
		extras.execute_values(cursor, query, tuples)
		conn.commit()
	except (Exception, psycopg2.DatabaseError) as error:
		print("Error: %s" % error)
		conn.rollback()
		cursor.close()
		return 1
	print("the dataframe is inserted")
	cursor.close()


# Update connection string information
host = "localhost"
dbname = "proyecto_autenticacion"
user = "postgres"
password = "123456789"


# Construct connection string
conn_string = "host={0} user={1} dbname={2} password={3}".format(host, user, dbname, password)
conn = psycopg2.connect(conn_string)
print("Connection established")

df_a = pd.read_csv('Lista_Unido.csv',sep=';',encoding='ANSI', header=None, low_memory=False, skiprows=1)

execute_values(conn, df_a, 'data')
