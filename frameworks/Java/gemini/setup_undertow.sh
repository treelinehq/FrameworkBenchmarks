#!/bin/bash

fw_depends java ant

sed -i 's|db.ConnectString = .*/|db.ConnectString = '"$DBHOST"':3306/|g' configuration/GeminiHello.conf
sed -i 's|db.Driver.Class = .*|db.Driver.Class = com.mysql.jdbc.Driver|g' configuration/GeminiHello.conf
sed -i 's|db.Driver.UrlPrefix = .*|db.Driver.UrlPrefix = jdbc:mysql://|g' configuration/GeminiHello.conf
mkdir -p Docroot/WEB-INF/classes
ant compile
java $TROOT/Docroot/WEB-INF/classes/hello/undertow/GhUndertow 8080 &
