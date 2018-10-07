import eliza
while 1:
    i=(input())
    if(i=='0'):
        break
    therapist = eliza.eliza()
    reply = therapist.respond(i)
    print(reply)
    
