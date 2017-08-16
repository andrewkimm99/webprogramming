# webprogramming

This is for web programming practice.


## Section I: HTML & CSS

6/29 HTML & CSS Basic (Introduction Page)

7/1 HTML & CSS ([Pie Recipe](/assignments/pie-recipe.md)) + github usage - git add / commit / push / pull / merge


## Section II: Javascript

7/5 Javascript Basic (var&function, if, for, while, string array, object) & DOM basic (Insert bird practice)

**homework** finish pie recipe and main page + html and css for next class. [sample](/assignments/js-prac-sample.png) each div has 600px width, 100px height, 10px margin and 5px border-radius. Other style (color, border color, border width, content ...) is up to you! Also prepare one image you like.

7/8 Javascript Event listener I (Input and Output practice)

**homework** finish interative example. Check [Main Page](/assignments/interactive-main.png), [When you submit your first and last name](/assignments/interactive-name.png), [When you submit your name, favorite car, gender, and message](/assignments/interactive-car.png), [When you submit without name](/assignments/interactive-error.png).

Also, if you have extra time, try [this](/assignments/color-main.png). (html & css part only)

7/12 Color & Javascript Event listener II ([Color Code](/assignments/color-reference.md))

7/15 Timer & Javascript Project ([Speed reader](/assignments/speed-reader.md))

**homework** Finish Color Code & CSS Part of Speed reader

7/19 Speed Reader Continue

**homework** Finish Color Colde & Fifteen Puzzle - Read spec and put background image in puzzle area.ㅓ

7/21 Javascript Project ([Fifteen Puzzle](/assignments/fifteen-puzzle.md))

7/26 Fifteen Puzzle Continue

## Section III: D3 Intro

8/9 D3 basic

8/11 D3 Movie Chart I

**homework**


1. Review

- 특히 stacked bar chart에서 `enter().append('rect')` 이하 부분 지우고, 안보고 코딩 해보기

- dummy data 대신 실제 데이터로 하고, domain안에 들어갈 범위도 하드코딩 대신 map이나 max 이용해서 하기

2. stacked bar chart 완성

- x축, y축, 제목 적기

- legend 만들기

힌트: `var legend = g.append('g')` 한 후, 그 안에 g를 두개 추가, 각각이 profit_us, profit_other에 대한 설명 적도록 한다. 그 각각은 text와 rect를 가지도록 한다. rect는 해당하는 색을 fill하고, text는 해당하는 텍스트를 적는다.

3. scatter chart에서 scale부분까지 해오기

- 사용할 색깔 6개 정하기 (전에 알려준 사이트 이용, 각 장르마다 다른 색깔 쓰는 거)

- svg 선택 후 g append하고 적절한 자리로 transform -> scale함수 정의 (x, y는 linear, z는 ordinal.)

- 각 scale함수의 정의역 구해서 설정해주기

4. ring chart 준비

- data preprocessing 마저 해오기 

- ring chart에 쓸 색깔 5개 정하기 (전에 알려준 사이트 이용)


8/16 D3 Movie Chart II

**homework**

1. 3개의 그래프 중 하나씩 보여주는 드롭다운 만들기

2. stacked bar 완성
(1) 제목 붙이기
(2) legend 붙이기

3. scatter chart 완성
(1) 제목 붙이기, 축 붙이기
(2) legend 붙이기
(3) y scale을 log scale로 보여주는 그래프 추가해보기 (linear, log scale 중 하나를 고를수 있도록 드롭다운 하나 더 만들기)
(4) tooltip 만들기 (mouseover 또는 click event listener 붙여서 만들기)

4. pie chart 만들기: 제목 붙이기

숙제 순서 (중요도 순서)
+ 우선 복습 철저히 하기
+ 1, 2(1), 3(1), 4는 빨리 끝낼 것이므로 먼저 하기
+ 그 다음 3(3)하기 (여기까지는 꼭 금요일 오전까지 하고 커밋 하고 카톡 보내줘!)
+ 마지막으로 2(2), 3(2), 3(4)하기
+ 리팩토링하기 (global variable 잘 빼기 등등) 

