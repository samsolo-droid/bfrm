from server import Resource, request
from models import *
from schemas import *
from server import db


class AllPreachingMessages(Resource):
    def get(self):
        preaching_messages = PreachingMessageModel.query.all()
        return preaching_messages_schema.dump(preaching_messages)

    def post(self):
        new_preaching_message = PreachingMessageModel(
            title=request.json['title'],
            url=request.json['url'],
            preacher=request.json['preacher'],
            event=request.json['event'],
            description=request.json['description'],
            summary=request.json['summary'],
            date=request.json['date']
        )
        db.session.add(new_preaching_message)
        db.session.commit()
        return preaching_message_schema.dump(new_preaching_message)


class PreachingMessage(Resource):
    def get(self, preaching_message_id):
        preaching_message = PreachingMessageModel.query.get_or_404(preaching_message_id)
        return preaching_message_schema.dump(preaching_message)

    def patch(self, preaching_message_id):
        preaching_message = PreachingMessageModel.query.get_or_404(preaching_message_id)

        if 'title' in request.json:
            preaching_message.title = request.json['title']
        if 'url' in request.json:
            preaching_message.url = request.json['url']
        if 'preacher' in request.json:
            preaching_message.preacher = request.json['preacher']
        if 'event' in request.json:
            preaching_message.event = request.json['event']
        if 'description' in request.json:
            preaching_message.description = request.json['description']
        if 'summary' in request.json:
            preaching_message.summary = request.json['summary']
        if 'date' in request.json:
            preaching_message.date = request.json['date']

        db.session.commit()
        return preaching_message_schema.dump(preaching_message)

    def delete(self, preaching_message_id):
        preaching_message = PreachingMessageModel.query.get_or_404(preaching_message_id)
        db.session.delete(preaching_message)
        db.session.commit()
        return '', 204


class AllEvents(Resource):
    def get(self):
        events = EventModel.query.all()
        return events_schema.dump(events)

    def post(self):
        new_event= EventModel(
            title=request.json['title'],
            img_url=request.json['img_url'],
            host=request.json['host'],
            isSpecial=request.json['isSpecial'],
            summary=request.json['summary'],
            from_date=request.json['from_date'],
            to_date=request.json['to_date']
        )
        db.session.add(new_event)
        db.session.commit()
        return event_schema.dump(new_event)


class Event(Resource):
    def get(self, event_id):
        event = EventModel.query.get_or_404(event_id)
        return event_schema.dump(event)

    def patch(self, event_id):
        event = EventModel.query.get_or_404(event_id)

        if 'title' in request.json:
            event.title = request.json['title']
        if 'img_url' in request.json:
            event.img_url = request.json['img_url']
        if 'host' in request.json:
            event.host = request.json['host']
        if 'isSpecialEvent' in request.json:
            event.isSpecialEvent = request.json['isSpecialEvent']
        if 'summary' in request.json:
            event.summary = request.json['summary']
        if 'from_date' in request.json:
            event.from_date = request.json['from_date']
        if 'to_date' in request.json:
            event.to_date = request.json['to_date']

        db.session.commit()
        return event_schema.dump(event)

    def delete(self, event_id):
        event = EventModel.query.get_or_404(event_id)
        db.session.delete(event)
        db.session.commit()
        return '', 204


class AllAssets(Resource):
    def get(self):
        event_images = EventImageModel.query.all()
        return event_images_schema.dump(event_images)

    def post(self):
        new_event_image= EventImageModel(
            title=request.json['title']
        )
        db.session.add(new_event_image)
        db.session.commit()
        return event_image_schema.dump(new_event_image)


class EventImage(Resource):
    def get(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        return event_image_schema.dump(event_image)

    def patch(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)

        if 'title' in request.json:
            event_image.title = request.json['title']

        db.session.commit()
        return event_image_schema.dump(event_image)

    def delete(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        db.session.delete(event_image)
        db.session.commit()
        return '', 204


class AllAssets(Resource):
    def get(self):
        event_images = EventImageModel.query.all()
        return event_images_schema.dump(event_images)

    def post(self):
        new_event_image= EventImageModel(
            title=request.json['title']
        )
        db.session.add(new_event_image)
        db.session.commit()
        return event_image_schema.dump(new_event_image)


class EventImage(Resource):
    def get(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        return event_image_schema.dump(event_image)

    def patch(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)

        if 'title' in request.json:
            event_image.title = request.json['title']

        db.session.commit()
        return event_image_schema.dump(event_image)

    def delete(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        db.session.delete(event_image)
        db.session.commit()
        return '', 204


class AllAssets(Resource):
    def get(self):
        event_images = EventImageModel.query.all()
        return event_images_schema.dump(event_images)

    def post(self):
        new_event_image= EventImageModel(
            title=request.json['title']
        )
        db.session.add(new_event_image)
        db.session.commit()
        return event_image_schema.dump(new_event_image)


class EventImage(Resource):
    def get(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        return event_image_schema.dump(event_image)

    def patch(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)

        if 'title' in request.json:
            event_image.title = request.json['title']

        db.session.commit()
        return event_image_schema.dump(event_image)

    def delete(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        db.session.delete(event_image)
        db.session.commit()
        return '', 204


class AllAssets(Resource):
    def get(self):
        event_images = EventImageModel.query.all()
        return event_images_schema.dump(event_images)

    def post(self):
        new_event_image= EventImageModel(
            title=request.json['title']
        )
        db.session.add(new_event_image)
        db.session.commit()
        return event_image_schema.dump(new_event_image)


class EventImage(Resource):
    def get(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        return event_image_schema.dump(event_image)

    def patch(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)

        if 'title' in request.json:
            event_image.title = request.json['title']

        db.session.commit()
        return event_image_schema.dump(event_image)

    def delete(self, event_image_id):
        event_image = EventImageModel.query.get_or_404(event_image_id)
        db.session.delete(event_image)
        db.session.commit()
        return '', 204




class About(Resource):
    def get(self):
        about = AboutModel.query.all()
        return about_schema.dump(about)

    def post(self):
        new_about= AboutModel(
            history=request.json['history'],
            vision=request.json['vision'],
            founder_info=request.json['founder_info'],
            pastor_and_missions=request.json['pastor_and_missions'],
            about_the_bride=request.json['about_the_bride']
        )
        db.session.add(new_about)
        db.session.commit()
        return event_image_schema.dump(new_about)
        
    def patch(self):
        about = AboutModel.query.all()

        if 'history' in request.json:
            about.history = request.json['history']
        if 'vision' in request.json:
            about.vision = request.json['vision']
        if 'founder_info' in request.json:
            about.founder_info = request.json['founder_info']
        if 'pastor_and_missions' in request.json:
            about.pastor_and_missions = request.json['pastor_and_missions']
        if 'about_the_bride' in request.json:
            about.about_the_bride = request.json['about_the_bride']

        db.session.commit()
        return about_schema.dump(about)



class User(Resource):
    def get(self):
        user = UserModel.query.all()
        return user_schema.dump(user)

    def post(self):
        new_user= EventImageModel(
            church=request.json['church'],
            phone=request.json['phone'],
            location=request.json['location'],
            program=request.json['program'],
            pastor=request.json['pastor']
        )
        db.session.add(new_user)
        db.session.commit()
        return event_image_schema.dump(new_user)
        
    def patch(self):
        user = UserModel.query.all()

        if 'church' in request.json:
            user.church = request.json['church']
        if 'phone' in request.json:
            user.phone = request.json['phone']
        if 'location' in request.json:
            user.location = request.json['location']
        if 'program' in request.json:
            user.program = request.json['program']
        if 'pastor' in request.json:
            user.pastor = request.json['pastor']

        db.session.commit()
        return user_schema.dump(user)
