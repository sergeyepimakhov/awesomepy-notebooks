
from pyspark.sql import SparkSession

spark = (SparkSession.builder
         .master("local")
         .appName("Spark session")
         .getOrCreate())

# prepare data
df = (spark
      .read
      .parquet('data/part-r-00000-1a9822ba-b8fb-4d8e-844a-ea30d0801b9e.gz.parquet'))

# write data
(df.write
 .format('avro')
.mode('overwrite')
.save('write/out.avro'))

spark.stop()

