from kivy.network.urlrequest import UrlRequest
# req = UrlRequest(url, on_success, on_redirect, on_failure, on_error,
#                  on_progress, req_body, req_headers, chunk_size,
#                  timeout, method, decode, debug, file_path, ca_file,
#                  verify)

def got_json(req, result):
    for key, value in req.resp_headers.items():
        print('{}: {}'.format(key, value))

req = UrlRequest('https://httpbin.org/headers', got_json)

class App(App):
    pass

if __name__ == '__main__':
    App().run()