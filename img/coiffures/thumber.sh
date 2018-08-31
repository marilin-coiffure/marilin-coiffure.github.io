for i in img-*.jpg; do convert $i -resize '30000@' thumb_$i; done
