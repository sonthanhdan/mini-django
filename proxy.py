# proxy.py
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# Define a route for handling proxy requests
@app.route('/proxy', methods=['POST'])
def proxy_request():
    data = request.json

    # Extract the action from the request
    action = data.get('action')

    if action == 'fetch_users':
        # Forward the request to the Express API
        express_api_url = 'http://localhost:3000/api/users'  # Adjust the URL
        response = requests.get(express_api_url)
        return jsonify(response.json())

    # Implement other actions as needed

if __name__ == '__main__':
    app.run(port=8001)  # Run the Python proxy on a separate port
