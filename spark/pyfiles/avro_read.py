
from pyspark.sql import SparkSession

spark = (SparkSession.builder
         .master("local")
         .appName("Spark session")
         .getOrCreate())

spark.read.format("avro").load("data/userdata1.avro").show()

spark.stop()
