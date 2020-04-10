
from pyspark.sql import SparkSession

spark = (SparkSession.builder
         .master("local")
         .appName("Spark session")
         .getOrCreate())

spark.sparkContext.setLogLevel('ERROR')

spark.read.format('jdbc').\
options(url='jdbc:sqlite:data/my-sqlite.db',\
dbtable='flight_info',driver='org.sqlite.JDBC').load().show()

spark.stop()
