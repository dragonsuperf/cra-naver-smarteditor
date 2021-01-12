# SmartEditor2 on create-react-app



React에서 SmartEditor2 사용이 필요하여 create-react-app 위에 SmartEditor2를 적용했습니다.



### How to set



1. public 폴더에 naver-smarteditor와 InitEditor.js를 복사합니다.

```javascript
import ImportScript from './ImportScript';

ImportScript("./naver-smarteditor/js/service/HuskyEZCreator.js");
ImportScript("./InitEditor.js");
```

2. ImportScript를 import 한 후에 function 내에서 두개의 js 파일을 불러옵니다.

   

```html
<textarea name="ir1" id="ir1" rows="20" cols="100"></textarea>
```

3. /public/InitEditor.js에 설정한 PlaceHolder를 정의합니다.



