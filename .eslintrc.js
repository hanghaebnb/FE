module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'no-unused-vars': ['off'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'react/function-component-definition': [2, { namedcomponents: 'arrow-function' }],
    'react-hooks/exhaustive-deps': ['warn'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }], // props spreading을 허용하지 않는 규칙 해제
    'react/prop-types': 0, // prop-types를 선언해주어야하는 규칙 해제
    'no-param-reassign': 0, // 파라미터 변경을 허용하지 않는 규칙 해제
    'no-alert': 0, // alert 제한 규칙 해제
    'consistent-return': 0, // 화살표 함수에서 return이 안되는 규칙 해제
    'no-underscore-dangle': 0, // 함수 이름을 시작할 때 언더바를 사용할 수 없는 규칙 해제
    'no-useless-escape' : 0, // 정규식 사용시 문제가 되는 규칙 해제
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'jsx-a11y/alt-text': [
      2,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: ['Object'],
        area: ['Area'],
        'input[type="image"]': ['InputImage'],
      },
    ],
  },
};
