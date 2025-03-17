// 반응형 디자인을 위한 breakpoints
export const breakpoints = {
  mobile: "320px", // 모바일
  tablet: "768px", // 태블릿
  desktop: "1024px", // 데스크톱
} as const;

// 미디어 쿼리 헬퍼 함수
export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
} as const;

export type Breakpoints = typeof breakpoints;
