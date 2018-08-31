for i in img-*.jpg; do
  convert $i -resize '30000@' thumb_$i;
  jhead -autorot $i
  jhead -autorot thumb_$i
done
