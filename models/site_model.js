/**
 *  Site 객체
 *    _id: PK
 *    name: Site의 이름. URL path에 지정되는 이름으로 유일한 값을 가진다. 영문, 숫자, '_'의 조합으로 이루어진다.
 *    title: Site의 타이틀
 *    message: Site에 대한 소개글
 *    type: Site의 형태 (공개/비공개) 공개는 익명사용자와 대화할 수 있고, 비공개는 회원 사용자간에만 대화할 수 있다.
 *    maxChannelCount: 동시에 열 수 있는 대화채널의 최대 갯수. 초기설정값은 5이다. owner가 지정한다.
 *    owner: Site의 소유자
 *      id: owner ID
 *      name: owner의 display name (username 또는 profile name)
 *      photo: owner의 photo URL (없으면 기본 이미지가 지정된다.)
 *    createdTime: 등록일시
 */
Sites = new Meteor.Collection('sites');


