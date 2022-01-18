# 꿈꾸는 청년들 사전 과제


#전체 유저
13.124.21.247:9999/user
curl 13.124.21.247:9999/user

# 유저 추가
13.124.21.247:9999 로 접속하면 유저 추가 가능한 폼 만들었습니다.
폼 전송 하면 post로 유저 추가됩니다.

# 해당 유저 고양이 여부
13.124.21.247:9999/user/userIndex/hasCat
curl 13.124.21.247:9999/user/1/hasCat

# 해당 유저 고양이 여부 변경
curl -X POST 13.124.21.247:9999/user/1/hasCat

# 해당 유저 삭제
curl -X DELETE 13.124.21.247:9999/user/3


# ISSUE
form 에서 contoller 로 값을 전달 했을 때 bodyparser로 못 받아옵니다.

해결 : bodyParser의 우선순위가 문제였습니다. use bodyParser의 코드를 위로 올려서 해결했습니다.
