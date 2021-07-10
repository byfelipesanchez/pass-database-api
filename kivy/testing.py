#create app with kivy? probably not lol

from kivy.uix.screenmanager import Screen
from kivymd.app import MDApp
from kivymd.uix.button import  MDRectangleFlatButton
from kivy.lang import Builder
from kivymd.uix.floatlayout import FloatLayout
from kivy.uix.screenmanager import Screen, ScreenManager
from kivymd.uix.banner import MDBanner

KV = """
ScreenManager:
	MainScreen:
	SecondScreen:

<MainScreen>:
	name: "main"

	MDLabel:
		text: "testing"
		halign: 'center'

	MDRectangleFlatButton:
		text: "click here"
		pos_hint: {'center_x': .2, 'center_y': .5}
		on_press: root.manager.current = 'second_screen'

<SecondScreen>:
	name: "second_screen"

	MDLabel:
		text: "second screen"
		halign: 'center'

"""

class MainScreen(Screen):
	pass

class SecondScreen(Screen):
	pass

sm = ScreenManager()
sm.add_widget(MainScreen(name="main"))
sm.add_widget(SecondScreen(name='second_screen'))

class MainApp(MDApp):

	def build(self):
		return Builder.load_string(KV)

MainApp().run()