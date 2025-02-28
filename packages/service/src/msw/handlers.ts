import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(`${import.meta.env.VITE_BASE_URL}/dreams/interpretation`, () => {
    const body = {
      code: 200,
      message: "API 요청이 성공했습니다.",
      result: {
        messages: [
          "1철수의 꿈은 크고 하얀 개가 손을 무는 꿈이었다고 하꿈! 이런 내용은 보통 좋은 기운을 가진 길몽이꿈!",
          "2하얀 개는 행운의 상징이라고 하꿈! 꾸밍 좋은 징조로 작용해서 앞으로 하는 일이 모두 잘 풀릴 것 같꿈!",
          "3꿈에서 깨고 조금 놀랐을 수도 있었겠꿈. 그렇지만 실제로 그런 일이 일어나지는 않으니 너무 걱정하지 말꿈!",
          "4손을 문 부분이 아프거나 불편한 건 없꿈?",
          "5이 꿈은 정말 아무리 봐도 길몽이 분명하꿈! 행운이 철수와 함께 할 거꿈!",
          "6맞아꿈 맞아꿈! 하얀 개는 보통 좋은 의미로 해석되니꿈~ 우리도 덕분에 기분이 좋꿈!",
        ],
        category: "기쁨",
      },
    };
    return HttpResponse.json(body);
  }),
];
