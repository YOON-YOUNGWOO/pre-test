# 꿈꾸는 청년들 사전 과제


#전체 유저 GET 
13.124.21.247:9999/user
curl 13.124.21.247:9999/user

# 유저 추가 POST
13.124.21.247:9999 로 접속하면 유저 추가 가능한 폼 만들었습니다.
폼 전송 하면 post로 유저 추가됩니다.

# 해당 유저 고양이 여부 GET
13.124.21.247:9999/user/userIndex/hasCat
curl 13.124.21.247:9999/user/1/hasCat

# 해당 유저 고양이 여부 변경 POST
curl -X POST 13.124.21.247:9999/user/1/hasCat

# 해당 유저 삭제 DELETE
curl -X DELETE 13.124.21.247:9999/user/3

# CORS
cors 는 브라우저에서 서버로 갈 때에만 발생하고 도메인이 서로 다를 때 발생한다.
<h3>해결 방법</h3>
1. 내부 모듈,npm i cors 로 설정<br>
2. header에 'Access-Control-Allow-Origin' 설정을 해준다.<br>
   res.setHeader('Access-Control-Allow-Origin', '*');<br>
   cookie 를 같이 보내야 할 때에는<br>
   'Access-Control-Allow-Credentials' 를 true로 설정 해줘야 하고 이 경우에<br>
   'Origin' 또한 true로 해주어야 한다.<br>
3. 프록시 서버를 이용한다.


# Cookie
express 에서 cookie를 사용할 때에는 cookie-parser를 사용한다.


# ISSUE
form 에서 contoller 로 값을 전달 했을 때 bodyparser로 못 받아옵니다.

해결 : bodyParser의 우선순위가 문제였습니다. use bodyParser의 코드를 위로 올려서 해결했습니다.
