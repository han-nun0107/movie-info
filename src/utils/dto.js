import { DTO_TYPE } from "./config";

// User data 매핑용 함수
export const changeFromDto = ({ type, dto }) => {
  switch (type) {
    case DTO_TYPE.user: {
      const { user_metadata: userInfo } = dto?.user || {};
      return {
        user: {
          id: dto?.user?.id,
          email: userInfo?.email,
          name: userInfo?.name ? userInfo.name : userInfo?.email?.split("@")[0],
          avatar_url: userInfo?.avatar_url,
        },
      };
    }
    case DTO_TYPE.error: {
      if (!dto.error) {
        return {
          error: {
            status: 500,
            message:
              "DTO_TYPE ERROR를 확인해주세요. 데이터 내부 error 객체가 없습니다.",
          },
        };
      }
      const { error: rawError } = dto;
      return {
        error: {
          status: rawError.status,
          message: rawError.message,
        },
      };
    }
    default:
      new Error("wrong type accessed");
      return;
  }
};
