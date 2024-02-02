// 项目大事记大屏查询dto
export interface IProjectEventsLargeScreenQueryDto {
    // 项目大类
    projectCategory: string;
    // 查询条数
    limit: number;
    // undefined
    projectIds: number[];
}
// JSONResult«List«项目大事记响应对象»»
export interface IJSONResultListProjectEventResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目大事记响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
