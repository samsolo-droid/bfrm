from server import ma


#LA SERIALISATION DES DONNEES
class PreachingMessageSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "title",
            "url",
            "preacher",
            "event",
            "description",
            "summary",
            "date"
        )

preaching_message_schema = PreachingMessageSchema()
preaching_messages_schema = PreachingMessageSchema(many=True)

class EventSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "title",
            "img_url",
            "host",
            "isSpecialEvent",
            "summary",
            "from_date",
            "to_date"
        )

event_schema = EventSchema()
events_schema = EventSchema(many=True)


class EventImageSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "title"
        )


event_image_schema = EventImageSchema()
event_images_schema = EventImageSchema(many=True)

class PrayerRequestSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "user_firstname",
            "user_lastname",
            "request"
        )

prayer_request_schema = PrayerRequestSchema()
prayer_requests_schema = PrayerRequestSchema(many=True)


class TestimonySchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "title",
            "person",
            "image",
            "summary",
            "date"
        )

testimony_schema = TestimonySchema()
testimonies_schema = TestimonySchema(many=True)


class AboutSchema(ma.Schema):
    class Meta:
        fields = (
            "history",
            "vision",
            "founder_info",
            "pastor_and_missions",
            "about_the_bride"
        )

about_schema = AboutSchema()


class MissionSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "title",
            "person",
            "images",
            "summary",
            "up_dated"
        )

mission_schema = MissionSchema()
missions_schema = MissionSchema(many=True)



class UserSchema(ma.Schema):
    class Meta:
        fields = (
            "church",
            "phone",
            "location",
            "program",
            "pastor"
        )

user_schema = EventSchema()


