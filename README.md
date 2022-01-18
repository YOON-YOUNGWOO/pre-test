# 꿈꾸는 청년들 사전 과제


# ISSUE
form 에서 contoller 로 값을 전달 했을 때 bodyparser로 못 받아옵니다.

해결 : bodyParser의 우선순위가 문제였습니다. use bodyParser의 코드를 위로 올려서 해결했습니다.
