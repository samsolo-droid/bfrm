from flask import request
from server import db
from datetime import datetime

#MODELS DATABASES
class PreachingMessageModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    url = db.Column(db.String(64), nullable=False)
    preacher = db.Column(db.String(64), nullable=False)
    event = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(200))
    summary = db.Column(db.String(200))
    date = db.Column(db.String(8))

    def __repr__(self) -> str:
        return '<PreachingMessageModel %r>' % self.title

#MODELS DATABASES
class EventModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    img_url = db.Column(db.String(64), default="images/random.png")
    host = db.Column(db.String(64), nullable=False)
    isSpecialEvent = db.Column(db.Boolean, nullable=False)
    summary = db.Column(db.String(200))
    from_date = db.Column(db.String(8))
    to_date = db.Column(db.String(8))

    def __repr__(self) -> str:
        return '<EventModel %r>' % self.title

#MODELS DATABASES
class EventImageModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    date = db.Column(db.DateTime(datetime.utcnow), nullable=False)

    def __repr__(self) -> str:
        return '<EventImageModel %r>' % self.title


#MODELS DATABASES
class PrayerRequestModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_firstname = db.Column(db.String(64), nullable=False)
    user_email = db.Column(db.Email, nullable=False)
    request = db.Column(db.String(1024))
    date = db.Column(db.DateTime(datetime.utcnow), nullable=False)

    def __repr__(self) -> str:
        return '<PrayerRequestModel %r>' % self.user_email


#MODELS DATABASES
class TestimonyModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    person = db.Column(db.String(64), nullable=False)
    image = db.Column(db.String(64), nullable=False)
    summary = db.Column(db.String(64), nullable=False)
    date = db.Column(db.DateTime(datetime.utcnow), nullable=False)

    def __repr__(self) -> str:
        return '<TestimonyModel %r>' % self.title

class AboutModel(db.Model):
    history = db.Column(db.String(1024), nullable=False)
    vision = db.Column(db.String(1024), nullable=False)
    founder_info = db.Column(db.String(1024), nullable=False)
    pastor_and_missions = db.Column(db.String(1024), nullable=False)
    about_the_bride = db.Column(db.String(1024), nullable=False)

    def __repr__(self) -> str:
        return '<AboutModel %r>' % self.history

class MissionModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    person = db.Column(db.String(64), nullable=False)
    images = db.Column(db.String(64), nullable=False)
    summary = db.Column(db.String(64), nullable=False)
    up_dated = db.Column(db.DateTime(datetime.utcnow), nullable=False)

    def __repr__(self) -> str:
        return '<MissionModel %r>' % self.title

class UserModel(db.Model):
    church = db.Column(db.String(1024), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(1024), nullable=False)
    program = db.Column(db.String(1024), nullable=False)
    pastor = db.Column(db.String(1024), nullable=False)

    def __repr__(self) -> str:
        return '<UserModel %r>' % self.church