from kivymd.app import MDApp
from kivymd.uix.screen import Screen
from kivymd.uix.button import MDIconButton
from kivymd.uix.label import MDLabel
from kivy.lang import Builder
import requests
#

r = requests.get('https://official-joke-api.appspot.com/random_joke')

print(r.text)



class App(MDApp):

    def build(self):
        screen = Screen()
    pass

if __name__ == '__main__':
    App().run()