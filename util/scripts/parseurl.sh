
#!/bin/bash

# extract the protocol
proto="$(echo $1 | grep :// | sed -e's,^\(.*://\).*,\1,g')"

# remove the protocol -- updated
url=$(echo $1 | sed -e s,$proto,,g)

# extract the user (if any)
user="$(echo $url | grep @ | cut -d@ -f1)"

# extract the host -- updated
host=$(echo $url | sed -e s,$user@,,g | cut -d/ -f1)

# by request - try to extract the port
port="$(echo $host | sed -e 's,^.*:,:,g' -e 's,.*:\([0-9]*\).*,\1,g' -e 's,[^0-9],,g')"

# extract the path (if any)
# path="$(echo $url | grep / | cut -d/ -f2-)"
echo $host
