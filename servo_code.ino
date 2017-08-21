Servo myservo;  // create servo object to control a servo
                // a maximum of eight servo objects can be created

void setup()
{
    Particle.function("setPosition", setPosition);
}

int setPosition(String command) 
{
    myservo.attach(D0);
    int newPos = command.toInt();
    int servoPos = constrain( newPos, 0 , 180);
    myservo.write(servoPos);
    delay(1000);
    myservo.detach();
}

void loop()
{
  // empty because we call the gong function via the cloud
}
