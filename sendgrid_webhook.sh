localtunnel () {
  ngrok http -host-header=rewrite localhost:5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# function localtunnel {
#   lt -s asdf8siue3 --port 5000
# }
# until localtunnel; do
# echo "localtunnel server crashed"
# sleep 2
# done