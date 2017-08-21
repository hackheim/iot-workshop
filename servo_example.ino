Servo myservo;

void setup()
{
    myservo.attach(D0);
}

void loop()
{
    myservo.write(0);
    delay(5000);
    myservo.write(180);
    delay(5000);
}
