import pyrebase
import os

config = {
  apiKey: "AIzaSyAfl7OtAhYWkCqpXAXu8e1zdHGeR4ag6k8",
  authDomain: "pms575241-ba07b.firebaseapp.com",
  databaseURL: "https://pms575241-ba07b-default-rtdb.firebaseio.com",
  projectId: "pms575241-ba07b",
  storageBucket: "pms575241-ba07b.appspot.com",
  messagingSenderId: "666442718917",
  appId: "1:666442718917:web:c1320499426ee641f55aac",
  measurementId: "G-7J53PYXF8K"
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
my_image = "Capture.jpg"

# Upload Image
storage.child(my_image).put(my_image)

# Download Image
storage.child(my_image).download(filename="myself.jpg", path=os.path.basename(my_image))

# Get url of image
auth = firebase.auth()
email = "youremail@gmail.com"
password = "yourpassword"
user = auth.sign_in_with_email_and_password(email, password)
url = storage.child(my_image).get_url(user['idToken'])
print(url)