#include <MicroGear.h>
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>


const char* ssid     = "ssid";
const char* password = "password";

#define APPID   "CookingMama"
#define KEY     ""
#define SECRET  ""

#define ALIAS   "NodeMCU"
#define TargetWeb "Web"

WiFiClient client;
MicroGear microgear(client);
SoftwareSerial swSer(14,12);

int work = 0;
int change = 0;
int n;
char temp[32];
char m;

void onMsghandler(char *topic, uint8_t* msg, unsigned int msglen) {
  char strState[msglen];
  Serial.print("message recieved --->");
  for (int i = 0; i < msglen; i++) {
    strState[i] = (char)msg[i];
  }
  String stateStr = String(strState).substring(0, msglen);
  Serial.println(stateStr);
  if(stateStr == "1") {
    work = 1;
    change = 1;
  } else if (stateStr == "0") {
    work = 0;
    change = 1;
  }
}

void onConnected(char *attribute, uint8_t* msg, unsigned int msglen) {
  microgear.setAlias(ALIAS);
}

void setup() {
  Serial.begin(115200);
  swSer.begin(115200);
  microgear.on(MESSAGE,onMsghandler);
  microgear.on(CONNECTED,onConnected);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(250);
    Serial.print(".");
  }
  microgear.init(KEY,SECRET,ALIAS);
  Serial.println("init");
  microgear.connect(APPID);
  Serial.println("Connect");
}

void loop() {
  if(microgear.connected()) {
    microgear.loop();
    //Serial.println("connect...");
      if (work == 1) {
      n = 0;
      while (swSer.available() > 0 ) {
        char rc = swSer.read();
        if (rc == '\n') {
          temp[n] = '\0';
          microgear.chat(TargetWeb, temp);
          break;
        } else {
          temp[n] = rc;
          n++;
          if (n >= 32) n--;
        }
      }
    }
  } else {
    Serial.println("connection lost, reconnect...");
    microgear.connect(APPID);
    Serial.println("Connected!");
  }

  if (change == 1) {
    m = '0' + work;
    swSer.write(m);
  }
  delay(100);
}
