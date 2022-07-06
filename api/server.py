from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource
from controllers import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/bfrm_database'
db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)
request = request






#PREACHING MESSAGES
api.add_resource(AllPreachingMessages, '/api/messages')
api.add_resource(PreachingMessage, '/api/messages/<int:preaching_message_id>')

# EVENTS
api.add_resource(AllEvents, '/api/messages')
api.add_resource(Event, '/api/messages/<int:preaching_message_id>')

#ALL ASSETS IMAGES VIDEOS
api.add_resource(AllAssets, '/api/messages')
api.add_resource(EventImage, '/api/messages/<int:preaching_message_id>')

#PRAYER REQUESTS
api.add_resource(AllPrayerRequets, '/api/messages')
api.add_resource(PrayerRequest, '/api/messages/<int:preaching_message_id>')

#TESTIMONIES
api.add_resource(AllTestimonies, '/api/messages')
api.add_resource(Testymony, '/api/messages/<int:preaching_message_id>')

#TESTIMONIES
api.add_resource(AllMisions, '/api/messages')
api.add_resource(Mission, '/api/messages/<int:preaching_message_id>')

#USER
api.add_resource(User, '/api/messages')

#ABOUT
api.add_resource(About, '/api/messages')




if __name__ == "__main__":
    app.run(debug=True)