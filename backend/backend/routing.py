from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from chat.auth_middleware import TokenAuthMiddleware
import chat.routing

application = ProtocolTypeRouter({
    'websocket': TokenAuthMiddleware(  # populates conn scope with auth'd user
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})